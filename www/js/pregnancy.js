// Select elements
const pregnancyForm = document.getElementById('pregnancyForm');
const resultsDiv = document.getElementById('results');
const dueDate = document.getElementById('dueDate');
const pregnancyWeek = document.getElementById('pregnancyWeek');

/* back arrow button */
document.getElementById('backArrow').addEventListener('click', () => {
    window.history.back();
});

// Form submit
pregnancyForm.addEventListener('submit', function(e) {

    e.preventDefault();

    const lmp = new Date(document.getElementById('lmp').value);
    const cycle = parseInt(document.getElementById('cycle').value);

    if (!lmp) {
        alert("Select last period date");
        return;
    }

    // calculate due date
    const due = new Date(lmp);
    due.setDate(due.getDate() + 280 + (cycle - 28));

    // calculate pregnancy weeks
    const today = new Date();
    const diff = today - lmp;
    const weeks = Math.floor(diff / (1000 * 60 * 60 * 24 * 7));

    // show result (same ids as HTML)
    dueDate.textContent = due.toDateString();
    pregnancyWeek.textContent = weeks + " weeks pregnant";

    // show results section
    resultsDiv.classList.add('active');
});
  document.addEventListener("DOMContentLoaded", function() {
    const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach(question => {
        question.addEventListener("click", function() {
            const active = document.querySelector(".faq-question.active");
            
            // Close previously open answer
            if (active && active !== this) {
                active.classList.remove("active");
                active.nextElementSibling.style.maxHeight = null;
            }

            // Toggle current
            this.classList.toggle("active");
            const answer = this.nextElementSibling;
            if (this.classList.contains("active")) {
                answer.style.maxHeight = answer.scrollHeight + "px";
            } else {
                answer.style.maxHeight = null;
            }
        });
    });
});