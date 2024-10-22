function myFunction(p1, p2) {
    return p1 * p2;
}

let x = myFunction(4, 3);
console.log(x);

// Function Declaration
sayHello("Shandika");

function sayHello(username) {
    console.log(`Hello ${username}`)
}


// FUnction Expression
const greetings = function (user) {
    console.log(`Hello ${user}`)
}

greetings("John");
//  ^
//  |____ dont move because if move error



// When we provide function as an (argument) to other function that function is known as callback function

function showCallFunc(fn) {
    const value = 10;
    fn(value);
}

showCallFunc(function(value) {
    console.log(value);
});

//-----------------------------------------------//

function greet(name, cb) {
    console.log(`Hello ${name}`);
    cb();
}

function cb() {
    console.log(`i am callback function`);
}

greet("John", cb);

//================================================//


  