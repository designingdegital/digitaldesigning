const wave1 = document.getElementById("wave1");
const wave2 = document.getElementById("wave2");

let t = 0;

function animateWaves() {
  t += 0.005;

  wave1.setAttribute(
    "d",
    `M0,350 C240,${300 + Math.sin(t) * 30} 480,${400 + Math.cos(t) * 20}
     720,370 960,340 1200,280 1440,320 L1440,600 L0,600 Z`
  );

  wave2.setAttribute(
    "d",
    `M0,380 C300,${340 + Math.cos(t) * 25} 600,${420 + Math.sin(t) * 20}
     900,390 1200,360 1440,300 L1440,600 L0,600 Z`
  );

  requestAnimationFrame(animateWaves);
}

animateWaves();
