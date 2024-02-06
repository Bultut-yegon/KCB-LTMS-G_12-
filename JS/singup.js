<!DOCTYPE html>
<html lang="us">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charset="utf-8" />
    <title>KCB</title>
    <link rel="stylesheet" href="style.css" />
    <script
      src="https://kit.fontawesome.com/8c8b19eb92.js"
      crossorigin="anonymous"
    ></script>
  </head>
  <body>
    <div class="container">
      <div class="box-form">
        <h1 id="title">Sign up</h1>
        <form>
          <div class="input-group">
            <div class="input-field" id="name">
              <i class="fa-solid fa-user"></i>
              <input type="text" placeholder="Name" required />
            </div>
            <div class="input-field" id="email">
              <i class="fa-regular fa-envelope"></i>
              <input type="email" placeholder="Email" required />
            </div>
            <div class="input-field" id="password">
              <i class="fa-solid fa-key"></i>
              <input type="password" placeholder="Password" required />
            </div>
            <div class="input-field" id="userIdentification">
              <i class="fa-solid fa-phone"></i>
              <input type="Number" placeholder="Id" required />
            </div>
            <p>Lost password? <a href="#">Click here!</a></p>
          </div>
          <div class="btn">
            <button
              type="button"
              id="signupBtn"
              onclick="signUp"
              value="Sign Up"
            >
              Sign up
            </button>
            <button
              type="button"
              class="disabled"
              id="signInBtn"
              onclick="signIn"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
    <script>
      let signupBtn = document.getElementById("signupBtn");
      let signinBtn = document.getElementById("signInBtn");
      let nameField = document.getElementById("name");
      let title = document.getElementById("title");

      signinBtn.onclick = function () {
        nameField.style.maxHeight = "0";
        title.innerHTML = "Sign in";
        signupBtn.classList.add("disabled");
        signinBtn.classList.remove("disabled");
      };

      signupBtn.onclick = function () {
        nameField.style.maxHeight = "65px";
        title.innerHTML = "Sign Up";
        signupBtn.classList.remove("disabled");
        signinBtn.classList.add("disabled");
      };
    </script>

    <script src="./bundle.js" type="module"></script>
  </body>
</html>