const toggle = document.querySelector('#theme-toggle');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    if (currentTheme === 'light') {
        toggle.checked = true;
    }
} else {
    if (window.matchMedia("(prefers-color-scheme: light)").matches) {
        toggle.checked = true;
    }
}

toggle.addEventListener('change', (e) => {
    if (e.target.checked) {
        localStorage.setItem('theme', 'light');
    } else {
        localStorage.setItem('theme', 'dark');
    }
});
