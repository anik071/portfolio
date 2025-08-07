const menuOpen = document.querySelector("#menu_open");
const menuClose = document.querySelector("#menu_close");
menuOpen.addEventListener("click", () => {
    document.body.classList.toggle("mobile");
});
menuClose.addEventListener("click", () => menuOpen.click());
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach(link => {
    link.addEventListener("click", () => menuOpen.click());
});

async function fetchCodeforcesRank(username) {
        const response =await fetch(`https://codeforces.com/api/user.info?handles=${username}`);
        const data =await response.json();
        if (data.status === "OK") {
          const user = data.result[0];
          document.getElementById("cf-rank").textContent = `${user.rank} (${user.rating})`;
          document.getElementById("cf-max-rank").textContent = `${user.maxRank}, ${user.maxRating}`;
        } else {
          document.getElementById("cf-rank").textContent = "User not found";
        }
      }
    fetchCodeforcesRank("anik_071");
    