import * as gesPres from "./gestionPresupuesto.js";
import * as gesPresWeb from "./gestionPrespuestoWeb.js";

gesPres.actualizarPrespuesto(2000);

gesPresWeb.mostrarDatoEnId("presupuesto", gesPres.mostrarPresupuesto());

let g1 = new gesPres.CrearGasto("KFC", 25);
let g2 = new gesPres.CrearGasto("mcdonaldo", 13);

gesPres.anyadirGastos(g1);
gesPres.anyadirGastos(g2);

gesPresWeb.mostrarDatoEnId("gastos-totales", gesPres.calcularTotalGastos());
gesPresWeb.mostrarDatoEnId("balance-total", gesPres.calcularBalance());

let gastos = gesPres.listarGastos();

for(let g of gastos)
{
    gesPresWeb.mostrarGastoWeb("listado-gastos-completo", g);
}