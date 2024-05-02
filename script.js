const users = document.querySelector(".user-list");
const userName = document.querySelector("#user");
const loader = document.querySelector(".loader");

const userArr = [];

async function getuserData() {
  try {
    const response = await fetch("https://api.github.com/users", {
      method: "GET",
    });
    const data = await response.json();
    // console.log(data);
    if (data) {
      users.innerHTML = "";
    }
    data.map((user) => {
      const li = document.createElement("li");
      userArr.push(li);
      li.insertAdjacentHTML(
        "afterbegin",
        `
      <div class="user-data ">
        <img src="${user.avatar_url}" alt="">
        <div>
            <p>${user.login}</p>
            <a href=${user.html_url} target="_blank">${user.html_url}</a>
        </div>
      </div>
      `,
        users.appendChild(li)
      );
    });
  } catch (error) {
    console.log(error);
  }
}

userName.addEventListener("input", (e) => {
  //   console.log(e.target.value);
  const val = e.target.value;
  userArr.filter((currentEle) => {
    // console.log(currentEle);
    currentEle.innerText.toLowerCase().includes(val.toLowerCase())
      ? currentEle.classList.remove("hide")
      : currentEle.classList.add("hide");
  });
});

getuserData();
