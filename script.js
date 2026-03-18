let inventory = JSON.parse(localStorage.getItem("shoeStock")) || [];

const form = document.getElementById("addShoeForm");
const stockGrid = document.getElementById("stockGrid");

function saveStock() {
  localStorage.setItem("shoeStock", JSON.stringify(inventory));
}

function renderStock() {
  stockGrid.innerHTML = "";

  if (inventory.length === 0) {
    stockGrid.innerHTML =
      '<p style="color: #9ca3af;">Le stock est vide. Ajoute ta première paire !</p>';
    return;
  }

  inventory.forEach((shoe, index) => {
    const card = document.createElement("div");
    card.className = "shoe-card";

    card.innerHTML = `
            <img src="${shoe.image}" alt="${shoe.name}" class="shoe-img" onerror="this.src='https://via.placeholder.com/300?text=Image+Introuvable'">
            <div class="shoe-info">
                <h3>${shoe.name}</h3>
                <span class="owner-badge">Propriétaire : ${shoe.owner}</span>
                
                <div class="qty-controls">
                    <button class="qty-btn" onclick="updateQty(${index}, -1)">-</button>
                    <span class="qty-number">${shoe.qty}</span>
                    <button class="qty-btn" onclick="updateQty(${index}, 1)">+</button>
                </div>

                <button class="delete-btn" onclick="deleteShoe(${index})">Supprimer</button>
            </div>
        `;
    stockGrid.appendChild(card);
  });
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // On récupère le menu déroulant
  const shoeModelSelect = document.getElementById("shoeModel");
  // On cible l'option qui a été sélectionnée par l'utilisateur
  const selectedOption = shoeModelSelect.options[shoeModelSelect.selectedIndex];

  const newShoe = {
    name: selectedOption.text, // Récupère le texte (ex: "On running marron")
    image: selectedOption.value, // Récupère le lien de l'image (ex: "img/photo1.jpeg")
    owner: document.getElementById("shoeOwner").value,
    qty: parseInt(document.getElementById("shoeQty").value),
  };

  inventory.push(newShoe);
  saveStock();
  renderStock();
  form.reset();
});

window.updateQty = function (index, change) {
  if (inventory[index].qty + change >= 0) {
    inventory[index].qty += change;
    saveStock();
    renderStock();
  }
};

window.deleteShoe = function (index) {
  if (confirm("Veux-tu vraiment supprimer cette paire du stock ?")) {
    inventory.splice(index, 1);
    saveStock();
    renderStock();
  }
};

renderStock();
