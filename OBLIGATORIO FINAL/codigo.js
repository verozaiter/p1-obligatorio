let botones = document.querySelectorAll(".btn");
document.querySelector("#btnCerrarSesion").style.display = "none";

for (let i = 0; i < botones.length; i++) {
  const boton = botones[i];
  boton.addEventListener("click", cambiarSeccion);
}

function ocultarBotones() {
  let botones = document.querySelectorAll(".btn");
  for (let i = 0; i < botones.length; i++) {
    const boton = botones[i];
    boton.style.display = "none";
  }
}

function mostrarBotones(perfil) {
  ocultarBotones();
  let botones = document.querySelectorAll("." + perfil);
  for (let i = 0; i < botones.length; i++) {
    const boton = botones[i];
    boton.style.display = "block";
  }
}

function ocultarSecciones() {       //ocultar todas las secciones
  let secciones = document.querySelectorAll(".seccion");
  for (let i = 0; i < secciones.length; i++) {
    const unaSeccion = secciones[i];
    unaSeccion.style.display = "none";
  }
}

function cambiarSeccion() {
  let idBoton = this.getAttribute("id"); //"btnSeccionCrearViaje"
  let idSeccion =  idBoton.charAt(3).toLowerCase()  + idBoton.substring(4); //"s"+"eccionCrearViaje"
  mostrarSeccion(idSeccion);
}

function mostrarSeccion(seccion) {
  ocultarSecciones();
  document.querySelector("#" + seccion).style.display = "block";

}
///////////////////////////////////////////
let usuarioLogeado;  // OBJETO
let foto;
 ////////////////////////////--- INICIO -----//////////
function iniciar(){
  ocultarBotones();
  mostrarSeccion("seccionIngreso")
  document.querySelector("#btnSeccionRegistro").style.display = "block";
  document.querySelector("#btnCerrarSesion").style.display = "none";
  usuarioLogeado = undefined;
  foto = "M.png"
  document.querySelector("#logo").setAttribute("src", `logos/${foto}`);

  //Limpiar Campos
  document.querySelector("#txtUsuario").value = ""
  document.querySelector("#txtPassword").value = ""
  document.querySelector("#pErrorIngreso").innerHTML = "";

  ///////////////////////////////////////////////////////DEFENSA


  class EmpresasConViaje {
    constructor(nombreEmpresa, idEmpresa, cantidadViajes) {
      this.nombreEmp = nombreEmpresa, 
      this.idEmp = idEmpresa, 
      this.cantViajes = cantidadViajes
    }
  }
  
  let empresasConViajes = [];  ///  ARRAY DE OBJETOS  
  let idEmpresasCV = [];
  let cantViajes = 0
  
  for (let i = 0 ; i < viajes.length ; i++){
    const unViaje = viajes[i];
    let existe = false;
  
      for(let i = 0 ; i < idEmpresasCV.length ; i++){
        if(unViaje.idEmpresa === idEmpresasCV[i]){
          cantViajes++;
          existe = true;
          break;
        }
      }
  
      if (!existe){
        cantViajes = 1
  
        let nuevaEmpresaConViajes = new EmpresasConViaje("", unViaje.idEmpresa, cantViajes)
        empresasConViajes.push(nuevaEmpresaConViajes);
      }
  
    }

    document.querySelector("#tblObligatorio").innerHTML = `<table border="1px" cellspacing="2px" cellpadding="2px">
  <thead>
      <tr>   
          <th>NOMBRE DE EMPRESA</th>
          <th>CANTIDAD DE VIAJES</th>
      </tr>
  </thead>
  <tbody id="tblDatosObligatorios">    </tbody>
  </table>
  `;

  for(let i = 0 ; i < empresasConViajes.length ; i++){

   document.querySelector("#tblDatosObligatorios").innerHTML += `
    <tr>
        <td>${empresasConViajes[i].idEmp}</td>
        <td align="center">${empresasConViajes[i].cantViajes}</td>
    </tr>
  }`

  }

}

//////////////////////////////////////////////////////////////////////////////////////

iniciar();

///////////////////-- FORMATEO DE FECHA-- /////////////
const fechaActual = new Date(); //AAAAMMDD// año : .getFullYear() dia: .getDate() mes: getMonth()+1 fechaLegible : .toDateString()

let mes = fechaActual.getMonth() + 1
let dia = fechaActual.getDate()
let year = fechaActual.getFullYear()
if (fechaActual.getMonth() + 1 < 10)  mes = "0" + mes
if (fechaActual.getDate() < 10) dia = "0" + dia
let hoy = Number(String(year) + String(mes) + String(dia))

console.log(hoy)
////////////////////////-- IMPORTADOR -- ///////////////////////////////////////
class Importador {
    constructor(nombre, usuario, password, id, estado, foto, cantCancelaciones) {
        this.nombre = nombre;
        this.usuario = usuario;
        this.password = password;
        this.id = id;
        this.estado = estado; // "habilitado", "inhabilitado"
        this.foto = foto;
        this.cantCancelaciones = cantCancelaciones
    }
}

let idImportadorNuevo = 6;

let importadores = []
let importador1 = new Importador("Importer V", "importer5", "Importer5", 1, "habilitado", "1.png", 0);
let importador2 = new Importador("DeLeon", "deleon", "Leon15", 2, "habilitado", "5.png", 2);
let importador3 = new Importador("Ort Importador", "ortimporta", "ORTimporta2", 3, "habilitado", "2.png", 0);
let importador4 = new Importador("Tras Rejas", "presx", "visAvis33", 4, "habilitado", "4.png", 1);
importadores.push(importador1, importador2, importador3, importador4);

//////////////////////////////////-- VIAJE -- /////////////////////////////
class Viaje {
  constructor(nombreBuque, maxContenedores, idEmpresa, fechaLlegada, id) {
      this.nombreBuque = nombreBuque;
      this.maxContenedores = maxContenedores;
      this.idEmpresa = idEmpresa; // linkear con el id de empresa que lo crea
      this.llegada = fechaLlegada;
      this.id = id; //id autonumerico del viaje
      this.cantContenedoresDisp = maxContenedores

  }
}
let idViajeNuevo = 5
let viajes = []
let viaje1 = new Viaje("Reina Isabel", 50, 2, "20221225", 1);
let viaje2 = new Viaje("Celeste Blanco", 180, 1, "20221209", 2);
let viaje3 = new Viaje("Titanic", 190, 2, "20221202", 3);
let viaje4 = new Viaje("Fagnoni II", 20, 3, "20221130", 4);
viajes.push(viaje1, viaje2, viaje3, viaje4);

//////////////////////////-- EMPRESA -- //////////////////////////////////
class Empresa {
    constructor(nombre, usuario, password, id, foto) {
        this.nombre = nombre
        this.usuario = usuario
        this.password = password
        this.id = id
        this.foto = foto
    }
}

let idEmpresaNueva = 4;

let empresas = []  // lineasDeCarga
let empresa1 = new Empresa("Pramsa S.A.", "pramsa", "pramsaBB3", 1, "6.png");
let empresa2 = new Empresa("Provenza S.A.", "provenza", "KarolG2", 2, "7.png");
let empresa3 = new Empresa("Perrix", "doggie", "BrunoyTomi2", 3, "9.png");
empresas.push(empresa1, empresa2, empresa3);

////////////////////// --CREAR VIAJE-- ////////////////////////////////////
document.querySelector("#btnCrearViaje").addEventListener("click", crearViaje);
document.querySelector("#btnSeccionCrearViaje").addEventListener("click", limpiarCampos);

function limpiarCampos(){
  document.querySelector("#slcNombreBuque").value = "xx";
  document.querySelector("#numContenedoresMax").value = 0;
  document.querySelector("#dateLlegada").value = "";
  document.querySelector("#pCheck").innerHTML = "";
}
let nombresBuques = [];

for (let i = 0; i < viajes.length ; i++){
  const viaje = viajes[i]
  let nombreBuque = viaje.nombreBuque
  nombresBuques.push(nombreBuque)
}
nombresBuques.push("Buque I", "Buque II", "Buque III");

function mostrarSlcBuque (){
  document.querySelector("#slcNombreBuque").innerHTML = `<option value="xx">Seleccionar Buque...</option>`
  for (let i = 0; i < nombresBuques.length; i++) {
    const buque = nombresBuques[i];
    document.querySelector("#slcNombreBuque").innerHTML += `<option value="${buque}">${buque}</option>`;
  }
}
mostrarSlcBuque();

function crearViaje (){
  let nombreBuque = document.querySelector("#slcNombreBuque").value
  let idEmpresa = usuarioLogeado.id
  let llegada = document.querySelector("#dateLlegada").value
  let maxContendores = Number(document.querySelector("#numContenedoresMax").value);
  let idViaje = idViajeNuevo
  
  llegada = Number(quitarGuiones(llegada))

  if (nombreBuque !== "xx"){
    if(maxContendores > 0){
      if(!(llegada <= hoy || llegada === "")){
        let viaje = new Viaje(nombreBuque, maxContendores, idEmpresa, llegada, idViaje)
        viajes.push(viaje)
        respuesta = "Viaje creado con éxito."
        idViajeNuevo ++
        document.querySelector("#slcNombreBuque").value = "xx";
        document.querySelector("#numContenedoresMax").value = 0;
        document.querySelector("#dateLlegada").value = "";
      }else{
        respuesta = `Error al crear Viaje, la fecha ingresada es inválida. Debe elegir una fecha posterior al día de hoy.`
      }
    }else{
      respuesta = `La cantidad de contenedores debe ser mayor a 0.`
    } 
  }else{
    respuesta = `Seleccione un buque válido.`
  }
 
  document.querySelector("#pCheck").innerHTML = respuesta  
}

function quitarGuiones (string){
 let nuevoString = ""
  for (let i = 0; i < string.length; i++){
    if (string.charAt(i) !== "-"){
      nuevoString += string.charAt(i)
    }
  }
  return nuevoString
}

////////////////////////-- SOLICITUD -- ///////////////////////////
 class Solicitud {
    constructor(tipoMerc, descrip, puertoOrigen, nContenedores, estado, numViaje, id, idImportador) {
        this.tipo = tipoMerc // "CARGA GENERAL", "REFRIGERADO", "CARGA PELIGROSA"
        this.descripcion = descrip
        this.puerto = puertoOrigen
        this.contenedores = nContenedores
        this.estado = estado; // "Pendiente", "Confirmada", "Cancelada", "Ignorada"
        this.numViaje = numViaje;
        this.id= id; 
        this.idImportador = idImportador; //linkear con id del importador que hace la solicitud
    }
}

let solicitudes = [];
let solicitud1 = new Solicitud("CARGA GENERAL", "Ropa", "Buenos Aires", 60, "Pendiente", null,  1, 1);
let solicitud2 = new Solicitud("CARGA GENERAL", "Artefactos varios", "Shanghai", 100, "Pendiente", null,  2, 3);
let solicitud3 = new Solicitud("CARGA PELIGROSA", "Sustancias Químicas Inflamables", "Rio de Janeiro", 70, "Cancelada", null, 3, 2);
let solicitud4 = new Solicitud("CARGA GENERAL", "Ositos de Peluche", "Miami", 5, "Pendiente", null, 4, 4);
let solicitud5 = new Solicitud("REFRIGERADO", "Fiambres", "Buenos Aires", 10, "Pendiente", null, 5, 1);
let solicitud6 = new Solicitud("REFRIGERADO", "Mariscos", "Rio de Janeiro", 5, "Cancelada", null, 6, 2);
let solicitud7 = new Solicitud("CARGA GENERAL", "Joyas", "Nueva York", 6, "Cancelada", null, 7, 2);
let solicitud8 = new Solicitud("CARGA PELIGROSA", "Inflamable", "Buenos Aires", 10, "Pendiente", null, 8, 4);
let solicitud9 = new Solicitud("CARGA PELIGROSA", "Veneno", "Santiago de Chile", 5, "Pendiente", null, 9, 1);
let solicitud10 = new Solicitud("CARGA PELIGROSA", "COVID", "Wuhan", 100, "Pendiente", null, 10, 2);
let solicitud11 = new Solicitud("CARGA GENERAL", "Libros", "Washington", 6, "Pendiente", null, 11, 3);
let solicitud12 = new Solicitud("REFRIGERADO", "Cadaveres", "Porto Alegre", 1, "Pendiente", null, 12, 4);
let solicitud13 = new Solicitud("REFRIGERADO", "Órganos", "Buenos Aires", 5, "Pendiente", null, 13, 2);
let solicitud14 = new Solicitud("CARGA GENERAL", "Automóviles", "Los Ángeles", 30, "Pendiente", null, 14, 3);
let solicitud15 = new Solicitud("CARGA GENERAL", "Artefactos de Hogar", "Sao Pablo", 10, "Pendiente", null, 15, 1);
let solicitud16 = new Solicitud("CARGA PELIGROSA", "Fuegos artificiales", "Lima", 3, "Pendiente", null, 16, 4);

solicitudes.push(solicitud1, solicitud2, solicitud3, solicitud4, solicitud5, solicitud6, solicitud7, solicitud8, solicitud9, solicitud10, solicitud11, solicitud12, solicitud13, solicitud14, solicitud15, solicitud16);

let idSolicitudActual = 17  
asignarCarga2(viaje3.id, solicitud2.id);
asignarCarga2(viaje2.id, solicitud10.id);
asignarCarga2(viaje3.id, solicitud13.id);
asignarCarga2(viaje1.id, solicitud14.id);
asignarCarga2(viaje4.id, solicitud4.id);
asignarCarga2(viaje1.id, solicitud5.id);
asignarCarga2(viaje3.id, solicitud12.id);

//////////////////////////// --CREAR SOLICITUD-- ///////////////////////////////
document.querySelector("#btnEnviar").addEventListener("click", crearSolicitud);
document.querySelector("#btnSeccionCrearSoli").addEventListener("click", limpiarSeccionCrearSoli);

function limpiarSeccionCrearSoli(){
  document.querySelector("#slcTipo").value = "xx";
  document.querySelector("#txtDescripcion").value = "";
  document.querySelector("#txtPuertoOrigen").value = "";
  document.querySelector("#numContenedores").value = "";
  document.querySelector("#pEnviarSolicitudMensaje").innerHTML = "";
}

function crearSolicitud(){
  let tipoMercaderia = document.querySelector("#slcTipo").value;
  let descripcion = document.querySelector("#txtDescripcion").value;
  let puertoOrigen = document.querySelector("#txtPuertoOrigen").value;
  let cantContenedores = Number(document.querySelector("#numContenedores").value); 
  let estado = "Pendiente";
  let numViaje = null
  let id = idSolicitudActual;
  let idImportador = usuarioLogeado.id;
  let mensaje = ""

  if (usuarioLogeado.estado !== "inhabilitado"){
    if(tipoMercaderia !== "xx" && descripcion !== "" && puertoOrigen !== "" && cantContenedores !== 0){
      let nuevaSolicitud = new Solicitud(tipoMercaderia, descripcion, puertoOrigen, cantContenedores, estado, numViaje, id, idImportador);
      solicitudes.push(nuevaSolicitud);
      idSolicitudActual ++
      mensaje = `Su solicitud fue creada con éxito.`
    }else{
      mensaje = `Verifique los datos ingresados. Debe elegir un tipo de mercadería, agregar descripción, puerto de origen y una cantidad de contenedores mayor a 1.`
    }
  }else{
    mensaje =  "Su solicitud no fue creada. Ud debe estar habilitado para poder hacerlo."
  }
  document.querySelector("#pEnviarSolicitudMensaje").innerHTML = mensaje
}

//////////////////////////// -- CONSULTAR SOLICITUD -- ////////////////////////////////////////////
document.querySelector("#btnSeccionConsultarSoli").addEventListener("click", vaciarTablasSolicitudes);

function vaciarTablasSolicitudes(){  //y limpia parrafos tmb
  document.querySelector("#tblSolicitudesPendientes").innerHTML = "";
  document.querySelector("#tblBusquedaParcial").innerHTML = "";
  document.querySelector("#pConsultaSolicitudesPendientes").innerHTML = "";
  document.querySelector("#pConsultaBusquedaParcial").innerHTML = "";
}
document.querySelector("#btnMostrarSolicitudes").addEventListener("click", consultarSolicitudes);

function consultarSolicitudes(){
  document.querySelector("#pConsultaSolicitudesPendientes").innerHTML = "";
  
  if(existenSolicitudesPendientes()){
    document.querySelector("#tblSolicitudesPendientes").innerHTML = `<table border="1px" cellspacing="2px" cellpadding="2px">
    <thead>
        <tr>   
            <th>TIPO DE CARGA</th>
            <th>PUERTO ORIGEN</th>
            <th>Nº CONTENEDORES</th>
            <th>DESCRIPCION</th>

        </tr>
    </thead>
    <tbody id="tblDatosSolicitudes">    </tbody>
    </table>
    `;

    for (let i = 0 ; i < solicitudes.length ; i++){
      if (solicitudes[i].estado === "Pendiente" && usuarioLogeado.id === solicitudes[i].idImportador) {
      document.querySelector("#tblDatosSolicitudes").innerHTML += `
          <tr>
              <td>${solicitudes[i].tipo}</td>
              <td>${solicitudes[i].puerto}</td>
              <td align="center">${solicitudes[i].contenedores}</td>
              <td>${solicitudes[i].descripcion}</td>
          </tr>
      `
      }
    }
  }else{
    document.querySelector("#pConsultaSolicitudesPendientes").innerHTML = "No se encontraron solicitudes pendientes."
  }
}  

function existenSolicitudesPendientes(){
  let existen = false;
  
  for (let i = 0 ; i < solicitudes.length ; i++){
    if (solicitudes[i].estado === "Pendiente" && usuarioLogeado.id === solicitudes[i].idImportador) {
      existen = true;
      break;
    }
  }
  return existen
}
////////////////////////////----BUSQUEDA PARCIAL----/////////////////////////////
document.querySelector("#btnBusParcial").addEventListener("click", buscarParcialmente);

function buscarParcialmente(){
  document.querySelector("#pConsultaBusquedaParcial").innerHTML = "";
  document.querySelector("#tblBusquedaParcial").innerHTML = "";
  let textoAbuscar = document.querySelector("#txtBusqueda").value.toLowerCase();
  let solicitudesEncontradas = solicitudesDelUsuarioCon(textoAbuscar);
  
  if(textoAbuscar !== ""){
    if(solicitudesEncontradas.length != 0){
      document.querySelector("#tblBusquedaParcial").innerHTML = `<table border="1px" cellspacing="2px" cellpadding="2px">
      <thead>
          <tr>   
              <th>TIPO DE CARGA</th>
              <th>PUERTO ORIGEN</th>
              <th>Nº CONTENEDORES</th>
              <th>DESCRIPCION</th>
          </tr>
      </thead>
      <tbody id="tblDatosSolictudesBuscadas">    </tbody>
      </table>
      `;
      for(let i = 0 ; i < solicitudesEncontradas.length ; i++){
        document.querySelector("#tblDatosSolictudesBuscadas").innerHTML  += `
        <tr>
            <td>${solicitudesEncontradas[i].tipo}</td>
            <td>${solicitudesEncontradas[i].puerto}</td>
            <td align="center">${solicitudesEncontradas[i].contenedores}</td>
            <td>${solicitudesEncontradas[i].descripcion}</td>
        </tr> ` 
      }
    }else{
      document.querySelector("#pConsultaBusquedaParcial").innerHTML = "No se encontraron coincidencias."
    }
    document.querySelector("#txtBusqueda").value = "";
  }else{
    document.querySelector("#pConsultaBusquedaParcial").innerHTML = "Ingrese lo que está buscando."
  }
}

function solicitudesDelUsuarioCon(texto){
   let solicitudesEncontradas = [];
   let cantidad = 0 ;
  for (let i = 0; i < solicitudes.length ; i++){
    const unaSolicitud = solicitudes[i];
    for(let j = 0 ; j < unaSolicitud.descripcion.length; j++){
      if (texto.toLowerCase() === unaSolicitud.descripcion.substring(j, j + texto.length).toLowerCase() && unaSolicitud.estado === "Pendiente" && unaSolicitud.idImportador === usuarioLogeado.id){ 
        solicitudesEncontradas[cantidad] = unaSolicitud;
        cantidad++;
        break;
      }
    }
  }
  return solicitudesEncontradas
 }

///////////////////////////// --CANCELAR SOLICITUDES-- //////////////////////////////////////////
 document.querySelector("#btnCancelarSoli").addEventListener("click", cancelarSolicitud);
 document.querySelector("#btnSeccionCancelarSoli").addEventListener("click", mostrarSlcSolicitudCarga);

 function actualizarEstado(objImportador){
  let cancelacionesTotales = objImportador.cantCancelaciones

  //Para Cancelar Solicitud(Importador) y Habilitar Importador(Empresa)
  if (cancelacionesTotales < 3) {
    objImportador.estado = "habilitado"
  }else {
    objImportador.estado = "inhabilitado"
  }
 }
 
function mostrarSlcSolicitudCarga(){   // y limpiar párrafo
  document.querySelector("#pCancelarSolicitud").innerHTML = "";
  let salida = `<option value="xx">Seleccionar n°...</option>`
  for (let i = 0; i < solicitudes.length; i++) {
    const soli = solicitudes[i];
    if (soli.estado === "Pendiente" && usuarioLogeado.id === soli.idImportador){
      salida += `<option value="${soli.id}">Solicitud n° ${soli.id} - ${soli.tipo} - ${soli.descripcion} </option>`
    }
  document.querySelector("#slcSolicitudCarga").innerHTML = salida
  }
}

function cancelarSolicitud(){
  let idSolicitud = Number(document.querySelector("#slcSolicitudCarga").value)
  let salida = ""
    
  for (let i = 0 ; i < solicitudes.length; i ++){
    const soli = solicitudes[i]
    if (soli.id === idSolicitud){
      soli.estado = "Cancelada"
      usuarioLogeado.cantCancelaciones++;
      salida = `La solicitud ha sido cancelada con éxito. <br> Si ud. no ve ninguna opción de solicitud para cancelar, es porque no hay solicitudes pendientes.`
      break;
    }else {
      salida = "Seleccione una solicitud. <br> Si ud. no ve ninguna opción de solicitud para cancelar, es porque no hay más solicitudes pendientes."
    }
  }
  actualizarEstado(usuarioLogeado);
  mostrarSlcSolicitudCarga();
  document.querySelector("#pCancelarSolicitud").innerHTML = salida
}

///////////////////////////// --IMAGENES-- //////////////////////////////////////////
let logos = [{nombre: "Logo 1", imagen: "1.png"},
{nombre: "Logo 2", imagen: "2.png"},
{nombre: "Logo 3", imagen: "3.png"},
{nombre: "Logo 4", imagen: "4.png"},
{nombre: "Logo 5", imagen: "5.png"},
{nombre: "Logo 6", imagen: "6.png"},
{nombre: "Logo 7", imagen: "7.png"}, 
{nombre: "Logo 8", imagen: "8.png"},
{nombre: "Logo 9", imagen: "9.png"}
]
//Select de Fotos
function mostrarImagenes(){
  let salida = ``
  for(let i = 0 ; i < logos.length ; i++){
    salida +=`<option value="${i+1}.png">${logos[i]["nombre"]}</option>` 
  }
  document.querySelector("#slcFoto").innerHTML = salida; 
}
mostrarImagenes();

//////////////// -- CONTRASENIA -- /////////////////////////
let btnsPasswords = document.querySelectorAll(".btnpass");

for (let i = 0; i < btnsPasswords.length; i++) {
  const btnpassword = btnsPasswords[i];
  btnpassword.addEventListener("click", mostrarPass);
}

function mostrarPass(){
  let passwords = document.querySelectorAll(".pass");
  for (let i = 0; i < passwords.length; i++) {
    const unaPass = passwords[i];
    if(unaPass.getAttribute("type") === "password"){
      unaPass.setAttribute("type", "text");
      btnsPasswords[i].value = "Ocultar contraseña";
    }else if(unaPass.getAttribute("type") === "text"){
      unaPass.setAttribute("type", "password");
      btnsPasswords[i].value = "Ver contraseña";
    }
  }
}
///////////////////////////// --REGISTRO-- //////////////////////////////////////////
document.querySelector("#btnRegistro").addEventListener("click", registrarse);

function registrarse(){
  let estado = "habilitado"
  let respuesta = ""
  let nombre = document.querySelector("#txtRegistroImportador").value;
  let nuevoUsuario = document.querySelector("#txtRegistroUsuario").value.toLowerCase();
  let password = document.querySelector("#txtRegistroPassword").value;
  let foto = document.querySelector("#slcFoto").value;
  let userRepetidoI = estaRepetido(importadores, "usuario", nuevoUsuario)
  let userRepetidoE = estaRepetido(empresas, "usuario", nuevoUsuario)
  let passwordValida = validarPassword(password)
  let id = idImportadorNuevo
  
  if(nombre !== "" && nuevoUsuario !== ""){
    if (!userRepetidoI && !userRepetidoE && passwordValida){
      let importador = new Importador(nombre, nuevoUsuario, password, id, estado, foto)
      importadores.push(importador)
      respuesta = "El usuario ha sido registrado correctamente!"
      setTimeout(iniciar, 3000);
    }else if (userRepetidoI || userRepetidoE){
      respuesta = "Upss! Su nombre de usuario coincide con uno ya existente."
    }else if (!passwordValida){
      respuesta = "La contraseña deberá tener un mínimo de 5 caracteres, contando con al menos una mayúscula, una minúscula y un número."
    }
  }else{
    respuesta = "Debe completar todos los campos."
  }
  document.querySelector("#pRegistro").innerHTML = respuesta
  document.querySelector("#logo").setAttribute("src", `logos/${foto}`);
  idImportadorNuevo ++
}

function estaRepetido(array, prop, string){
  let repetido = false
  for (let i = 0; i < array.length ; i++){
          const elem = array[i]
      if (elem[prop] === string){
          repetido = true
      }
  }
  return repetido
}

function validarPassword(password) {
  let hayMin = false;
  let hayMayus = false;
  let hayNum = false;
  let cantCaracteres = 0;
  let passwordValida = false
  
  for (let i = 0; i < password.length; i++) {
    let cod = password.charCodeAt(i);
    const mayuscula = cod >= 65 && cod <= 90
    const minuscula = cod >= 97 && cod <= 122
    const numero = cod >= 48 && cod <= 57
    if (mayuscula) {
      hayMin = true
      cantCaracteres ++
    } else if (minuscula) {
      hayMayus = true
      cantCaracteres ++ ;
    } else if (numero) {
      hayNum = true
      cantCaracteres ++;
    }
  }

  if (hayMayus && hayMin && hayNum && cantCaracteres >= 5){
    passwordValida = true
  }
  return passwordValida
}

document.querySelector("#btnVolver").addEventListener("click", iniciar);
document.querySelector("#btnSeccionRegistro").addEventListener("click", limpiarCamposRegistro);

function limpiarCamposRegistro(){
  document.querySelector("#txtRegistroImportador").value = "";
  document.querySelector("#txtRegistroUsuario").value = "";
  document.querySelector("#txtRegistroPassword").value = "";
}

/////////////////////// --LOGIN-- ////////////////////////////////////////
document.querySelector("#btnIngresar").addEventListener("click", login)

function login(){
  let usuarioDato = document.querySelector("#txtUsuario").value.toLowerCase();
  let password = document.querySelector("#txtPassword").value;
  let usuarioLogeadoImport = encontrarUsuarioLogeado(usuarioDato, password, importadores);
  let usuarioLogeadoEmpresas = encontrarUsuarioLogeado(usuarioDato, password, empresas);

  if(usuarioDato === "" || password === ""){
    document.querySelector("#pErrorIngreso").innerHTML = "Debe llenar todos los campos.";

  }else if(existeProp(usuarioDato, "usuario", importadores) || existeProp(usuarioDato, "usuario", empresas)){
        
      if (usuarioLogeadoImport != undefined){
         usuarioLogeado =  usuarioLogeadoImport;
         mostrarBotones("importador");
         document.querySelector("#btnSeccionIngreso").style.display = "none";
         document.querySelector("#btnCerrarSesion").style.display = "block";
         mostrarSeccion("seccionBienvenida")
         document.querySelector("#mensajeBienvenida").innerHTML = `Bienvenido ${usuarioLogeado.nombre}`
         document.querySelector("#logo").setAttribute("src", `logos/${usuarioLogeado.foto}`);

      }else if(usuarioLogeadoEmpresas != undefined){
          usuarioLogeado =  usuarioLogeadoEmpresas;
          mostrarBotones("empresa");
          document.querySelector("#btnSeccionIngreso").style.display = "none";
          document.querySelector("#btnCerrarSesion").style.display = "block";
          mostrarSeccion("seccionBienvenida")
          document.querySelector("#mensajeBienvenida").innerHTML = `Bienvenido ${usuarioLogeado.nombre}`
          document.querySelector("#logo").setAttribute("src", `logos/${usuarioLogeado.foto}`);
      }else{
        document.querySelector("#pErrorIngreso").innerHTML = "La contraseña no es correcta. Pruebe nuevamente.";
      }
  }else{
    document.querySelector("#pErrorIngreso").innerHTML = "Ese nombre de usuario no existe. Pruebe nuevamente.";
  }
}

function existeProp(ingreso, prop, arrayPerfil){
  let existe = false;
  for(let i = 0 ; i < arrayPerfil.length ; i++){
    if(ingreso === arrayPerfil[i][prop]){
      existe = true;
    }
  }
  return existe;
}

function encontrarUsuarioLogeado(usuIngresado, passIngresada, arrayPerfil){
  let usuarioLogeado;
  for(let i = 0 ; i < arrayPerfil.length ; i++){
    const usuario = arrayPerfil[i].usuario;
    const password = arrayPerfil[i].password;

    if(usuIngresado === usuario && passIngresada === password ){
      usuarioLogeado = arrayPerfil[i]
      break;
    }
  }
  return usuarioLogeado;
}

//////////////////////////////// ---CERRAR SESIÓN---  /////////////////////////////////////////////////////
document.querySelector("#btnCerrarSesion").addEventListener("click", iniciar);

//////////////////////////////// ---ASIGNAR SOLICITUD DE CARGA PENDIENTE---  /////////////////////////////////////////////////////
document.querySelector("#btnSeccionAsignarViaje").addEventListener("click", reiniciarSlc)
document.querySelector("#btnAsignarCarga").addEventListener("click", asignarCarga)

function reiniciarSlc(){
mostrarSlcViaje()
mostrarSlcSolicitudesPendientes()
document.querySelector("#pAsignarCarga").innerHTML = "";
}

function mostrarSlcViaje(){
 let salida = `<option value="xx">Seleccionar viaje...</option>`
  for (let i = 0; i < viajes.length; i++) {
    const viaje = viajes[i];

    if (Number(viaje.llegada) > Number(hoy) && viaje.cantContenedoresDisp > 0){
      salida += `<option value="${viaje.id}">Id Viaje: ${viaje.id} - Llegada: ${fechaStringLinda(viaje.llegada)} - Plazas Disponibles: ${viaje.cantContenedoresDisp} </option>` 
    }
  document.querySelector("#slcViaje").innerHTML = salida
  }
}

function mostrarSlcSolicitudesPendientes(){
  let salida = `<option value="xx">Seleccionar solicitud...</option>`
  for (let i = 0; i < solicitudes.length; i++) {
    const soli = solicitudes[i];
    if (soli.estado === "Pendiente"){
      salida += `<option value="${soli.id}">Id: ${soli.id} - ${soli.puerto} - Contenedores: ${soli.contenedores} - ${soli.descripcion} </option>`
    }
  document.querySelector("#slcSolicitudes").innerHTML = salida
  }
}

 function asignarCarga(){
  let mensaje = ""
  let idViaje = document.querySelector("#slcViaje").value;
  let idSolicitud = document.querySelector("#slcSolicitudes").value;
  if (idViaje !== "xx" && idSolicitud !== "xx"){
    idViaje = Number(idViaje);
    idSolicitud = Number(idSolicitud);
    mensaje = asignarCarga2(idViaje, idSolicitud);
    mostrarSlcSolicitudesPendientes()
  }else{
    mensaje = "Seleccione una opción en cada combo desplegable."
  }

  document.querySelector("#pAsignarCarga").innerHTML = mensaje
}

function asignarCarga2(idViaje, idSolicitud){
  let objViaje
  let objSolicitud
  let idImportEnSoli
  let objImportador
  let estadoImportador
  let mensaje = ""

  for(let i = 0; i < solicitudes.length; i ++){
    if (solicitudes[i].id === idSolicitud){
      objSolicitud = solicitudes[i]
      idImportEnSoli = objSolicitud.idImportador ////////ID IMPORT EN SOLICITUD////////////
      break;
    }
  }  
  
  for (let i = 0 ; i < importadores.length; i++){
    if (importadores[i].id === idImportEnSoli){
      objImportador = importadores[i]
      estadoImportador = objImportador.estado   /////////////////ESTADO IMPORTADOR//////////////////////////
      break;
    }
  }

  for(let i = 0; i < viajes.length; i ++){
    if (viajes[i].id === idViaje){
      objViaje = viajes[i]
      break;
    }
  }
   //En el primer viaje cantContDisponible tiene el mismo valor el maximo de contenedores
  if (estadoImportador === "habilitado" && objSolicitud.contenedores <= objViaje.cantContenedoresDisp){
    if(objSolicitud.estado = "Confirmada"){
      for(let i = 0; i < viajes.length; i ++){
        if (viajes[i].id === objSolicitud.numViaje){
          viajes[i].cantContenedoresDisp += objSolicitud.contenedores
          break;
        }
      }
    }
    objSolicitud.numViaje = idViaje
    objSolicitud.estado = "Confirmada" 
    objViaje.cantContenedoresDisp -= objSolicitud.contenedores
    mensaje = "Su carga ha sido asignada con éxito."
  }else if(estadoImportador === "habilitado"){
    mensaje = "Viaje seleccionado sin espacio suficiente, elija uno con más plazas disponibles."
  }else if(objSolicitud.contenedores <= objViaje.cantContenedoresDisp){
    mensaje = "El importador se encuentra inhabilitado para operar, habilite al importador."
  }
  mostrarSlcViaje()
  return mensaje
}

//////////////////////////// -- ROLLOVER -- //////////-- SAAAANTIIIII ---- /////////////////////
document.querySelector("#btnSeccionRollover").addEventListener("click", mostrarYlimpiar)
document.querySelector("#btnRollear").addEventListener("click", rollear);

function mostrarYlimpiar(){
  mostrarSlcViajeArollear()
  mostrarSlcSolicitudesConfirmadas()
  document.querySelector("#pRolleado").innerHTML = "";
}

function mostrarSlcViajeArollear(){
  let salida = `<option value="xx">Seleccionar viaje...</option>`
  for (let i = 0; i < viajes.length; i++) {
    const viaje = viajes[i];
    if (Number(viaje.llegada) > Number(hoy) && viaje.cantContenedoresDisp > 0){
        salida += `<option value="${viaje.id}">Id Viaje: ${viaje.id} - Llegada: ${fechaStringLinda(viaje.llegada)} - Plazas Disponibles: ${viaje.cantContenedoresDisp} </option>` 
    }
  document.querySelector("#slcIDViaje").innerHTML = salida 
  }
}

function mostrarSlcSolicitudesConfirmadas(){
  let salida = `<option value="xx">Seleccionar solicitud...</option>`
  for (let i = 0; i < solicitudes.length; i++) {
    const soli = solicitudes[i];
    if (soli.estado === "Confirmada"){
      salida += `<option value="${soli.id}">Id: ${soli.id} - ${soli.puerto} - Contenedores: ${soli.contenedores} - ${soli.descripcion} </option>`
    }
  document.querySelector("#slcIDSoli").innerHTML = salida
  }
}

function rollear(){
  let mensaje = "";
  let idViajeARollear = document.querySelector("#slcIDViaje").value;
  let idSolicitud = document.querySelector("#slcIDSoli").value;

  if(idViajeARollear !== "xx" && idSolicitud !== "xx"){
    idViajeARollear = Number(idViajeARollear);
    idSolicitud = Number(idSolicitud);
    mensaje = asignarCarga2(idViajeARollear, idSolicitud);
  }else{
    mensaje = "Seleccione una opción en cada combo desplegable."
  }
  document.querySelector("#pRolleado").innerHTML = mensaje
  mostrarSlcViajeArollear()
  mostrarSlcSolicitudesConfirmadas();
}

/////////////// -- MANIFIESTO  -- /////////////////////////////////////////
document.querySelector("#btnSeccionManifiesto").addEventListener("click", mostrarSlcManifiestoYborrarTabla);
document.querySelector("#btnMostrarManifiesto").addEventListener("click", manifiesto);

function mostrarSlcManifiestoYborrarTabla (){
  let salida = ""
  for (let i = 0; i < viajes.length; i++) {
    const unViaje = viajes[i];
    if (unViaje.idEmpresa === usuarioLogeado.id){
      salida += `<option value="${unViaje.id}">ID Viaje: ${unViaje.id} - Buque: ${unViaje.nombreBuque} - Llegada: ${fechaStringLinda(unViaje.llegada)} </option>`
    }
  document.querySelector("#slcNumeroViaje").innerHTML = salida
  }
  document.querySelector("#tblManifiesto").innerHTML = "";
  document.querySelector("#tblCargaPeligrosa").innerHTML = "";
}

function manifiesto(){
  let viaje = Number(document.querySelector("#slcNumeroViaje").value);
  document.querySelector("#tblManifiesto").innerHTML = `<table border="1px" cellspacing="2px" cellpadding="2px">
  <thead>
      <tr>   
          <th>ORIGEN</th>
          <th>CONTENEDORES</th>
          <th>IMPORTADOR</th>
          <th>TIPO MERCADERIA</th>
          <th>DESCRIPCION</th>
      </tr>
  </thead>
  <tbody id="tblDatosManifiesto">    </tbody>
  </table>
  `;

  for (let i = 0 ; i < solicitudes.length; i++){
    let nombreImportador;
    if (solicitudes[i].numViaje === viaje){
      for(let i = 0 ; i < importadores.length ; i++){
        if (importadores[i].id === solicitudes[i].idImportador){
          nombreImportador = importadores[i].nombre;
          break;
        }
      }
      document.querySelector("#tblDatosManifiesto").innerHTML += `
        <tr>
           <td>${solicitudes[i].puerto}</td>
           <td align="center">${solicitudes[i].contenedores}</td>
           <td>${nombreImportador}</td>
           <td>${solicitudes[i].tipo}</td>
           <td>${solicitudes[i].descripcion}</td>
           </tr>
          `
    }
  }
}

///////////////////////-- CARGA PELIGROSA -- /////////////////////////////
document.querySelector("#btnMostrarListaCP").addEventListener("click", listaCP);

function listaCP(){
  let viaje = Number(document.querySelector("#slcNumeroViaje").value);
  document.querySelector("#tblCargaPeligrosa").innerHTML = `<table border="1px" cellspacing="2px" cellpadding="2px">
  <thead>
      <tr>   
          <th>ORIGEN</th>
          <th>CONTENEDORES</th>
          <th>IMPORTADOR</th>
          <th>DESCRIPCION</th>
      </tr>
  </thead>
  <tbody id="tblDatosCargaPeligrosa">    </tbody>
  </table>
  `;

  for (let i = 0 ; i < solicitudes.length; i++){
    let nombreImportador;
    if (solicitudes[i].numViaje === viaje && solicitudes[i].tipo === "CARGA PELIGROSA"){
      for(let i = 0 ; i < importadores.length ; i++){
        if (importadores[i].id === solicitudes[i].idImportador){
          nombreImportador = importadores[i].nombre;
          break;
        }
      }
      document.querySelector("#tblDatosCargaPeligrosa").innerHTML += `
          <tr>
            <td>${solicitudes[i].puerto}</td>
            <td align="center">${solicitudes[i].contenedores}</td>
            <td>${nombreImportador}</td>
            <td>${solicitudes[i].descripcion}</td>
          </tr>
          `
    }
  }

}
///////////////////////-- HABILITAR IMPORTADOR INHABILITADO -- //////////////(IGNORAR SOLICITUDES CANCELADAS)///////////////
document.querySelector("#btnHabilitarImportador").addEventListener("click", habilitarImportador)
document.querySelector("#btnSeccionHabilitar").addEventListener("click", mostrarSlcImportInhabilitado)

function mostrarSlcImportInhabilitado(){
  let salida = ""
  for (let i = 0; i < importadores.length; i ++){
    const imp = importadores[i]
      if (imp.estado === "inhabilitado"){
        salida += `<option value="${imp.id}">ID Importador: ${imp.id} - Nombre: ${imp.nombre} - Cancelaciones: ${imp.cantCancelaciones} </option>`
      }
  }
  document.querySelector("#slcImportadorInhabilitado").innerHTML = salida
}

function habilitarImportador(){
  let idImportador = Number(document.querySelector("#slcImportadorInhabilitado").value)
  let objImportador 
  let mensaje = ""
  
  for (let i = 0 ; i < importadores.length; i++){
    if (importadores[i].id === idImportador){
      objImportador = importadores[i]
      break;
    }
  }
  
  for (let i = 0 ; i < solicitudes.length; i++){
    if (solicitudes[i].idImportador === idImportador && solicitudes[i].estado === "Cancelada"){
      objImportador.estado = "habilitado"
      objImportador.cantCancelaciones = 0
      solicitudes[i].estado = "Ignorada"
      mensaje = "El importador ha sido habilitado con éxito."
    }
  }
  document.querySelector("#pMensajeOK").innerHTML = mensaje
  mostrarSlcImportInhabilitado();
}
///////////////////////-- VISUALIZAR INFORMACION ESTADISTICA -- /////////////////////////////
document.querySelector("#btnSeccionVisualizarInfo").addEventListener("click", limpiarVIE);

function limpiarVIE(){
  document.querySelector("#pPorCancelaciones").innerHTML = "";
  document.querySelector("#tblLlegadas").innerHTML = "";
  document.querySelector("#tblPorParticipacionLC").innerHTML = "";
}

//////PORCENTAJE CANCELACIONES
document.querySelector("#btnPorCancelaciones").addEventListener("click", porcentajeCancelaciones )

function porcentajeCancelaciones(){
  let soliCanceladas = 0
  let porcentajeSobreTotalSoli
  let totalSoli = 0
  for (let i = 0; i < solicitudes.length; i ++){
    const soli = solicitudes[i]
    if (soli.idImportador === usuarioLogeado.id){
      if(soli.estado === "Cancelada"){
        soliCanceladas ++
      }
        totalSoli ++     
    }
  }
  porcentajeSobreTotalSoli = calcularPorcentaje(soliCanceladas, totalSoli)
  document.querySelector("#pPorCancelaciones").innerHTML = `Porcentaje cancelaciones sobre total de solicitudes: ${porcentajeSobreTotalSoli}%`
}

function calcularPorcentaje (parcial, total){
let porcentaje = (parcial / total) * 100
return porcentaje
}

//////////////////CALENDARIO
document.querySelector("#btnLlegadas").addEventListener("click", armarCalendario);

function armarCalendario(){
  let llegadas = [];
  document.querySelector("#tblLlegadas").innerHTML = `<table border="1px" cellspacing="2px" cellpadding="2px">
  <thead>
      <tr>   
          <th>Nombre Barco</th>
          <th>Llegada</th>
      </tr>
  </thead>
  <tbody id="tblDatosCalendario">    </tbody>
  </table>
  `
  for (let i = 0; i < viajes.length ; i++){
    const viaje = viajes[i]
    if (viaje.llegada >= hoy){
      for (let i = 0 ; i < solicitudes.length ; i++){
        const soli = solicitudes[i]
        if (soli.numViaje === viaje.id && soli.idImportador === usuarioLogeado.id){
          llegadas.push[viaje]
          document.querySelector("#tblDatosCalendario").innerHTML += `<tr>
          <td>${viaje.nombreBuque}</td>
          <td align="center">${fechaStringLinda(viaje.llegada)}</td>
        </tr>`
        }
      }
    }
  }
llegadas.sort(criterio);
}

function criterio(a, b) {
  console.log("Ordenando");
  let dev = -1;
  if (a.llegada > b.llegada) {
    dev = 1;
  }
  return dev;
}

function fechaStringLinda(fecha){
fecha = fecha.toString();
anio = fecha.substring(0, 4);
mes = fecha.substring(4, 6);
dia = fecha.substring(6)

return dia + "/" + mes + "/" + anio
}

 //////// PARTICIPACION DE LAS LINEAS DE CARGA (EMPRESAS) CON IMPORTADOR (MEDIANTE LAS SOLICITUDES) ///////
class ParticipacionLC {
  constructor(nombreEmpresa, idEmpresa, cantidadSoli, porcentaje) {
    this.nombreEmp = nombreEmpresa, 
    this.idEmp = idEmpresa, 
    this.cantSolis = cantidadSoli, 
    this.porcentaje = porcentaje
  }
}

document.querySelector("#btnPorParticipacionLC").addEventListener("click", verParticipacionesLC);

function verParticipacionesLC(){
  let participaciones = [];
  let totalSolis = 0

  for(let i = 0 ; i < solicitudes.length ; i++){
    const unaSolicitud = solicitudes[i]
    if (unaSolicitud.idImportador === usuarioLogeado.id && unaSolicitud.estado === "Confirmada"){
        for(let i = 0 ; i < viajes.length ; i++){
          const unViaje = viajes[i]
          if(unViaje.id === unaSolicitud.numViaje){
            for(let i = 0 ; i < empresas.length ; i++){
              const unaEmpresa = empresas[i]
              let solisEmpresa = 0
              if(unaEmpresa.id === unViaje.idEmpresa){
                solisEmpresa++;
                let nuevaParticipacion = new ParticipacionLC(unaEmpresa.nombre, unaEmpresa.id, solisEmpresa, 0);
                participaciones.push(nuevaParticipacion);
              }
            }
          }
        }
      totalSolis++;
    }
  }

  document.querySelector("#tblPorParticipacionLC").innerHTML = `<table border="1px" cellspacing="2px" cellpadding="2px">
  <thead>
      <tr>   
          <th>Nombre de Empresa</th>
          <th>Porcentaje</th>
      </tr>
  </thead>
  <tbody id="tblDatosPorParticipacionLC">    </tbody>
  </table>
  `

  for(let i = 0 ; i < participaciones.length ; i++){
    participaciones[i].porcentaje = calcularPorcentaje(participaciones[i].cantSolis, totalSolis);
    if(participaciones[i].porcentaje > 0){
      document.querySelector("#tblDatosPorParticipacionLC").innerHTML += `<tr>
      <td>${participaciones[i].nombreEmp}</td>
      <td align="center">${participaciones[i].porcentaje.toFixed(1)}%</td>
    </tr>`
    }
  }
}