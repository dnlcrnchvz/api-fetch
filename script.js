const rellenarCards = (usuarios, contenedorId) => {
    const cardsSpan = document.getElementById(contenedorId);
    cardsSpan.innerHTML = "";
    usuarios.forEach((usuario) => {
        const newCard = `
        <div class="container-card">
            <img src="${usuario.avatar}" class="card-img-top">
            <div class="card-body">
                <h1 class="card-title">${usuario.first_name}</h1> 
                <h1 class="card-subtitle">${usuario.last_name}</h1>
                <p class="card-text">ID: ${usuario.id}</p>
                <p class="card-text">Correo: ${usuario.email}</p>
            </div>
        </div>
        `;
        cardsSpan.innerHTML += newCard;
    });
};
const imprimirCards = (usuarios, contenedorId) => {
    setTimeout(() => {
        const loader = document.getElementById("loader");
        loader.style.display = 'none';
        rellenarCards(usuarios, contenedorId);
    }, 1000);
};
const datos = async (url, contenedorId) => {
    const loader = document.getElementById("loader");
    loader.style.display = 'block';
    const resolve = await fetch(url);
    const users = await resolve.json();
    imprimirCards(users.data, contenedorId);
};
datos("https://reqres.in/api/users?page=1", "cards");