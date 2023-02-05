var valor = document.getElementById("valor");
valor.addEventListener('keyup', convertir);
txtResultado = document.getElementById("resultado");

unidad1 = document.getElementById("unidad1");

unidad1.addEventListener('change', convertir);

var resultado;

let medidas = [];
//const t1 = document.getElementById("tablaMedidas");
//t1.addEventListener('keyup',crearTabla);
function mantener(){
    txtResultado.innerHTML = valor.value;
    var unidades = document.getElementById("valor").value;
    if(unidades==""){
        alert("No puedes dejar el campo en blanco");
        document.getElementById("valor").focus;
    }
}
function convertir(){
    if(valor.value==''){
        return;
    }
    numero = valor.value;
    numero = parseFloat(numero);

    if(unidad1.value=="km->miles"){
        resultado = numero * 0.621;
        txtResultado.innerHTML = resultado.toFixed(2);
    }
    if(unidad1.value=="miles->km"){
        resultado = numero * 1.621;
        txtResultado.innerHTML = resultado.toFixed(2);
    }
    if(unidad1.value=="pies->metros"){
        resultado = numero * 0.3048;
        txtResultado.innerHTML = resultado.toFixed(2);
    }
    if(unidad1.value=="metros->pies"){
        resultado = numero * 1.3046;
        txtResultado.innerHTML = resultado.toFixed(2);
    }
    if(unidad1.value=="centimetros->pulgadas"){
        resultado = numero * 1.3937;
        txtResultado.innerHTML = resultado.toFixed(2);
    }
    if(unidad1.value=="pulgadas->centimetros"){
        resultado = numero * 0.3937;
        txtResultado.innerHTML = resultado.toFixed(2);
    }
    
}
function guardar(){
    var unidades = document.getElementById("valor").value;
    if(unidades==""){
        alert("No puedes dejar el campo en blanco");
        document.getElementById("valor").focus;
    }else{
        medidas.push(unidades);
        document.getElementById("valor").textContent="";
        console.log(unidades);
        var tabla=document.getElementById("tablaMedidas");
        var fila;
	    var celda;
        for(var i=0;i<medidas.length;i++){
    
            var fila=document.createElement("tr");
        
            var celda=document.createElement("td");
        
            celda.appendChild(document.createTextNode(medidas[i].unidades));
        
            fila.appendChild(celda)
        
            tabla.appendChild(fila);
	    }
 
	    document.body.appendChild(tabla)
	    
    }
}

function crearTabla(){
    var tabla=document.createElement("table");
    var fila;
	var celda;
        for(var i=0;i<medidas.length;i++){
    
            var fila=document.createElement("tr");
        
            var celda=document.createElement("td");
        
            celda.appendChild(document.createTextNode(medidas[i].unidades));
        
            fila.appendChild(celda)
        
            tabla.appendChild(fila);
	    }
 
	document.body.appendChild(tabla)
        
}