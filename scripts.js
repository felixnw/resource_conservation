//@ts-check

window.onscroll = function() {colorify()};
// document.getElementById("mobmenu").onclick= function() {openmenu()};

function colorify() {
    if (window.pageYOffset > 40) {
        document.getElementById("navbar").style = 'background-color: #fbb8ac; transition: 0.4s all;'
    }
    else {
        document.getElementById("navbar").style = 'background-color: rgba(0, 0, 0, 0);'
    }
}
// function openmenu() {
//     document.getElementById("mobilemenu").style = 'visibility: visible;'
// }