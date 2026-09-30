const VENTAS_BASE = 5 


function calcularComision(numeroVentas, PrecioProducto) { 
    let comision = 0;

    if (numeroVentas >= VENTAS_BASE) { 
        comision = numeroVentas * PrecioProducto * 0.10; 
    } 

    return comision; 
}
    
function calcular() { 

    let numeroVentas = recuperarFloat("txtVentas"); 
    let sueldoBase = recuperarFloat("txtSueldoBase"); 
    let PrecioProducto = recuperarFloat("txtPrecio"); 

    let Comision = calcularComision(numeroVentas, PrecioProducto); 
    let Total = sueldoBase + Comision; 

    mostrarEnSpam("spSueldoBase", sueldoBase); 
    mostrarEnSpam("spComision", Comision); 
    mostrarEnSpam("spTotal", Total); 
} 