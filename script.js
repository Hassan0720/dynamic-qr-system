// आपका Google Apps Script Web App URL
const API_URL = "https://script.google.com/macros/s/AKfycbwVIPtxb8orvWhrTyIt9CSXZlolQsbkrWNLrPqwullrWZO10JEHIdl_YmYzxnpflud-ew/exec";

// Random QR ID Generator (XXXX-XXXX Format)
function generateRandomQRId() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let part1 = "", part2 = "";
    for (let i = 0; i < 4; i++) {
        part1 += chars.charAt(Math.floor(Math.random() * chars.length));
        part2 += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return `${part1}-${part2}`;
}

// Admin Login Function
async function handleLogin(userId, password) {
    try {
        let response = await fetch(API_URL, {
            method: "POST",
            body: JSON.stringify({ action: "login", userId: userId, password: password })
        });
        let result = await response.json();
        return result;
    } catch (error) {
        console.error("Login Error:", error);
        return { status: "error", message: "Network error occurred." };
    }
}

// Add New QR Function
async function addQRCode(qrData) {
    try {
        let response = await fetch(API_URL, {
            method: "POST",
            body: JSON.stringify({ action: "addQR", ...qrData })
        });
        let result = await response.json();
        return result;
    } catch (error) {
        console.error("Add QR Error:", error);
        return { status: "error", message: "Failed to add QR." };
    }
}

// Get All QRs for Dashboard
async function fetchQRs() {
    try {
        let response = await fetch(API_URL + "?action=getQRs");
        let result = await response.json();
        return result;
    } catch (error) {
        console.error("Fetch QRs Error:", error);
        return { status: "error", data: [] };
    }
}

// Resolve QR for Public Redirect
async function resolveQRId(qrId) {
    try {
        let response = await fetch(API_URL, {
            method: "POST",
            body: JSON.stringify({ action: "resolveQR", qrId: qrId })
        });
        let result = await response.json();
        return result;
    } catch (error) {
        console.error("Resolve Error:", error);
        return { status: "error", message: "Server connection failed." };
    }
}
