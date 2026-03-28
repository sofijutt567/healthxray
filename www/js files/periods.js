// Elements
const periodForm = document.getElementById('periodForm');
const resultsDiv = document.getElementById('results');
const nextPeriod = document.getElementById('nextPeriod');
const ovulation = document.getElementById('ovulation');

// Back arrow
document.getElementById('backArrow').addEventListener('click', () => {
    window.history.back();
});

periodForm.addEventListener('submit', function(e){
    e.preventDefault();

    const lmpInput = document.getElementById('lmp').value;
    const cycleLength = parseInt(document.getElementById('cycle').value);

    if(!lmpInput || !cycleLength || cycleLength < 21 || cycleLength > 40){
        alert("Please enter valid LMP date and cycle length (21-40 days)!");
        return;
    }

    const lmpDate = new Date(lmpInput);

    // Next period estimate
    const nextPeriodDate = new Date(lmpDate);
    nextPeriodDate.setDate(lmpDate.getDate() + cycleLength);

    // Ovulation estimate (14 days before next period)
    const ovulationDate = new Date(nextPeriodDate);
    ovulationDate.setDate(nextPeriodDate.getDate() - 14);

    // Fertile window (5 days before ovulation)
    const fertileStart = new Date(ovulationDate);
    fertileStart.setDate(ovulationDate.getDate() - 5);
    const fertileEnd = new Date(ovulationDate);

    // Format Dates
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    nextPeriod.textContent = "Next Period: " + nextPeriodDate.toLocaleDateString(undefined, options);
    ovulation.textContent = `Ovulation: ${ovulationDate.toLocaleDateString(undefined, options)} | Fertile Window: ${fertileStart.toLocaleDateString(undefined, options)} - ${fertileEnd.toLocaleDateString(undefined, options)}`;

    // Show results
    resultsDiv.classList.add('active');
    resultsDiv.scrollIntoView({behavior:'smooth', block:'start'});
});
document.addEventListener("DOMContentLoaded", function() {
    const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach(question => {
        question.addEventListener("click", function() {
            const active = document.querySelector(".faq-question.active");
            
            if (active && active !== this) {
                active.classList.remove("active");
                active.nextElementSibling.style.maxHeight = null;
            }

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