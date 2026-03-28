// ================= HealthXRay Subscribe Script =================

// Backend URL
const backendURL = "https://new-healthxray-backend.onrender.com";

// Make subscribe globally accessible
window.subscribe = async function(plan) {

    // ===== Firebase login check =====
    const user = firebase.auth().currentUser;
    if(!user){
        // Save plan to continue after login
        localStorage.setItem("redirect_after_login", plan);
        alert("Please login/signup first to subscribe.");
        window.location.href = "login.html"; // path to signup page
        return;
    }

    // ===== Determine price =====
    let price = 0;
    if(plan === "Basic") price = 9.99;
    else if(plan === "Standard") price = 19.99;
    else if(plan === "Premium") price = 29.99;

    // ===== Disable buttons while processing =====
    const buttons = document.querySelectorAll(".subscribe-btn");
    buttons.forEach(btn=>{
        btn.innerText = "Processing...";
        btn.disabled = true;
    });

    try{
        // ===== Call backend API =====
        const response = await fetch(`${backendURL}/api/subscribe`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                packageName: plan,
                packagePrice: price,
                userEmail: user.email
            })
        });

        const data = await response.json();

        if(data.success && data.paymentUrl){
            window.location.href = data.paymentUrl;
        } else {
            alert("Payment gateway error. Please try again.");
            resetButtons();
        }

    } catch(err){
        console.error("Subscription Error:", err);
        alert("Subscription failed. Please try again.");
        resetButtons();
    }
};

// ===== Reset button state =====
function resetButtons(){
    const buttons = document.querySelectorAll(".subscribe-btn");
    buttons.forEach(btn=>{
        btn.innerText = "Subscribe";
        btn.disabled = false;
    });
}

// ===== Check if user just logged in after signup =====
firebase.auth().onAuthStateChanged(user=>{
    if(user){
        const plan = localStorage.getItem("redirect_after_login");
        if(plan){
            localStorage.removeItem("redirect_after_login");
            // Delay to allow page load
            setTimeout(()=>window.subscribe(plan),500);
        }
    }
});