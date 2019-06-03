function displaynum(n1) {
    document.getElementById("txt").value+=n1;
}

function cal(){
    document.getElementById("txt").value = eval(document.getElementById("txt").value);
}

function clrs(){
    document.getElementById("txt").value = "";
}