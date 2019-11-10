function addIngredientToRecipe(event){

    var document = event.target.ownerDocument;    

    var addNewIngredientTemplate = document.getElementById("addNewIngredientTemplate");
    console.log(addNewIngredientTemplate)
    var newIngredientsList = addNewIngredientTemplate.children[0].firstChild.cloneNode(true);
    newIngredientsList.style.display = "block";

    var myTable = document.getElementById("myTable");
    myTable.appendChild(newIngredientsList);
}