document.addEventListener('scroll', () => {
    const navHi = document.getElementById('hi-nav');

    // window.scrollY > 1? navHi.classList.add('scrolled') : navHi.classList.remove('scrolled');
    if (window.scrollY > 40){
        navHi.classList.add('scrolled')
    } else if (window.scrollY == 0){
        // setTimeout(() => navHi.classList.remove('scrolled'), 1000);
        navHi.classList.remove('scrolled');
    }
})

const darkBtn = document.querySelector('.darkmode-button');
const html = document.querySelector('html');

darkBtn.addEventListener('click', () => {
    html.classList.toggle('dark-mode');
    darkBtn.classList.toggle('dark-mode');
})