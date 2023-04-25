import "./App.css";
import Header from "./components/header/header";
import Main from "./components/main/main";

function App(props) {
  return (
    <div className="App">
      <Header />
      <Main store={props.store} state={props.state} dispatch={props.dispatch} />
    </div>
  );
}

export default App;
