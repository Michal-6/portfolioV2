var projects = document.getElementsByClassName('project');
var projectsDesc = document.getElementsByClassName('project-index');
var projectsTitle = document.getElementsByClassName('project-title');

var move = 60;
var moveChange = move;
var project = document.getElementById('projects');
project.style.transform = `translateY(${move}vh)`;


var index = 0;
var transitionFinished = true;

addEventListener("wheel", (e) => {});
onwheel = (e) => {
    console.log("deltaY: " + e.deltaY + ", index: " + index + ", transitionFinished: " + transitionFinished);
    projects[index].classList.remove('active');
    projectsDesc[index].classList.remove('project-index-active');
    projectsTitle[index].classList.remove('project-title-active');
    if(transitionFinished == true){
        if(e.deltaY == 100 && index != 2){
            // scrolled down
            moveChange -= move;
            index ++;
            transitionFinished = false;
        }else if(e.deltaY == -100 && index != 0){
            // scrolled up
            moveChange += move;
            index --;
            transitionFinished = false;
        }
        project.style.transform = `translateY(${moveChange}vh)`;
    }
    console.log(index);
    projects[index].classList.add('active');
};

project.addEventListener('transitionend', function(event) {
    transitionFinished = true;
    projectsDesc[index].classList.add('project-index-active');
    projectsTitle[index].classList.add('project-title-active');
}, false );