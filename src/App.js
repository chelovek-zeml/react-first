
import "./App.css";
import Main from "./components/main/main";
import HeaderContainer from "./components/header/header-container";
import { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "./components/main/profile/profile-container";
import { initializeApp } from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";

class App extends Component {

  componentDidMount() {
    this.props.initializeApp();
  } 

  render() {
    if(!this.props.initialized) {
      return <Preloader />
    }
    return (
      
        <div className="App">
          <HeaderContainer />
          <Main store={this.props.store} />
        </div>
      
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(withRouter, connect(mapStateToProps, {initializeApp}))(App);
