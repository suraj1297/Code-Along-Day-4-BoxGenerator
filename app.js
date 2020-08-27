const button = document.getElementById("theBoxes")
button.addEventListener('click', myFunction)
let oldValue = 0
var i = 1

function myFunction() {

    let n = document.getElementById("number").value
    n = parseInt(oldValue) + parseInt(n)
    for (; i <= n; i++) {
        let box = document.createElement("div")
        box.classList.add('myDiv')
        document.getElementById("box").appendChild(box)
        box.innerHTML = i;

    }

    oldValue = document.getElementById("box").lastElementChild.innerHTML;



}