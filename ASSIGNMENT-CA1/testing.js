function addLeader() {
    //add leader on right but
    //make sure not more than 10
    if (counter < 10) {
        // create imgage and name
        var img = document.createElement("img");
        var nam = document.createElement("li");
        // set image path and set name of leader in list item
        img.src = "images/" + images[counter];
        nam.appendChild(document.createTextNode(names[counter]));
        //nam = document.createTextNode("<li>" + names[counter] + "</li>");
        // appending to image container and list item container
        var imgs = document.querySelector("#imgs");
        var nams = document.querySelector("#nams");
        imgs.appendChild(img);
        nams.appendChild(nam);
        counter++;
    }
}

function shiftLeft(arr, direction, n) {
    var times = n > arr.length ? n % arr.length : n;
    return arr.concat(arr.splice(0, (direction > 0 ? arr.length - times : times)));
}
 
function showImage() {
    var img = document.createElement('img'); 
  
    img.src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic01.nyt.com%2Fimages%2F2020%2F04%2F30%2Fus%2Fpolitics%2F30biden-reade-top%2F30biden-reade-top-videoSixteenByNineJumbo1600.jpg&f=1&nofb=1";
  
    var body = document.getElementById('body');
    body.appendChild(img);
    img.onmouseover = function() {givesrc(this)};
}

function givesrc(x)
{
    alert(x.getAttribute("src"));
}

img.onmouseover = function() {alert(this.getAttribute("src"))};