function openMenuMobile(isOpen) {
    const menu = window.document.getElementById('menu-mobile')

    if (isOpen) {
        menu.style.right = ''
    } else {
        menu.style.right = '-320px'
    }
}
function ChangeMenuMobile() {
    // document.getElementById("ulmenu").style.display = "block";
    var x = document.getElementById("ulmenu");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
    
}
function ChangeMenuulMobile() {
    // document.getElementById("ulmenu").style.display = "block";
    var x = document.getElementById("menuul");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }   
}

window.addEventListener("scroll" , function(){
   if(this.document.documentElement.scrollTop>150)
   {
    this.document.querySelector(".bg-mobile").style.background = "#fff";
    this.document.querySelector(".bg-mobile").classList.add("font-text");
    

   }
   else{
    this.document.querySelector(".bg-mobile").style.background = "#0d0d0d54";
    this.document.querySelector(".bg-mobile").classList.remove("font-text");
   }
})

 $(document).ready(function(){
     $('#openMenu').click(function(){
         $('#menu-mobile').toggleClass('menuMobile')
     })
 })