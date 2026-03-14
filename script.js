document.addEventListener('DOMContentLoaded', () => {

    // --- Accordion Logic ---
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            
            // Toggle active class
            item.classList.toggle('active');

            // Optional: Close other items when one is opened
            document.querySelectorAll('.accordion-item').forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
        });
    });

    // --- Locate Button Logic ---
    const locateBtn = document.getElementById('locate-btn');
    const mapBox = document.getElementById('map-placeholder');

    locateBtn.addEventListener('click', () => {
        mapBox.classList.toggle('hidden');
        if (!mapBox.classList.contains('hidden')) {
            locateBtn.innerHTML = "<span>📍</span> Hide Map";
            // Smooth scroll to map
            mapBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        } else {
            locateBtn.innerHTML = "<span>📍</span> Locate Now";
        }
    });

    // --- Quiz Logic ---
    const quizForm = document.getElementById('recycling-quiz');
    const resultDiv = document.getElementById('quiz-result');
    const resetBtn = document.getElementById('reset-quiz');

    // Correct Answers
    const correctAnswers = {
        q1: "Food waste",
        q2: "Rinse them",
        q3: "Mobius loop",
        q4: "PET",
        q5: "All"
    };

    quizForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        let score = 0;
        const formData = new FormData(quizForm);
        
        // Count score
        for (let [question, answer] of Object.entries(correctAnswers)) {
            if (formData.get(question) === answer) {
                score++;
            }
        }

        // Display Message
        let message = "";
        if (score === 5) {
            message = `Perfect Score! 🌟 You scored ${score} out of 5. You're a recycling expert!`;
        } else if (score >= 3) {
            message = `Great job! You scored ${score} out of 5. Keep learning!`;
        } else {
            message = `You scored ${score} out of 5. Review our guide above to improve your score!`;
        }

        resultDiv.textContent = message;
        resultDiv.style.color = score >= 3 ? "var(--primary-green)" : "var(--danger-red)";
    });

    // Reset Quiz
    resetBtn.addEventListener('click', () => {
        quizForm.reset();
        resultDiv.textContent = "";
    });

});