import Cookies from "js-cookie";
function handleLogout() {
  Cookies.remove("user_auth");
}

export default handleLogout;
