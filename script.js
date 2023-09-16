// Redirecciones

function redireccionarLinkedin () {

    window.location.href = "https://www.linkedin.com/in/daniela-del-valle-8862b6219";

    }

function redireccionarGithub(){
    window.location.href = "https://github.com/Daniela-DV?tab=repositories";
}


const btnEncriptar = document.querySelector(".btn-encriptar");

const btnDesencriptar = document.querySelector( ".btn-desencriptar");

const btnCopiar = document.querySelector(".btn-copiar")

var texto = document.querySelector(".text-area");

var mensaje = document.querySelector(".texto-encriptado");

const munheco = document.querySelector(".munheco")


btnEncriptar.addEventListener("click", function() {
    const valorOriginal = texto.value;
    texto.value = "";

    if (/^[a-z\s]+$/.test(valorOriginal)) {
        const valorEncriptado = encriptarTexto(valorOriginal.toLowerCase());
        mensaje.value =  valorEncriptado;
        texto.value = "";
        munheco.style.display = "none";
        
        Swal.fire({
        icon: 'success',
        title: 'Éxito',
        text: 'El texto fue encriptado con éxito',
    })

    } else {
       
        Swal.fire({
            icon: 'error',
            title: 'Intenta nuevamente ',
            text: 'Debes ingresar un texto con letras minúsculas y sin caracteres especiales',
           
        })
    }
});

// function encriptarTexto(texto) {
//     let matrizCodigo = [
//         ["e", "enter"],
//         ["i", "imes"],
//         ["a", "ai"],
//         ["o", "ober"],
//         ["u", "ufat"]
//     ];

//     for (let i = 0; i < matrizCodigo.length; i++) {
//         texto = texto.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
//     }

//     return texto;
// };

function encriptarTexto(texto) {
    let matrizCodigo = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ];

    for (let i = 0; i < matrizCodigo.length; i++) {
        let regex = new RegExp(matrizCodigo[i][0], "g");
        texto = texto.replace(regex, matrizCodigo[i][1]);
    }

    return texto;
};



btnDesencriptar.addEventListener("click", function() {
    var desencriptado = "";
    const encriptado = mensaje.value;
    if (encriptado == ""){

        Swal.fire({
            icon: 'error',
            title: 'Intenta nuevamente ',
            text: 'Debes ingresa un texto en minusculas y sin caracteres especiales',
            
           
        })

    } else { if (window.innerWidth <= 450) {


            if (/^[a-z\s]+$/.test(encriptado)) {

                desencriptado = desencriptarTexto (encriptado);
                texto.value= desencriptado;
                mensaje.value="";
                    
                Swal.fire({
                        icon: 'success',
                        title: '',
                        text: 'El texto fue desencriptado con éxito',
                    })
            }
                else{
                    mensaje.value="";
                    Swal.fire({
                        icon: 'error',
                        title:  'Ocurrio un herror',
                        text: 'Por favor asegurese de ingresar un texto en minusculas y sin caracteres especiales', 
                    
                    })
                }
         } else {

                if (/^[a-z\s]+$/.test(encriptado)) {

                    desencriptado = desencriptarTexto (encriptado);
                    texto.value= desencriptado;
                    munheco.style.display = "flex";
                    mensaje.value="";
                        
                    Swal.fire({
                            icon: 'success',
                            title: '',
                            text: 'El texto fue desencriptado con éxito',
                        })
                }
                    else{
                        mensaje.value="";
                        Swal.fire({
                            icon: 'error',
                            title:  'Ocurrio un herror',
                            text: 'Por favor asegurese de ingresar un texto en minusculas y sin caracteres especiales', 
                        
                        })

                    }
                }   
   
    }});
    


// function desencriptarTexto(texto) {
//     let matrizCodigoDesencriptado = [
//         ["enter", "e"],
//         ["imes", "i"],
//         ["ai", "a"],
//         ["ober", "o"],
//         ["ufat", "u"]
//     ];

//     for (let i = 0; i < matrizCodigoDesencriptado.length; i++) {
//         texto = texto.replaceAll(matrizCodigoDesencriptado[i][0], matrizCodigoDesencriptado[i][1]);
//     }

//     return texto;
// };

function desencriptarTexto(texto) {
    let matrizCodigoDesencriptado = [
        ["enter", "e"],
        ["imes", "i"],
        ["ai", "a"],
        ["ober", "o"],
        ["ufat", "u"]
    ];

    for (let i = 0; i < matrizCodigoDesencriptado.length; i++) {
        let regex = new RegExp(matrizCodigoDesencriptado[i][0], "g");
        texto = texto.replace(regex, matrizCodigoDesencriptado[i][1]);
    }

    return texto;
};

btnCopiar.addEventListener("click", function() {

    
    copiar(); 
    Swal.fire({
        icon: 'success',
        title: '',
        text: 'Texto copiado al portapapeles',
    })

})

function copiar () {
    let textoCopiado = "";
    if (texto.value == "") {
         textoCopiado = mensaje.value;
    }else {
        textoCopiado= texto.value;
    }
    const textArea = document.createElement("textarea");
    textArea.value = textoCopiado;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
}