let states =["Kansas", "Nebraska", "North Dakota", "South Dakota"];


//url freindly version.
function urlify(string) {
  return string.toLowerCase().split(/\s+/).join("-");
}


function imperativeUrls(element) {
  let urls=[];
  element.forEach(function(element) {
urls.push(urlify(element));

});
return urls;
}
console.log(imperativeUrls(states));

// urls ffunctional version
function  functionalUrls(elements) {
  return elements.map(element => urlify(element));
}
console.log(functionalUrls(states));

///states urls.
//function fullAddress(elements) {
//elements.forEach(function(elements)  {
      //return elements.map(element => "https://example.com/" + element);
  //});
//}
function fullAddress(states) {
  return states.map(state => "https://example.com/" + state);
}
console.log(fullAddress(states));




// singles imperative version
function imperativeSingles(elements) {
  let singles= [];
  elements.forEach(function(element) {
    if (element.split(/\s+/).length === 1) {
      singles.push(element);
    }
  });
  return singles;
}
console.log(imperativeSingles(states));





function functionalSingles(elements) {
  return elements.filter(element => element.split(/\s+/).length === 1);
}
console.log(functionalSingles(states));

function containsDakota(states) {
  return states.filter(state => state.includes("Dakota"));
}
console.log(containsDakota(states));

function twoWordStates(states) {
  return states.filter(state => state.split(/\s+/).length === 2);
}
console.log(twoWordStates(states));
