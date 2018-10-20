
NODE.JS
La carpeta node_modules no hace falta llevarla a todos lados. Usando el npm init busca las dependencias y 
te va bajando todo

JQUERY
"punteros"
tag        $ ("P")
ID    $ ("#P")
CLASE     $ (".P")	

Siempre descargar/instalar jquery.min porque ocupa menos espacio

Instalar jquery sin instalador
 <!-- AGREGO JQUERY SIN INSTALADOR DIRECTAMENTE EN EL HTML-->
    <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script> -->


Instalar jquery con instalador

Descargo de la pagina el archivo y lo agrego con un script
https://jquery.com/download/
Lo llamo asi:
    <script src="./js/jquery-3.3.1.min.js" ></script>


Para instalarlo por npm:
npm init -y //te crea un archivo package con los datos de tu app
npm install jquery //instala jquery

Lo llamo asi:
    <script src="./node_modules/jquery/dist/jquery.min.js"></script>


PARCIAL
-HACER DOBLE CLICK EN LA FILA
-VALIDAR LA FECHA INGRESADA QUE SEA MAYOR A LA DE HOY
-y poner el spinner (div que ocupe toda la pantalla opaco)

era un radiobutton
la fecha con un DATE
y marca el error pintando verde o rojo con css
cuando arma el row con un for, mete en cada uno un metodo que es openModel(event) pasandole event y ahi usa el event.target.parentmode
despues crea un json, recupero los hijos de esos tr sexo:person.childen[0].innerHTML

validacion

le cambia las clases para el css a los input
para el date:
crea un objeto dateusa el date.value 
cambia la clase para el css

otra forma:
se usa un input de tipo date en el html
se puede pasar directamente asi -> date.value = JS[i].fecha al servidor

para el sexo
se fija si esta checked uno o otro marca error

spinner
tiene un backgroud opaco que es un div arriba de todo
style.display = block 
style.display = 
usar .hide y .show de jquery

en el html:
div id="loading"
<img src"./img/loadig.gif alt=">
/div

en el css
backgroud-color: rgb 0 0 0 .45 // o usar directamente opacity
bottom 0 
display none
left 0
position fixed
right 0
// o widght y height 100% antes que bottom left right top
text aling center
top 0


va a pedir que tenga jquery, va a pedir manejo de imagenes, y va a usar una nueva funcion de la api


JQUERY
.var()
.html()
.show()
.hide()

llamo por 
numeral 
punto
nada

se va a tomar en cuanta usar animaciones de jquery usando jquery effects
fijarse w3school