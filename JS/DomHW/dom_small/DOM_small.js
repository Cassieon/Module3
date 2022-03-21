// let extras = document.querySelector("#extras");
// extras.append("append() Add Ons");

// console.log(extras.textcontent);

const node = document.createElement("li");

const textnode = document.createTextNode("Avacado");

node.appendChild(textnode);

document.getElementById("list").appendChild(node);