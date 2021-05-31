if(localStorage.getItem('x-auth-token')){
    axios.get('https://apiservicested.herokuapp.com/api/profile/userme',{headers:{"x-auth-token":localStorage.getItem('x-auth-token')}})
    .then(r=>{
        console.log(r);
        document.querySelector('.info_id').textContent = r.data._id;
        document.querySelector('.info_name').textContent = r.data.name;
        document.querySelector('.info_email').textContent = r.data.email;
        document.querySelector('.info_Res_date').textContent = r.data.date;

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