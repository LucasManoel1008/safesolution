window.onload = function() {
    returnTopOnLoad();
};

export function returnTopOnLoad() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

export function goToAboutUs(){
    let aboutUs = document.getElementById('aboutUs');
    const aboutUsPosition = aboutUs.getBoundingClientRect().top + window.scrollY - 250;
    window.scrollTo({
        top: aboutUsPosition,
        behavior: "smooth"
    });
    
}