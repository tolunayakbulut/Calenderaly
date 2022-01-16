$('#collapseExample').on('shown.bs.collapse', function () {
    document.getElementById("cards1").style.pointerEvents = "none";
    document.getElementById("cards2").style.pointerEvents = "none";
    document.getElementById("cards1").style.opacity = .5;
    document.getElementById("cards2").style.opacity = .5;
});
$('#collapseExample').on('hidden.bs.collapse', function () {
    document.getElementById("cards1").style.pointerEvents = "auto";
    document.getElementById("cards2").style.pointerEvents = "auto";
    document.getElementById("cards1").style.opacity = 1;
    document.getElementById("cards2").style.opacity = 1;
});
$('#collapseExample1').on('shown.bs.collapse', function () {
    document.getElementById("cards").style.pointerEvents = "none";
    document.getElementById("cards2").style.pointerEvents = "none";
    document.getElementById("cards").style.opacity = .5;
    document.getElementById("cards2").style.opacity = .5;
});
$('#collapseExample1').on('hidden.bs.collapse', function () {
    document.getElementById("cards").style.pointerEvents = "auto";
    document.getElementById("cards2").style.pointerEvents = "auto";
    document.getElementById("cards").style.opacity = 1;
    document.getElementById("cards2").style.opacity = 1;
});
$('#collapseExample2').on('shown.bs.collapse', function () {
    document.getElementById("cards").style.pointerEvents = "none";
    document.getElementById("cards1").style.pointerEvents = "none";
    document.getElementById("cards").style.opacity = .5;
    document.getElementById("cards1").style.opacity = .5;
});
$('#collapseExample2').on('hidden.bs.collapse', function () {
    document.getElementById("cards").style.pointerEvents = "auto";
    document.getElementById("cards1").style.pointerEvents = "auto";
    document.getElementById("cards").style.opacity = 1;
    document.getElementById("cards1").style.opacity = 1;
});