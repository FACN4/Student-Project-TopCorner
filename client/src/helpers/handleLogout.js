import Cookies from "js-cookie";
function handleLogout() {
  Cookies.remove("user_auth");
  this.setState({
    auth: false,
    authUser: null
  });
}

export default handleLogout;
