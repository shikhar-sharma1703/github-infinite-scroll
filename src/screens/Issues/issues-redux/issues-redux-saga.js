import { call, delay, put, takeEvery, takeLatest } from "redux-saga/effects";
import {
  FETCH_GITHUB_ISSUES,
  LOAD_MORE_ISSUES
} from "./issues-redux-constants"
import axios from 'axios';
import {
  fetchGithubIssuesSuccess,
  fetchGithubIssuesFailure,
  loadMoreIssuesSucceed,
  loadMoreIssuesFailed
} from "./issues-redux-action"

const getGithubIssues = () => {
  return fetch("https://api.github.com/repos/facebook/react/issues")
    .then(response => response.json())
    .then(data => data)
    .catch(error => error)
}

const loadMoreGithubIssues = (page) => {
  return fetch(`https://api.github.com/repos/facebook/react/issues?page=${page}`)
    .then(response => response.json())
    .then(data => data)
    .catch(error => error)
}

export function* fetchGithubIssuesSaga() {
    try {
      const response = yield call(getGithubIssues);
      yield put(fetchGithubIssuesSuccess(response));
    } catch (error) {
      yield put(fetchGithubIssuesFailure(error.message));
    }
  }
  
  export function* loadMoreGithubIssuesSaga(action) {
    const { payload } = action;
    try {
      const response = yield call(loadMoreGithubIssues, payload);
      yield delay(1000);
      yield put(loadMoreIssuesSucceed(response));
    } catch (error) {
      yield put(loadMoreIssuesFailed(error.message));
    }
  }
  
  export function* githubIssuesWatcherSaga() {
    yield takeLatest(FETCH_GITHUB_ISSUES, fetchGithubIssuesSaga);
    yield takeLatest(LOAD_MORE_ISSUES, loadMoreGithubIssuesSaga);
  }