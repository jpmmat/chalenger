
const inputTexto = document.querySelector(".input-texto");
const mensagem = document.querySelector(".mensagem");
const textoCopiado = document.querySelector(".input-Texto");

function btnEncriptar(){
    const textoEncriptado = encriptar(inputTexto.value)
    mensagem.value = textoEncriptado
    mensagem.style.backgroundImage ="none"
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["a","al"], ["e","enter"], ["i","imes"], ["o","ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();
    
    for( let i = 0; i<matrizCodigo.length; i++){
        if (stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
      
    }
    return stringEncriptada
}  
function btnDesencriptar(){
    const textoDesencriptado = desencriptar(mensagem.value)
    inputTexto.value = textoDesencriptado
    
   
}
function desencriptar(stringDesencriptada){
    let matrizDescodificada= [["al","a"], ["enter","e"], ["imes","i"], ["ober","o"],["ufat","u"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for( let i = 0; i<matrizDescodificada.length; i++){
        if (stringDesencriptada.includes(matrizDescodificada[i][0])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizDescodificada[i][0], matrizDescodificada[i][1]);
        }
      
    }
    return stringDesencriptada
}  
const btnCopy = document.querySelector('.copy');
const btnPaste = document.querySelector('.paste');
const textArea = document.querySelector('textarea');

btnCopy.addEventListener('click', (e) => {
  e.preventDefault();
  
  navigator.clipboard.writeText(textArea.value);
  
});

btnPaste.addEventListener('click', async (e) => {
  e.preventDefault();

  const response = await navigator.clipboard.readText();
  textArea.value = response;
  
  
});