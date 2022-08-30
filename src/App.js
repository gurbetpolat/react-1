import React, { useState } from 'react';
import AddUser from './components/AddUser';
import Users from './components/Users';
import './App.css';

function App() {

 

 const [users,setUsers]=useState( [
  {
  id:1,
  name:"Emre Demir",
  email:"demir@gmail.com"
 },
 {
  id:2,
  name:"Gurbet Polat",
  email:"polat@gmail.com"
 },
 {
  id:3,
  name:"Buse Bekmezci",
  email:"bekmezci@gmail.com"
 }
]);


function deleteUser(id){
  setUsers(users.filter(user=>user.id !== id))
 

 }

 function kullaniciEkle(name,email){
  let yeniId;
  let maxId = 0;
  
  users.forEach(user => {
    if(user.id > maxId)
      maxId = user.id
  });  

  yeniId = maxId +1;

  const yeniKullanici = {
      id:yeniId,
      name:name,
      email:email
    }

    setUsers([...users,yeniKullanici]);
 }

  return (
    
   <div className='container'>
    <h5>User App</h5>
    <hr />
  <AddUser kullaniciEkleyecekFonksiyon={kullaniciEkle}/>
  <hr />
  <Users users={users} deleteUser={deleteUser} />

 
   </div>
  );
}

export default App;
