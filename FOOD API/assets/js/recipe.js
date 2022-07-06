//variables
let title=document.getElementById('title-recipe');
let servings=document.getElementById('servings');
let minutes=document.getElementById('minutes');
let ingredients=document.getElementById('ingredients');
let instructions=document.getElementById('instructions');
let imageDish=document.getElementById('img-dish');



//getting parameters from URL
const values = window.location.search;
const urlParams = new URLSearchParams(values);

//getting the value of the cuisine
let id = urlParams.get('id');


fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=1c7e63f3fe124e99b1525313c5d1d042`)
.then (function(response){
    return response.json();
})
.then(function(result){
    imageDish.src=result.image;
    title.innerText=result.title;
    servings.innerText=' ' +result.servings +' servings';
    minutes.innerText=' '+result.readyInMinutes+' minutes';
    result.extendedIngredients.forEach(oneIngredient => {
        ingredients.innerHTML+=`
            <li>${oneIngredient.original}</li>
        `;
    });
    instructions.innerHTML=result.instructions;
    console.log(result);
    
}) 