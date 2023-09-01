/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*4️⃣ EJERCICIO 04 4️⃣*/

// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function elevarAlCuadrado(num) {
   return(Math.pow(num, 2));
} elevarAlCuadrado(9)

function elevarAlCubo(num) {
   return(Math.pow(num,3))
} elevarAlCubo(7)

function elevar(num, exponent) {
   return(Math.pow(num, exponent))
} elevar(8,5)

function redondearNumero(num) {
   return(Math.round(num))
} redondearNumero(5.67)

function redondearHaciaArriba(num) {
   return(Math.ceil(num))
} redondearNumero(6.23)

function numeroRandom() {
   return(Math.random())
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   elevarAlCuadrado,
   elevarAlCubo,
   elevar,
   redondearNumero,
   redondearHaciaArriba,
   numeroRandom,
};
