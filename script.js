let qr;

function generateQR() {
    const text = document.getElementById("qrText").value;
    const qrBox = document.getElementById("qrBox");
    const downloadBtn = document.getElementById("downloadBtn");

    if (text.trim() === "") {
        alert("Please enter text or URL");
        return;
    }

    qrBox.innerHTML = ""; // clear old QR

    qr = new QRCode(qrBox, {
        text: text,
        width: 200,
        height: 200,
        colorDark: "#000000",
        colorLight: "#ffffff"
    });

    setTimeout(() => {
        const img = qrBox.querySelector("img").src;
        downloadBtn.href = img;
        downloadBtn.style.display = "block";
    }, 500);
}
