function show(){
    document.getElementById("demo").style.display = 'block';
    setTimeout(remove,2000)
}

function remove() {
    document.getElementById("demo").style.display = 'none';
}
