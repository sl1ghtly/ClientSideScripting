// declare images array, names array and a counter
var images = [
    "biden.png",
    "draghi.png",
    "jinping.png",
    "johnson.png",
    "macron.png",
    "merkel.png",
    "morrison.png",
    "suga.png",
    "trudeau.png",
    "vonderleyen.png"
];
var names = [
    "USA Biden",
    "Italy Draghi",
    "China Jinping",
    "United Kingdom Johnson",
    "France Macron",
    "Germany Merkel",
    "Australia Morrison",
    "Japan Suga",
    "Canada Trudeau",
    "Europe Von Der Leyen"
];
var counter = 0;

//swap first and last
function swapLeaders() {
    let imgs = document.getElementById("imgs");
    let nams = document.getElementById("nams");
    //get last of both + in the arrays to keep in sync
    let lastImg = imgs.lastElementChild;
    let lastNam = nams.lastElementChild;
    let firstImageArr = images[0];
    let lastImageArr = images[images.length - 1];
    let firstNameArr = names[0];
    let lastNameArr = names[names.length - 1];
    //swap places for images and names including arrays to keep the sync
    imgs.replaceChild(imgs.firstElementChild, imgs.lastElementChild);
    imgs.insertBefore(lastImg, imgs.firstElementChild);
    nams.replaceChild(nams.firstElementChild, nams.lastElementChild);
    nams.insertBefore(lastNam, nams.firstElementChild);
    images[0] = lastImageArr;
    images[images.length - 1] = firstImageArr;
    names[0] = lastNameArr;
    names[names.length - 1] = firstNameArr;
}

// add leader on right and ability to hover over images
function addLeader() {
    if (counter < 10) {
        // create imgage and name
        let img = document.createElement("img");
        let nam = document.createElement("li");
        // set image path and set name of leader in list item
        img.src = "images/" + images[counter];
        nam.appendChild(document.createTextNode(names[counter]));
        // appending to image container and list item container
        let imgs = document.querySelector("#imgs");
        let nams = document.querySelector("#nams");
        imgs.appendChild(img);
        nams.appendChild(nam);
        // when hovering over any image that has been added
        // take index of source's attribute and use that index
        // to names array and use that to show name
        img.onmouseover = function() {
            let index = images.indexOf(this.getAttribute("src").slice(7));
            let leaderName = names[index];
            document.getElementById("leads").innerHTML = "Your Leader: <b>" + leaderName + "</b>";
        }
        // increment counter
        counter++;
    }
}

// shifts array to left making first element last, 2nd to 1st, 3rd to 2nd and so on
function shiftLeft(arr) {
    // get first and remove it
    let first = arr.shift();
    // add it back at the end
    arr.push(first);
    // return array
    return arr;
}

//remove leader but on left
function deleteLeader() {
    if (counter > 2) {
        // get images and names node and get first element child of each
        let imgsNode = document.getElementById("imgs");
        let namsNode = document.getElementById("nams");
        let firstImg = imgsNode.firstElementChild;
        let firstNam = namsNode.firstElementChild;
        // remove first imgage and name and then shift both arrays to left
        imgsNode.removeChild(firstImg);
        namsNode.removeChild(firstNam);
        images = shiftLeft(images, 1, 1);
        names = shiftLeft(names, 1, 1);
        // decrement counter
        counter--;
    }
}

//show 4 basic images and names when the script loads
window.onload = function() {
    for (let i = 0; i < 4; i++) {
        addLeader();
    }
}
