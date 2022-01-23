import db from '../config';
import { useState } from 'react';
import { ref, set, get, child } from "firebase/database";
function LoginMod() {
  let results = [];

  async function login(){
    let db_snapshot = await get(child(ref(db), 'users/'));
    let boolCheckUser = false;
    let temp;
    db_snapshot.forEach(code_snap => {
      if (code_snap.key === user && code_snap.val().password === pass) {
        alert('logged in!');
        boolCheckUser = true;
        temp = getUser();
        return;
      }
    });
    if(boolCheckUser) return temp;
    alert('Invalid credentials!');
    return null;
  }

  async function getUser() {
    return get(child(ref(db), '/users' + user));
    // dbSnapshot.forEach(user =>{
    //   results.push({
    //     name: user.val().name,
    //     pronouns: user.val().pronouns,
    //     contact: user.val().contact,
    //     blurb: user.val().blurb,
    //     classes: user.val().classes,
    //     username: user.val().key
    //   }); 
    // });
  }

  // async function results(){
  //   let dbSnapshot = await get(child(ref(db), '/users'));
  //   dbSnapshot.forEach(user => {
  //     results
  //   })

  // }
let [user, setUser] = useState('');
let [pass, setPass] = useState('');
return (
  <div>

    <h1>Login</h1>
      <div className='row'>
        <div className='left-column'>Username</div>
        <div className='right-column'><input
          type='text'
          value={user}
          onChange={(e) => setUser(e.target.value)}
          placeholder='Username'
        /></div></div>
      <br />

      <div className='row'>
        <div className='left-column'>Password</div>
        <div className='right-column'><input
          type='text'
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          placeholder='Password'
        /></div></div>
      <br /><br />
      <button type='submit'
          onClick={() => {login();}}
        >
          Submit
        </button>
  </div>
);
}

export default LoginMod;