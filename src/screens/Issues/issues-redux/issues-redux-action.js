import {
    FETCH_GITHUB_ISSUES,
    FETCH_GITHUB_ISSUES_SUCCESS,
    FETCH_GITHUB_ISSUES_FAILURE,
    LOAD_MORE_ISSUES,
    LOAD_MORE_ISSUES_SUCCEED,
    LOAD_MORE_ISSUES_FAILED
} from "./issues-redux-constants"

export const fetchGithubIssues = () => ({
    type: FETCH_GITHUB_ISSUES,
});

export const fetchGithubIssuesSuccess = (data) => ({
    type: FETCH_GITHUB_ISSUES_SUCCESS,
    payload: data,
});

export const fetchGithubIssuesFailure = (error) => ({
    type: FETCH_GITHUB_ISSUES_FAILURE,
    payload: error,
});

export const loadMoreIssues = (payload) => ({
    type: LOAD_MORE_ISSUES,
    payload,
});

export const loadMoreIssuesSucceed = (data) => ({
    type: LOAD_MORE_ISSUES_SUCCEED,
    payload: data,
});

export const loadMoreIssuesFailed = (error) => ({
    type: LOAD_MORE_ISSUES_FAILED,
    payload: error,
});

export const getGihtubIssuesSendRequest = dispatch => {
    dispatch(fetchGithubIssues());
};

export const loadMoreIssuesSendRequest = (dispatch, page) => {
    dispatch(loadMoreIssues(page));
}