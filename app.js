// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Lista para guardar los nombres de los participantes
let amigos = [];

// Referencia al input de nombres
const input = document.getElementById("amigo");
// Referencia a la lista donde se muestran los nombres
const listaParticipantes = document.getElementById("listaAmigos");

// Función para agregar un amigo a la lista
function agregarAmigo() {
    // Captura el valor del campo de entrada
    const nombre = input.value.trim();

    // Valida la entrada: si está vacío, muestra alerta
    if (!nombre) {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Si el nombre no está repetido, lo agrega al array
    if (!amigos.includes(nombre)) {
        amigos.push(nombre); // Añade el nombre al arreglo

        // Muestra el nombre en la lista visual
        const li = document.createElement("li");
        li.textContent = nombre;
        listaParticipantes.appendChild(li);

        // Limpia el campo de entrada
        input.value = "";
    } else {
        alert("Ingresa un nombre válido y que no esté repetido.");
    }
}

// Función para sortear el amigo secreto
function sortearAmigo() {
    // Si hay menos de dos participantes, muestra alerta
    if (amigos.length < 2) {
        alert("Agrega al menos dos participantes para sortear.");
        return;
    }

    // Copia y desordena la lista de amigos
    let amigosSorteo = amigos.slice();
    for (let i = amigosSorteo.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [amigosSorteo[i], amigosSorteo[j]] = [amigosSorteo[j], amigosSorteo[i]];
    }

    // Verifica que nadie se asigne a sí mismo
    for (let i = 0; i < amigos.length; i++) {
        if (amigos[i] === amigosSorteo[i]) {
            sortearAmigo(); // Si pasa, vuelve a sortear
            return;
        }
    }

    // Elige un amigo al azar y muestra solo el sorteado
    const indice = Math.floor(Math.random() * amigos.length);
    const resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = "<li><strong>El amigo secreto sorteado es:</strong></li>";

    // Limpia la lista de amigos visual
    listaParticipantes.innerHTML = "";

    // Muestra solo el resultado sorteado
    const li = document.createElement("li");
    li.textContent = ` ${amigosSorteo[indice]}`;
    resultadoLista.appendChild(li);
}

// Función para mostrar la lista de amigos en pantalla
function mostrarListaAmigos() {
    // Obtener el elemento de la lista
    const lista = document.getElementById("listaAmigos");
    // Limpiar la lista existente
    lista.innerHTML = "";
    // Iterar sobre el arreglo amigos
    for (let i = 0; i < amigos.length; i++) {
        // Crear un nuevo elemento <li> para cada amigo
        const li = document.createElement("li");
        li.textContent = amigos[i];
        // Agregar el elemento a la lista
        lista.appendChild(li);
    }
}
