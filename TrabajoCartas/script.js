// Lista completa de cartas disponibles en el orden real
const availableCards = [
    {numero: "1", carta: "As de Diamantes"},
    {numero: "2", carta: "2 de Diamantes"},
    {numero: "3", carta: "3 de Corazones"},
    {numero: "4", carta: "4 de Corazones"},
    {numero: "5", carta: "5 de Corazones"},
    {numero: "6", carta: "6 de Tréboles"},
    {numero: "7", carta: "7 de Diamantes"},
    {numero: "8", carta: "8 de Tréboles"},
    {numero: "9", carta: "9 de Diamantes"},
    {numero: "10", carta: "10 de Corazones"},
    {numero: "11", carta: "J de Tréboles"},
    {numero: "12", carta: "Q de Tréboles"},
    {numero: "13", carta: "K de Diamantes"}
];

// Lista que contiene solo las cartas digitadas por el usuario
let cardData = [];

const cardContainer = document.getElementById('card-container');
const tableBody = document.querySelector('#card-table tbody');

function loadCards() {
    // Mostrar todas las cartas desde el principio en el contenedor
    availableCards.forEach(card => {
        const img = document.createElement('img');
        img.src = `img/${card.numero}.png`; // Ruta a las imágenes de las cartas
        img.alt = card.carta;
        img.onclick = () => incrementCard(card.numero);
        cardContainer.appendChild(img);
    });
}

function addRowToTable(numero, carta, cantidad) {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${numero}</td><td>${carta}</td><td>${cantidad}</td>`;
    tableBody.appendChild(row);
}

function incrementCard(numero) {
    // Incrementar la cantidad solo si la carta ya está en la lista digitada por el usuario
    let card = cardData.find(c => c.numero === numero);
    if (card) {
        card.cantidad++;
        updateCardsAndTable();
    }
}

function addCardToList() {
    const cardNumber = document.getElementById('card-number').value;
    const cardName = document.getElementById('card-name').value || 'Sin Nombre';

    if (cardNumber && cardNumber >= 1 && cardNumber <= 13) {
        let existingCard = cardData.find(c => c.numero === cardNumber);
        if (!existingCard) {
            // Agregar la carta a la lista con el nombre proporcionado por el usuario
            cardData.push({numero: cardNumber, carta: cardName, cantidad: 0});
        }
    }
    updateCardsAndTable();
}

function updateCardsAndTable() {
    // Actualizar la tabla (ordenada por número) sin modificar las cartas en la izquierda

    // Ordenar las cartas en la tabla por número (de menor a mayor)
    const sortedCardsByNumber = [...cardData].sort((a, b) => a.numero - b.numero);

    // Actualizar la tabla
    tableBody.innerHTML = '';
    sortedCardsByNumber.forEach(card => {
        addRowToTable(card.numero, card.carta, card.cantidad);
    });
}

loadCards();