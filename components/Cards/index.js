// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        console.log(response);
        response.data.articles.bootstrap.forEach(el => {
            const newCard = cardCreator(el);
            const cardsContainer = document.querySelector('.cards-container');
            cardsContainer.appendChild(newCard);
        })
        
        response.data.articles.javascript.forEach(el => {
            const newCard = cardCreator(el);
            const cardsContainer = document.querySelector('.cards-container');
            cardsContainer.appendChild(newCard);
        })

        response.data.articles.jquery.forEach(el => {
            const newCard = cardCreator(el);
            const cardsContainer = document.querySelector('.cards-container');
            cardsContainer.appendChild(newCard);
        })

        response.data.articles.node.forEach(el => {
            const newCard = cardCreator(el);
            const cardsContainer = document.querySelector('.cards-container');
            cardsContainer.appendChild(newCard);
        })

        response.data.articles.technology.forEach(el => {
            const newCard = cardCreator(el);
            const cardsContainer = document.querySelector('.cards-container');
            cardsContainer.appendChild(newCard);
        })
    })
    .catch(error => {
        console.log('Error: ', error);
    });



function cardCreator(object) {
    // creating elements
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const img = document.createElement('img');
    const authorName = document.createElement('span');

    // adding content
    headline.textContent = object.headline;
    img.src = object.authorPhoto;
    authorName.textContent = object.authorName;

    // adding classes
    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');

    // structuring elements
    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgContainer);
    imgContainer.appendChild(img);
    author.appendChild(authorName);



    return card;
    
}