const imageMain = document.getElementById("imageMain");
let imageSrc = imageMain.getAttribute("src");

function changeBgJS() {
    imageMain.setAttribute("src", "./Image/JS.png")
    document.getElementById("JS").style = "border: 3px solid red";
    document.getElementById("Html").style = "border: 3px solid blue";
    document.getElementById("Java").style = "border: 3px solid blue";
    document.getElementById("C").style = "border: 3px solid blue";
    document.getElementById("Py").style = "border: 3px solid blue";
}

function changeBgHtml() {
    imageMain.setAttribute("src", "./Image/Html.webp")
    document.getElementById("Html").style = "border: 3px solid red";
    document.getElementById("JS").style = "border: 3px solid blue";
    document.getElementById("Java").style = "border: 3px solid blue";
    document.getElementById("C").style = "border: 3px solid blue";
    document.getElementById("Py").style = "border: 3px solid blue";
}

function changeBgJava() {
    imageMain.setAttribute("src", "./Image/Java.jpg")
    document.getElementById("Java").style = "border: 3px solid red";
    document.getElementById("JS").style = "border: 3px solid blue";
    document.getElementById("Html").style = "border: 3px solid blue";
    document.getElementById("C").style = "border: 3px solid blue";
    document.getElementById("Py").style = "border: 3px solid blue";
}

function changeBgC() {
    imageMain.setAttribute("src", "./Image/C.png")
    document.getElementById("C").style = "border: 3px solid red";
    document.getElementById("JS").style = "border: 3px solid blue";
    document.getElementById("Html").style = "border: 3px solid blue";
    document.getElementById("Java").style = "border: 3px solid blue";
    document.getElementById("Py").style = "border: 3px solid blue";
}

function changeBgPy() {
    imageMain.setAttribute("src", "./Image/Python.png")
    document.getElementById("Py").style = "border: 3px solid red";
    document.getElementById("JS").style = "border: 3px solid blue";
    document.getElementById("Html").style = "border: 3px solid blue";
    document.getElementById("Java").style = "border: 3px solid blue";
    document.getElementById("C").style = "border: 3px solid blue";
}
