/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*3️⃣ EJERCICIO 03 3️⃣*/

function sonIguales(x, y) {
    if (x ===y) {
      return(true)
     } else (x !=y);{
      return(false)
     }
   }
   sonIguales(50, 90)
   sonIguales(10, 10)
  

function tienenMismaLongitud(str1, str2) {
   if(str1.length == str2.length) {
      return(true)
   } else(str1.length != str1.length); {
      return(false);
   }
   } tienenMismaLongitud("hola", "hola")
      tienenMismaLongitud("no", "sueño")


function menosQueNoventa(num) {
   if(num < 90) {
   return(true)
   } else {
      return(false)
   }
   } menosQueNoventa(98)
   menosQueNoventa(50)

function mayorQueCincuenta(num) {
   if(num > 50) { 
      return(true)
   } else { 
      return(false);
   }
} mayorQueCincuenta(80)
mayorQueCincuenta(30)

function esPar(num) {
   if(num%2 === 0) {
      return (true);
   }
   else { 
   return(false);
   }
}
esPar(8)
esPar(5)


function esImpar(num) {
   if(num%2 !== 0) {
      return(true);
   }
   else {
      return(false);
   }
}
esImpar(7)
esImpar(2)

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   tienenMismaLongitud,
   sonIguales,
   menosQueNoventa,
   mayorQueCincuenta,
   esPar,
   esImpar,
};
