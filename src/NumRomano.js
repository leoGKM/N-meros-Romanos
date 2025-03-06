function conversor (num){
    let resultado = "";
    if (num == 4){
        resultado += "IV";
        num -= 4;
    } else if (num >= 5){
        resultado += "V";
        num -= 5;
    }
    for (let i = 0; i < num; i++) {
        resultado += "I"; 
      }

    return resultado;
}
export default conversor;