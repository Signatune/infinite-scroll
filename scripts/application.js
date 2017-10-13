$(document).ready(function () {

  var offset = 0;
  var limit = 15;

  $(document).scroll( function() {
    if ($(window).scrollTop() + $(window).height() == $(document).height()) 
      {
        $.ajax({
          url: "http://www.stellarbiotechnologies.com/media/press-releases/json",
          data: {
            limit: limit,
            offset: offset
          },
          type: "GET",
          dataType : "json",
        })
      
        .done(function( json ) {
          $.each(json.news, function( index, value) {
            $( "<h4>").text(value.title).hide().fadeIn(2000).appendTo(".container");
            $( "<p>" ).text( value.published ).hide().fadeIn(2000).appendTo( ".container" );    
           });
           offset = offset + limit;
        })
      
        .fail(function( xhr, status, errorThrown ) {
          alert( "AJAX request failed" );
          console.log( "Error: " + errorThrown );
          console.log( "Status: " + status );
          console.dir( xhr );
        });
      }
  });

  $.ajax({
    url: "http://www.stellarbiotechnologies.com/media/press-releases/json",
    data: {
      limit: limit,
      offset: offset
    },
    type: "GET",
    dataType : "json",
  })

  .done(function( json ) {
    $.each(json.news, function( index, value) {
            $( "<h4>").text(value.title).hide().fadeIn(2000).appendTo(".container");
            $( "<p class=\"test\">" ).text( value.published ).hide().fadeIn(2000).appendTo( ".container" );     
    });
     offset = offset + limit;
  })

  .fail(function( xhr, status, errorThrown ) {
    alert( "AJAX request failed" );
    console.log( "Error: " + errorThrown );
    console.log( "Status: " + status );
    console.dir( xhr );
  });

  
});

