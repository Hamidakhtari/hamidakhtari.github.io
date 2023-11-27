const menuItems = document.querySelectorAll('nav a');

menuItems.forEach(menuItem => {
    menuItem.addEventListener('mouseover', () => {
        menuItem.style.color = '#888888';
    });

    menuItem.addEventListener('mouseout', () => {
        menuItem.style.color = '';
    });
});
