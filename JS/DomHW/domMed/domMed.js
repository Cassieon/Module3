// Main Title Box
var div = document.createElement('div');
div.style.cssText = 'position:center;width:90%;margin:5%;height:25%;background:blue;';
document.body.appendChild(div);


const headerElementOne = document.createElement('h1')
headerElementOne.innerText = "HighOnCoding"

const headerElementTwo = document.createElement('h2')
headerElementTwo.innerText = "Home"

const headerElementThree = document.createElement('h3')
headerElementThree.innerText = "Categories"


// 2nd itle and paragraph
var div2 = document.createElement('div');
div2.style.cssText = 'position:center;width:100%;height:25%;margin:5%;background:grey;';
document.body.appendChild(div2);

const headerElementFour = document.createElement('h2')
headerElementFour.innerText = "Curse of the Current Reviews"
const paraOne = document.createElement('p')
paraOne.innterText = "When you want to buy any applicantion for the Apple iTunes store you have more choices than you can handle. Most fo the users scrool past the application completely avoiding it like ads displayed onthe right colomn fo your webpage. Their choice is dependent on three importnat facotors price, screenshot and reviews."

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

div.append(headerElementOne)
div.append(headerElementTwo)
div.append(headerElementThree)
div2.append(headerElementFour)
div2.append(paraOne)


// container.append(para)

// headerElement.append(headerElementOne, headerElementTwo, headerElementThree, headerElementFour, headerElementFive)

// adding text to elements



