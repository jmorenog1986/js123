let personas = [];
let cantidadPersonas = 0;
function guardar() {

    personas[cantidadPersonas] =[
            prompt("Digite un nombre"),
            prompt("Digite un apellido")
        ];
    incremento();
}
function incremento() {
    if (cantidadPersonas < 10) {
        cantidadPersonas++;
    } else {
        alert("Ha superada el límite de usuarios. ");
    }
}
function eliminar() {
    let i = Number(prompt("Digite el número del índice a eliminar"));
    personas[i] = null;
}
function ver() {
    console.log(personas);
}
