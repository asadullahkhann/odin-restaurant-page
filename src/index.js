import './styles.css'
import { getHomeContent } from './home.js';
import { getMenuContent } from './menu.js';
import { getLegalAndDislaimerContent } from './disclaimer.js';

const contentDiv = document.querySelector('#content');
const homeBtn = document.querySelector('button:nth-child(1)');
const menuBtn = document.querySelector('button:nth-child(2)');
const disclaimerBtn = document.querySelector('button:nth-child(3)');
window.onload = function() {
    contentDiv.appendChild(getHomeContent().cardHeading);
    contentDiv.appendChild(getHomeContent().card);
    contentDiv.classList.add('padding', 'gap')
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
});

disclaimerBtn.addEventListener('click', () => {
    clearContentDiv();
    contentDiv.appendChild(getLegalAndDislaimerContent().cardHeading);
    contentDiv.appendChild(getLegalAndDislaimerContent().card);
})