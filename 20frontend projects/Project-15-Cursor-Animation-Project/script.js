
const customCursor = document.querySelector(".cursor");
const navLinks = document.querySelectorAll(".nav-links li");

document.addEventListener("mousemove",moveCursor);

function moveCursor(e){
    updateCursorPosition(e);
}

function updateCursorPosition(e){
    customCursor.style.top = e.pageY + "px";
    customCursor.style.left = e.pageX + "px";
}


navLinks.forEach((link)=>{
    link.addEventListener('mouseenter',()=>{
        animateCursor();
        highlightLink(link);
    });

    link.addEventListener('mouseleave',()=>{
        removeCursorAnimation();
        unhighlightLink(link);
    });
});

function animateCursor(){
    customCursor.classList.add("link-animate")
}

function removeCursorAnimation(){
    customCursor.classList.remove("link-animate");
}

function highlightLink(link){
    link.classList.add("link-hovering");
}

function unhighlightLink(link){
    link.classList.remove("link-hovering");
}