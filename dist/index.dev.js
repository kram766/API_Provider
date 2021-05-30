"use strict";

console.log('working.....');
document.querySelector('.submitbutton').addEventListener('click', function (e) {
  e.preventDefault();
  var name = document.querySelector('.name').value;
  var email = document.querySelector('.email').value;
  var password = document.querySelector('.password').value;
  var data = {
    name: name,
    email: email,
    password: password
  };
  Fetchdata();

  function Fetchdata() {
    var result = axios.post('http://localhost:5000/api/users', {
      data: data
    });
    console.log(result);
  }
});