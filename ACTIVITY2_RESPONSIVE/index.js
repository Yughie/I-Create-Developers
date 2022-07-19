var navbar = document.getElementById("navigation_bar");
var hiddenlogo = document.getElementById("hiddenLogo");
function showMenu(){
    navbar.style.right = "0%";
    hiddenlogo.style.display = "none"
    
}

function hideMenu(){
    navbar.style.right ="-50%"
    hiddenlogo.style.display = "block"
}