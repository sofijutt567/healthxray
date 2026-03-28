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
// 2. Core UI Update Function (Force Mode)
// ==========================================
function updateAuthUI(user) {
    const loginBox = document.getElementById('loginBtnContainer');
    const logoutBox = document.getElementById('logoutBtnContainer');
    const userDisplay = document.getElementById('userDisplay');
    const userPhoto = document.getElementById('userPhoto');

    if (user) {
        console.log("Status: User Logged In (" + user.email + ")");
        
        // Login button ko sakhti se chupao
        if (loginBox) {
            loginBox.style.setProperty('display', 'none', 'important');
        }
        
        // Logout container ko sakhti se dikhao
        if (logoutBox) {
            logoutBox.style.setProperty('display', 'flex', 'important');
            logoutBox.style.alignItems = 'center';
            logoutBox.style.justifyContent = 'center';
            logoutBox.style.gap = '10px';
        }

        // Name aur Photo update karein
        const displayName = user.displayName || user.email.split('@')[0];
        if (userDisplay) userDisplay.innerText = "Hi, " + displayName;
        
        if (userPhoto) {
            userPhoto.src = user.photoURL || `https://ui-avatars.com/api/?name=${displayName}&background=226653&color=fff`;
            userPhoto.style.display = 'inline-block';
        }

        // UID ko save karein symptoms page ke liye
        localStorage.setItem("userId", user.uid);
    } else {
        console.log("Status: User Logged Out");
        
        if (loginBox) {
            loginBox.style.setProperty('display', 'block', 'important');
        }
        if (logoutBox) {
            logoutBox.style.setProperty('display', 'none', 'important');
        }
        
        localStorage.removeItem("userId");
    }
}

// ==========================================
// 3. Listeners & Event Handlers
// ==========================================

// Auth state change detector
auth.onAuthStateChanged((user) => {
    updateAuthUI(user);
});

// Logout Button Click Handler
document.addEventListener('click', function(e) {
    if (e.target && e.target.id === 'logoutBtn') {
        e.preventDefault();
        auth.signOut().then(() => {
            console.log("Logout successful");
            localStorage.clear();
            window.location.reload(); 
        }).catch((error) => {
            alert("Error: " + error.message);
        });
    }
});

// Mobile Nav Auto-Close (User experience fix)
const navToggle = document.getElementById('nav-toggle');
document.querySelectorAll('.main-nav a').forEach(link => {
    link.addEventListener('click', () => {
        if (navToggle) navToggle.checked = false;
    });
});
