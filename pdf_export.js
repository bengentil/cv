var page = new WebPage();

page.paperSize = {
    format        : "A4",
    orientation    : "portrait",
    margin        : { left:"1cm", right:"1cm", top:"1cm", bottom:"1cm" }
};

page.viewportSize = {
  width: 1102,
  height: 1559
};

page.open("index.html", function (status) {
    page.render("cv.png");
    phantom.exit();
});
