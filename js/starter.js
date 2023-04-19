//validacion de formulario y formulario wizard
$(document).ready(function() {
    $('.seccion-form').hide();
    $('#section1').show();
  
    $("#miFormulario").validate({
      rules: {
        nombre: {
          required:true,
          minlength:3,
          maxlength:30,
        },
        age: {
          required:true,
        },
        phone:{
          required:true,
        },
        email:{
          required:true,
          email:true,
        }
      }
    });
  
    $('.nextSection').click(function(){
      let currentSection = $('.current');
      let nextSection = currentSection.next('.seccion-form');
      if (nextSection.length > 0){
        if ($("#miFormulario").valid()) {
          currentSection.removeClass('current').hide();
          nextSection.addClass('current').show();
        }
      }
    });
  
    $('.prevSection').click(function(){
      let currentSection =$('.current');
      let prevSection = currentSection.prev('.seccion-form');
      if  (prevSection.length > 0) {
        currentSection.removeClass('current').hide();
        prevSection.addClass('current').show();
      }
    });
  });
//imprimir datos pdf
function guardarInfo() {
    const nombre = document.getElementById("nombre").value;
    const edad = document.getElementById("edad").value;
    const email = document.getElementById("email").value;
    const fecha = document.getElementById("fecha").value;
    const telefono = document.getElementById("phone").value;
    const enfermedadSi = document.getElementById("si").checked;
    const enfermedadNo = document.getElementById("no").checked;
  
    let datos = { nombre, edad, email, fecha, phone };
    
    datos.enfermedad = enfermedadSi ? 'Sí' : enfermedadNo ? 'No' : '';
  
    sessionStorage.setItem("datosDelFormulario", JSON.stringify(datos));
  
    const datosFormulario = JSON.parse(sessionStorage.getItem("datosDelFormulario"));
    const contenido = `
      <h1>Datos del formulario:</h1>
      <p><strong>Nombre:</strong> ${datosFormulario.nombre}</p>
      <p><strong>Edad:</strong> ${datosFormulario.edad}</p>
      <p><strong>Teléfono:</strong> ${datosFormulario.telefono}</p>
      <p><strong>Email:</strong> ${datosFormulario.email}</p>
      <p><strong>Fecha de inicio:</strong> ${datosFormulario.fecha}</p>
      <p><strong>¿Padece alguna enfermedad que complique la actividad física?:</strong> ${datosFormulario.enfermedad}</p>
    `;
  
    html2pdf().from(contenido).save();
  }