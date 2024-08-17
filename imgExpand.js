document.getElementById('shrink').addEventListener('click', () => {
    document.getElementsByClassName('imgContainer')[0].classList.remove('active');
    document.getElementsByClassName('imgContainer')[0].classList.add('inactive');
});

document.getElementById('img').addEventListener('click', () => {
    document.getElementsByClassName('imgContainer')[0].classList.remove('inactive');
    document.getElementsByClassName('imgContainer')[0].classList.add('active');
});

document.getElementById('download').addEventListener('click', () => {
    var link = document.createElement("a");
    link.download = 'SLR.jpg';
    link.href = 'http://127.0.0.1:5500/img/SLR.jpg';
    link.click();
});