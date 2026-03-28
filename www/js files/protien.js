/**
 * HealthXray - Protein Intake Calculator Logic 2026
 * Handles nutrition calculations, UI feedback, and FAQ accordion.
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // ==================== 1. Protein Calculation Logic ====================
    const proteinForm = document.getElementById('proteinForm');
    const resultRange = document.getElementById('protein-range');
    const resultInfo = document.getElementById('protein-info');
    const resultsDiv = document.getElementById('protein-results');

    if (proteinForm) {
        proteinForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Get Input Values
            const weight = parseFloat(document.getElementById('weight').value);
            const activity = parseFloat(document.getElementById('activity').value);
            const goal = document.getElementById('goal').value;

            // Basic Validation
            if (isNaN(weight) || weight <= 0 || weight > 300) {
                alert("Please enter a realistic weight in kilograms.");
                return;
            }

            /**
             * Calculation Logic:
             * Based on grams of protein per kilogram of body weight.
             */
            let ratio = activity;

            // Adjustment based on fitness goals
            if (goal === 'muscle') {
                ratio += 0.4; // Higher protein for hypertrophy
            } else if (goal === 'fatloss') {
                ratio += 0.2; // Extra protein to preserve lean mass in a deficit
            }

            // Calculate total daily grams
            const dailyProtein = (weight * ratio).toFixed(1);

            // Update UI with Results
            if (resultRange) {
                resultRange.innerHTML = `${dailyProtein} <span style="font-size: 1.2rem;">g / day</span>`;
            }
            
            // Provide Custom Feedback
            let feedback = "";
            if (goal === 'muscle') {
                feedback = `To build muscle, aim for ~${dailyProtein}g of protein split across 4-5 high-quality meals.`;
            } else if (goal === 'fatloss') {
                feedback = `At ${dailyProtein}g, you will protect your muscle tissue while your body targets fat for fuel.`;
            } else {
                feedback = `For general health and maintenance, ${dailyProtein}g per day is your ideal target.`;
            }

            if (resultInfo) {
                resultInfo.innerText = feedback;
            }

            // Add active class for animation and scroll to view
            if (resultsDiv) {
                resultsDiv.classList.add('active'); // Ensure your CSS handles .active visibility
                resultsDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        });
    }

    // ==================== 2. Navigation & UI Logic ====================
    const backArrow = document.getElementById('backArrow');
    if (backArrow) {
        backArrow.addEventListener('click', () => {
            // Check if there is a history to go back to, otherwise go home
            if (window.history.length > 1) {
                window.history.back();
            } else {
                window.location.href = 'index.html';
            }
        });
    }

    // ==================== 3. FAQ Accordion Logic ====================
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        const question = item.querySelector(".faq-question");

        if (question) {
            question.addEventListener("click", () => {
                // Close other open FAQ items for a clean accordion effect
                faqItems.forEach(i => {
                    if (i !== item) {
                        i.classList.remove("active");
                        const otherAnswer = i.querySelector(".faq-answer");
                        if (otherAnswer) {
                            otherAnswer.style.maxHeight = null;
                            otherAnswer.style.paddingBottom = "0";
                        }
                    }
                });

                // Toggle current item
                item.classList.toggle("active");
                const answer = item.querySelector(".faq-answer");

                if (item.classList.contains("active") && answer) {
                    answer.style.maxHeight = answer.scrollHeight + "px";
                    answer.style.paddingBottom = "15px";
                } else if (answer) {
                    answer.style.maxHeight = null;
                    answer.style.paddingBottom = "0";
                }
            });
        }
    });

    console.log("HealthXray Protein Calculator: Module Initialized.");
});
