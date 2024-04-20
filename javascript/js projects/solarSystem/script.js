const select = document.querySelector(".select");
const caclBtn = document.querySelector("#calc-btn");
const mass = document.querySelector("#mass");
const nameOfPlanet = document.getElementById("nameOfPlanet");
const plantImg = document.querySelector(".planet-image");
const description = document.querySelector(".description");

const planets = {
  venus: {
    mass: 4.87e24,
    radius: 6052e3,
    iamge: "images/venus.jpg",
    bgColor: "rgba(180, 134, 64, 0.699)",
    color: "#1c1c1c",
  },
  earth: {
    mass: 5.97e24,
    radius: 6371e3,
    iamge: "images/earth.jpg",
    bgColor: "  rgba(15, 16, 56, 0.699)",
    color: "#fff",
  },
  mars: {
    mass: 6.42e23,
    radius: 3390e3,
    iamge: "images/mars.jpg",
    bgColor: "  rgba(163, 63, 1,0.699)",
    color: "#fff",
  },
  jupiter: {
    mass: 1.89e27,
    radius: 69911e3,
    iamge: "images/jupiter.jpg",
    bgColor: "  rgba(65, 45, 22,0.699)",
    color: "#fff",
  },
  saturn: {
    mass: 5.68e26,
    radius: 60268e3,
    iamge: "images/saturn.jpg",
    bgColor: "  rgba(181, 167, 130,0.699)",
    color: "#1c1c1c",
  },
  uranus: {
    mass: 8.68e25,
    radius: 25559e3,
    iamge: "images/uranus.jpg",
    bgColor: "  rgba(150, 198, 198,0.699)",
    color: "#1c1c1c",
  },
  neptune: {
    mass: 1.02e26,
    radius: 24622e3,
    iamge: "images/neptune.jpg",
    bgColor: "  rgba(30, 29, 169,0.699)",
    color: "#fff",
  },
};

function calculateWeight(planetName, mass) {
  const planet = planets[planetName];
  if (!planet) {
    throw new Error("Invalid planet name");
  }

  const massPlanet = planet.mass;
  const radiusPlanet = planet.radius;
  const gravitationalConstant = 6.6743e-11;
  const massObject = mass; // Mass of the object (10 kg)

  const distance = radiusPlanet; // Estimate using planet radius

  const force =
    (gravitationalConstant * massPlanet * massObject) / Math.pow(distance, 2);

  return force;
}

caclBtn.addEventListener("click", () => {
  if (description.classList.contains("animationStart")) {
    description.classList.remove("animationStart");
  }
  if (mass.value !== "" && select.value !== "none") {
    let bg = planets[select.value.toLowerCase()];
    let massOfObject = Math.round(
      calculateWeight(select.value.toLowerCase(), mass.value)
    );
    plantImg.style.background = `url('images/${select.value.toLowerCase()}.jpg `;
    plantImg.style.backgroundSize = `contain`;
    plantImg.style.transition = `background 0.9s linear`;

    setTimeout(() => {
      nameOfPlanet.innerHTML = `${select.value} ${massOfObject} n `;
      nameOfPlanet.previousElementSibling.innerHTML = `the weight of the object on `;
      nameOfPlanet.parentElement.parentElement.style.background = bg.bgColor;
      nameOfPlanet.parentElement.parentElement.style.color = bg.color;
      // description.classList.animation = "anim 2s forwards linear";
      description.classList.add("animationStart");
      if (bg.color === "#1c1c1c") {
        description.firstElementChild.style.backgroundColor = "#0000002f";
      } else {
        description.firstElementChild.style.backgroundColor = "#d4d2d22f";
      }
    }, 1000);
  } else if (select.value !== "none" && mass.value === "") {
    plantImg.style.background = `url('images/galaxy.jpg `;
    plantImg.style.backgroundSize = `contain`;
    plantImg.style.transition = `background 0.4s linear`;
    alert("please enter mass");
  } else if (select.value === "none" && mass.value !== "") {
    plantImg.style.background = `url('images/galaxy.jpg `;
    plantImg.style.backgroundSize = `contain`;
    plantImg.style.transition = `background 0.4s linear`;

    alert("please select the planet");
  } else {
    plantImg.style.background = `url('images/galaxy.jpg `;
    plantImg.style.backgroundSize = `contain`;
    plantImg.style.transition = `background 0.4s linear`;

    alert("please enter mass and select any planet.");
    return;
  }
});

// caclBtn.addEventListener("onmouse",()=>{
//   alert("over")
// });
