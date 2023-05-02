//조건문 중첩 if 문

var a = 20;
var b = 40;

if (a !== b) {
    if (a > b) {
        document.write("a > b");
    } else {
        document.write("a < b");
    }
} else {
    document.write("a === b");
}