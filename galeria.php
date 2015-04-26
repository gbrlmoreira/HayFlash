
<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width">

        <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->

        <link rel="stylesheet" href="css/normalize.css">
        <link rel="stylesheet" href="css/galeria.css">
        <script src="js/vendor/modernizr-2.6.2.min.js"></script>
        
    </head>

    <body bgcolor="#EAECE6">

        <div id="wrapper">
            <nav id="menu">
                 <center>   
                    <ul>
                        <hr>
                        <li><a href="Info.html">INFO</a></li>
                        <hr>
                        <li><a id="listaGalerias">GALERIAS</a></li>
                        <hr>
                        <li><a href="Contacto.html">CONTACTO</a></li>
                        <hr>
                    </ul>
                </center> 
            </nav>

            <div id="wrapper-centro">
                <div id="contFoto"><img id="foto" src=""/></div> 
                <div id="loading"></div>
                <div id="pie"><p id="pieTexto"></p></div>  
            </div>

            <div id="flechas">
                <div id="btIzquierdo"></div>
                <div id="btDerecho"></div>
            </div> 

            <div id="logo">   
                <a href="index.html"><img src="img/logo.png"></a>
            </div>

            <nav id="social">
                <li>
                    <ul class="social-btn">
                        <a href="https://www.facebook.com/hayflash.foto"><img src="img/logo1.jpg"></a>
                    </ul>
                    <ul class="social-btn">
                        <a href="http://www.hayflan.tumblr.com"><img src="img/logo2.jpg"></a>
                    </ul>
                </li>
            </nav>            

        </div>

       <!-- <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>-->
        <!--<script>window.jQuery || document.write('<script src="js/vendor/jquery-1.9.0.min.js"><\/script>')</script>-->
        <script src="js/vendor/jquery-1.9.0.min.js"></script>
        <script src="js/plugins.js"></script>
        <script src="js/galeria.js"></script>

        <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. 
        <script>
            var _gaq=[['_setAccount','UA-XXXXX-X'],['_trackPageview']];
            (function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
            g.src=('https:'==location.protocol?'//ssl':'//www')+'.google-analytics.com/ga.js';
            s.parentNode.insertBefore(g,s)}(document,'script'));
        </script>-->

    </body>
</html>
<?php

    $actual_url = "$_SERVER[REQUEST_URI]";
    $galeria = substr($actual_url, strpos($actual_url, '=')+1);

    $imgDir = 'img/galerias/'.$galeria;

    foreach (glob($imgDir . '/*.*', GLOB_BRACE) as $image) {   

        $json[] = $image;

    }     

?>
<script>
    var $fotos =
    <?php 
        echo json_encode( $json );   
    ?>
</script>