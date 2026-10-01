
 const VENTAS_BASE = 5;
function calcularComision(numeroVentas, PrecioProducto) {
    let comision = 0;

    if (numeroVentas >= VENTAS_BASE) {
        comision = numeroVentas * PrecioProducto * 0.10;
    }

    return comision;
}
 function validarSueldoBase() {
    let numeroventasStr = recuperarTexto("txtSueldoBase");
    let mensaje = document.getElementById("errorSueldoBase");

    mensaje.textContent = "";

    if (numeroventasStr == "") {
        mensaje.textContent = "El campo no puede estar vacío";
        return false;
    }

    if (!/^[0-9]+$/.test(numeroventasStr)) {
        mensaje.textContent = "Solo se permiten números";
        return false;
    }

    if (numeroventasStr.length > 5) {
        mensaje.textContent = "Máximo 5 dígitos";
        return false;
}
    return true;
}
 function validarVentas() {
    let numeroventasStr = recuperarTexto("txtVentas");
    let mensaje = document.getElementById("errorVentas");

    mensaje.textContent = "";

    if (numeroventasStr == "") {
        mensaje.textContent = "El campo no puede estar vacío";
        return false;
    }

    if (!/^[0-9]+$/.test(numeroventasStr)) {
        mensaje.textContent = "Solo se permiten números";
        return false;
    }

    if (numeroventasStr.length > 5) {
        mensaje.textContent = "Máximo 5 dígitos";
        return false;
}
    return true;
}
 function validarPrecio() {
    let numeroventasStr = recuperarTexto("txtPrecio");
    let mensaje = document.getElementById("errorPrecio");

    mensaje.textContent = "";

    if (numeroventasStr == "") {
        mensaje.textContent = "El campo no puede estar vacío";
        return false;
    }

    if (!/^[0-9]+$/.test(numeroventasStr)) {
        mensaje.textContent = "Solo se permiten números";
        return false;
    }

    if (numeroventasStr.length > 5) {
        mensaje.textContent = "Máximo 5 dígitos";
        return false;
}
    return true;
}
 function calcular() {

    if (validarSueldoBase() == false) {
        return;
    }

    if (validarVentas() == false) {
        return;
    }

    if (validarPrecio() == false) {
        return;
    }

    let numeroVentas = recuperarFloat("txtVentas");
    let sueldoBase = recuperarFloat("txtSueldoBase");
    let PrecioProducto = recuperarFloat("txtPrecio");

    let Comision = calcularComision(numeroVentas, PrecioProducto);
    let Total = sueldoBase + Comision;

    mostrarEnSpam("spSueldoBase", sueldoBase);
    mostrarEnSpam("spComision", Comision);
    mostrarEnSpam("spTotal", Total);
}
