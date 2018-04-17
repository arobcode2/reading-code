var scoreTransformer = function (list) {
  var scores = {};
  for(var i = 0; i < list.length; i++) {
    let score = list[i][1];
    let word = list[i][0];
    if(!(score in scores)) {
      scores[score] = [];
    }
    scores[score].push(word);
  }
  return scores;
}