function openTab(evt, tab) {
    var i, x, tablinks;
    x = document.getElementsByClassName("stack-slider-wrapper");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
    }
    document.getElementById(tab).style.display = "block";
    evt.currentTarget.className += " w3-red";
}

function togglePopUp() {
    document.getElementById("popup-1").classList.toggle("active");
}