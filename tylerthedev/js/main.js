var projCount;
var numProjects;
var projTimer = 250;

$(document).ready(function() {
  bindNextPrev();
  numProjects = $("#preview-box .content").length;
  projCount = 1;
  //console.log("total num projects: " + numProjects);

});

function postAnimation(){
  bindNextPrev();
  $(".leaving").removeClass("leaving");
}

function unbindNextPrev(){
  $(".next").off("click", next);
  $(".previous").off("click", previous);
}

function bindNextPrev(){
  $(".next").on("click", next);
  $(".previous").on("click", previous);

}

function next(){
  $(".active").addClass("leaving").removeClass("active");

  if(projCount == numProjects){
    projCount = 1;
  } else {
    projCount++;
  }

  $("#preview-box .content:nth-of-type(" + projCount + ")").addClass("active");

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

  $("#preview-box .content:nth-of-type(" + projCount + ")").addClass("active");

  unbindNextPrev();

  setTimeout(postAnimation, projTimer);
}
