// const validateCookie = () => {
//   var getCookiePromise = new Promise(function(resolve, reject) {
//     const cookieStr = Cookies.get("user_auth");
//     const cookieObj = { user_auth: cookieStr };
//     resolve(cookieObj);
//   });
//   getCookiePromise
//     .then(cookieObj => {
//       fetch("/api/cookieValidation", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json; charset=utf-8"
//         },
//         body: JSON.stringify(cookieObj)
//       })
//         .then(res => res.json())
//         .then(res => {
//           console.log("IM IN APP.JS>>" + res.auth + "   " + res.username);
//         })
//         .catch(err => {
//           console.log(err);
//         });
//     })
//     .catch(err => console.log(err));
// };

// module.export = { validateCookie };
