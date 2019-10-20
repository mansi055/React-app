import React from 'react';
import './App.css';

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        userData: {},
        paths: [],
        isLoaded: false
    };
  }

  /*componentDidMount() {
    /*fetch("http://api.example.com/items")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )

     if(this.state.userData) {
        this.setState({
            userData: this.props.dataFromParent
        });
     }
  }*/

 /*componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    console.log('componentDidUpdate', prevProps);
    if (this.props.dataFromParent.userData !== prevProps.userData) {
      //this.fetchData(this.props.dataFromParent);
    }
  }

  componentWillUpdate(prevProps) {
      // Typical usage (don't forget to compare props):
      console.log('componentWillUpdate', prevProps);

      if (this.props.dataFromParent.userData !== prevProps.userData) {
        this.fetchData(this.props.dataFromParent);
      }
    }

  fetchData(data) {
    this.setState({isLoaded: data.isLoaded, userData: data.userData});
  }

  componentWillReceiveProps(nextProps,nextState,prevProps,prevState,nextContext,prevContext){
          console.log('componentWillReceiveProps', prevProps);
          console.log(prevProps);
   }*/

   componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps', nextProps);
    this.setState({isLoaded: nextProps.dataFromParent.isLoaded, userData: nextProps.dataFromParent.users, paths: nextProps.dataFromParent.path});
   }

  render() {

    /*if (!this.state.isLoaded) {
      return <div>Loading...</div>;
    } else {*/

    if (this.state.isLoaded) {
      return (
        <div class="container">
              <h3 className="leftAlignment">Results:</h3>
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Validation error</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                 {this.state.userData.map(user => (
                                <tr className="leftAlignmentlist"><td>{user.id}</td>
                                <td><ul className="leftAlignmentlist">{user.errorValidation.map(error =>
                                        <li key={user.id}>{error} </li>)}
                                    </ul>
                                  </td>
                                  <td>
                                  {user.fault ? (<p className="leftAlignmentlist fault-failure">Failed</p>)
                                                      : (<p className="leftAlignment fault-success">Success</p>)}

                                  </td>
                                 </tr>

                 ))}

                </tbody>
              </table>
            </div>

          /*{this.state.userData.map(user => (
            <li key={user.id}>
              <p>{user.name}</p>
              {user.validationErrors.map(error => (<p> {error} </p>))}
            </li>
          ))}*/

      );
    }
    else {
        return <div>Loading...</div>;
    }
  }
}

export default Users;
