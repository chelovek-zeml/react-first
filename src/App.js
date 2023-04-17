import './App.css';
import Header from './components/header/header';
import Main from './components/main/main'; 

function App(props) {
  return (
    <div className="App">
    <Header/>
    <Main state={props.state} addPost={props.addPost}/>
    </div>
  );
}

export default App;
