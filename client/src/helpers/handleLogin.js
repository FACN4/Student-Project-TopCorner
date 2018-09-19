function handleLogin(event) {
  event.preventDefault();
  const data = {
    username: this.state.username,
    password: this.state.password
  };
  fetch("/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(res => {
      this.setState({ loginError: res.status });
    })
    .catch(err => {
      this.setState({
        loginError: err.status
      });
    });
}

export default handleLogin;
