fetch('lugar_turistico.json')
    .then(response => response.json())
    .then(data => {

        document.getElementById("lugar").textContent = data.lugar;
        document.getElementById("descripcion").textContent = data.descripcion;

        document.getElementById("region").textContent = data.ubicacion.region;
        document.getElementById("pais").textContent = data.ubicacion.pais;

        document.getElementById("horario").textContent = data.horario;
        document.getElementById("precio").textContent = data.precios;

        document.getElementById("email").textContent = data.contactos.email;
        document.getElementById("telefono").textContent = data.contactos.telefono;

        const listaActividades = document.getElementById("actividades");
        data.actividades.forEach(act => {
            const li = document.createElement("li");
            li.textContent = act;
            listaActividades.appendChild(li);
        });

        const listaGastronomia = document.getElementById("gastronomia");
        data.gastronomia.forEach(comida => {
            const li = document.createElement("li");
            li.textContent = comida;
            listaGastronomia.appendChild(li);
        });
    })
    .catch(error => console.error("Error al cargar el JSON:", error));
