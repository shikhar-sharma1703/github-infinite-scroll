// rootSaga.js
import { all } from "redux-saga/effects";
import { githubIssuesWatcherSaga } from "../screens/Issues/issues-redux/issues-redux-saga";

export default function* rootSaga() {
  yield all([
    githubIssuesWatcherSaga(),
  ]);
}
