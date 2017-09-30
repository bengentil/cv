var page = new WebPage();

page.paperSize = {
    format        : "A4",
    orientation    : "portrait",
    margin        : { left:"0.7cm", right:"0.7cm", top:"1cm", bottom:"0cm" }
};

page.viewportSize = {
  width: 1102,
  height: 1559
};

page.zoomFactor = 0.25;

page.open("index.html", function (status) {
    page.render("cv.pdf");
    phantom.exit();
});
