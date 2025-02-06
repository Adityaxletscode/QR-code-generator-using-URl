document.addEventListener("DOMContentLoaded", () => {
  const inputField = document.querySelector(".typeUrl");
  const qrContainer = document.querySelector(".qrGen");

  inputField.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      qrContainer.innerHTML = ""; // Clear previous QR code

      if (inputField.value.trim() !== "") {
        new QRCode(qrContainer, {
          text: inputField.value.trim(),
          width: 128,
          height: 128,
        });
      }
    }
  });
});
