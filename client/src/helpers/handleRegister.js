function handleRegister(event) {
  event.preventDefault();
  const data = {
    username: this.state.newUsername,
    email: this.state.newEmail,
    password: this.state.newPassword
  };
  fetch("/api/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    },
    body: JSON.stringify(data)
  })
    .then(res => {
      if (!res.ok) {
        throw res;
      }
      this.setState({
        signupSuccess: "Signup success! Please go to the login page"
      });
      return true;
    })
    .then(res => {
      if (res === true) {
        window.location.reload();
      }
    })
    .catch(err => {
      this.setState({
        signupError: "Username and/or email already exist"
      });
    });
}

export default handleRegister;
