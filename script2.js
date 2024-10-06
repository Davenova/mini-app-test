$(document).ready(function() {
  var counter = 0;

  // Hide the loading animation and show the home page after 10 seconds
  setTimeout(function() {
    $('#loading-container').hide();
    $('#home-container').show();
  }, 5000);

  // Start the changing images
  setInterval(function() {
    if(counter == 9) { 
      counter = 0; 
    }

    changeImage(counter);
    counter++;
  }, 3000);

  // Set the percentage off
  loading();

  // Your existing JavaScript code here...
});

function changeImage(counter) {
  var images = [
    '<img src="IMG_0113.jpeg"></i>',
    '<i class="fa fa-fighter-jet"></i>',
   
  ];

  $(".loader .image").html(""+ images[counter] +"");
}

function loading(){
  var num = 0;

  for(i=0; i<=100; i++) {
    setTimeout(function() { 
      $('.loader span').html(num+'%');

      if(num == 100) {
        loading();
      }
      num++;
    },i*50);
  };
}
