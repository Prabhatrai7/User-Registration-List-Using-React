import React, {useState} from 'react';
import Header from './Components/Header/Header';
import AddUser from './Components/Users/AddUser';
import UserList from './Components/Users/UserList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uname, uage) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, { name: uname, age: uage, id: Math.random().toString() }]
    });
  };

  return (
    <div>
      <Header />
      <AddUser onAddUser={addUserHandler} />
      <UserList users={usersList} />
    </div>
  );
}

export default App;
