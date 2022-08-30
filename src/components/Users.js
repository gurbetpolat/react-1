import React from 'react';
import User  from './User';


function Users(
    {users,deleteUser}
    
) {
 
    
    

    return (
        <table className="table table-dark">
            <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>

               {
                users.map(user=>{
                  
                    return <User key={user.id} user={user}  deleteUser={deleteUser} />
                })
               }
             
            </tbody>

        </table>

    );
}
export default Users;