let presupuesto = 0;
let idGasto = 0;
let gastos = [];

function mostrarPresupuesto()
{
    let x = presupuesto;
    return (`Tu presupuesto actual es de ${x} €.`)
}

function actualizarPrespuesto(presupuestoAct)
{
    if(presupuestoAct>=0)
    {
        presupuesto = presupuestoAct;
    }
    else
    {
        presupuesto = 0;
    }
    return presupuesto;
}

function CrearGasto (descripcion, valor)
{
    this.descripcion = descripcion;

    if(valor>0)
    {
        this.valor = valor;
    }

    this.mostrarGasto = function()
    {
        return (`gasto correspondiente a ${this.descripcion} con valor ${valor} €.`)
    }

    this.actualizarPrespuesto = function (actualizarPres)
    {
        this.descripcion = actualizarPres;
    }

    this.actualizarValor = function(valorAct)
    {
        if(valorAct>0)
        {
            this.valor = valorAct;
        }
    }
}

function anyadirGastos(gasto)
{
    gasto.id = idGasto;
    idGasto++;
    gastos.push(gasto);
}

function listarGastos ()
{
    return gastos;
}
function calcularTotalGastos()
{
    let total = 0;
    for (let i=0; i <gastos.length; i++)
    {
        total = total + gastos[i].valor;
    }
    return total;
}

function calcularBalance()
{
    let balance;
    balance = presupuesto - calcularTotalGastos();
    return balance;
}

export {
    calcularBalance,
    calcularTotalGastos, 
    CrearGasto, 
    listarGastos, 
    anyadirGastos,
    actualizarPrespuesto,
    mostrarPresupuesto,
}