/**
 * Created by tcartwright on 9/30/2016.
 */
var fnames = ["GalaxyCluster.jpg", "InteractingGalaxies.jpg", "M51.jpg", "M104.jpg", "NGC1300.jpg", "NGC6217.jpg"];
var capnames = ["Galaxy Cluster", "Interacting Galaxies", "M 51", "M 104", "NGC 1300", "NGC 6217"];
var getRandomIndex = function (array) {
    // Takes an array and returns a random index in the array
    return Math.floor(Math.random() * 100 % array.length);
};
window.onload = function () {
    // On window load, creates a figure and appends it to the body
    var body = document.getElementsByTagName("body")[0];
    var figure = document.createElement("figure");
    var img = document.createElement("img");
    var figcap = document.createElement("figcaption");
    var idx = getRandomIndex(fnames);
    img.src = fnames[idx];
    figcap.innerHTML = capnames[idx];
    figure.appendChild(img);
    figure.appendChild(figcap);
    body.appendChild(figure);
};