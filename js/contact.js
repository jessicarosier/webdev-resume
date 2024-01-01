const scriptURL = "https://script.google.com/macros/s/AKfycbwZdxUD3WdENHe4YoFyFMuwlYL3GAFlbJobEDQm0HG5Sl-r8vjkzWnKNeK3apxW1U_T/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {

    e.preventDefault();
    msg.style.display = "block";
    fetch(scriptURL, {method: "POST", body: new FormData(form)})
        .then((response) => {
            console.log("Success!", response);
            msg.innerHTML = "Message sent successfully!";
            msg.style.color = "#00ff00";
            setTimeout(() => {
                msg.style.display = "none";
            }, 5000);
            form.reset();
        })
        .catch((error) => {
            console.error("Error!", error.message);
            msg.innerHTML = "Message failed to send!";
            msg.style.color = "#ff0000";
            setTimeout(() => {
                msg.style.display = "none";
            }, 5000);
        });
});

