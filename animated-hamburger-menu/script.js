const menuBtn = document.querySelector(".menu-btn")

menuBtn.addEventListener('click',function(){
   this.className.indexOf('active') === -1 ?
    this.classList.add("active") :
     this.classList.remove("active")
})