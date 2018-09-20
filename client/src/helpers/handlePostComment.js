function handlePostComment(event) {
  event.preventDefault();
  const data = {
    user_id: this.state.currentUserId,
    comment: this.state.currentComment
  };
  fetch("/api/postComment", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    },
    body: JSON.stringify(data)
  })
    .then(res => {
      if (res.status !== 200) {
        throw res;
      }
      console.log("comment successfully added");
      return true;
    })
    .then(res => {
      if (res === true) {
        window.location.reload();
      }
    })
    .catch(err => console.log(err));
}

export default handlePostComment;
