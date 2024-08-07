function read() {
  let obj = {
    name: document.getElementById("name").value,
    age: document.getElementById("age").value,
    gender: document.querySelector('input[name="gender"]:checked'),
    email: document.getElementById("email").value,
    //   subject: document.querySelectorAll('input[name="subjects"]:checked'),
    payment: document.getElementById("payment").value,
    password: document.getElementById("password").value,
  };
  console.log(obj);
  console.log(
    document.querySelectorAll('input[name="subjects"]:checked')
  );
}