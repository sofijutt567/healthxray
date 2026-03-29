// Select elements
const calorieForm = document.getElementById('calorieForm');
const resultsDiv = document.getElementById('results');
const caloriesValue = document.getElementById('calories');
const caloriesType = document.getElementById('calorieType');

/*----back arrow button---*/
document.getElementById('backArrow').addEventListener('click', () => {
    window.history.back();
});

// Function to calculate BMR (Mifflin-St Jeor formula)
function calculateBMR(weight, height, age, gender) {
    if (gender === 'male') {
        return 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        return 10 * weight + 6.25 * height - 5 * age - 161;
    }
}

// Form submit event
calorieForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const age = parseInt(document.getElementById('age').value);
    const gender = document.getElementById('gender').value;
    const activity = parseFloat(document.getElementById('activity').value);

    // Validate inputs
    if (!weight || !height || !age || weight <= 0 || height <= 0 || age <= 0) {
        alert("Please enter valid details!");
        return;
    }

    // Calculate BMR
    const bmr = calculateBMR(weight, height, age, gender);

    // Calculate daily calories
    const dailyCalories = Math.round(bmr * activity);

    // Update result
    caloriesValue.textContent = dailyCalories + " kcal";
    caloriesType.textContent = "Daily Calories Needed";

    // Show results
    resultsDiv.classList.add('active');

    // Scroll to result
    resultsDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
});
// ==================== FAQ JS ====================
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");
    question.addEventListener("click", () => {
        // Close other open items
        faqItems.forEach(i => {
            if (i !== item) {
                i.classList.remove("active");
                i.querySelector(".faq-answer").style.maxHeight = null;
            }
        });

        // Toggle current item
        item.classList.toggle("active");
        const answer = item.querySelector(".faq-answer");
        if (item.classList.contains("active")) {
            answer.style.maxHeight = answer.scrollHeight + "px";
        } else {
            answer.style.maxHeight = null;
        }
    });
});
// ==================== BMI Accordion JS ====================
const accItems = document.querySelectorAll(".bmi-accordion-btn");

accItems.forEach(btn => {
    btn.addEventListener("click", () => {
        const parent = btn.parentElement;

        // Toggle active class
        parent.classList.toggle("active");

        const panel = btn.nextElementSibling;
        if (parent.classList.contains("active")) {
            panel.style.maxHeight = panel.scrollHeight + "px";
        } else {
            panel.style.maxHeight = null;
        }
    });
});