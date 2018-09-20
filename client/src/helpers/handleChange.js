function handleChange(event) {
  const { name, value } = event.target;
  this.setState({
    [name]: value,
    signupError: "",
    createUserError: "",
    signupSuccess: ""
  });

  let errorMessage = "";
  let disabled = true;
  if (
    this.state.newUsername.trim() === "" &&
    this.state.newPassword.trim() === "" &&
    this.state.newEmail.trim() === ""
  ) {
    errorMessage = "";
  } else if (!this.state.newUsername.match(/[0-9a-zA-Z]{6,20}/g)) {
    errorMessage =
      "Username must contain only numbers and letters with length between 6 and 20";
  } else if (
    !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.newEmail)
  ) {
    errorMessage = "Must use a valid email address";
  } else if (!this.state.newPassword.match(/[0-9a-zA-z]{6,20}/g)) {
    errorMessage =
      "Password must contain only numbers and letters with length between 6 and 20";
  } else if (this.state.newPasswordConfirm !== this.state.newPassword) {
    errorMessage = "Passwords do not match";
  } else {
    errorMessage = "";
    disabled = false;
  }

  this.setState({
    signupError: errorMessage,
    disabledProp: disabled
  });
}

export default handleChange;
