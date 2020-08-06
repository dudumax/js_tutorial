//rverses a string
String.prototype.reverse = function () {
  return Array.from(this).reverse().join("");
}

//defines a phrase object
function Phrase(content) {
  this.content = content;


this.processedContent = function processedContent () {
return this.content.toLowerCase();
}

  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
}
}
