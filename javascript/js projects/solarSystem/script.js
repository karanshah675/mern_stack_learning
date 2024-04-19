const select = document.querySelector(".select");
const caclBtn = document.querySelector("#calc-btn");
const mass = document.querySelector("#mass");
const nameOfPlanet = document.getElementById("nameOfPlanet");
const plantImg = document.querySelector(".planet-image");
const planets = {
  mercury: {
    mass: 3.3e23, // Mass in kg
    radius: 2440e3,
    iamge: "images/mercury.jpg", // Radius in meters
  },
  venus: {
    mass: 4.87e24,
    radius: 6052e3,
    iamge: "images/venus.jpg",
  },
  earth: {
    mass: 5.97e24,
    radius: 6371e3,
    iamge: "images/earth.jpg",
  },
  mars: {
    mass: 6.42e23,
    radius: 3390e3,
    iamge: "images/mars.jpg",
  },
  jupiter: {
    mass: 1.89e27,
    radius: 69911e3,
    iamge: "images/jupiter.jpg",
  },
  saturn: {
    mass: 5.68e26,
    radius: 60268e3,
    iamge: "images/saturn.jpg",
  },
  uranus: {
    mass: 8.68e25,
    radius: 25559e3,
    iamge: "images/uranus.jpg",
  },
  neptune: {
    mass: 1.02e26,
    radius: 24622e3,
    iamge: "images/neptune.jpg",
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
  let massOfObject = Math.round(
    calculateWeight(select.value.toLowerCase(), mass.value)
  );
  nameOfPlanet.innerHTML = `${select.value} ${massOfObject} n `;
  for (const key in planets) {
    if (key == select.value.toLowerCase()) {
      plantImg.src = `images/${key}.jpg`;
    }
  }
});
