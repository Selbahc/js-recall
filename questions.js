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
  var numPal = 0;
  for (var i = 0; i < array.length; i++) {
    array[i].split("").reverse().join("") == array[i] ? numPal++ : false;
  }
  return numPal;
}

var shortestWord = function(array) {
  var shortest = Number.MAX_VALUE;

  array.forEach(function(el) {
    el.length < shortest ? shortest = el.length : false;
  });

  return array.filter(el => el.length == shortest).toString();
}

var longestWord = function(array) {
  var longest = Number.MIN_VALUE;

  array.forEach(function(el) {
    el.length > longest ? longest = el.length : false;
  });

  return array.filter(el => el.length == longest).toString();
}

var sumNumbers = function(array) {
  var sum = 0;

  array.forEach(function(num) {
    sum += num;
  });
  return sum;
}

var repeatElements = function(array) {
  return array.join("").repeat(2).split("");
}

var stringToNumber = function(string) {
  return parseInt(string);
}

var calculateAverage = function(array) {
  sum = 0;
  array.forEach(n => sum += n);
  return sum / array.length;
}

var getElementsUntilGreaterThanFive = function(array) {
  var overFive = Infinity;
  for (var i = 0; i < overFive; i++) {
    if (array[i] > 5) overFive = i;
  }
  return array.splice(0, overFive);
}

var convertArrayToObject = function(array) {
  return array.reduce((acc, cur, i, ar) => {
    if (i % 2 === 0) {
      acc[cur] = ar[i+1]
    }
    return acc
  }, {});
}

var getAllLetters = function(array) {
  return array
    .join('')
    .split('')
    .sort()
    .reduce((acc, cur) =>
      acc.charAt(acc.length-1) !== cur ?
      acc + cur
      : acc)
    .split('')
}

var swapKeysAndValues = function(object) {
  for (let key in object) {
    object[object[key]] = key
    delete object[key]
  }

  return object
}

var sumKeysAndValues = function(object) {
  let total = 0;

  for (let key in object) {
    total += Number(key);
    total += Number(object[key]);
  }

  return total
}

var removeCapitals = function(string) {
  return string
    .split('')
    .map((letter) => {
      let code = letter.charCodeAt(0)
      return code >= 65 && code <= 90 ? '' : letter
    })
    .join('')
}

var roundUp = function(number) {
  return Math.ceil(number);
}

var formatDateNicely = function(date) {
  let twoDigits = (num) => num < 10 ? '0' + num : num
  return twoDigits(date.getDate())
    + '/'
    + twoDigits(date.getMonth()+1)
    + '/'
    + date.getFullYear()
}

var getDomainName = function(string) {
  return string
  .replace(/[A-Za-z]+@([A-Za-z]+.?[A-Za-z]*)(?:.uk|.com|.fr|.org)/g, '$1')
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

  function permute(array) {
    if (array.length === 1) return [array];
    var fullPermutation = [];

    for (var i in array) {
      var subset = array.slice(0);
      subset.splice(i, 1);

      for (var permutation of permute(subset)) {
        permutation.unshift(array[i]);
        fullPermutation.push(permutation);
      }
    }
    return fullPermutation
  }

  function joinLetters(array) {
    return array.join('');
  }

  return permute(string.split('')).map(joinLetters);
}

var convertToCelsius = function(number) {
  return 'Write your method here';
}

var letterPosition = function(array) {
  return 'Write your method here';
}
