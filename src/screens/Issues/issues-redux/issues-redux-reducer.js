import {
    FETCH_GITHUB_ISSUES,
    FETCH_GITHUB_ISSUES_SUCCESS,
    FETCH_GITHUB_ISSUES_FAILURE,
    LOAD_MORE_ISSUES,
    LOAD_MORE_ISSUES_SUCCEED,
    LOAD_MORE_ISSUES_FAILED
} from "./issues-redux-constants"

const initialState = { issuesList: [], pageNumber: 1, isLoading: false, error: "" };

export default function issues(state = initialState, action = {}) {
    switch (action.type) {
      case FETCH_GITHUB_ISSUES:
        return {
          ...state,
          isLoading: true,
        };
      case FETCH_GITHUB_ISSUES_SUCCESS:
        return {
          ...state,
          issuesList: action.payload,
          isLoading: false,
          pageNumber: state.pageNumber + 1,
        };
      case FETCH_GITHUB_ISSUES_FAILURE:
        return {
          ...state,
          error: action.payload,
          isLoading: false,
        };
      case LOAD_MORE_ISSUES:
        return {
          ...state,
          isLoading: true,
        };
      case LOAD_MORE_ISSUES_SUCCEED:
        const newIssuesList = action.payload;
        const { issuesList } = state;
        return {
          ...state,
          issuesList: [...issuesList, ...newIssuesList],
          pageNumber: state.pageNumber + 1,
          isLoading: false,
        };
      case LOAD_MORE_ISSUES_FAILED:
        return {
          ...state,
          error: action.payload,
          isLoading: false,
        };
      default:
        return state;
    }
  }