var datos = {
    nombre: {
        presence: true,
        length: {
            minimum: 3,
            message: "debe tener al menos 3 caracteres"
        }
    },
    numero: {
        presence: true,
        numericality: true,
        length: {
            minimum: 8,
            maximum: 10,
            message: "debe tener entre 8 y 10 dígitos"
        }
    },
    correo: {
        presence: true,
        email: true
    },
    fecha: {
        presence: true,
        date: true
    }
};
 document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("submit-btn").addEventListener("click", function(event) {
        event.preventDefault();
        var form = document.querySelector("form");
        var errors = validate(form, constraints);
        if (errors) {
            
            console.log(errors);
        } else {
       
            form.submit();
        }
    }, false);
});