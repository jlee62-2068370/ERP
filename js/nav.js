function toggle() {
  var nav_links = document.getElementsByClassName("nav-links")[0];
  if (nav_links.classList.contains("nav-links-active")) { //toggle off
    nav_links.classList.remove("nav-links-active");
  } else {
    nav_links.classList.add("nav-links-active"); 
  }
}

function toggle_specific(elem,classname, activename) {
  var parent = elem.parentNode;
  if (elem.parentNode.tagName.toLowerCase() == "a") {
    parent = parent.parentNode;
  }
  var elem = parent.querySelector("."+classname);
  console.log(elem);
  if (elem.classList.contains(activename)) { //toggle off
    elem.classList.remove(activename);
  } else {
    elem.classList.add(activename); 
  }
}
function toggle_dropdown(elem) {
  toggle_specific(elem,'dropdown-content','dropdown-content-active');
}