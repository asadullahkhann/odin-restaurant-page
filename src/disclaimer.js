function getLegalAndDislaimerContent() {
    const cardHeading = document.createElement('div');
    cardHeading.classList.add('card-heading');
    cardHeading.textContent = 'Legal/Disclaimer';
    const card = document.createElement('div');
    card.classList.add('card');
    const contentTexts = [
        `Cluckin' Bell bears no responsiblity for any of the following side efects from eating our chicken - mammary gland swelling (in Cluckin' Bell versus the state of Ohio, 1994, it was proven that the link could not be established), erectile dysfunction (in a landmark case in Mexico City last month, the judge was killed so the case was thrown out of court. Cock a Doodle DO!), hair loss (you're bald, lady - chicken's have feathers don't blame us!), heart disease, brain shrinkage, obesity, stomach ulcers, blindness or teenage acne.`,
        `Cluckin' bell recommends a healthy, mixed diet with lots of exercise. Just because our food is cheap and full of addictive chemicals, doesn't mean you should eat it all of the time. If you do, that's your look out. Guaranteed!`
    ]
    for(let i = 0; i < 2; i++) {
        const innerCard = document.createElement('div');
        innerCard.classList.add('inner-card');
        innerCard.textContent = contentTexts[i];
        card.appendChild(innerCard);
    }
    return {cardHeading, card};
}

export {getLegalAndDislaimerContent};