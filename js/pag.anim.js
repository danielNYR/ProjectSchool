let mainPlace = window.pageYOffset;
window.onscroll = function() {
    let actual_deslice = window.pageYOffset;
    if (mainPlace >= actual_deslice) {
        document.getElementById("mainNavbar").style.top = '0';
    } else {
        document.getElementById('mainNavbar').style.top = '-56px';
    }
    console.log("Actual deslice +1: " + (actual_deslice + 1));

    if (actual_deslice >= 546) {
        console.log("se cumple");
        $('#mainNavbar').removeClass('navbar-light').addClass('bg-primary');
        //$('.text-text-navigationitem').removeClass('nav-item').addClass('text-navitem-dark');

    } else {
        //$('.text-navitem-dark').removeClass('text-navitem-dark').addClass('nav-item');
        $('#mainNavbar').removeClass('bg-primary').addClass('navbar-light');
    }
    console.log(actual_deslice);
    mainPlace = actual_deslice;
}

<!-- Menu Toggle Script -->

$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});

$('#dmenu').hover(function() {
    $('#navbarDropdown').trigger('click');
    console.log('hover');
});