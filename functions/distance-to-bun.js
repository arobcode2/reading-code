var distanceToBun = function(ingredients, ingredient) {//funcation called distanceToBun that accepts an array of ingredientss and 1 ingredient
  for(var i = 0; i < ingredients.length; i++) {//loop that iterates through ingredients one by one
    if(ingredients[i] === ingredient) {//checking to see if the ingredient at the current index is equal to the passed in ingredient
      return Math.min(i, ingredients.length - i);//if the current ingredient is equal to passed in ingredient, returns the lowest number choosing between the current index and the length of the ingredients array - the current index
    }
  }
};
