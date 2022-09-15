const revertirMensage = (mensaje)=>{
    if(! mensaje) throw "no existe mensaje";
    return mensaje.split("").reverse().join("");
}
module.exports = revertirMensage;
