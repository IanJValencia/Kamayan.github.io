document.addEventListener('DOMContentLoaded', () => {
  // Get all the menu items
  const menuItems = document.querySelectorAll('.menu-category li');

  // Display item info by default
  menuItems.forEach((menuItem) => {
    const itemInfo = menuItem.querySelector('.item-info');

    menuItem.addEventListener('mouseenter', () => {
      // Enlarge the image on hover
      const img = menuItem.querySelector('img');
      img.style.transform = 'scale(1.1)';
    });

    menuItem.addEventListener('mouseleave', () => {
      // Reset image size on mouse leave
      const img = menuItem.querySelector('img');
      img.style.transform = 'scale(1)';
    });
  });
});
