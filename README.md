# klasa2c-2022-23-witryny

<!DOCTYPE html>
<html lang = "pl">
    <head>
        <title>Przykładowy program</title>
        <style>
            body{
                background-color: aqua;
            }
        </style>
    </head>
    <body>
        <script>

            
            function zadanie2()
            {
                let tekst = new String("Filip Gos Czech");
                document.write("Nazywam się Jan Kowalski" + "<br/>");
                document.write("Nazywam się " + tekst);
            }
            zadanie2();

            document.write("<br/>");

            function zadanie3(parametr)
            {
                if(parametr %2==0)
                    document.write("Liczba parzysta");
                else
                    document.write("Liczba nieparzysta");
            }
            zadanie3(7);

            tab=[5, 6];
            function MaxLiczba(param)
            {
                let max=0;
                for(let i=0; i < param.length; i++)
                {
                    if(max<tab[i]);
                        max = tab[i];
                }
                document.write("Największa liczba to " + max);
            }
            document.write("<br/>"+"<br/>");
            MaxLiczba(tab);
            document.write("<br/>");

            function zadanie5()
            {
                for (i = 0; i < 101; i++)
                {
                    document.write(i + ",");
                }
            }
            zadanie5();

            document.write("<br/>");


            function ShowTime()
            {
                let data = new Date();
                godzina = Fix(data.getHours());
                minuta = Fix(data.getMinutes());
                sekunda = Fix(data.getSeconds());

                document.write(godzina + ":" + minuta + ":" + sekunda);
            }
            ShowTime();


            function Fix(elementToFix)
            {
                if(elementToFix < 10)
                    return "0" + elementToFix;
                return elementToFix;
            }
        </script>
    </body>
</html>
