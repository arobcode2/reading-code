var scoreTransformer = function (list) {//function that accepts an array
  var scores = {};//an empty object called scores is created
  for(var i = 0; i < list.length; i++) {//loop that iterates through list of scores
    let score = list[i][1];//initializes score variable to be 2nd element in the element at the current index of array
    let word = list[i][0];//initializes word variable to be 1st element in the element at the current index of array
    if(!(score in scores)) {//if the score is not in the scores object
      scores[score] = [];//the value of the score key is an empty array
    }
    scores[score].push(word);//otherwise, push a word into the value of the score key in the scores object
  }
  return scores;//return scores object
};