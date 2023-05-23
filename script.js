// Retrieve form and coin container elements
const coinForm = document.getElementById("coinForm");
const coinContainer = document.getElementById("coinContainer");

// Add event listener to the form submission
coinForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Get data from form inputs
  // Note: parsInt converts a String into an int
  // .value adds the input
  const count = parseInt(document.getElementById("countInput").value);
  const coinType = document.getElementById("coinType").value;

  // Create specified coins and append to the coin container
  for (let i = 0; i < count; i++) {
    // Display coin via span child
    const coin = document.createElement("span");
    coin.textContent = coinType;
    coin.className = "coin";
    coin.addEventListener("click", function () {
      // Remove clicked coin via span child
      coinContainer.removeChild(coin);
    });
    coinContainer.appendChild(coin);
  }

  // Reset form inputs
  coinForm.reset();
});
