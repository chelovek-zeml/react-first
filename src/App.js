import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Main from "./components/main/main";
import HeaderContainer from "./components/header/header-container";

function App(props) {
  return (
    <BrowserRouter>
    <div className="App">
      <HeaderContainer />
      <Main store={props.store} />
    </div>
    </BrowserRouter>
  );
}

export default App;
