import React,{useState} from 'react';
import AddUser from './Components/User/Adduser';
import UserList from './Components/User/UserList';


function App() {
  let [userLists,setUserLists]=useState([])
  const addUsersHandler=(uname,uage)=>{
    setUserLists((prevList)=>{
      return([...prevList,{name:uname,age:uage,id:Math.random().toString()}])

    })

  }
  return (
    <>
      <AddUser onAddUser={addUsersHandler}/>
      <UserList users={userLists}></UserList>
    </>
  );
}

export default App;
