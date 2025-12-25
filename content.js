// Make the whole document RTL
document.documentElement.style.direction = 'rtl';

// Load Vazirmatn font from Google Fonts
const link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/css2?family=Vazirmatn:wght@100;200;300;400;500;600;700;800;900&display=swap';
link.rel = 'stylesheet';
document.head.appendChild(link);