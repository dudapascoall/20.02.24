const variaval1 = "valor somente leitura"; //declaracao de variavel;
var variaval2 = "valor editavel";

try { 
    variaval1 = "valor nao permitido";
    console.log("variavel1 foi alterada para:", variaval1);
} catch (e) {
    console.error("ops! ocorreu um erro:", e);
}

try {
    variaval2 = "valor permitido";
    console.log(" a variavel2 foi alterada para:", variaval2);
} catch (e) {
    console.error("ops! ocorreu um erro:", e);
}