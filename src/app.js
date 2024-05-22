let pronoun = ["the", "a", "my", "that"];
let adjective = ["great", "sad", "fine", "smart", "big"];
let noun = ["chair", "lasagna", "light", "window", "tree"];
let extensions = [".com", ".net", ".org", ".io"];

function domainGenerator(arr1, arr2, arr3, arr4) {
  let domains = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      for (let k = 0; k < arr3.length; k++) {
        for (let l = 0; l < arr4.length; l++) {
          domains.push(arr1[i] + arr2[j] + arr3[k] + arr4[l]);
        }
      }
    }
  }
  console.log(domains);
}

domainGenerator(pronoun, adjective, noun, extensions);
