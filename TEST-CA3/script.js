window.onload = init;

var counter = 0;

var students = [
    { name: "Fred", age: 21, subjects: ["Irish", "French", "English"] },
    { name: "Mary", age: 19, subjects: ["Maths", "Physics", "Chemistry", "IT"] },
    { name: "Jane", age: 22, subjects: ["Irish", "Biology", "History"] },
    { name: "John", age: 18, subjects: ["Business", "Drama", "Religion"] },
    { name: "Jack", age: 20, subjects: ["Geography", "Spanish", "Music"] },
];

function init() {
    document.addEventListener("keydown", keyHandler);
}

// called when key on keyboard is pressed
function keyHandler(evt) {
    console.log(`${evt.code}`);
    // interested when up/down arrow pressed
    if (evt.code === "ArrowUp") {
        console.log("Move down! ");
        prevItem();
    }
    if (evt.code === "ArrowDown") {
        console.log("Move up! ");
        nextItem();
    }
}

// put list items into a list and edit the highLight
var items = document.querySelectorAll("li");
// items[2].classList.add("highLight");
// items[0].classList.remove("highLight");

var paragraphs = document.querySelectorAll("p");

function nextItem() {
    console.log("going to the next item");
    items[counter++].classList.remove("highLight");

    if (counter >= items.length) counter = 0;

    items[counter].classList.add("highLight");
    paragraphs[0].innerHTML = "name: " + students[counter].name;
    paragraphs[1].innerHTML = "name: " + students[counter].age;
    console.log(`contact is ${items[counter].value}`);
}

function prevItem() {
    console.log("going to the next item");

    items[counter].classList.remove("highLight");

    if (counter-- == 0) counter = items.length - 1;

    items[counter].classList.add("highLight");
    paragraphs[0].innerHTML = "name: " + students[counter].name;
    paragraphs[1].innerHTML = "name: " + students[counter].age;
    console.log(`contact is ${items[counter].value}`);
}