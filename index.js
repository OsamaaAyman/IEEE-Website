let myElement= document.createElement("h1");
let myAttr = document.createAttribute("data-custom");
let myText = document.createTextNode("Product");
let myComment= document.createComment ("This Is Div");
myElement.className = "product";
myElement.setAttributeNode (myAttr);
myElement.setAttribute("data-test", "Testing");
// Append Text To Element
myElement.appendChild(myText);
// /Append. Comment To Element
myElement.appendChild (myComment);
// Append Element To Body
document.body.appendChild(myElement);