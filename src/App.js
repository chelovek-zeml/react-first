import './App.css';
import Header from './header/header';
import Main from './main/main';

function App(props) {
  return (
    <div className="App">
    <Header/>
    <Main posts={props.posts} dialogs={props.dialogs} messages={props.messages}/>
    </div>
  );
}

export default App;
