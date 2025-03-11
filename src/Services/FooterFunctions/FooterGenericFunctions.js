export function goToSection(id){
    let aboutUs = document.getElementById(id);
        const aboutUsPosition = aboutUs.getBoundingClientRect().top + window.scrollY - 250; 
        window.scrollTo({
            top: aboutUsPosition,
            behavior: "smooth"
        });
}