const VENTAS_BASE = 5;


function calcularComision(numeroVentas, PrecioProducto) {
    let comision = 0;

    if (numeroVentas >= VENTAS_BASE) {
        comision = numeroVentas * PrecioProducto * 0.10;
    }

    return comision;
}


function validarSueldoBase() {
    let valor = document.getElementById("txtSueldoBase").value;
    let mensaje = document.getElementById("errorSueldoBase");

    if (valor == "") {
        mensaje.textContent = "El campo no puede estar vacío";
        return false;
    }

    if (!/^[0-9]+$/.test(valor)) {
        mensaje.textContent = "Solo se permiten números";
        return false;
    }

    if (valor.length > 5) {
        mensaje.textContent = "Máximo 5 dígitos";
        return false;
    }

    mensaje.textContent = "";
    return true;
}


function validarVentas() {
    let valor = document.getElementById("txtVentas").value;
    let mensaje = document.getElementById("errorVentas");

    if (valor == "") {
        mensaje.textContent = "El campo no puede estar vacío";
        return false;
    }

    if (!/^[0-9]+$/.test(valor)) {
        mensaje.textContent = "Solo se permiten números";
        return false;
    }

    if (valor.length > 5) {
        mensaje.textContent = "Máximo 5 dígitos";
        return false;
    }

    mensaje.textContent = "";
    return true;
}


function validarPrecio() {
    let valor = document.getElementById("txtPrecio").value;
    let mensaje = document.getElementById("errorPrecio");

    if (valor == "") {
        mensaje.textContent = "El campo no puede estar vacío";
        return false;
    }

    if (!/^[0-9]+$/.test(valor)) {
        mensaje.textContent = "Solo se permiten números";
        return false;
    }

    if (valor.length > 5) {
        mensaje.textContent = "Máximo 5 dígitos";
        return false;
    }

    mensaje.textContent = "";
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
