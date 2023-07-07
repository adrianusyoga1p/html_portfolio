window.onload = () => {
    "use strict"
    const sections = document.querySelectorAll('section');
    const btnToggle = document.querySelector('.btn-toggle');
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', navHighlighter);
    function navHighlighter(){
        let scrollY = window.pageYOffset;
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 80,
            sectionId = current.getAttribute("id");

            if (
                scrollY > sectionTop &&
                scrollY <= sectionTop + sectionHeight
              ){
                document.querySelector(".navbar-link[href*=" + sectionId + "]").classList.add("active");
                navbar.classList.remove('show');
                btnToggle.classList.remove('toggled');
              } else {
                document.querySelector(".navbar-link[href*=" + sectionId + "]").classList.remove("active");
              }
        });
    }

    // for(let i = 0; i < btnToggle.length; i++){
        btnToggle.onclick = (e) => {
            e.preventDefault();
            navbar.classList.toggle('show');
            btnToggle.classList.toggle('toggled');
        }
    // }
    
}