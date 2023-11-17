burger=document.querySelector('.burger')
navbar=document.querySelector('.navbar')
navList=document.querySelector('.navList')
rightnav=document.querySelector('.rightnav')

burger.addEventListener('click',()=>{
    navbar.classList.toggle('h-class-resp');
    rightnav.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp');
})