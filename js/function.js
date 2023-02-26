async function nuevaPersona() {
    const randomUser = await fetch('https://randomuser.me/api/?exc=login&nat=es')
        .then((response) => response.json())
        .then((data) => data.results[0])

    document.getElementById("nombre").innerHTML = `${randomUser.name.first} ${randomUser.name.last}`;
    document.getElementById("foto").src = randomUser.picture.large;
    document.getElementById("trabajo").innerHTML = randomUser.gender == "male" ? "Diseñador Grafico" : "Diseñadora Grafica";
    document.querySelector("#telefono span").innerText = randomUser.cell;
    document.querySelector("#mail span").innerText = randomUser.email;
    document.querySelector("#direccion span").innerText = `${randomUser.location.street.name} ${randomUser.location.street.number}, ${randomUser.location.state}, ${randomUser.location.country}`;
}