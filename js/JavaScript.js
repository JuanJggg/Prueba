var segundos;
function tiempo(){
    segundos = new Date();
}

function clickk(){
    let usuario = $("#lusuario").val();
    let contraseña = $("#lcontraseña").val();
    let email = $("#lemail").val();
    let fechasistema = new Date();
    let diferencia = fechasistema-segundos;
    let timesec = parseInt(diferencia/1000);
    let timemin = parseInt(timesec/60);
    let timehours= parseInt(timemin/60);
    let mesesss = fechasistema.getMonth();
    alert(mesesss+1)
    if(timesec>59){
        timesec=timesec%60;
    }
    if(timemin>59){
        timemin=timemin%60;
    }
    if(timehours>59){
        timehours=timehours%24;
    }
    alert("Han pasado "+timehours+" horas "+timemin+" minutos "+timesec+" segundos");
}

function revisioninputu(){
    let usuario = $("#lusuario").val();
    if(usuario.length<3){
       $("#lusuario").css('background','red');
       $("#lerror_usuario").show();
       $("#lerror_usuario").css('color','red')
       Swal.fire({
        icon: 'error',
        title: 'Campo vacio',
        text: 'Por favor llene el campo',
        footer: '<a href="">Algun problema?</a>'
      })
    }else{
       $("#lusuario").css('background','green');
       $("#lerror_usuario").hide();
    }
}

$(document).ready(function(){
    $("#formulario").validate({
        rules:{
            nombre:{required: true, minlength: 3,maxlength: 10}
        },
        messages:{
            nombre:{
                required: "Este campo es requerido",
                minlength: "El campo debe tener minimo 3 caracteres",
                maxlength: "El campo debe tener maximo 10 caracteres"
            }
        }
    })
})