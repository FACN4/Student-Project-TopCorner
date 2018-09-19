const decodeCookie = new Promise(function(resolve, reject) {
  fetch("/api/cookieValidation", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    }
  })
    .then(res => res.json())
    .then(res => {
      resolve(res.username);
    })
    .catch(err => {
      reject(err);
    });
});

function validateCookieTF(that) {
  decodeCookie
    .then(function(decodedCookie) {
      if (typeof decodedCookie === "string") {
        that.setState({
          auth: true,
          authUser: decodedCookie
        });
      } else {
        that.setState({
          auth: false,
          authUser: null
        });
      }
    })
    .catch(err => console.log(err));
  return;
}
const validateCookieUser = decodeCookie
  .then(decodedCookie => decodedCookie)
  .catch(err => console.log(err));

export default validateCookieTF;
