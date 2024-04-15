var move = 0;
var moveChange = 0;
var step = 60;
var maxIndex = 0;
var index = 0;
var transitionFinished = true;

var projectWrap = document.getElementById('projects');
var projects = document.getElementsByClassName('project');
var projectsDesc = document.getElementsByClassName('project-index');
var projectsTitle = document.getElementsByClassName('project-title');
//project.style.transform = `translateY(${move}vh) !important;`;

function checkScreenSize() {
  var screenWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  console.log(screenWidth);

  if (screenWidth < 1500) {
      // mobile
      move = 180;
      moveChange = move;
      maxIndex = 6;
      document.getElementById("mobile-description").classList.add('project', 'active');
      document.getElementById("project1").classList.remove("active");
  } else {
      move = 150;
      moveChange = move;
      maxIndex = 5;
      document.getElementById("mobile-description").classList.remove('project', 'active');
      document.getElementById("project1").classList.add("active");
  }
}

function handleScroll(event) {
  console.log(event);
  var delta = event.deltaY || event.detail || (-event.wheelDelta / 40); // Handle different browsers
  
  if (transitionFinished) {
      transitionFinished = false;
      console.log("transition finished = false");
      transition();
      projects[index].classList.remove('active');

      if (delta >= 0 && index < maxIndex) {
          // scrolled down
          moveChange -= step;
          index++;
      } else if (index > 0 && delta < 0) {
          // scrolled up
          moveChange += step;
          index--;
      }
      projectsDesc[index].classList.remove('project-index-active');
      projectsTitle[index].classList.remove('project-title-active');

      projectWrap.style.transform = `translateY(${moveChange}vh)`;
  }
  projects[index].classList.add('active');
}

addEventListener("resize", checkScreenSize);
addEventListener("wheel", handleScroll);
addEventListener("touchmove", handleScroll);



/*projectWrap.addEventListener('transitionend', function (event) {
  console.log("transition finished = true");
  transitionFinished = true;
  projectsDesc[index].classList.add('project-index-active');
  projectsTitle[index].classList.add('project-title-active');
}, false);*/

function transition(){
  setTimeout(() => {
    console.log("transition finished = true");
    transitionFinished = true;
    projectsDesc[index].classList.add('project-index-active');
    projectsTitle[index].classList.add('project-title-active');
  }, "500");
}