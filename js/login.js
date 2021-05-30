console.log('working.....');
document.querySelector('.submitbutton').addEventListener('click',function(e){
    e.preventDefault();
    var email = document.querySelector('.email').value;
    var password = document.querySelector('.password').value;
    var data = {
        email,
        password
    };
    axios.post('https://apiservicested.herokuapp.com/api/auth',data)
    .then(r=>{
        localStorage.setItem("x-auth-token",r.data.token);
    })
    .catch(err=>console.log(err));



})

setInterval(()=>{
   if(localStorage.getItem('x-auth-token')){
       window.location.href = "API_Provider/dashboard.html";
   }
},500);