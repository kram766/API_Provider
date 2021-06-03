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
  axios.post('https://apiservicested.herokuapp.com/api/users', data).then(function (r) {
    console.log(r);
    localStorage.setItem('x-auth-token', r.data);
  })["catch"](function (err) {
    return console.log(err);
  });
});