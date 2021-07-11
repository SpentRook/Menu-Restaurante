let total_factura = 0;
const $tipoPizza =new Array();
const $tipoHamburguesa =new Array();
let $seleccionJugo;
let contItems = 0;

 
  window.onload=function(){ //Antes de ejecutar cualquier instruccion, espera a que cargue correctamente el DOM

    for (let i = 0; i < document.getElementsByClassName("categoriaPizza").length; i++){
        $tipoPizza[i] = document.querySelector('#select_'+i);
        if($tipoPizza[i] !== null){ //Comprobar si existe un valor en $tipoPizza[i]
            console.log('select_'+i);
        }
    }
    for (let i = 0; i < document.getElementsByClassName("categoriaHamburguesa").length; i++){
        $tipoHamburguesa[i] = document.querySelector('#selectH_'+i);
        if($tipoHamburguesa[i] !== null){ //Comprobar si existe un valor en $tipoHamburguesa[i]
            console.log('selectH_'+i);
        }
    }
    $seleccionJugo = document.querySelector('#selectJ');
  }
 
function agregarProducto(nombre, valor){
    contItems+=1;
    alert("Se ha agregado a lista de compras "+nombre);
    total_factura += valor;
    let total_td = document.getElementById("total_factura");
    total_td.innerText = total_factura;
 
    let fila = document.createElement("tr");
    fila.id="item-"+contItems;

    let td_producto=document.createElement("td");
    td_producto.id="codigox";
    td_producto.innerText=nombre;
    
    let td_precio=document.createElement("td");
    td_precio.id="preciox";
    td_precio.innerText=valor;
    
    let td_eliminar=document.createElement("td");
    td_eliminar.innerText="❌";
    td_eliminar.setAttribute("onclick","eliminarProducto("+contItems+","+valor+")");

    fila.appendChild(td_producto);
    fila.appendChild(td_precio);
    fila.appendChild(td_eliminar);
 
    let body_table = document.getElementById("lista_pedido")
    body_table.appendChild(fila);
 
}

function eliminarProducto(id, valor){
    let producto = document.getElementById("item-"+id);

    let total_td = document.getElementById("total_factura");
    total_factura-=valor;
    total_td.innerText = total_factura;
    let padre = producto.parentNode;
    padre.removeChild(producto);
}
 
function establecerPorcion(nombre, numeroPizza){
    let eleccion = $tipoPizza[numeroPizza].value; 
    let valor = 0;
    

 
    switch(eleccion){
        case 'personal':
            valor = 8000; break;
        case 'mediana':
            valor = 22000; break;
        case 'familiar':
            valor=30000; break;
        default:
            alert('Por favor seleccione una opcion para su pizza');
            return;
    }
    agregarProducto(nombre, valor);
 
}
function abrirPedido(estado){
    
    if(estado){
        document.getElementById("aside").classList.add("active")
    } else {
        document.getElementById("aside").classList.remove("active")
    }
}

function establecerHamburguesa(nombre, numeroHamburguesa){
    let eleccion = $tipoHamburguesa[numeroHamburguesa].value; 
    let valor = 0, valCarne = 0, valPollo=0;
    
    
    switch(numeroHamburguesa){
        case 0:
            valCarne=6500;
            valPollo=7400;
            break;
        case 1:
            valCarne=7500;
            valPollo=8400;
            break;
        case 2:
            valCarne=8500;
            valPollo=9400;
            break;
        case 3:
            valCarne=8000;
            valPollo=8900;
            break;
        case 4:
            valCarne=11500;
            valPollo=13000;
            break;
        case 5:
            valCarne=8000;
            valPollo=8900;
            break;
        case 6:
            valCarne=8500;
            valPollo=9400;
            break;
         case 7:
            valCarne=8700;
            valPollo=9600;
            break;
        default:
            alert("Error, refresque la pagina");
            return;
    }
    switch(eleccion){
        case 'carnes':
            valor = valCarne; break;
        case 'pollo':
            valor = valPollo; break;    
        case 'carneCombo':
            valor=valCarne+4500; break;
        case 'polloCombo':
            valor=valPollo+4500; break;
        default:
            alert('Por favor seleccione una opcion para su hamburguesa');
            return;
    }
    agregarProducto(nombre, valor);
} 
function establecerJugo(estadoJugo, valor){
    let jugo = $seleccionJugo.value;
    if($seleccionJugo.value == false){
        alert("Por favor, seleccione un jugo");
        return;
    }
    agregarProducto((jugo+' en '+estadoJugo), valor);
}


