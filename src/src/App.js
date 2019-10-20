import React from 'react';
import './App.css';
import Users from './Users.js';
import FileUpload from './FileUpload.js';
import './css/bootstrap.min.css';

class App extends React.Component {

  constructor(props) {
    super(props);


    this.state = { userData: {}};
  }

   callbackFunction = (childData) => {
        console.log('childdata', childData);
        this.setState({userData: childData})
   }

    render() {
      return (
        <div className="App">
          <header className="App-header">
            <p>Document Digitization and Fraud Detection</p>
          </header>
          <body className="App-body">
            <br></br>
            <FileUpload parentCallback={this.callbackFunction} />
            <Users dataFromParent={this.state.userData} />
          </body>
        </div>
      );
    }
}

export default App;
