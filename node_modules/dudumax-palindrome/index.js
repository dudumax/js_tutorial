module.exports = Phrase;

//rverses a string
String.prototype.reverse = function () {
  return Array.from(this).reverse().join("");
}

//defines a phrase object
function Phrase(content) {
  this.content = content;


this.processedContent = function processedContent() {
  return this.letters().toLowerCase();
}

//returns the leters i the content.
this.letters = function letters() {
return (this.content.match(/[a-z]/gi) || []).join("");
  }


  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
}
}
