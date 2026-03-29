// ==================== Heart Rate Calculator (Karvonen Formula) ====================

// Select HR elements
const hrForm = document.getElementById('heartRateForm');
const thrRange = document.getElementById('thr-range');
const thrInfo = document.getElementById('thr-info');
const hrResultsDiv = document.getElementById('hr-results');

// Function to calculate Target Heart Rate (THR)
// Using the Karvonen Formula for better accuracy
function calculateTHR(age, rhr) {
    const maxHR = 220 - age;
    const reserveHR = maxHR - rhr;
    
    // Lower limit (50% intensity)
    const thrLower = Math.round((reserveHR * 0.5) + rhr);
    // Upper limit (85% intensity)
    const thrUpper = Math.round((reserveHR * 0.85) + rhr);
    
    return { lower: thrLower, upper: thrUpper, max: maxHR };
}

// HR Form submit event
if (hrForm) {
    hrForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Getting values from HTML input IDs
        const ageInput = document.getElementById('hr-age');
        const rhrInput = document.getElementById('resting-hr');

        const age = parseInt(ageInput.value);
        const rhr = parseInt(rhrInput.value);

        // Validation
        if (!age || age <= 0 || age > 120) {
            alert("Please enter a valid age!");
            return;
        }
        if (!rhr || rhr <= 30 || rhr > 200) {
            alert("Please enter a realistic resting heart rate (BPM)!");
            return;
        }

        // Calculate THR
        const thr = calculateTHR(age, rhr);

        // Display results
        thrRange.innerHTML = `Target Zone: <strong>${thr.lower} - ${thr.upper} BPM</strong>`;
        thrInfo.innerHTML = `Your estimated Maximum Heart Rate is <strong>${thr.max} BPM</strong>. Training within this range optimizes fat burn and cardiovascular health.`;

        // Show results with animation (if CSS has active class)
        if (hrResultsDiv) {
            hrResultsDiv.classList.add('active');
            hrResultsDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    });
}

// ==================== Navigation & UI Logic ====================

// Back Arrow Button
const backArrow = document.getElementById('backArrow');
if (backArrow) {
    backArrow.addEventListener('click', () => {
        window.history.back();
    });
}

// ==================== FAQ Accordion JS ====================
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");

    if (question) {
        question.addEventListener("click", () => {
            // Close other open FAQ items
            faqItems.forEach(i => {
                if (i !== item) {
                    i.classList.remove("active");
                    const otherAnswer = i.querySelector(".faq-answer");
                    if (otherAnswer) otherAnswer.style.maxHeight = null;
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
    }
});

// Log for Debugging (Optional)
console.log("Heart Rate Calculator loaded successfully.");
