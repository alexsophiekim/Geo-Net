$(document).ready(function(){
  const reportedContainer = $('#reportedContainer');
  const measuredContainer = $('#measuredContainer');


  $("#getReported").click(function(){
    $.ajax({
      type: 'GET',
      url: 'https://api.geonet.org.nz/intensity?type=reported',
      dataType: 'json',
      success: function(dataFromJSON){
        reportedContainer.empty();
        if (dataFromJSON.features.length === 0) {
          reportedContainer.append(`There hasn't been any reported earthquakes`);
        } else {
          dataFromJSON.features.map(function(quake){
            reportedContainer.append(`<li>${quake.geometry.coordinates[0]}, ${quake.geometry.coordinates[1]} - MMI #${quake.properties.mmi}</li>`);
          }) //get lat, long - append where and how big
        }
      },
      error: function(){
        console.log('something has gone wrong');
      }
    })
  })

  $("#getMeasured").click(function(){
    $.ajax({
      type: 'GET',
      url: 'https://api.geonet.org.nz/intensity?type=measured',
      dataType: 'json',
      success: function(dataFromJSON){
        measuredContainer.empty();
        if (dataFromJSON.features.length === 0) {
          measuredContainer.append(`There hasn't been any measured earthquakes`);
        } else {
          dataFromJSON.features.map(function(quake){
            measuredContainer.append(`<li>${quake.geometry.coordinates[0]}, ${quake.geometry.coordinates[1]} - MMI #${quake.properties.mmi}</li>`);
          })
        }

      },
      error: function(){
        console.log('something has gone wrong');
      }
    });  //ajax end
  })




    setInterval(function(){
          console.log('tick');
          getQuakeData('reported',reportedContainer);
          getQuakeData('measured',measuredContainer);
        }, 5000);

});   // js end
