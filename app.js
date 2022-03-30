function username () {
    var name = prompt("Please enter your name.");
    return name
}

function greet(x) {
    var greet = alert(`Hello, ${x} and Welcome to Twenty!`);
    return greet 
}

function r() {
    var b = Math.floor(Math.random() * 10) + 1 
    console.log(`Random number is ${b} for User`);
    return b 
}

r()
greet(username())

function usernumber() {

    var zeroB = 0

    do {
        var b = r()

        zeroB = zeroB + b

        if (zeroB > 20) {
            break
        }

        var another = prompt(`You got Number ${b}\n\nThis means your total is ${zeroB}. Would you like another number?`);

    } while ((zeroB < 16) && (another != "n"))

    console.log(zeroB)

    return zeroB
}

usernumber()

function r2() {
    var a = Math.floor(Math.random() * 10) + 1
    console.log(`Random Number is ${a} for Computer`);
    return a 
}

r2()

function computernumber() {
    var zeroA = 0
    do {

        var a = r2()

        zeroA = zeroA + a 

        alert(`Computer got Number ${a}\n\nComputer total is ${zeroA}`);

    } while (zeroA < 16)

    console.log(`Computer's total is ${zeroA}`);

    return zeroA
}

computernumber()

function compare() {
    zeroA = computernumber
    zeroB = usernumber
    if ((zeroA > 20) && (zeroB <= 20)) {
        alert("The Computer went over 20, You Win!");
        console.log("User wins");
    } else if ((zeroB > 20) && (zeroA <= 20)) {
        alert("You went over 20, Computer Wins!");
        console.log("Computer Wins");
    } else if ((zeroB <= 20) && (zeroA <= 20) && (zeroB > zeroA)) {
        alert("You won!");
        console.log("User wins");
    } else if ((zeroA <= 20) && (zeroB <= 20) && (zeroA > zeroB)) {
        alert("Computer Wins");
        console.log("Computer wins");
    }
}

compare() 