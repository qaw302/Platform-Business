//문자열 거꾸로 출력

function reverse(str) {

    var reverStr = "";
    for (var i = str.length - 1; i >= 0; i--) {
        reverStr = reverStr + str.charAt(i);
    }

    return reverStr;
}

document.write(reverse("Nice to meet you"));