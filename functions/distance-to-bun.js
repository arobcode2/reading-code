var distanceToBun = function(ingredients, ingredient) {
  for(var i = 0; i < ingredients.length; i++) {
    if(ingredients[i] === ingredient) {
      return Math.min(i, ingredients.length - i);
    }
  }
}
