$('div').css(
    {"backgroundColor":"red",
     "width":"100px",
     "height":"100px",
     "margin-top":"20px"
});

$('.btn1').click(function(e){
    e.preventDefault();
    $('.btn1+div').animate({
        marginLeft: '500'});
     $('.btn1+div').animate({
            marginLeft: '0'});
})

$('.btn2').click(function(e){
    e.preventDefault();
    $('.btn2+div').animate({
        marginTop:'300',
        marginLeft:'300'
      });
      $('.btn2+div').animate({
        marginTop:'20',
        marginLeft:'600'
      });
      $('.btn2+div').animate({
        marginTop:'20',
        marginLeft:'0'
      })
});


  function toggleFunc(){
    let el = this;
    return [
      function() { 
        $('.btn3+div').animate({
            "width":"400px",
            "height":"400px"
            
        })
      },
      function() { 
        $('.btn3+div').animate({
            "width":"100px",
            "height":"100px"
        })
      }
    ][el.tog^=1]();
  }

  $("button").click( toggleFunc );