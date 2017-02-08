var projCount = 1;
var numProjects;
var projTimer = 250;

$(document).ready(function() {
  bindNextPrev();
  bindOpenView();

  numProjects = $("#preview-box .content").length;
  projCount = 1;

});

function next(){
  $(".active").addClass("leaving").removeClass("active");

  if(projCount == numProjects){
    projCount = 1;
  } else {
    projCount++;
  }

  addActiveClass();

  unbindNextPrev();

  setTimeout(postAnimation, projTimer);
}

function previous(){
  $(".active").addClass("leaving").removeClass("active");

  if(projCount == 1){
    projCount = numProjects;
  } else {
    projCount--;
  }

  addActiveClass();

  unbindNextPrev();

  setTimeout(postAnimation, projTimer);
}

function openView(){
  $(".expand-content").addClass("open");
  $(".project:nth-of-type(" + projCount + ")").addClass("open");

  unbindOpenView();
  unbindNextPrev();

  bindCloseView();
}

function closeView(){
  unbindCloseView();

  $(".expand-content").addClass("leaving");
  $(".project:nth-of-type(" + projCount + ")").addClass("leaving");

  setTimeout(function(){
    $(".leaving").removeClass("open").removeClass("leaving");
    console.log("animation stopped");
  }, 750);


  bindNextPrev();
  bindOpenView();
}

function bindOpenView(){
    $(".expandButton").on("click", openView);
}

function bindCloseView(){
    $(".closeProject").on("click", closeView);
}

function unbindOpenView(){
  $(".expandButton").off("click", openView);
}

function unbindCloseView(){
  $(".closeProject").off("click", closeView);
}

function unbindNextPrev(){
  $(".next").off("click", next);
  $(".previous").off("click", previous);
}

function bindNextPrev(){
  $(".next").on("click", next);
  $(".previous").on("click", previous);
}

function addActiveClass(){
  $("#preview-box .content:nth-of-type(" + projCount + ")").addClass("active");
  $(".background:nth-of-type(" + projCount + ")").addClass("active");
}

function postAnimation(){
  bindNextPrev();
  $(".leaving").removeClass("leaving");
}
