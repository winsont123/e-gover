let ham=document.querySelector(".ham");
let tautan = document.querySelector(".tautan");
ham.addEventListener('click',()=>{
    tautan.classList.toggle('aktif');
    ham.classList.toggle('active');
})
let row=document.querySelector('.row');
// let img= Array.from(document.querySelectorAll('figure img'));
// img.forEach((a,b)=>{
//     a.parentElement.parentElement.style.background=`url(${a.getAttribute('img')})`;
// })
let layanan=[
    {
        layanan:"My Pertamina",
        gambarBg:"dermaga.jpg",
        logo:"pertamina.png"
    },
    {
        layanan:"My Pertamina",
        gambarBg:"dermaga.jpg",
        logo:"pertamina.png"
    },
    {
        layanan:"My Pertamina",
        gambarBg:"dermaga.jpg",
        logo:"pertamina.png"
    },
    {
        layanan:"My Pertamina",
        gambarBg:"dermaga.jpg",
        logo:"pertamina.png"
    },
    {
        layanan:"My Pertamina",
        gambarBg:"dermaga.jpg",
        logo:"pertamina.png"
    },
    {
        layanan:"My Pertamina",
        gambarBg:"dermaga.jpg",
        logo:"pertamina.png"
    },
    {
        layanan:"My Pertamina",
        gambarBg:"dermaga.jpg",
        logo:"pertamina.png"
    }
]
let tampung ='';
layanan.forEach((a,b)=>{
    tampung +=`<div class="card" style="background-image: url('img/${a['gambarBg']}');">
                    <div class="info">
                        <div class="layanan"><h4>${a['layanan']}</h4></div>
                        <div class="box">
                         <img src="img/${a['logo']}" alt="logo pertamina">
                        </div>
                    </div>
                </div>`
    row.innerHTML=tampung;
})




