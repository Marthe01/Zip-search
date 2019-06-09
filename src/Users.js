import React from 'react';

class Users extends React.Component{
  render(){
  	console.log(this.props.match.params.id);
   return <h1>Users</h1>
  }
}

export default Users;
