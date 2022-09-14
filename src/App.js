import logo from './logo.svg';
import './App.css';
import IssuesPage from './screens/Issues';
import { Provider } from "react-redux"
import configureStore from "./store";

function App() {
  return (
    <>
    <Provider store={configureStore()}>
      <IssuesPage />
      </Provider>
    </>
  );
}

export default App;
