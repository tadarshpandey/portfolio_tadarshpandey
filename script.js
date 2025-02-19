/*that is used for profile pic transition on whenever page is loaded*/
document.addEventListener("DOMContentLoaded", function(){
    document.querySelector(".profile-pic").classList.add("loaded")
})

/**there is implement scripts for form for contacting>>> */
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let subject = document.getElementById('subject').value.trim();
    let message = document.getElementById('message').value.trim();

    if (!name || !email || !subject || !message) {
        alert("Please fill in all fields.");
        return;
    }
    
    alert("Message sent successfully!");
    document.getElementById('contactForm').reset();
});

