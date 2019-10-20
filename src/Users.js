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

   componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps', nextProps);
    this.setState({isLoaded: nextProps.dataFromParent.isLoaded, userData: nextProps.dataFromParent.users, paths: nextProps.dataFromParent.path});
   }

  render() {

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
      );
    }
    else {
        return <div>Loading...</div>;
    }
  }
}

export default Users;
