var list = document.getElementById("list");


var database = firebase.database().ref('todos')

// console.log(firebase)



database.on('child_added', function (data) {


    // console.log(data.val())  "check firebase function"




    //    LI


    var Text = document.createTextNode(data.val().value);
    var li = document.createElement("li");
    li.setAttribute('class', 'para')
    li.appendChild(Text);



    //   Edit


    var editBtn = document.createElement("button");
    var editText = document.createTextNode("EDIT");
    editBtn.appendChild(editText);
    li.appendChild(editBtn);
    editBtn.setAttribute("onclick", "EditItems(this)");
    editBtn.setAttribute('class', 'editBtn')
    editBtn.setAttribute('id', data.val().key);


    //  Delete

    var delBtn = document.createElement("button");
    var delText = document.createTextNode("DELETE");
    delBtn.setAttribute("onclick", "deleteItems(this)");
    delBtn.setAttribute('id', data.val().key);
    delBtn.setAttribute('class', 'dltBtn')
    delBtn.appendChild(delText);
    li.appendChild(delBtn);
    list.appendChild(li);


})





function addto() {
    var To_Do = document.getElementById("TO_DO");

    // console.log(To_Do.value)   "check input"




    var key = database.push().key;

    // console.log(key);  "check key"



    //   object
    var todo = {
        value: TO_DO.value,
        key: key
    }


    database.child(key).set(todo)


    To_Do.value = "";


}

function deleteItems(e) {

    e.parentNode.remove();
    firebase.database().ref('todos').child(e.id).remove()


    // console.log(e.id)           "check  dlelbtn id"
    // console.log(e.parentNode);  "check e"
}


function deleteAll() {
    list.innerHTML = "";
    firebase.database().ref('todos').remove()
}



function EditItems(v) {
    var val = v.parentNode.firstChild.nodeValue;
    var editTODO = prompt("Enter edit todo", val);
    val = editTODO;
    v.parentNode.firstChild.nodeValue = editTODO;

    var editTodo = {
        value: val,
        key: v.id
    }


    firebase.database().ref('todos').child(v.id).set(editTodo)


    // console.log(editTodo)
    // console.log(v.id)
}