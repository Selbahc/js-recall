var selectElementsStartingWithA = function(array) {
  function startingWithA(elements) {
    return elements.charAt(0) === "a";
  }
  return array.filter(startingWithA);
}

var selectElementsStartingWithVowel = function(array) {
  var vowel = ["a", "e", "i", "o", "u", "y"];

  function startingWithVowel(el) {
    var firstChar = el.charAt(0);
    return vowel.indexOf(firstChar) !== -1;
  }
  return array.filter(startingWithVowel);
}

var removeNullElements = function(array) {
  return array.filter(el => el !== null);
}

var removeNullAndFalseElements = function(array) {
  return array.filter(el => el !== null && el !== false);
}

var reverseWordsInArray = function(array) {
  return array.map(el => el.split("").reverse().join(""));
}

var everyPossiblePair = function(array) {
  //WORKS ONLY WITH A 3 ELEMENTS ARRAY
  var resultArr = [];
  for (var i = 0; i < array.length; i++) {
    if (i < array.length - 1) {
      resultArr.push([array[i], array[i + 1]]);
    } else {
      resultArr.push([array[i], array[0]]);
    }
    resultArr[i].sort();
  }
  return resultArr.sort();
}

var allElementsExceptFirstThree = function(array) {
  return array.slice(3);
}

var addElementToBeginning = function(array, element) {
  array.unshift(element);
  return array;
}

var sortByLastLetter = function(array) {
  function compareLast(a, b) {
    var aLast = a.charAt(a.length - 1),
      bLast = b.charAt(b.length - 1);
    if (aLast < bLast) {
      return -1;
    }
    if (aLast > bLast) {
      return 1;
    }
    return 0;
  }

  return array.sort(compareLast);
}

var getFirstHalf = function(string) {
  return string.substr(0, Math.round(string.length / 2));
}

var makeNegative = function(number) {
  return number > 0 ? number * -1 : number;
}

var numberOfPalindromes = function(array) {
  return 'Write your method here';
}

var shortestWord = function(array) {
  return 'Write your method here';
}

var longestWord = function(array) {
  return 'Write your method here';
}

var sumNumbers = function(array) {
  return 'Write your method here';
}

var repeatElements = function(array) {
  return 'Write your method here';
}

var stringToNumber = function(string) {
  return 'Write your method here';
}

var calculateAverage = function(array) {
  return 'Write your method here';
}

var getElementsUntilGreaterThanFive = function(array) {
  return 'Write your method here';
}

var convertArrayToObject = function(array) {
  return 'Write your method here';
}

var getAllLetters = function(array) {
  return 'Write your method here';
}

var swapKeysAndValues = function(object) {
  return 'Write your method here';
}

var sumKeysAndValues = function(object) {
  return 'Write your method here';
}

var removeCapitals = function(string) {
  return 'Write your method here';
}

var roundUp = function(number) {
  return 'Write your method here';
}

var formatDateNicely = function(date) {
  return 'Write your method here';
}

var getDomainName = function(string) {
  return 'Write your method here';
}

var titleize = function(string) {
  return 'Write your method here';
}

var checkForSpecialCharacters = function(string) {
  return 'Write your method here';
}

var squareRoot = function(number) {
  return 'Write your method here';
}

var factorial = function(number) {
  return 'Write your method here';
}

var findAnagrams = function(string) {
  return 'Write your method here';
}

var convertToCelsius = function(number) {
  return 'Write your method here';
}

var letterPosition = function(array) {
  return 'Write your method here';
}
