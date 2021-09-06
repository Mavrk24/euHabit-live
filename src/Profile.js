import {React, useState, useEffect} from 'react';
import axios from 'axios';
import { Component } from 'react';

export default class Content extends Component {
    login = (e) => {
    e.preventDefault();
    axios
    .post("/username", {
      username: document.getElementById("username").value,
      symptoms: document.getElementById("symptoms").value,
})
.then(function (response) {
   console.log(response);
   window.location.reload();
});
};
  render(){
  return(
  <div className="login-wrapper"> 
 <form onSubmit={this.login} method="post">
    <p>
       <label >X-value</label>
       <input type="username" className="w3-input w3-border" id="username" name="username" />
       <label >Y-value</label>
       <input type="symptoms" className="w3-input w3-border" id="symptoms" name="symptoms" />
   </p>
   <p>
      <input type="submit" className="w3-button w3-blue" value="Login" />
   </p>
</form>
  </div>)
  }
  }