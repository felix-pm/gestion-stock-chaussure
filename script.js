// let inventory = JSON.parse(localStorage.getItem("shoeStock")) || [];

// const form = document.getElementById("addShoeForm");
// const stockGrid = document.getElementById("stockGrid");

// function saveStock() {
//   localStorage.setItem("shoeStock", JSON.stringify(inventory));
// }

// function renderStock() {
//   stockGrid.innerHTML = "";

//   if (inventory.length === 0) {
//     stockGrid.innerHTML =
//       '<p style="color: #9ca3af;">Le stock est vide. Ajoute ta première paire !</p>';
//     return;
//   }

//   inventory.forEach((shoe, index) => {
//     const card = document.createElement("div");
//     card.className = "shoe-card";

//     // Sécurité : si tu avais d'anciennes paires sans pointure dans la mémoire, on affiche "N/A"
//     const shoeSize = shoe.size ? shoe.size : "N/A";

//     card.innerHTML = `
//             <img src="${shoe.image}" alt="${shoe.name}" class="shoe-img" onerror="this.src='https://via.placeholder.com/300?text=Image+Introuvable'">
//             <div class="shoe-info">
//                 <h3>${shoe.name}</h3>

//                 <div style="margin-bottom: 15px;">
//                     <span class="owner-badge" style="background-color: #374151; color: #d1d5db; margin-right: 5px;">Pointure : ${shoeSize}</span>
//                     <span class="owner-badge">Propriétaire : ${shoe.owner}</span>
//                 </div>

//                 <div class="qty-controls">
//                     <button class="qty-btn" onclick="updateQty(${index}, -1)">-</button>
//                     <span class="qty-number">${shoe.qty}</span>
//                     <button class="qty-btn" onclick="updateQty(${index}, 1)">+</button>
//                 </div>

//                 <button class="delete-btn" onclick="deleteShoe(${index})">Supprimer</button>
//             </div>
//         `;
//     stockGrid.appendChild(card);
//   });
// }

// form.addEventListener("submit", function (e) {
//   e.preventDefault();

//   const shoeModelSelect = document.getElementById("shoeModel");
//   const selectedOption = shoeModelSelect.options[shoeModelSelect.selectedIndex];

//   const newShoe = {
//     name: selectedOption.text,
//     image: selectedOption.value,
//     size: document.getElementById("shoeSize").value, // On sauvegarde la pointure
//     owner: document.getElementById("shoeOwner").value,
//     qty: parseInt(document.getElementById("shoeQty").value),
//   };

//   inventory.push(newShoe);
//   saveStock();
//   renderStock();
//   form.reset();
// });

// window.updateQty = function (index, change) {
//   if (inventory[index].qty + change >= 0) {
//     inventory[index].qty += change;
//     saveStock();
//     renderStock();
//   }
// };

// window.deleteShoe = function (index) {
//   if (confirm("Veux-tu vraiment supprimer cette paire du stock ?")) {
//     inventory.splice(index, 1);
//     saveStock();
//     renderStock();
//   }
// };

// renderStock();
