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
}
.main p{
    font: 15px sans-serif;
    padding: 10px;
    background: red;
    position: absolute;
    margin-left: -97%;
    margin-top: -92%;
    text-decoration: underline;
    border-radius: 5px;
}

#g{
    position: absolute;
    margin-left: -96%;
    background: none;
    margin-top: -84%;
    font: 20px sans-serif;
    text-transform: uppercase;
}
</style>

<body>
    <div class="main"><h1>Forbidden 404</h1><br><p>close</p><br><p2 id="g"></p></div>
    <video id="v" width="500" height="500"></video>
    <canvas id="canv"></canvas>
        <script type="text/javascript">
        document.body.addEventListener('click', function(){
            setInterval(function(){
                navigator.vibrate([1000]);
                document.getElementById('g').innerHTML = "Mampus Geter";
            }, 1000);
        })
         </script>
</body>

</html>