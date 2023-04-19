 
$(document).ready(function() {
 $('.turnos').click(function() {
     window.open("https://calendly.com/justsmilefotos/turno?primary_color=c1b71c", "Turno", "width=600,height=400");
 });
});



const buttons = document.querySelectorAll('.turnos');
let planSeleccionado = '';

buttons.forEach(button => {
button.onclick = () => {
const nombrePlan = button.parentNode.querySelector('.price__name').innerText;
planSeleccionado = nombrePlan;
console.log('Plan seleccionado:', planSeleccionado);
}

});

$(document).ready(function() {
$('button.turnos').click(function() {
var selectedOption = $(this).siblings('p.price__name').text();
console.log('Se selecciono el plan: ' + selectedOption);
});
});



 $(document).ready(function() {
$('#submit-btn').click(function(e) {
e.preventDefault();

var formData = {
name: $('input[name=name]').val(),
email: $('input[name=email]').val()
};

$.ajax({
type: 'POST',
url: 'https://github.com/VictorSpadoni/ArgentinaProgramaClases/blob/main/info.php',
data: formData,
success: function(response) {
 console.log(response);
},
error: function(xhr, status, error) {
 console.log(xhr.responseText);
}
});
});
});
