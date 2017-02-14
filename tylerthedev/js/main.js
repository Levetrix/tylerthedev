var projCount = 1;
var numProjects;
var projTimer = 250;
var profileOpen = false;
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

function openView(e){
  $(".expand-content").addClass("open");

  if(e.currentTarget.id == "profileButton"){
    profileOpen = true;
    $(".project:last-of-type").addClass("open");
    $(".project:not(:last-of-type").addClass("gone");

  } else {
    $(".project:nth-of-type(" + projCount + ")").addClass("open");
    $(".project:not(:nth-of-type(" + projCount + "))").addClass("gone");
  }


  unbindOpenView();
  unbindNextPrev();

  bindCloseView();
}

function closeView(){
  unbindCloseView();

  $(".expand-content").addClass("leaving");

  if(profileOpen){
    $(".project:last-of-type").addClass("leaving");
    $(".project:not(:last-of-type)").removeClass("gone");
    profileOpen = false;
  } else {
    $(".project:nth-of-type(" + projCount + ")").addClass("leaving");
    $(".project:not(:nth-of-type(" + projCount + "))").removeClass("gone");
  }


  setTimeout(function(type){
    $(".leaving").removeClass("open").removeClass("leaving");
    console.log("animation stopped");
  }, 750);


  bindNextPrev();
  bindOpenView();
}

function bindOpenView(){
    $(".expandButton").on("click", openView);
    $("#profileButton").on("click", openView);
}

function bindCloseView(){
    $(".closeProject").on("click", closeView);
}

function unbindOpenView(){
  $(".expandButton").off("click", openView);
  $("#profileButton").off("click", openView);
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
