//variables
let search=document.getElementById('favorite-dish');
let favoriteRecipeSection=document.getElementById('favorite-recipes');

search.value="";
//events
search.addEventListener('keyup',searchRecipe);
let recipe;

/**
 * functions to search recipes
 */
function searchRecipe(){
    recipe=search.value;
    if(recipe){
        fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=1c7e63f3fe124e99b1525313c5d1d042&query=${recipe}`)
        .then (function(response){
        return response.json();
        })
        .then(function(result){
        
        showFavoriteRecipes(result.results);
    
    }) 

    }else{
        favoriteRecipeSection.innerHTML="";
    }
    
     
}

/**
 * function to show all the favorite recipes
 * @param {array} favoriteRecipe 
 */
function showFavoriteRecipes(favoriteRecipe){
    favoriteRecipeSection.innerHTML="";
    favoriteRecipe.forEach(oneRecipe => {
        favoriteRecipeSection.innerHTML+=`
        <article>
            <img src="${oneRecipe.image}" alt="">
            <a href="/recipe.html?id=${oneRecipe.id}">${oneRecipe.title}</a>
            
         </article>
        `;
    });
}