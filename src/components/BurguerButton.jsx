import  reaccionar  desde  'reaccionar'
import  estilo  desde  'componentes con estilo'

function  BurguerButton ( accesorios )  {
  volver  (
    < Hamburguesa >
      < div   onClick = { props . handleClick } 
            className = { `icono de navegación-icono-5 ${ props . hizo clic ? 'abrir' : '' } ` }
      >
        < lapso > < / lapso >
        < lapso > < / lapso >
        < lapso > < / lapso >
      < / div >
    < / Hamburguesa >
  )
}

exportar  BurguerButton por defecto 

const  Burguer  =  estilo . div `
  /* icono de navegación-5 */
.nav-icono-5{
  ancho: 35px;
  altura: 30px;
  margen: 10px 10px;
  posición: relativa;
  cursor: puntero;
  pantalla: bloque en línea;
}
.nav-icon-5 tramo{
  color de fondo:#fff;
  posición: absoluta;
  borde-radio: 2px;
  transición: .3s cubic-bezier (.8, .5, .2, 1.4);
  ancho: 100%;
  altura: 4px;
  transición-duración: 500ms
}
.nav-icon-5 span:nth-child(1){
  superior: 0px;
  izquierda: 0px;
}
.nav-icon-5 span:nth-child(2){
  arriba: 13px;
  izquierda: 0px;
  opacidad: 1;
}
.nav-icon-5 span:nth-child(3){
  inferior: 0px;
  izquierda: 0px;
}
.nav-icon-5:no(.abrir):hover span:nth-child(1){
  transformar: rotar (-3 grados) scaleY (1.1);
}
.nav-icon-5:no(.abrir):hover span:nth-child(2){
  transformar: rotar (3 grados) scaleY (1.1);
}
.nav-icon-5:no(.abrir):hover span:nth-child(3){
  transformar: rotar (-4 grados) scaleY (1.1);
}
.nav-icon-5.open span:nth-child(1){
  transformar: rotar (45 grados);
  arriba: 13px;
}
.nav-icon-5.open span:nth-child(2){
  opacidad: 0;
}
.nav-icon-5.open span:nth-child(3){
  transformar: rotar (-45 grados);
  arriba: 13px;
}
`