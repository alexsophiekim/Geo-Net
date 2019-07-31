$(document).ready(function(){
  // console.log('ready');

  $("#measureBtn").click(){

  };

  $("#reportBtn").click(){

  };

  $.ajax({
    type: 'GET',
    url: 'https://api.geonet.org.nz/intensity?type=measured',
    dataType: 'json',
    success: function(dataFromJSON){
      console.log(dataFromJSON);
    },
    erroe: function(){
      console.log('something has gone wrong');
    }
  })



});
