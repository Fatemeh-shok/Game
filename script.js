// 1️⃣ Typing Effect
const text = "Welcome to My Future Website 🚀";
let index = 0;
function typingEffect() {
  if (index < text.length) {
    document.querySelector(".typing").textContent += text.charAt(index);
    index++;
    setTimeout(typingEffect, 50);
  }
}
if (document.querySelector(".typing")) {
  typingEffect();
}

// 2️⃣ Dark Mode Toggle
const toggleBtn = document.querySelector(".dark-toggle");
if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
}

// 3️⃣ Animated Counter
const counter = document.querySelector(".counter");
if (counter) {
  let count = 0;
  const target = 500;
  const interval = setInterval(() => {
    count++;
    counter.textContent = count;
    if (count >= target) clearInterval(interval);
  }, 5);
}

// 4️⃣ Smooth Scroll
document.querySelectorAll("a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// 5️⃣ Header Change on Scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  if (header) {
    if (window.scrollY > 50) {
      header.style.background = "black";
      header.style.padding = "10px";
    } else {
      header.style.background = "transparent";
      header.style.padding = "20px";
    }
  }
});

// 6️⃣ Copy Text Button
const copyBtn = document.querySelector(".copy-btn");
if (copyBtn) {
  copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText("Copied from my website!");
    alert("Text Copied ✅");
  });
}

// 7️⃣ Simple Page Loader
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  if (loader) {
    loader.style.display = "none";
  }
});
