function expandImg() {
    document.getElementById('img').style.width = "90%";
}

function shrinkImg() {
    document.getElementById('img').style.width = "500px";
}

document.getElementById('download').addEventListener('click', () => {
    var link = document.createElement("a");
    link.download = 'SLR.jpg';
    link.href = 'http://127.0.0.1:5500/img/SLR.jpg';
    link.click();
});