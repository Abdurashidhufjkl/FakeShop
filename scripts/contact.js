const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();


  const nameRegex = /^[A-Za-z\s]{2,30}$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;


  if (!nameRegex.test(name)) {
    formMessage.style.color = "red";
    formMessage.textContent =
      "Iltimos, ismingizni to‘g‘ri kiriting (faqat harflar).";
    return;
  }

  if (!emailRegex.test(email)) {
    formMessage.style.color = "red";
    formMessage.textContent = "Iltimos, to‘g‘ri email kiriting.";
    return;
  }

  if (message.length < 5) {
    formMessage.style.color = "red";
    formMessage.textContent = "Xabar juda qisqa.";
    return;
  }


  formMessage.style.color = "green";
  formMessage.textContent = "Xabaringiz muvaffaqiyatli yuborildi!";

  form.reset();
});
