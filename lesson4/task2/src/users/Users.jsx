import React from 'react';
import { connect } from 'react-redux';
import * as usersActions from './users.actions';

class Users extends React.Component {
  handleUserCreate = () => {
    const id = Math.round(Math.random() * 1000000);
    const newUser = {
      id,
      name: `User # ${id}`,
    };

    this.props.createUser(newUser);
  };

  render() {
    const { users, deleteUser } = this.props;
    console.log('users: ', users);
    console.log('users: ', users);

    return (
      <div className="users">
        <button className="users__create-btn" onClick={this.handleUserCreate}>
          Create user
        </button>
        <ul className="users__list">
          {users.map(user => (
            <li key={user.id} className="users__list-item">
              <span>{user.name}</span>
              <button className="users__delete-btn" onClick={() => deleteUser(user.id)}>
                +
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapState = state => {
  console.log('state: ', state);
  return {
    users: state.users.usersList,
  };
};

const mapDispatch = {
  createUser: usersActions.addUser,
  deleteUser: usersActions.deleteUser,
};

const connector = connect(mapState, mapDispatch);

const ConnectedUsers = connector(Users);

export default ConnectedUsers;
