// Smooth scroll
function scrollToServices() {
  document.getElementById("services").scrollIntoView({ behavior: "smooth" });
}

// Modal
function openModal(title, imageName) {
  document.getElementById("modalTitle").innerText = title;
  document.getElementById("modalImage").src =
    "./images/services/" + imageName;

  document.getElementById("serviceModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("serviceModal").style.display = "none";
}
// Wave animation
const wave1 = document.getElementById("wave1");
const wave2 = document.getElementById("wave2");

let t = 0;

function animateWaves() {
  t += 0.01;

  wave1.setAttribute(
    "d",
    `M0,200 C300,${220 + Math.sin(t)*20} 600,${180 + Math.cos(t)*20}
     900,220 1200,200 1440,220 L1440,600 L0,600 Z`
  );

  wave2.setAttribute(
    "d",
    `M0,240 C300,${260 + Math.cos(t)*20} 600,${220 + Math.sin(t)*20}
     900,260 1200,240 1440,260 L1440,600 L0,600 Z`
  );

  requestAnimationFrame(animateWaves);
}

animateWaves();
