// booking.js

const form = document.getElementById("bookingForm");

const checkin = document.getElementById("checkin");
const checkout = document.getElementById("checkout");
const unit = document.getElementById("unit");

const lamaMenginap = document.getElementById("lamaMenginap");
const totalBayar = document.getElementById("totalBayar");

// Harga room
const hargaRoom = {
    "Studio - Rp300.000": 300000,
    "VIP - Rp450.000": 450000,
    "Eksekutif - Rp550.000": 550000
};

// HITUNG TOTAL
function hitungTotal() {

    const tanggalCheckin = checkin.value;
    const tanggalCheckout = checkout.value;
    const tipeRoom = unit.value;

    if (tanggalCheckin && tanggalCheckout && tipeRoom) {

        // Ubah format dd/mm/yyyy
        const checkinParts = tanggalCheckin.split("/");
        const checkoutParts = tanggalCheckout.split("/");

        const date1 = new Date(
            checkinParts[2],
            checkinParts[1] - 1,
            checkinParts[0]
        );

        const date2 = new Date(
            checkoutParts[2],
            checkoutParts[1] - 1,
            checkoutParts[0]
        );

        // Hitung selisih hari
        const selisih = date2 - date1;

        const malam = selisih / (1000 * 60 * 60 * 24);

        if (malam > 0) {

            const harga = hargaRoom[tipeRoom];

            const total = malam * harga;

            lamaMenginap.innerHTML = `${malam} Hari`;

            totalBayar.innerHTML =
                `Rp${total.toLocaleString("id-ID")}`;

        }

    }

}

// Event
checkin.addEventListener("change", hitungTotal);
checkout.addEventListener("change", hitungTotal);
unit.addEventListener("change", hitungTotal);

// SUBMIT
form.addEventListener("submit", function(e){

    e.preventDefault();

    const nama = document.getElementById("nama").value;
    const wa = document.getElementById("wa").value;
    const pembayaran = document.getElementById("pembayaran").value;
    const catatan = document.getElementById("catatan").value;

    const tanggalCheckin = checkin.value;
    const tanggalCheckout = checkout.value;
    const tipeRoom = unit.value;

    const checkinParts = tanggalCheckin.split("/");
    const checkoutParts = tanggalCheckout.split("/");

    const date1 = new Date(
        checkinParts[2],
        checkinParts[1] - 1,
        checkinParts[0]
    );

    const date2 = new Date(
        checkoutParts[2],
        checkoutParts[1] - 1,
        checkoutParts[0]
    );

    const selisih = date2 - date1;

    const malam = selisih / (1000 * 60 * 60 * 24);

    const harga = hargaRoom[tipeRoom];

    const total = malam * harga;

    // NOMOR ADMIN
    const admin = "6281234567890";

    // PESAN WA
    const pesan = `🏨 *BOOKING BLACKJACK ROOMS*

━━━━━━━━━━━━━━━

👤 *Nama*
${nama}

📱 *WhatsApp*
${wa}

🏠 *Room*
${tipeRoom}

📅 *Check In*
${tanggalCheckin}

📅 *Check Out*
${tanggalCheckout}

📆 *Durasi Menginap*
${malam} Hari

💳 *Metode Pembayaran*
${pembayaran}

💰 *Total Pembayaran*
Rp${total.toLocaleString("id-ID")}

📝 *Catatan*
${catatan || "-"}

━━━━━━━━━━━━━━━

Mohon konfirmasi booking 🙏`;

    // WA
    window.open(
        `https://wa.me/${admin}?text=${encodeURIComponent(pesan)}`,
        "_blank"
    );

});