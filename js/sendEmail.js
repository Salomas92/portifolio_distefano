function SendEmail() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  const recipientEmail = "jujudistefanoo@gmail.com";

  Email.send({
    SecureToken: "ed5407c6-f07c-41b1-ae76-fba516d813cf",
    To: recipientEmail,
    From: recipientEmail,
    ReplyTo: email,
    Subject: "Form Portfólio",
    Body: `
            Name: ${name} <br>
            Email: ${email} <br>
            Message: ${message}
        `,
  }).then(() => {
    const popup = document.getElementById("popup");
    popup.style.display = "block";
    setTimeout(() => {
      popup.style.display = "none";
    }, 2000);
  });
}
