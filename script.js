
function joinMission() {
    console.log("Join Our Mission button clicked! Directing to contact/membership form.");
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}


function learnMore() {
    console.log("Learn More button clicked! Scrolling to About section.");
  
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
}


function registerEvent(id) {
    console.log(`Register button clicked for Event ID: ${id}`);
    alert(`Registration successful for Event #${id}! (Placeholder Action)`);
}

function readArticle(id) {
    console.log(`Read Article button clicked for News ID: ${id}`);
    alert(`Redirecting to News Article #${id}. (Placeholder Action)`);
}

function viewAll() {
    console.log("View All Events & News button clicked.");
    alert("Redirecting to the full calendar and news archive. (Placeholder Action)");
}


document.addEventListener('submit', function(event) {
    if (event.target && event.target.classList.contains('contact-form')) {
        event.preventDefault(); 
        console.log("Contact form submitted!");
        alert("Thank you for your message! We will get back to you shortly. (Placeholder Submission)");
    }
});

-

document.addEventListener('DOMContentLoaded', () => {
    
    
    const video = document.getElementById('bg-video');
    if (video) {
        
        video.play().catch(error => {
            console.warn("Autoplay was prevented.", error);
        });
    }

    
    const statCards = document.querySelectorAll('.stat-card');
    
    function checkVisibility() {
       
        const viewportHeight = window.innerHeight;

        statCards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            
            
            if (cardTop < viewportHeight * 0.85) {
                card.classList.add('visible');
            }
        });
    }

    
    window.addEventListener('scroll', checkVisibility);
    
   
    checkVisibility(); 
});