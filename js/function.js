async function randomUserAPI() {
    const randomUser = await fetch('https://randomuser.me/api/?exc=login&nat=es')
        .then((response) => response.json())
        .then((data) => data.results[0])

    return randomUser;
}

async function generarPersona() {
    data = await randomUserAPI();

    document.getElementById("nombre").innerHTML = `${data.name.first} ${data.name.last}`;
    document.getElementById("foto").src = data.picture.large;
    document.getElementById("trabajo").innerHTML = data.gender == "male" ? "Diseñador Gráfico" : "Diseñadora Gráfica";
    document.querySelector("#telefono span").innerText = data.cell;
    document.querySelector("#mail span").innerText = data.email;
    document.querySelector("#direccion span").innerText = `${data.location.street.name} ${data.location.street.number}, ${data.location.state}, ${data.location.country}`;
}
