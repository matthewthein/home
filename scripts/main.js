var myHeading = document.querySelector('h1');
myHeading.textContent = 'Welcome home!';
//var iceCream = 'chocolate';
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
if (true) {
  alert('This website is purely for my learning experience only!');    
} else {
  alert('This website is purely for my learning experience only!');    
}
document.querySelector('html').onclick = function() {
    alert('Hey! Stop it!');
}
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Computer-Guy-800px.png') {
      myImage.setAttribute ('src','images/underconstruction-800px.png');
    } else {
      myImage.setAttribute ('src','images/Computer-Guy-800px.png');
    }
}
function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Welcome, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Welcome, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}
