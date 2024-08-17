import './styles.css'
import {getHomeContent} from './home.js';

const contentDiv = document.querySelector('#content');
const homeBtn = document.querySelector('button:nth-child(1)');
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