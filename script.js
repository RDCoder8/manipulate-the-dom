let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
const mainTitle = document.getElementById('main-title')
mainTitle.textContent = "Welcome to the House of DOM"

  // Part 2
const body = document.querySelector('body')
body.style.backgroundColor = 'royalblue'

  // Part 3
const favoriteThings = document.getElementById('favorite-things')
favoriteThings.removeChild(favoriteThings.children[favoriteThings.children.length - 1])


  // Part 4
const specialTitles = document.querySelectorAll('.special-title')
specialTitles.forEach(element => {
  element.style.fontSize = '2rem'
})

  // Part 5
const pastRaces = document.getElementById('past-races')
//pastRaces.removeChild(pastRaces.children[3]) //The Easy Way
for (let i = 0; i < pastRaces.children.length; i++) { //Gotten programmatically
  const element = pastRaces.children[i];
  if (element.textContent === 'Chicago') {
    element.remove()
  }
}

  // Part 6
const newCity = document.createElement('i')
newCity.textContent = "Atlanta"
pastRaces.append(newCity)

  // Part 7
const newBlogPost = document.createElement('div')
const newBlogPostLocation = document.createElement('h1')
const newBlogPostSubText = document.createElement('p')
const main = document.querySelector('.main')

newBlogPost.classList.add('blog-post', 'purple')
newBlogPostLocation.textContent = 'Atlanta'
newBlogPostSubText.textContent = 'I crashed through the georgia aquarium!'.toUpperCase()

newBlogPost.append(newBlogPostLocation, newBlogPostSubText)
main.append(newBlogPost)

  // Part 8
const randomQuoteBtn = document.getElementById('quote-title')
randomQuoteBtn.addEventListener('click', randomQuote)//Note to self, don't need parentheses inside.

  // Part 9
const blogPosts = document.querySelectorAll('.blog-post')
blogPosts.forEach(element => {
  element.addEventListener('mouseout', (evt) => {
    evt.target.classList.toggle('purple') //This definitely works differently than hover.
  })
  element.addEventListener('mouseenter', (evt) => {
    evt.target.classList.toggle('red') //Yeah, I think I'll stick to hover for this.
  })
})


});
