//Home Team:
let countHome = 0;
//console.log(count);

function addHome1() {
    countHome += 1;
    document.getElementById("display-home-el").textContent = countHome;
}
function addHome2() {
    countHome += 2;
    document.getElementById("display-home-el").textContent = countHome;
}
function addHome3() {
    countHome += 3;
    document.getElementById("display-home-el").textContent = countHome;
}


//Guest Team:
let countGuest = 0;
console.log(countGuest);

function addGuest1() {
    countGuest += 1;
    document.getElementById("display-guest-el").textContent = countGuest;
}
function addGuest2() {
    countGuest += 2;
    document.getElementById("display-guest-el").textContent = countGuest;
}
function addGuest3() {
    countGuest += 3;
    document.getElementById("display-guest-el").textContent = countGuest;
}