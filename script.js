$(function(){
  $('#myTab a').click(function (e) {
    if($(this).parent('li').hasClass('active')){
        $( $(this).attr('href') ).hide();
    }
    else {
        e.preventDefault();
        $(this).tab('show');
    }
});
});
