// Select elements
const bmiForm = document.getElementById('bmiForm');
const resultsDiv = document.getElementById('results');
const bmiValue = document.getElementById('bmiValue');
const bmiCategory = document.getElementById('bmiCategory');

// Function to calculate BMI
function calculateBMI(weight, height) {
    // height in cm -> meters
    const heightInMeters = height / 100;
    return weight / (heightInMeters * heightInMeters);
}
/*----back errow btb---*/
document.getElementById('backArrow').addEventListener('click', () => {
    window.history.back(); // or scrollTo({ top: 0, behavior: 'smooth' });
});
// Function to get BMI category
function getBMICategory(bmi) {
    if (bmi < 18.5) return "Underweight";
    else if (bmi < 24.9) return "Normal weight";
    else if (bmi < 29.9) return "Overweight";
    else return "Obese";
}

// Form submit event
bmiForm.addEventListener('submit', function(e) {
    e.preventDefault(); // prevent page reload

    // Read input values dynamically every submit
    const weightInput = document.getElementById('weight');
    const heightInput = document.getElementById('height');

    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value);

    // Validate
    if (!weight || !height || weight <= 0 || height <= 0) {
        alert("Please enter valid weight and height!");
        return;
    }

    // Calculate BMI
    const bmi = calculateBMI(weight, height);
    const category = getBMICategory(bmi);

    // Update result
    bmiValue.textContent = bmi.toFixed(1);
    bmiCategory.textContent = category;

    // Show results container
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