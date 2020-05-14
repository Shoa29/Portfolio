const TypeWriter = function(txtElement, words, wait=2000){
    this.txtElement = txtElement;
    this.words= words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
}
TypeWriter.prototype.type = function() {
    const current = this.wordIndex % this.words.length;
    const fullTxt = this.words[current];
    if(this.isDeleting){
        this.txt = fullTxt.substring(0,this.txt.length -1);
    }else{
        this.txt = fullTxt.substring(0,this.txt.length + 1);
    }  
    this.txtElement.innerHTML = `<span class= "txt">${this.txt}</span>`;
    let typeSpeed = 1000;
    if(this.isDeleting){
        typeSpeed = typeSpeed*2;
    }
    if(!this.isDeleting && this.txt === fullTxt){
        typeSpeed = this.wait;
        this.isDeleting = true;
    }else if(this.isDeleting && this.txt ===''){
        this.isDeleting = false;
        this.wordIndex++;
        typeSpeed = 1200;
    }
    setTimeout(()=> this.type(),500);
}
document.addEventListener('DOMContentLoaded',init);

function init(){
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    new TypeWriter(txtElement, words, wait);
}
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}