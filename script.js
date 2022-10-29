document.querySelector(".ham").addEventListener('click',function(){
    document.querySelectorAll(".tautan").forEach(function(a,b){
        a.classList.toggle("aktif");
    })
    this.classList.toggle('active');
})

