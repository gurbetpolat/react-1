import React from "react";



function User(
    { user,deleteUser}

   
  
)

{
   

    return (
        <tr>
            <td>{user.id}</td>
            <td> {user.name}</td>
            <td>{user.email}</td>
            <td> <button onClick={()=>{deleteUser(user.id)}} className="btn btn-danger">Delete</button></td>
        </tr>

    );
}

export default User;