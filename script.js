let ham=document.querySelector(".ham");
let tautan = document.querySelector(".tautan");
ham.addEventListener('click',()=>{
    tautan.classList.toggle('aktif');
    ham.classList.toggle('active');
})
let icon=document.querySelector('i');
let subMenu=document.querySelector('.sub-menu ul');
let counter =0;
icon.addEventListener('click',function(){
    if(counter ==0 ){
        subMenu.style.display='flex';
        setTimeout(function(){
            subMenu.classList.add('pop');
        },10);
        counter++;
    }else if(counter ==1){
        setTimeout(function(){
            subMenu.style.display='none';
        },1000);
        subMenu.classList.remove('pop');
        counter--;        
    }
})
let row=document.querySelector('section#layanan .row');
let baris =document.querySelector('section#berita .row');


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
let nampung='';
layanan.forEach((a,b)=>{
    nampung +=`<div class="kartu" style="background-image: url('img/${a['gambarBg']}');">
                    <div class="info">
                        <div class="layanan"><h4>${a['layanan']}</h4></div>
                        <div class="box">
                         <img src="img/${a['logo']}" alt="logo pertamina">
                        </div>
                    </div>
                </div>`
    baris.innerHTML=nampung;
})



