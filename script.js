const openMenu= ()=>{
    document.querySelector('.backdrop').className='backdrop active';
    document.querySelector('sidebar').className='active';
 }
 const closeMenu= ()=>{
     document.querySelector('.backdrop').className='backdrop';
     document.querySelector('sidebar').className='';
 }
 document.getElementById('menubtn').onclick=() =>{
 
 openMenu();
 }
 document.getElementById('menubtn-mobile').onclick=()=>{
 
     openMenu();
     }
 document.querySelector('sidebar .sidebar-button').onclick=() =>{
     closeMenu();
 }
 document.querySelector('.backdrop').onclick=()=>{
     closeMenu();
 }