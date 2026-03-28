// ==================== Water Intake Calculator ====================

// Select elements
const waterForm = document.getElementById('waterForm');
const resultsDiv = document.getElementById('results');
const waterValue = document.getElementById('waterValue');

// Function to calculate water intake
function calculateWater(weight, activity) {
    return weight * 35 * activity;
}

// Form submit event
waterForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const weightInput = document.getElementById('weight');
    const activityInput = document.getElementById('activity');

    const weight = parseFloat(weightInput.value);
    const activity = parseFloat(activityInput.value);

    // Validate
    if (!weight || weight <= 0) {
        alert("Please enter valid weight!");
        return;
    }

    // Calculate water intake
    const water = calculateWater(weight, activity);

    // Show result
    waterValue.textContent = Math.round(water) + " ml per day";

    // Show results container
    resultsDiv.classList.add('active');

    // Scroll to result
    resultsDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
});


// ==================== Back Arrow Button ====================
document.getElementById('backArrow').addEventListener('click', () => {
    window.history.back();
});


// ==================== FAQ JS ====================
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {

        faqItems.forEach(i => {
            if (i !== item) {
                i.classList.remove("active");
                i.querySelector(".faq-answer").style.maxHeight = null;
            }
        });

        item.classList.toggle("active");

        const answer = item.querySelector(".faq-answer");

        if (item.classList.contains("active")) {
            answer.style.maxHeight = answer.scrollHeight + "px";
        } else {
            answer.style.maxHeight = null;
        }
    });
});


// ==================== Accordion JS ====================
const accItems = document.querySelectorAll(".bmi-accordion-btn");

accItems.forEach(btn => {

    btn.addEventListener("click", () => {

        const parent = btn.parentElement;

        parent.classList.toggle("active");

        const panel = btn.nextElementSibling;

        if (parent.classList.contains("active")) {
            panel.style.maxHeight = panel.scrollHeight + "px";
        } else {
            panel.style.maxHeight = null;
        }

    });

});