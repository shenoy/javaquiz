document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const type = document.getElementById("type").value;
  const setup = document.getElementById("setup").value;
  const punchline = document.getElementById("punchline").value;
  submit(type, setup, punchline);
});

const submit = async (type, setup, punchline) => {
  console.log(type, setup, punchline);
  const url = "http://127.0.0.1:3000/api/v1/jokes/";

  try {
    const res = await axios({
      method: "POST",
      url: url,
      data: {
        type,
        setup,
        punchline,
      },
    });
    console.log(res);
    if (res.data.status === "success") {
      showAlert("success", "Joke submitted successfully!");
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
