const handleLogin = async (event) => {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("pass").value;
  try {
    fetch("https://apimovie-6ifv.onrender.com/users/app", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      
      
  } catch (error) {
    console.log(error);
  }
};
