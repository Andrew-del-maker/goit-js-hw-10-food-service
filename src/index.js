import menuItemsTpl from './templates/menu-item.hbs';
import menuItemsData from './menu.json';
import './styles.css';

// tamplate
const menuContainer = document.querySelector('.js-menu');
const menuItems = menuItemsTpl(menuItemsData);
menuContainer.insertAdjacentHTML('beforeend', menuItems);
// theme
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const inputEl = document.querySelector('.theme-switch__toggle');
const bodyEl = document.querySelector('body');
const storageTheme = localStorage.getItem('theme');
bodyEl.classList = storageTheme;
  if (storageTheme === Theme.DARK) {
        inputEl.checked = true;
    }
 
inputEl.addEventListener('change', onInputChange);

function onInputChange() {
    const currentStorageTheme = localStorage.getItem('theme');
    if (currentStorageTheme === Theme.LIGHT) {
        localStorage.removeItem('theme', Theme.LIGHT);
        localStorage.setItem('theme', Theme.DARK);
        bodyEl.classList.remove(`${Theme.LIGHT}`) ;
        bodyEl.classList.add(`${Theme.DARK}`) ;
    }
    if (currentStorageTheme === Theme.DARK) {
        localStorage.removeItem('theme', Theme.DARK);
        localStorage.setItem('theme', Theme.LIGHT);
        bodyEl.classList.remove(`${Theme.DARK}`) ;
        bodyEl.classList.add(`${Theme.LIGHT}`);
    }

}