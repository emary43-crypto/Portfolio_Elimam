const contactForm = document.querySelector("#contactForm");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.querySelector("#name");
    const email = document.querySelector("#email");
    const message = document.querySelector("#message");

    const nameError = document.querySelector("#nameError");
    const emailError = document.querySelector("#emailError");
    const messageError = document.querySelector("#messageError");

    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";

    let valid = true;

    if (name.value.trim() === "") {
        nameError.textContent = "Please enter your name.";
        name.setAttribute("aria-invalid", "true");
        valid = false;
    } else {
        name.removeAttribute("aria-invalid");
    }

    if (email.value.trim() === "") {
        emailError.textContent = "Please enter your email.";
        email.setAttribute("aria-invalid", "true");
        valid = false;
    } else {
        email.removeAttribute("aria-invalid");
    }

    if (message.value.trim() === "") {
        messageError.textContent = "Please enter a message.";
        message.setAttribute("aria-invalid", "true");
        valid = false;
    } else {
        message.removeAttribute("aria-invalid");
    }

    if (valid) {
        alert("Thank you! Your message has been submitted.");
        contactForm.reset();
    }
});
const contactForm = document.querySelector("#contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.querySelector("#name");
        const email = document.querySelector("#email");
        const message = document.querySelector("#message");

        const nameError = document.querySelector("#nameError");
        const emailError = document.querySelector("#emailError");
        const messageError = document.querySelector("#messageError");

        nameError.textContent = "";
        emailError.textContent = "";
        messageError.textContent = "";

        name.removeAttribute("aria-invalid");
        email.removeAttribute("aria-invalid");
        message.removeAttribute("aria-invalid");

        let valid = true;


        if (name.value.trim() === "") {

            nameError.textContent = "Please enter your name.";
            name.setAttribute("aria-invalid", "true");

            valid = false;
        }


        if (email.value.trim() === "") {

            emailError.textContent = "Please enter your email.";
            email.setAttribute("aria-invalid", "true");

            valid = false;
        }


        if (message.value.trim() === "") {

            messageError.textContent = "Please enter a message.";
            message.setAttribute("aria-invalid", "true");

            valid = false;
        }


        if (valid) {

            alert("Thank you! Your message has been submitted.");

            contactForm.reset();
        }

    });

}