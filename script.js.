document.addEventListener("DOMContentLoaded", mostrarRegistros);

function registrar() {
    const clase = document.getElementById("clase").value;
    const nombre = document.getElementById("nombre").value;
    const estado = document.getElementById("estado").value;

    if (nombre === "") {
        alert("Ingrese un nombre");
        return;
    }

    const registro = {
        clase,
        nombre,
        estado,
        fecha: new Date().toLocaleString()
    };

    let datos = JSON.parse(localStorage.getItem("asistencia")) || [];
    datos.push(registro);
    localStorage.setItem("asistencia", JSON.stringify(datos));

    document.getElementById("nombre").value = "";
    mostrarRegistros();
}

function mostrarRegistros() {
    const tabla = document.getElementById("tabla");
    tabla.innerHTML = "";

    let datos = JSON.parse(localStorage.getItem("asistencia")) || [];

    datos.forEach(reg => {
        let fila = `
            <tr>
                <td>${reg.clase}</td>
                <td>${reg.nombre}</td>
                <td>${reg.estado}</td>
                <td>${reg.fecha}</td>
            </tr>
        `;
        tabla.innerHTML += fila;
    });
}
