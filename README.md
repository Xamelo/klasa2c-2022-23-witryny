<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Przykładowy program</title>
    <style>
        body{
            background-color: aqua;
            padding-top: 15px;
            text-align: center;
            font-size: 20px;
        }
    </style>
</head>
<body>  
    <h1> Formularz </h1>
    
    <script>
        function div()
        {
            let imie = document.getElementById("name");

            let x = document.getElementById("tekst1");
           
            if(imie.value.length > 0)
                x.innerHTML = "Witaj " + imie.value;
            else
                x.innerHTML = "Nie podałes imienia! ";
            
            let age = document.getElementById("age");
            let zmien = document.getElementById("tekst2");

            if(age.value.length==0)
                zmien.innerHTML = "Nie podałeś wieku!";
            else if(age.value > 130)
                zmien.innerHTML = "Nie istnieje taki wiek";
            else if(age.value < 1)
                zmien.innerHTML = "Błąd";
            else if(age.value>=18)
                zmien.innerHTML = "Jestes pelnoletni";
            else if(age.value < 18)
                zmien.innerHTML = "Jestes niepelnoletni";
        }

    </script>

<div>
    <p> Podaj imię: </p>
    <input type="text" id="name"/>
    <p> Podaj wiek: </p>
    <input type = "text" id ="age"/>
    <br/>
    <br/>
    <input type = "button" value="Przycisk" onclick="div()"/> <br/>
    <div>
        <p id = "tekst1"> 

        </p>
    </div>
    
    <div>
        <p id = "tekst2">

        </p>
    </div>
</body>
</html>
