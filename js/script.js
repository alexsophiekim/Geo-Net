$(document).ready(function(){
  // console.log('ready');



    $("#measureBtn").click(function(){

      $("#result").append();
      setLoadInterval();


    });

    $("#reportBtn").click(function(){


    });



    function callData(){
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
      });  //ajax end
    }


    setInterval(function(){
          console.log('tick');
          callData('report',reportCol);
          callData('measure',measureCol);
        }, 1000);

});
