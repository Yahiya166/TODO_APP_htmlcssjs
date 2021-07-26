var a = document.getElementById('main');
var b = document.getElementById('todoInput');


function input() {
    if (b.value == "") {
        alert("Opps! Sorry! first write the todo in input?");

    } else {


        var a = document.getElementById('main');
        var newElement = document.createElement('P');
        newElement.setAttribute('class', 'para')
        var text = b.value.toLocaleUpperCase();
        text = document.createTextNode(text);
        newElement.appendChild(text);
        a.appendChild(newElement)
        b.value = " ";

        var editBtn = document.createElement('BUTTON');
        var editText = document.createTextNode('Edit');
        editBtn.appendChild(editText);
        editBtn.appendChild(editText);
        editBtn.setAttribute('class', 'editBtn')

        editBtn.setAttribute('onclick', 'editTodo(this)')
        newElement.appendChild(editBtn)


        var dltBtn = document.createElement('BUTTON');
        var dltText = document.createTextNode('Delete');
        dltBtn.appendChild(dltText);
        dltBtn.setAttribute('class', 'dltBtn')

        dltBtn.setAttribute('onclick', 'deleteTodo(this)')
        newElement.appendChild(dltBtn);
        alert("You Are Added Todo! success");
    }


}


function deleteTodo(e) {
    e.parentNode.remove()
    alert("Your Todo Delete Succesfully!");

}

function editTodo(e) {
    e.parentNode.firstChild.nodeValue = prompt("Enter your new Todo?")
    alert("Your Todo Edited Succesfully!");

}


function deleteAll() {
    a.innerHTML = ""
    alert("Your All Todo Delete Succesfully!");

}