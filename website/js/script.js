function validation() {
  let username = document.getElementById("name").value;
  let useremail = document.getElementById("email").value;
  let useraddress = document.getElementById("address").value;
  let usermessage = document.getElementById("message").value;

  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  if (username === "") {
    window.alert("Name cannot be left empty");
    return;
  }

  if (useraddress === "") {
    window.alert("Address cannot be left empty");
    return;
  }

  if (useremail === "") {
    window.alert("Email cannot be left empty");
    return;
  }

  if (!emailRegex.test(useremail)) {
    alert("Email invalid");
    return;
  }
  if (usermessage === "") {
    window.alert("Message cannot be left empty");
    return;
  }

  alert("Name: ")
}
