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
// I know this is extra steps for no reason but if you remove this, it will start to shuffle the numbers array, not the numbersforShuffle array. I don't know why. Lord save us all.
var numbersforShuffle = numbers.toString().split(',');
shuffle(numbersforShuffle);

function randomInsert() {
    // usedRandom.push(numbersforShuffle[0]);
    // if (usedRandom.length > numbers.length) {
    //     usedRandom = [];
    // }
    
    // if (numbersforShuffle.length == 1) {
    //     numbersforShuffle = numbers.toString().split(',');
    // }
    
    // for (let i = 0; i < numbers.length; i++) {
    //     if (numbersforShuffle[0] == numbers[i]) {
    //         numbersforShuffle.splice(0, 1);
    //         break;
    //     }
    // }
    // console.log(numbersforShuffle[0])
    
    if (numbersforShuffle.length == 1) {
        shuffle(numbersforShuffle);
    };

    usedRandom.push(numbersforShuffle[i]);
    i++;

    if (i > numbers.length) {
        i = 0;
    };
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