// document.getElementById('shrink').addEventListener('click', () => {
//     document.getElementsByClassName('imgContainer')[0].classList.remove('active');
//     document.getElementsByClassName('imgContainer')[0].classList.add('inactive');
// });

// document.getElementById('img').addEventListener('click', () => {
//     document.getElementsByClassName('imgContainer')[0].classList.remove('inactive');
//     document.getElementsByClassName('imgContainer')[0].classList.add('active');
// });

// document.getElementById('download').addEventListener('click', () => {
//     var link = document.createElement("a");
//     link.download = 'SLR.jpg';
//     link.href = 'http://127.0.0.1:5500/img/SLR.jpg';
//     link.click();
// });

var imgs = document.getElementsByClassName('img');
var imgContainers = document.getElementsByClassName('imgContainer');
var shrink = document.getElementsByClassName('shrink');

// Expansion and shrinking
for (var i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener('click', function() {
        this.parentElement.classList.remove('inactive');
        this.parentElement.classList.add('active');
    });

    shrink[i].addEventListener('click', function() {
        this.parentElement.parentElement.classList.remove('active');
        this.parentElement.parentElement.classList.add('inactive');
    });
};

// Downloading

var download = document.getElementsByClassName('download');
for (var i = 0; i < download.length; i++) {
    download[i].addEventListener('click', function() {
        downloadImage(this);
    });
};

function downloadImage(element) {
    regexFilter(element.parentElement.parentElement.innerHTML);
};

var imgSrc = '';
var imgFilename = '';

function regexFilter(string) {
    console.log(string)
    const regex = /src=".*?"/g;
    console.log(regex);
    const found = string.match(regex)[0];
    console.log(found);
};

console.log(imgContainers[0].innerHTML);