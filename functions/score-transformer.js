var scoreTransformer = function (list) {//function that accepts an array of arrays
  var scores = {};//an empty object called scores is created
  for(var i = 0; i < list.length; i++) {//loop that iterates through list of arrays
    let score = list[i][1];//initializes score variable to be 2nd element in the array at the current index of list
    let word = list[i][0];//initializes word variable to be 1st element in the array at the current index of list
    if(!(score in scores)) {//if the score is not in the scores object
      scores[score] = [];//creates a new property in the scores object with a key of score and a value of an empty array
    }
    scores[score].push(word);//push word into the value of score key in the scores object
  }
  return scores;//return scores object
};