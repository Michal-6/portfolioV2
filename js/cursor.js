const cursor = document.getElementById('cursor');
var projects = document.getElementsByClassName('project-img');

var w = 10;

const updateCursorPosition = (event) => {
    cursor.style.top = `${event.clientY-(w/2)}px`;
    cursor.style.left = `${event.clientX-(w/2)}px`;
    cursor.animate({
        left: `${event.clientX-(w/2)}px`,
        top: `${event.clientY-(w/2)}px`
    }, 1000);
  }

window.addEventListener('mousemove', (event) => {
    updateCursorPosition(event);
})

for(var i = 0; i < projects.length; i++){
    projects[i].addEventListener('mouseleave', function (event) {
        cursor.style.width = "10px";
        cursor.style.height = "10px";
        cursor.style.paddingTop = "0px";
        cursor.textContent = "";
        w = 10;
    })
    projects[i].addEventListener('mouseover', function (event) {
        cursor.style.width = "100px";
        cursor.style.height = "100px";
        //cursor.style.left =  "100px"; /*Add this*/
        //cursor.style.transform = "translate(-100px, -0)"; /*Add this*/
        cursor.style.paddingTop = "39px";
        cursor.textContent = "click";
        w = 100;
    })
}