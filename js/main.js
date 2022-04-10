function calcAge() {
    var age = new Date(new Date() - new Date("1986/08/14")).getFullYear() - 1970;
    $("span#age").text(age);
}
