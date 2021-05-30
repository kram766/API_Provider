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
setInterval(()=>{
    if(!localStorage.getItem('x-auth-token')){
        window.location.href = "login.html";
    }
 },500);