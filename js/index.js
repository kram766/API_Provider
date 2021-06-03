console.log('working.....');
document.querySelector('.submitbutton').addEventListener('click',function(e){
    e.preventDefault();
    var name = document.querySelector('.name').value;
    var email = document.querySelector('.email').value;
    var password = document.querySelector('.password').value;
    var data = {
        name,
        email,
        password
    };
    axios.post('https://apiservicested.herokuapp.com/api/users',data)
    .then(r=>{
        console.log(r)
        localStorage.setItem('x-auth-token',r.data);
    })
    .catch(err=>console.log(err));
})