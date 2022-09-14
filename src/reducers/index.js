// rootReducer
import { combineReducers } from "redux";
import issues from "../screens/Issues/issues-redux/issues-redux-reducer";

const rootReducer = combineReducers({
    issues,
});

export default rootReducer;