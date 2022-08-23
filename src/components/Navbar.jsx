import  React ,  {  useState  }  desde  'reaccionar'
import  estilo  desde  'componentes con estilo'
import  BurguerButton  desde  './BurguerButton'

Función  Barra de navegación ( )  {

    const  [ clic ,  setClicked ]  =  useState ( false )
    const  handleClick  =  ( )  =>  {
    
    setClicked ( ! clicked )
  }
  volver  (
    < >
      < Contenedor de navegación >
        < h2 > Barra de navegación < span > Sensible < / span > < / h2 >
        < div  className = { `enlaces ${ ¿ se hizo clic ? 'activo' : '' } ` } >
          < a  onClick = { handleClick }  href = "#h" > Inicio < / a >
          < a  onClick = { handleClick }  href = "#h" > Tienda < / a >
          < a  onClick = { handleClick }  href = "#h" > Acerca de < / a >
          < a  onClick = { handleClick }  href = "#h" > Contacto < / a >
          < a  onClick = { handleClick }  href = "#h" > Blog < / a >
        < / div >
        < div  className = 'burguer' >
          < BurguerButton  hizo clic = { hizo clic }  handleClick = { handleClick }  / >
        < / div >
        < BgDiv  className = { `inicial ${ ¿se hizo clic ? 'activo' : '' } ` } > < / BgDiv >
      < / NavContainer >
    < / >
  )
}

Exportar barra de  navegación predeterminada 

const  NavContainer  =  con estilo . nav `
h2{
    color blanco;
    peso de fuente: 400;
    lapso{
fuente-peso: negrita;
    }
    }
acolchado: 0,4 rem;
color de fondo: #333;
pantalla: flexible;
alinear elementos: centro;
justificar-contenido: espacio-entre;
a{
    color blanco;
    texto-decoración: ninguno;
    margen derecho: 1rem;
}
.Enlaces{
    posición: absoluta;
    arriba: -700px;
    izquierda: -2000px;
    derecha: 0;
    margen izquierdo: automático;
    margen derecho: automático;
    alineación de texto: centro;
    transición: todos .5s facilidad;
    a{
        color blanco;
        tamaño de fuente: 2rem;
        bloqueo de pantalla;
    }
    @media(ancho mínimo: 768px){
        posición: inicial;
        margen: 0;
        a{
        tamaño de fuente: 1 rem;
        color blanco;
        pantalla: en línea;
    }
        bloqueo de pantalla;
    }
}
.enlaces.activos{
    ancho: 100%;
    bloqueo de pantalla;
    posición: absoluta;
    margen izquierdo: automático;
    margen derecho: automático;
    arriba: 30%;
    izquierda: 0;
    derecha: 0;
    alineación de texto: centro;
    a{
        tamaño de fuente: 2rem;
        margen superior: 1 rem;
        color blanco;
    }
}
.burguer{
    @media(ancho mínimo: 768px){
        pantalla: ninguno;
    }
}
`

const  BgDiv  =  estilo . div `
color de fondo: #222;
posición: absoluta;
arriba: -1000px;
izquierda: -1000px;
ancho: 100%;
altura: 100%;
índice z: -1;transición: todo .6s facilidad;
&.activo{
    borde-radio: 0 0 80% 0;
    superior: 0;
    izquierda: 0;
    ancho: 100%;
    altura: 100%;
}




