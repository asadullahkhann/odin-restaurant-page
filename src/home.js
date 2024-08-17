function getHomeContent() {
    const liTextContents = [[`Since 1902. Cluckin' Bell has been leading the way in providing billions of chickens with a very
happy resting place your stomach! Using our uniquely humane way of factory farming them
we can provide you with the cheapest, most satisfying fried chicken around!`, 
`Using our patented herby feed, the chickens are effectively being marinated from the day they are bom. All to bring the taste all the way to your plate. Cock A Doodle Do`, 
`Our chickens don't die in vain. Guaranteed`], 
[`No Cluckin' Bell chicken ever saw the light of day, so they don't know what they are missing!`, `
    Unlike other chains, our chickens WANT to be deep fried at a young age!`, 
    `Our deep fried chicken is healthy, especially for girls hating puberty`]];
    const innerCardHeadingTexts = ["COCK A DOODLE DO'S", "COCK A DOODLE DON'TS"]
    
    const cardHeading = document.createElement('div');
    cardHeading.textContent = 'Our Promise to You.';
    cardHeading.classList.add('card-heading');
    const card = document.createElement('div');
    card.classList.add('card');
    for(let i = 0; i < 2; i++) {
        const innerCard = document.createElement('div');
        innerCard.classList.add('inner-card');
        const innerCardHeading = document.createElement('h2');
        innerCardHeading.textContent = innerCardHeadingTexts[i];
        const ulElement = document.createElement('ul');
        for(let j = 0; j < 3; j++) {
            const liElement = document.createElement('li');
            liElement.textContent = liTextContents[i][j];
            ulElement.appendChild(liElement);
        }
        innerCard.appendChild(innerCardHeading);
        innerCard.appendChild(ulElement);
        card.appendChild(innerCard);
    }
    return {card, cardHeading};
}

export {getHomeContent};

