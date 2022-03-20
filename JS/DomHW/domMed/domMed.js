// Main Title Box
// var div = document.createElement('div');
// div.style.cssText = 'position:center;width:90%;height:25%;background:#1da3ee;';
// document.body.appendChild(div);

const headerElementOne = document.createElement('h1')
headerElementOne.innerText = "HighOnCoding"

const headerElementTwo = document.createElement('h2')
headerElementTwo.innerText = "Home"

const headerElementThree = document.createElement('h3')
headerElementThree.innerText = "Categories"

var div = document.createElement('div');
div.style.cssText = 'position:center;width:90%;height:25%;background:#1da3ee;';
document.body.appendChild(div);


// 2nd itle and paragraph
const headerElementFour = document.createElement('h2')
const paraOne = document.createElement('p')

// 3rd title with paragraph and banner
const headerElementFive = document.createElement('h3')
const paraTwo = document.createElement('p')
const paraThree = document.createElement('p')

// 4th title wwith paragraph and banner
const headerElementSix = document.createElement('h3')
const paraFour = document.createElement('p')
const paraFive = document.createElement('p')

// adding elements to html 

const container = document.querySelector('#container')

container.append(headerElementOne)
container.append(headerElementTwo)
container.append(headerElementThree)


// container.append(para)

// headerElement.append(headerElementOne, headerElementTwo, headerElementThree, headerElementFour, headerElementFive)

// adding text to elements



