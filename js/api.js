if(localStorage.getItem('x-auth-token')){
    axios.get('https://apiservicested.herokuapp.com/api/profile/userme',{headers:{"x-auth-token":localStorage.getItem('x-auth-token')}})
    .then(r=>{
        console.log(r);
        document.querySelector('.apikey').textContent = r.data.API_KEY;

    })
    .catch(err=>console.log(err));
}
else{
    window.location.href="/login.html";
}
document.querySelector('.Logout').addEventListener('click',function(){
    if(localStorage.getItem('x-auth-token')){
        localStorage.removeItem('x-auth-token');
    }
})
setInterval(()=>{
    if(!localStorage.getItem('x-auth-token')){
        window.location.href = "login.html";
    }
 },500);