let mainPlace = window.pageYOffset;
window.onscroll = function() {
    let actual_deslice = window.pageYOffset;
    if (mainPlace >= actual_deslice) {
        document.getElementById("mainNavbar").style.top = '0';
    } else {
        document.getElementById('mainNavbar').style.top = '-56px';
    }
    mainPlace = actual_deslice;
}


$('#dmenu').hover(function() {
    $('#navbarDropdown').trigger('click');
    console.log('hover');
});