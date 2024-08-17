import './styles.css'
import {getHomeContent} from './home.js';
import { getMenuContent } from './menu.js';

const contentDiv = document.querySelector('#content');
const homeBtn = document.querySelector('button:nth-child(1)');
const menuBtn = document.querySelector('button:nth-child(2)');
window.onload = function() {
    contentDiv.appendChild(getHomeContent().cardHeading);
    contentDiv.appendChild(getHomeContent().divCard);
    contentDiv.style.padding = '25px';
    contentDiv.style.gap = '15px';
};

function clearContentDiv() {
    while(contentDiv.firstChild) {
        contentDiv.removeChild(contentDiv.firstChild)
    }
}

homeBtn.addEventListener('click', () => {
    clearContentDiv();
    window.onload();
})

menuBtn.addEventListener('click', () => {
    clearContentDiv();
    contentDiv.appendChild(getMenuContent().cardHeading);
    contentDiv.appendChild(getMenuContent().card);
})