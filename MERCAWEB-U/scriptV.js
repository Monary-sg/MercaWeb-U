function filtrarArticulos() {
    // Obtener el valor del campo de búsqueda y el filtro de precios
    var busqueda = document.getElementById("busqueda").value.toLowerCase();
    var filtro = document.getElementById("filtro").value;
    
    // Obtener todos los artículos
    var articulos = document.querySelectorAll(".product");
    
    articulos.forEach(function(product) {
        // Obtener el nombre y el precio de cada artículo
        var nombre = product.querySelector("h2").textContent.toLowerCase();
        var precio = parseFloat(product.getAttribute("data-precio"));
        
        // Comprobar si el artículo debe ser mostrado según la búsqueda
        var coincideBusqueda = nombre.includes(busqueda);
        
        // Filtrar según el precio
        var coincidePrecio = true; // Por defecto, coincide con todos los precios
        if (filtro === "economico") {
            coincidePrecio = precio < 100;
        } else if (filtro === "medio") {
            coincidePrecio = precio >= 150 && precio <= 200;
        } else if (filtro === "caro") {
            coincidePrecio = precio > 300;
        }

        // Mostrar u ocultar el artículo
        if (coincideBusqueda && coincidePrecio) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}


