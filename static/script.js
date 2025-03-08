/*that is used for profile pic transition on whenever page is loaded*/
document.addEventListener("DOMContentLoaded", function(){
    document.querySelector(".profile-pic").classList.add("loaded")
})

/**there is implement scripts for form for contacting>>> */
/**document.getElementById('contactForm').addEventListener('submit', function(event) {
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
    
});
*/

/**Code for handling of form submission>>> */

document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript Loaded!"); // ✅ Debugging JS Load

    let form = document.getElementById("contactForm");
    if (!form) {
        console.error("❌ Form not found! Check your HTML.");
        return;
    }
    console.log("✅ Form Found!");

    form.addEventListener("submit", async function (event) {
        event.preventDefault();
        console.log("✅ Submit Button Clicked!");

        // Get input elements safely
        let nameField = document.querySelector('input[name="name"]');
        let emailField = document.querySelector('input[name="email"]');
        let subjectField = document.querySelector('input[name="subject"]');
        let messageField = document.querySelector('textarea[name="message"]');

        // Check if elements exist
        if (!nameField || !emailField || !subjectField || !messageField) {
            console.error("❌ One or more input fields not found! Check your form.");
            return;
        }

        let formData = new FormData();
        formData.append("name", nameField.value);
        formData.append("email", emailField.value);
        formData.append("subject", subjectField.value);
        formData.append("message", messageField.value);

        console.log("📤 Sending Form Data:", Object.fromEntries(formData));

        try {
            let response = await fetch("/contact", {
                method: "POST",
                body: formData
            });

            let result = await response.json();
            console.log("✅ Server Response:", result);
            document.getElementById("responseMessage").innerText = result.message;
        } catch (error) {
            console.error("❌ Error Sending Request:", error);
        }
        document.getElementById("contactForm").reset();

    });
});
