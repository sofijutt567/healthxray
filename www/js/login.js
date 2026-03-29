// ==========================================
// 1. Firebase Configuration
// ==========================================
const firebaseConfig = {
    apiKey: "AIzaSyCdNrgsaBLmXBKmiQeqzrCLLdOWOh8Py-o",
    authDomain: "healthxray-f5d64.firebaseapp.com",
    projectId: "healthxray-f5d64",
    storageBucket: "healthxray-f5d64.firebasestorage.app",
    messagingSenderId: "1045204641087",
    appId: "1:1045204641087:web:d64602a3b4815fb9f65f8a",
    measurementId: "G-ML0YZP4QRL"
};

// Initialize Firebase safely
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const auth = firebase.auth();

// ==========================================
// 2. UI Elements & Toggle Logic
// ==========================================
const loginCard = document.getElementById('loginCard');
const signupCard = document.getElementById('signupCard');
const toSignup = document.getElementById('toSignup');
const toLogin = document.getElementById('toLogin');

// Login aur Signup cards ke darmiyan switch karne ke liye
if (toSignup) {
    toSignup.onclick = (e) => {
        e.preventDefault();
        loginCard.style.display = 'none';
        signupCard.style.display = 'block';
    };
}

if (toLogin) {
    toLogin.onclick = (e) => {
        e.preventDefault();
        signupCard.style.display = 'none';
        loginCard.style.display = 'block';
    };
}

// ==========================================
// 3. Authentication Functions
// ==========================================

// --- EMAIL LOGIN ---
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.onsubmit = async (e) => {
        e.preventDefault();
        const email = document.getElementById('emailLogin').value;
        const pass = document.getElementById('passwordLogin').value;

        try {
            await auth.signInWithEmailAndPassword(email, pass);
            console.log("Login Success!");
            // Login hone ke baad hi redirect hoga
            window.location.href = "index.html"; 
        } catch (err) {
            alert("Login Error: " + err.message);
        }
    };
}

// --- EMAIL SIGNUP ---
const signupForm = document.getElementById('signupForm');
if (signupForm) {
    signupForm.onsubmit = async (e) => {
        e.preventDefault();
        const email = document.getElementById('emailSignup').value;
        const pass = document.getElementById('passwordSignup').value;

        if (pass.length < 6) {
            alert("Password kam az kam 6 characters ka hona chahiye.");
            return;
        }

        try {
            await auth.createUserWithEmailAndPassword(email, pass);
            alert("Account Successfully Created!");
            window.location.href = "index.html";
        } catch (err) {
            alert("Signup Error: " + err.message);
        }
    };
}

// --- GOOGLE LOGIN ---
const googleBtn = document.getElementById('googleLoginBtn');
if (googleBtn) {
    googleBtn.onclick = async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        try {
            await auth.signInWithPopup(provider);
            console.log("Google Login Success!");
            window.location.href = "index.html";
        } catch (err) {
            alert("Google Login Error: " + err.message);
        }
    };
}

// NOTE: Humne yahan 'onAuthStateChanged' wala auto-redirect hata diya hai.
// Iska faida yeh hai ke user jab login page open karega toh wo wahin rukega,
// jab tak ke wo login na karle.
