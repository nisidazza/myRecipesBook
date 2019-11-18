function addIngredientToRecipe(event) {

    var document = event.target.ownerDocument;

    var addNewIngredientTemplate = document.getElementById("addNewIngredientTemplate");
    console.log(addNewIngredientTemplate)
    var newIngredientsList = addNewIngredientTemplate.children[0].firstChild.cloneNode(true);
    newIngredientsList.style.display = "block";

    var myTable = document.getElementById("myTable");
    myTable.appendChild(newIngredientsList);
}

function toggleNewIngredient(event) {
    var target = event.target;
    target.toggled = !target.toggled;

    var listBox = target.parentNode.parentNode.querySelector("#ingredient_ids")
    var textBox = target.parentNode.parentNode.querySelector("#new_ingredients")

    if (target.toggled) {
        target.innerText = "Select Ingredient";
        listBox.style.display = "none";
        textBox.style.display = "inline";
    } else {
        target.innerText = "New Ingredient"
        listBox.style.display = "inline";
        textBox.style.display = "none";
        textBox.value = "";
    }
}