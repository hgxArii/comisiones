const VENTAS_BASE = 5


function calcularComision(numeroVentas, PrecioProducto) {
   let comision=0;

    if (numeroVentas > VENTAS_BASE) {
        let ventasextra = numeroVentas - VENTAS_BASE;
        comision = ventasextra * PrecioProducto * 0.10;
    }
    return comision;
}
function calcular() {
    let componenteSueldoBase=document.getElementById("txtSueldoBase");
    let componenteVentas = document.getElementById("txtVentas");
    let componentePrecio =document.getElementById("txtPrecio");

    let sueldoBaseStr=componenteSueldoBase.value;
    let numeroVentasStr=componenteVentas.value;
    let precioProductoStr=componentePrecio.value;

    let SueldoBase = parseFloat(sueldoBaseStr);
    let numeroVentas = parseInt(numeroVentasStr);
    let precioProducto = parseFloat(precioProductoStr);

    let comision = calcularComision(numeroVentas, precioProducto);
    let Total = SueldoBase + comision;

    let spSueldoBase=document.getElementById("spSueldoBase");
    let spcomision=document.getElementById("spComision");
    let spTotal=document.getElementById("spTotal");

 spSueldoBase.textContent = SueldoBase;
 spcomision.textContent = comision;
 spTotal.textContent = Total;


}