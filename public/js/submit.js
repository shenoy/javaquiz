document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const type = document.getElementById("type").value;
  const answer = document.getElementById("answer").value;
  const question = document.getElementById("question").value;
  submit(type, question, answer);
});

const submit = async (type, question, answer) => {
  console.log(type, question, answer);
  const url = "http://127.0.0.1:3000/api/v1/javaquiz/";

  try {
    const res = await axios({
      method: "POST",
      url: url,
      data: {
        type,
        question,
        answer,
      },
    });
    console.log(res);
    if (res.data.status === "success") {
      showAlert("success", "Quiz submitted successfully!");
      window.setTimeout(() => {
        location.assign("/");
      }, 1500);
    }
  } catch (err) {
    showAlert("error", err.response.data.message);
  }
};

const hideAlert = () => {
  const el = document.querySelector(".alert");
  if (el) el.parentElement.removeChild(el);
};

// type is 'success' or 'error'
const showAlert = (type, msg) => {
  hideAlert();
  const markup = `<div class="alert alert--${type}">${msg}</div>`;
  document.querySelector("body").insertAdjacentHTML("afterbegin", markup);
  window.setTimeout(hideAlert, 5000);
};
