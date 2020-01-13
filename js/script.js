window.onload = function onLoad() {
  var progressBar = 
    new ProgressBar.Circle('#progress', {
      color: 'red',
      strokeWidth: 10,
      duration: 2000, // milliseconds
      easing: 'easeInOut'
    });

  progressBar.animate(0.63); // percent
};