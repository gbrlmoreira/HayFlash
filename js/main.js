


window.onload = function() {

	$(document).ready(function() { 

		var open = false;

		$('#listaGalerias').on('click', function(){

	    	if (open == true) {

				document.getElementById("listaGalerias").style.color = 'white';

	    		open = false;

	    		$("#menu li").eq(2).animate({opacity:'0'});
	    		$("#menu li").eq(3).animate({opacity:'0'});
	    		$("#menu li").eq(4).animate({opacity:'0'});	
	    		$("#menu li").eq(5).animate({opacity:'0'});	
	    		$("#menu li").eq(6).animate({opacity:'0'});	
	    		$("#menu li").eq(7).animate({opacity:'0'}, function(){
				    
				    	$("#menu li").eq(2).remove();
				    	$("#menu li").eq(2).remove();
				    	$("#menu li").eq(2).remove();
				    	$("#menu li").eq(2).remove();
				    	$("#menu li").eq(2).remove();
				    	$("#menu li").eq(2).remove();

			    		$('#menu').animate({height:'118px'});   

	    		});
	    		
	    	}

	    	else {

				document.getElementById("listaGalerias").style.color = 'red';
	    		
		    	$('#menu').animate({height:'245px'} , function() {

					$("#menu li").eq(1).append('<li><a href="galeria.php?keyword=fashion">FASHION</a></li>');
					$("#menu li").eq(1).append('<li><a href="galeria.php?keyword=shows">SHOWS</a></li>');
					$("#menu li").eq(1).append('<li><a href="galeria.php?keyword=press">PRESS</a></li>');
					$("#menu li").eq(1).append('<li><a href="galeria.php?keyword=portraits">PORTRAITS</a></li>');
					$("#menu li").eq(1).append('<li><a href="galeria.php?keyword=landscape">LANDSCAPE</a></li>');
					$("#menu li").eq(1).append('<li><a href="galeria.php?keyword=works">WORKS</a></li>');

					open = true;

		    	});
	    	}


		});
		

		var eliminado = false;

		$('.circleImg').mouseover(function(event) {

		var img = event.target;
			imgWidth = parseInt($(img).css('width'));
			xMargin = (parseInt($(window).width()) - 1000)/2;
			
			radio = (imgWidth)/2;
			Cx = img.offsetLeft + xMargin + radio;
			Cy = img.offsetTop + radio;

			$(img).mousemove(function(ev) {

				var x = ev.pageX;
				var y = ev.pageY;

				var d = Math.sqrt((Cx-x)*(Cx-x)+(Cy-y)*(Cy-y));

				if (d <= radio)  {

					if (eliminado == false) {

						$(this).css('transform','scale(1.4, 1.4)');
						$(this).find('p').css('display','block');

						$(this).css('z-index','3');	

					}
					
					$(this).on('click', function(e) {

						var href = $(this).closest('a').attr('href');
						console.log('a',href);

						$('.circleImg').each( function() {
						
							$(this).css('transform','scale(0,0)');
							$('.circle-cont').css('opacity','0'); 

						}); 

						eliminado = true;
						
					});
				}	

				else {

						$(this).css('transform','scale(1, 1)');
						$(this).find('p').css('display','none');
						$(this).css('z-index','0');

				}

			});

		});	    
	});
}
