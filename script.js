const estudiantes = {
    "Clase 1": [
        "Jeremias Alfredo Ricardo Orrala",
        "Stafanie Anahi Suarez Alejandro",
        "Joao Ismael Limones Muñoz",
        "Adriana Belén Rodriguez Suarez",
        "Tamara Anahi Reyes Guale",
        "Juan Diego Vera Aquino",
        "Mailyn Quirumbay",
        "Ian Gonzalez Mejillones",
        "Tais Camila Ortega Chamba",
        "Bianca Ashley Ortega Chamba",
        "Amir Jeremy Alejandro Salcedo",
        "Jordan Sebastian Lino Dominguez"
    ],

    "Clase 2": [
        "Fausto David Rodriguez Pozo",
        "Sheyla Valeska Pilligua Pita",
        "Lissette Susana Solano Quinde",
        "David Gomez Solano",
        "Nicolas Michael Villon Aquino",
        "Doménica Yaritza Rodríguez Suárez",
        "Jesus Mejillones Tigrero",
        "Nayelly Katherine Parraga Quirumbay",
        "Karla Mayle Tomalá Cruz",
        "Mirellys Lilibeth Ricardo Rodriguez",
        "Ashley Samantha Zambrano Chenche",
        "Lisbeth Gonzalez Ortiz"
    ],

    "Clase 3": [
        "Dayana Valentina Muñiz Quimi",
        "Daniel Fernando Candelario Panchana",
        "Ivanna Valentina Carvajal Orrala",
        "Gabriel Isaac Ricardo Suarez",
        "John Steven Macias Sánchez",
        "Domenica Samantha Tomalá Balon",
        "Pamela Valentina Solano Borbor",
        "Sara Valentina Hernández Guevara",
        "Jorge Wladimir Hernández Guevara",
        "Cristhel Mirelly Escalante Medina",
        "Kevin Josué Limones Muñoz",
        "Scarlette Valeshka Lino Domínguez"
    ],

    "Clase 4": [
        "Justin Javier Roca Tomala",
        "Alexis Ariel López Rosales",
        "Aylin Elizabeth Holguin Baque",
        "Anderson Jahir Zambrano Chenche",
        "Felix Gabriel Muñiz Quimi",
        "Maria Fernanda Gonzabay Palma",
        "Isaac Arturo Rosales Sánchez",
        "Diego Andrés Marizalde Drouet",
        "Camila Darlet Maldonado Luna",
        "Cristina Yadira Bernabé Muñoz",
        "Luis Angel Ricardo Rodríguez",
        "Karla Hernandez Del Pezo",
        "Samuel Andrés Rodríguez Pozo",
        "Adrian Joel Rodriguez Suarez",
        "Niurka Rivera Muñoz",
        "Fernanda Nicole Ricardo Orrala",
        "Danna Gomez Lindao",
        "Joselyn Jimena Muñiz Quimi",
        "Valeska Milena Escalante Medina",
        "Isabella Valeria Guzñay Gomez",
        "Natasha Isabel Bernabé Rivera",
        "Ana Belen Rosales Sanchez"
    ]
};

document.addEventListener("DOMContentLoaded", cargarLista);

function cargarLista() {
    const clase = document.getElementById("clase").value;
    const contenedor = document.getElementById("lista");

    contenedor.innerHTML = "";

    estudiantes[clase].forEach(nombre => {
        const div = document.createElement("div");
        div.className = "estudiante";

        div.innerHTML = `
            <span>${nombre}</span>
            <select>
                <option value="Asistencia">Asistencia</option>
                <option value="Falta injustificada">Falta</option>
                <option value="Falta justificada">Justificada</option>
            </select>
        `;

        contenedor.appendChild(div);
    });
}

function guardarAsistencia() {
    const clase = document.getElementById("clase").value;
    const lista = document.querySelectorAll(".estudiante");

    let registros = [];

    lista.forEach(item => {
        const nombre = item.querySelector("span").textContent;
        const estado = item.querySelector("select").value;

        registros.push({
            clase,
            nombre,
            estado,
            fecha: new Date().toLocaleString()
        });
    });

    localStorage.setItem("asistencia_" + clase, JSON.stringify(registros));

    alert("Asistencia guardada correctamente ✅");
}
}
