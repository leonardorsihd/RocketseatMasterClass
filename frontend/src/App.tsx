import {useEffect, useState} from 'react';
import api from './services/api';
import { IUser, IUserList} from './interfaces/userInterface';
import User from './components/User';

function App() {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    api.get<IUserList>('/users').then((response) => {
      setUsers(response.data.data);
    })
    .catch((error) => console.log(error));
  },[]);

  return ( 
    <>
      {users.map((user) => <User key={user.email} user={user}/>)}
    </>
  )
}

export default App
