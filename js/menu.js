(function(){
    const openButton = document.querySelector(".nav_menu");
    const closeMenu = document.querySelector(".nav_close");
    
    const menu = document.querySelector(".nav_link");

    openButton.addEventListener("click", ()=>{
        menu.classList.add("nav_link--show");
    });

    closeMenu.addEventListener("click", ()=>{
        menu.classList.remove("nav_link--show");
    });

    

})();