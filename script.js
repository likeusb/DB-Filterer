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

var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'];

window.onload = function() {
    sequentialInsert();
    randomInsert();
    limitedInsert();
}

var initial = 'notYet';
function limitedInsert() {
    if (initial == 'notYet') {
        i = 1;
        initial = 'done';
    }

    if (i == 0) {
        i = numbers.length / 10;
    }

    if (i > numbers.length / 10) {
        i = 1;
    }


    
    document.getElementById('limited').textContent = numbers.slice((i - 1) * 10, i * 10);
};

function limitedInsertPrev() {
    i--;
    limitedInsert();
}

function limitedInsertNext() {
    i++;
    limitedInsert();
}

var i = 0;

function sequentialInsert(shouldItIncrement) {
    if (shouldItIncrement !== 'no') {
        if (i <= numbers.length) {
            i++;
        };
        if (i > numbers.length) {
            i = 1;
        };
        
        if (i !== 1) {
            setCookie('sequential', i);
        }
    }

    document.getElementById('sequential').textContent = numbers[i-1];
};

function resetSequential() {
    i = 0;
    setCookie('sequential', '0');
};

usedRandom = [];
// I know this is extra steps for no reason but if you remove this, it will start to shuffle the numbers array, not the numbersforShuffle array. I don't know why. Lord save us all.
var numbersforShuffle = numbers.toString().split(',');
shuffle(numbersforShuffle);

function randomInsert() {
    if (numbersforShuffle.length == 1) {
        shuffle(numbersforShuffle);
    };

    usedRandom.push(numbersforShuffle[i]);
    i++;

    if (i == numbers.length) {
        i = 0;
    };

    document.getElementById('random').textContent = numbersforShuffle[i];
};

// Credit to @Álvaro González on StackOverflow. Link: https://stackoverflow.com/a/59837259
function shuffle(arr) {
    var k = arr.length, j, temp;
    while(--k > 0){
      j = Math.floor(Math.random()*(k+1));
      temp = arr[j];
      arr[j] = arr[k];
      arr[k] = temp;
    }
}

function returnToPrevious() {
    var progress = getCookie('sequential');
    i = progress;
    sequentialInsert('no');
}