window.onload = function () {

	var wrapperDx = document.getElementById('wrapper-dx');
	var wrapperIx = document.getElementById('wrapper-ix');
	
	$(wrapperDx).css('transform','translate(220px,0px)');
	$(wrapperIx).css('transform','translate(-220px,0px)');	


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
					$("#menu li").eq(1).append('<li><a href="galeria.php?keyword=press">PRESS</a></li>');
					$("#menu li").eq(1).append('<li><a href="galeria.php?keyword=shows">SHOWS</a></li>');
					$("#menu li").eq(1).append('<li><a href="galeria.php?keyword=works">WORKS</a></li>');
					$("#menu li").eq(1).append('<li><a href="galeria.php?keyword=portraits">PORTRAITS</a></li>');
					$("#menu li").eq(1).append('<li><a href="galeria.php?keyword=landscape">LANDSCAPE</a></li>');

					open = true;

		    	});
	    	}


		});
}