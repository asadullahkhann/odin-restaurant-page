function getMenuContent() {
    const cardHeading = document.createElement('div');
    cardHeading.classList.add('card-heading');
    cardHeading.textContent = 'Menu';
    const card = document.createElement('div');
    card.classList.add('card');
    const innerCardHeadingTexts = [
        "CLUCKIN' LITTLE MEAL", 
        "CLUCKIN' BIG MEAL",
        "CLUCKIN' HUGE MEAL",
        "CLUCKIN' SALAD MEAL",
    ];
    const innerCardTexts = [
        `The Little Clucker Kids Meal for your little clucker. Or for the little clucker in YOU!
This month, comes with Free Bobby Broiler Toy!
For those who like to stay real small.`,
        `Enjoy a delicious Cluckin Bell Fillet Burger, Foel Wrap or Large Wing Pieces, with Fries and a delicious Sprunk!
For those who like to stay in good shape and full of energy.`,
        `For those of you who like it huge, and can't get enough Cluckin'.
Get a large bucket, a double fillet, a bulging folvirap and a xtra large blast of Sprunk to wash it all down. For those who like a lot of meat on their boner.`,
        `We are pleased to be obliged to serve you this wonderful freell-uursuivus allemalise meal For those who like to stay real small`,
    ]
    for(let i = 0; i < 4; i++) {
        const innerCard = document.createElement('div');
        innerCard.classList.add('inner-card');
        const innerCardHeading = document.createElement('h2');
        innerCardHeading.textContent = innerCardHeadingTexts[i];
        const innerCardContentEl = document.createElement('div');
        innerCardContentEl.textContent = innerCardTexts[i];
        innerCard.appendChild(innerCardHeading);
        innerCard.appendChild(innerCardContentEl);
        card.appendChild(innerCard);
    };
    return {cardHeading, card};
}

export {getMenuContent}