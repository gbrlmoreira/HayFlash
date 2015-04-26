

window.onload = function() {

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

	$('#wrapper-centro').css('opacity','1');
	i = 0;

	$('#foto').attr('src',$fotos[i]);
	$('#loading').css('display','block');
	$('#foto').animate({opacity:'1'});

}

$('#foto').hide().load(function() {

		if ($('#foto').height() > $('#foto').width()) {

			$('#foto').css('height','100%');
			$('#foto').css('width','auto');
			$('#contFoto').width($('#foto').width());
			$('#contFoto').css('height','700px');
		} 

		else {

			$('#foto').css('height','auto');
			$('#foto').css('width','100%');
			$('#contFoto').height($('#foto').height());
			$('#contFoto').css('width','960px');
		}

			$('#contFoto').height($('#foto').height());
			$('#contFoto').width($('#foto').width());
			var pieDePag = $fotos[i].slice($fotos[i].search('-')+1,$fotos[i].length-4);
			document.getElementById('pieTexto').innerHTML = pieDePag;				
	
	    	$('#loading').css('display','none');
	        $('#foto').fadeIn();
			$('#pie').animate({opacity:'0.8'});
});
				
$('#btDerecho').on('click', function() {

		i = i + 1;
		 
		  if ( i == $fotos.length) {
		  	i = 0;
		  }
		$('#pie').animate({opacity:'0'});
		$('#foto').animate({opacity:'0'} , function() {
			
			$('#foto').attr('src',$fotos[i]);
		    $('#loading').css('display','block');

		    $('#foto').hide().load(function () {
		    });

			$('#foto').animate({opacity:'1'});
		});

});


$('#btIzquierdo').on('click', function() {

		i = i - 1;

		  if ( i < 0) {
		  	i = $fotos.length -1 ;
		  }
		  
		$('#pie').animate({opacity:'0'});
		$('#foto').animate({opacity:'0'} , function() {
			
			$('#foto').attr('src',$fotos[i]);
		    $('#loading').css('display','block');

		    $('#foto').hide().load(function () {
		    });

		    $('#foto').animate({opacity:'1'});

		});
		
});
