alert("connected");

$("ul").on('click','li',function(){
	$(this).toggleClass("effect");
   

});

$("ul").on('click','span',function(event){
   $(this).parent().fadeOut(function(){
       $(this).remove();
   });
     event.stopPropagation();
});

$("input[type ='text']").keypress(function(event){
	if(event.which===13)
	{
		var text = $(this).val();
		$('ul').append("<li><span><i class='fas fa-trash'></i></span>"+text+"</li>");
		$(this).val("");
	}
});

$('#toggle').click(function(){
   $("input[type='text']").fadeToggle();
});