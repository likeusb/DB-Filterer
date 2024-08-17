function setCookie(name, value) {
    const d = new Date();
    d.setTime(d.getTime() + ((10*365+2)*24*60*60*1000));
    const date = d.toUTCString();
    
    document.cookie = name+"="+value+"; expires="+date+"; SameSite=None; secure";
}

function getCookie(name) {
    const value = "; " + document.cookie;
    const parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
};

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

function limitedInsert() {
    for (var i = 1; i <= numbers.length / 10; i++) {
        console.log(numbers.slice((i - 1) * 10, i * 10))
    };
};

var i = 0;

function sequentialInsert() {
    if (i <= numbers.length) {
        i++;
    };
    if (i > numbers.length) {
        i = 1;
    };
    console.log(numbers[i-1]);
    setCookie('sequential', i);
};

function resetSequential() {
    i = 0;
    setCookie('sequential', '0');
};

usedRandom = [];

function randomInsert() {
    shuffle(numbers);
    usedRandom.push(numbers[0]);
    if (usedRandom.length > numbers.length) {
        usedRandom = [];
    };
    console.log(usedRandom);
    console.log(numbers[0]);
    console.log(numbers.indexOf(23))
};

// Credit to @Álvaro González on StackOverflow. Link: https://stackoverflow.com/a/59837259
function shuffle(arr) {
    var i = arr.length, j, temp;
    while(--i > 0){
      j = Math.floor(Math.random()*(i+1));
      temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
    }
}