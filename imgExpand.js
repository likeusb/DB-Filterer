var imgs = document.getElementsByClassName('img');
var imgContainers = document.getElementsByClassName('imgContainer');
var shrink = document.getElementsByClassName('shrink');
var prev = document.getElementsByClassName('previous');
var next = document.getElementsByClassName('next');

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

for (var i = 0; i < prev.length; i++) {
    prev[i].addEventListener('click', function() {
        idOfImg = this.parentElement.parentElement.id;
        previousImg(idOfImg);
    });
};

for (var i = 0; i < next.length; i++) {
    next[i].addEventListener('click', function() {
        idOfImg = this.parentElement.parentElement.id;
        nextImg(idOfImg);
    });
}

function previousImg(id) {
    let curArrId = id - 1;
    let prevArrId = curArrId - 1;

    if (prevArrId < 0) {
        prevArrId = imgContainers.length - 1;
    }

    imgContainers[prevArrId].classList.add('moveFromLeft');
    imgContainers[prevArrId].classList.add('sitLeft')
    imgContainers[prevArrId].classList.add('active');
    imgContainers[curArrId].classList.add('moveToRight');

    setTimeout(() => {
        imgContainers[prevArrId].classList.remove('moveFromLeft');
        imgContainers[curArrId].classList.remove('moveToRight');
        imgContainers[prevArrId].classList.remove('sitLeft');

        imgContainers[curArrId].classList.remove('active');
    }, 200);
}

function nextImg(id) {
    let curArrId = id - 1;
    let nextArrId = curArrId + 1;

    if (nextArrId == imgContainers.length) {
        nextArrId = 0;
    }

    imgContainers[nextArrId].classList.add('moveFromRight');
    imgContainers[nextArrId].classList.add('sitRight');
    imgContainers[nextArrId].classList.add('active');
    imgContainers[curArrId].classList.add('moveToLeft');

    setTimeout(() => {
        imgContainers[nextArrId].classList.remove('moveFromRight');
        imgContainers[curArrId].classList.remove('moveToLeft');
        imgContainers[nextArrId].classList.remove('sitRight');

        imgContainers[nextArrId].classList.add('active');
        imgContainers[curArrId].classList.remove('active');
    }, 200);
}