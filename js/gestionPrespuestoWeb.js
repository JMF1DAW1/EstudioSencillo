import * as gesPres from "./gestionPresupuesto.js";

function mostrarDatoEnId(idElemento, valor)
{
    document.getElementById(idElemento).innerHTML = valor;
}

function mostrarGastoWeb(idElemento, gasto)
{
    let div = document.createElement('div');
    let div1 = document.createElement('div');
    let div2 = document.createElement('div');

    div.className = "gasto";
    div1.className = "gasto-descripcion";
    div2.className = "gasto-valor";

    div1.append(gasto.descripcion);
    div2.append(gasto.valor);

    div.append(div2);
    div.append(div1);

    let contenido = document.getElementById(idElemento);
    contenido.append(div);
}

function repintar()
{
    mostrarDatoEnId("presupuesto", gesPres.mostrarPresupuesto());
    mostrarDatoEnId("gastos-totales", gesPres.calcularTotalGastos());
    mostrarDatoEnId("balance-total", gesPres.calcularBalance());

    document.getElementById("listado-gastos-completo").innerHTML = "";

    let gastos = gesPres.listarGastos();
    for(let g of gastos)
    {
        mostrarGastoWeb("listado-gastos-completo", g);
    }
}

function actualizarPrespuestoWeb()
{
    this.handleEvent = function(e)
    {
        let nuevoValor = prompt("introduce valor");

        nuevoValor = parseFloat(nuevoValor);

        gesPres.actualizarPrespuesto(nuevoValor);

        repintar();
    }
}

let manejadorActualizar = new actualizarPrespuestoWeb();
let butActualizar = document.getElementById("actualizarpresupuesto");
butActualizar.addEventListener("click", manejadorActualizar);

function nuevoGastoWeb()
{
    this.handleEvent = function (e)
    {
        let nuevaDesc = prompt("introduce descripcion");
        let nuevoValor = prompt("introduce valor");

        nuevoValor = parseFloat(nuevoValor);

        let nuevoGasto = new gesPres.CrearGasto(nuevaDesc, nuevoValor);

        gesPres.anyadirGastos(nuevoGasto);

        repintar();
    }
}

let manejadorNuevoGasto = new nuevoGastoWeb();
let butAnyadirGasto = document.getElementById("anyadirgasto");
butAnyadirGasto.addEventListener("click", manejadorNuevoGasto);

function nuevoGastoWebFormulario()
{
    this.handleEvent = function (e)
    {
        let plantillaFormulario = document.getElementById("formulario-template").content.cloneNode(true);
        var formulario = plantillaFormulario.querySelector("form");
        let manEnviar = new manejadorEnviar();
        formulario.addEventListener("submit", manEnviar);

        let manCancelar =new manejadorCancelar();
        let butCancelar = formulario.querySelector("button.cancelar")
        butCancelar.addEventListener("click", manCancelar);

        document.getElementById("controlesprincipales").append(formulario);
    }
}
let anyadirGastoForm = new nuevoGastoWebFormulario();
let butAnyadirForm = document.getElementById("anyadirgasto-formulario");
butAnyadirForm.addEventListener("click", anyadirGastoForm);

function manejadorEnviar()
{
    this.handleEvent = function (e)
    {
        e.preventDefault();
        let form = e.currentTarget;

        let nuevaDesc = form.elements.descripcion.value;
        let nuevoValor = form.elements.valor.value;

        let nuevoGastoForm = new gesPres.CrearGasto(nuevaDesc, nuevoValor);

        gesPres.anyadirGastos(nuevoGastoForm);

        repintar();
    }
}

function manejadorCancelar()
{
    this.handleEvent = function(e)
    {
        e.target.form.remove();
        repintar();
    }
}

export {
    mostrarDatoEnId,
    mostrarGastoWeb,
}