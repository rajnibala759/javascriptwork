
 function addNewLiElement() {
    let input_value = document.getElementById("textBox").value;
    console.log(input_value);
    document.getElementById("list").innerHTML += "<li>" + input_value + "</li>";
}
function deleteLastLiElement() {
    document.getElementById("list").removeChild(document.getElementById("list").lastChild);
}