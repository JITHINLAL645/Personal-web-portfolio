let nameInput=document.getElementById('name');
let emailInput=document.getElementById('email');
let subjectInput=document.getElementById('subject');
let messageInput=document.getElementById('message');

function validateForm() {
    let isValid = true;

    // Validate Name
    if (nameInput.value.trim() === "") {
      document.getElementById("errorName").innerHTML = "Name is required";
      isValid = false;
    } else if (nameInput.value.length < 3) {
      document.getElementById("errorName").innerHTML = "Name should have at least 3 characters";
      isValid = false;
    } else {
      document.getElementById("errorName").innerHTML = "";
    }

    // Validate Email
    if (emailInput.value.trim() === "") {
      document.getElementById("errorEmail").innerHTML = "Email is required";
      isValid = false;
    } else if (!validateEmail(emailInput.value)) {
      document.getElementById("errorEmail").innerHTML = "Please enter a valid email address";
      isValid = false;
    } else {
      document.getElementById("errorEmail").innerHTML = "";
    }

    // Validate Subject
    if (subjectInput.value.trim() === "") {
      document.getElementById("errorSubject").innerHTML = "Subject is required";
      isValid = false;
    } else if (subjectInput.value.length < 10) {
      document.getElementById("errorSubject").innerHTML = "Subject should have at least 3 characters";
      isValid = false;
    } else {
      document.getElementById("errorSubject").innerHTML = "";
    }

    // Validate Message
    if (messageInput.value.trim() === "") {
      document.getElementById("errorMessage").innerHTML = "Message is required";
      isValid = false;
    } else if (messageInput.value.length < 20) {
      document.getElementById("errorMessage").innerHTML = "Message should have at least 10 characters";
      isValid = false;
    } else {
      document.getElementById("errorMessage").innerHTML = "";
    }

    return isValid;
  }

  function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }
