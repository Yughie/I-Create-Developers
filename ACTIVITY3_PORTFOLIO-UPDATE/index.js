var navbar = document.getElementById("navigation_bar");
var hiddenlogo = document.getElementById("hiddenLogo");


function showMenu(){
    navbar.style.right = "0%";
    hiddenlogo.style.display = "none"
    
}

function hideMenu(){
    navbar.style.right ="-50%";
    hiddenlogo.style.display = "block";
}

// Create a condition that targets viewports at least 768px wide
const mediaQuery = window.matchMedia('(min-width: 821px)');

function handleTabletChange(e) {
  // Check if the media query is true
  if (e.matches) {
    navbar.style.right ="0%";
  }
}

// Register event listener
mediaQuery.addListener(handleTabletChange);

