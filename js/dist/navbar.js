function navbar(){
    let nav_icon = document.querySelectorAll('[data-navIcon="nav_icon"]');
    let nav_manue = document.querySelector('[data-navManue="nav_manue"]');
    nav_icon.forEach(function(icon){
        icon.addEventListener('click',()=>{ 
            icon.classList.toggle('active');
            nav_manue.classList.toggle('active');
        })
    });
}
navbar();