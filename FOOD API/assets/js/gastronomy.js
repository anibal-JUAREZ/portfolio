//variables
let typeOfFood=document.getElementById('food');
let typeOfCuisine=document.getElementById('type-cuisine');


//getting parameters from URL
const values = window.location.search;
const urlParams = new URLSearchParams(values);

//getting the value of the cuisine
let cuisine = urlParams.get('cuisine');
typeOfCuisine.innerText=cuisine;




fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=1c7e63f3fe124e99b1525313c5d1d042&cuisine=${cuisine}`)
.then (function(response){
    return response.json();
})
.then(function(result){
   
    showAllTheFood(result.results);
}) 

/**
 * function to show the differents dishes per cuisine
 * @param {array} allFood 
 */
function showAllTheFood(allFood){
    typeOfFood.innerHTML="";
    allFood.forEach(oneFood => {
        typeOfFood.innerHTML+=`
            <article>
                <img src="${oneFood.image}" alt="">
                <a href="/recipe.html?id=${oneFood.id}">${oneFood.title}</a>
            </article>
    
    `;
    });
    
}