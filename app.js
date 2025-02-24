// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolve
const amigo = []

function agregarAmigo() {

        
       let amigoSecreto = document.getElementById('amigo').value;
        console.log(amigoSecreto);

        let limpiarCaja = document.getElementById('amigo').value = "";

        listaAmigos.length

        if (amigoSecreto === "") {
            alert("Por favor, inserte un nombre.");
            return;
        };

        amigo.push(amigoSecreto);
        console.log(amigo);    

}

function listaAmigos() {

    let lista = document.getElementById('amigo').value;

    lista.innerHTML = "";

    for (let i = 0; i < amigo.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigo[i];
        lista.appendChild(li);
    }
    return

}

function sortearAmigo() {
    if (amigo.length === 0) {
        document.getElementById("resultado").innerHTML = "No hay amigos en la lista.";
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigo.length);

    const amigoSorteado = amigo.splice(indiceAleatorio, 1)[0];

    document.getElementById("resultado").innerHTML = `Amigo sorteado: ${amigoSorteado}`;
}
