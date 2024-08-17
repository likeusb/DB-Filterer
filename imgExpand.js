var imgs = document.getElementsByClassName('img');
var imgContainers = document.getElementsByClassName('imgContainer');
var shrink = document.getElementsByClassName('shrink');

for (var i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener('click', function() {
        this.parentElement.classList.remove('inactive');
        this.parentElement.classList.add('active');
        previous();
    });

    shrink[i].addEventListener('click', function() {
        this.parentElement.parentElement.classList.remove('active');
        this.parentElement.parentElement.classList.add('inactive');
    });
};

var download = document.getElementsByClassName('download');
for (var i = 0; i < download.length; i++) {
    download[i].addEventListener('click', function() {
        downloadImage(this);
    });
};

function downloadImage(element) {
    regexFilter(element.parentElement.parentElement.innerHTML);
    var link = document.createElement("a");
    link.download = name;
    link.href = src;
    link.click();
};

var imgSrc = '';
var imgFilename = '';

function regexFilter(string) {
    const regex = /src=".*?"/g;
    const found = string.match(regex)[0];

    src = found.replace('src="', '').replace('"', '');

    const namePre = src.split('/');
    name = namePre[namePre.length - 1];
};

function previous() {
    console.log(imgContainers);
    console.log(imgContainers.indexOf(this));
}