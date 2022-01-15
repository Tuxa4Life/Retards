import './assets/styles/App.css';
import './assets/styles/navbar.css';
import './assets/styles/Menus.css';
import './assets/styles/post.css';
import React, {Component} from 'react';
import Assets from './Pages/Assets';
import Navbar from './Structure/navbar';

class App extends Component {
  state ={
    assets: false,
    home: true,
    chat: false
  }

  changeToAssets = () => {
    this.setState ({
      assets: true,
      home: false,
      chat: false
    })
  }

  changeToHome = () => {
    this.setState ({
      assets: false,
      home: true,
      chat: false
    })
  }

  changeToChat = () => {
    this.setState ({
      assets: false,
      home: false,
      chat: true
    })
  }

  render () {
    let _Content = null
    if (this.state.assets === true) {
      _Content = <Assets 
        assetState={this.state.assets}
      />
    } else if (this.state.home === true) {
      _Content = console.log ('Switched to home')
    } else {
      _Content = console.log ('Switched to chats')
    }
    return (
      <div className="App">
        <Navbar 
          assets={this.changeToAssets}
          home={this.changeToHome}
          chat={this.changeToChat}
        />

        {_Content}
        
      </div>
    )
  }
}

export default App;
