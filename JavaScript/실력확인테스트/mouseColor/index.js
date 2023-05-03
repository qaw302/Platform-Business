var water = document.querySelector("h1");

function enter() {
    document.getElementById("mouse-event").style.backgroundColor = 'red';
}
function leave() {
    document.getElementById("mouse-event").style.backgroundColor = 'blue';
}
water.addEventListener('mouseenter', enter);
water.addEventListener('mouseleave', leave);