  let numberOne = 21;
  let numberTwo = 28;
document.getElementById("allCalls").innerHTML = "/ " + numberTwo ;

$('.counter-inside').each(function() {
  let $this = $(this),
      countTo = numberOne;
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {

    duration: 2000,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function() {
      $this.text(this.countNum);
    }

  }); 

});



window.onload = function onLoad() {
  let progressBar = 
    new ProgressBar.Circle('#progress-circle', {
      color: 'orange',
      strokeWidth: 6,
      trailColor: "grey",
      trailWidth: 6,
      duration: 2000,
      easing: 'easeInOut'
    });
  
  let percent = numberOne/numberTwo;
  progressBar.animate(percent);
};


//Progress bar-line//

$(function() { 
   $("#one").addClass("progress-bar-purple");
   $("#two").addClass("progress-bar-blue");
   $("#three").addClass("progress-bar-yellow");
   $("#four").addClass("progress-bar-green");
   $("#five").addClass("progress-bar-oragne");
});

let newWidthAdherence = "15%";

$(".progress-bar").animate({
    width: newWidthAdherence
}, 1000);

