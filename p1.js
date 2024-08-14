/*6)
Desarrolla un programa que permita al usuario ingresar nombres de frutas y clasificarlas
en dos categorías: frutas cítricas y frutas con pepitas. El programa debe solicitar al usuario
que ingrese el nombre de una fruta y su tipo (cítrico o pepita) cinco veces. Dependiendo
del tipo de fruta ingresada, el programa debe agregar la fruta a la lista correspondiente
utilizando diferentes métodos de array. Finalmente, el programa debe mostrar las frutas
clasificadas en cada categoría.
 */
let arregloPep=[];
let arregloCit=[];
let n=parseInt(prompt("ingrese total de frutas"));
for(let i=1;i<=n;i++){
let j=prompt("ingrese fruta");
let p=prompt("es cítrico (si/no)")

if (p=="si"){
    arregloCit.push(j)
}else{
    arregloPep.push(j)

}
}
alert(arregloCit);
alert(arregloPep);

