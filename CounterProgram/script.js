let count = 0;

document.getElementById("decBtn").onclick = function() {
    count -= 1;
    document.getElementById("countLabel").innerHTML = count;
}

document.getElementById("rstBtn").onclick = function() {
    count = 0;
    document.getElementById("countLabel").innerHTML = count;
}

document.getElementById("incBtn").onclick = function() {
    count += 1;
    document.getElementById("countLabel").innerHTML = count;
}