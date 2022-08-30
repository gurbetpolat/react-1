import React, {useState} from 'react';

function AddUser(
    {kullaniciEkleyecekFonksiyon}
){

    const [qwe,setUserName] = useState("");
    const [email,setEmail] = useState("");

    return(
    <div className='card'>
 
 <h4 className='card-header'>Add New User</h4>
 <div className="card-body">
    <form action="">
        <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" placeholder="Enter Name"  className='form-control' value={qwe} onChange={(e)=>setUserName(e.target.value)}/>
        </div>
        <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" placeholder="Enter Email"  className='form-control' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>
    </form>
 </div>
 <button type='submit' className='btn btn-danger btn-block' onClick={()=>{
    kullaniciEkleyecekFonksiyon(qwe,email)
 }}>Add New Users</button>

    </div>
    );
}
export default AddUser;