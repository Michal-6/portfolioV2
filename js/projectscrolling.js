projects = document.getElementsByClassName('project');

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
}, false );