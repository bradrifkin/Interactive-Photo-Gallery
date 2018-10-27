$('#searchBox').keyup(function(){
   var valThis = $(this).val().toLowerCase();
   if(valThis == ""){
        $('.gallery > a').show();           
   } else {
        $('.gallery > a').each(function(){
            var text = $(this).attr("data-caption").toLowerCase();
            (text.indexOf(valThis) >= 0) ? $(this).show() : $(this).hide();
        });
   };
});