// Mobile Navigation
const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active")
  navMenu.classList.toggle("active")
})

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
  }),
)

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Weather API functionality
async function getWeather() {
  const city = document.getElementById("cityInput").value
  if (!city) {
    alert("Please enter a city name")
    return
  }

  // Simulate weather API call (replace with actual API)
  const weatherData = {
    temperature: Math.floor(Math.random() * 30) + 10,
    description: ["Sunny", "Cloudy", "Rainy", "Partly Cloudy"][Math.floor(Math.random() * 4)],
    humidity: Math.floor(Math.random() * 40) + 40,
    windSpeed: Math.floor(Math.random() * 20) + 5,
    pressure: Math.floor(Math.random() * 50) + 1000,
    location: city,
  }

  updateWeatherDisplay(weatherData)
}

function updateWeatherDisplay(data) {
  const weatherDisplay = document.getElementById("weatherDisplay")
  const weatherIcon = weatherDisplay.querySelector(".weather-icon i")
  const temperature = weatherDisplay.querySelector(".temperature")
  const description = weatherDisplay.querySelector(".description")
  const location = weatherDisplay.querySelector(".location")
  const stats = weatherDisplay.querySelectorAll(".stat span:last-child")

  // Update weather icon based on description
  const iconMap = {
    Sunny: "fas fa-sun",
    Cloudy: "fas fa-cloud",
    Rainy: "fas fa-cloud-rain",
    "Partly Cloudy": "fas fa-cloud-sun",
  }

  weatherIcon.className = iconMap[data.description] || "fas fa-sun"
  temperature.textContent = `${data.temperature}°C`
  description.textContent = data.description
  location.textContent = data.location

  stats[0].textContent = `${data.humidity}%`
  stats[1].textContent = `${data.windSpeed} km/h`
  stats[2].textContent = `${data.pressure} hPa`
}

// Initialize map
// let map
// const L = window.L // Declare the L variable
// function initMap() {
//   // Default coordinates (you can change these)
//   const defaultLat = 40.7128
//   const defaultLng = -74.006

//   map = L.map("map").setView([defaultLat, defaultLng], 13)

//   L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
//     attribution: "© OpenStreetMap contributors",
//   }).addTo(map)

//   // Add sample nursery markers
//   const nurseries = [
//     { lat: 40.7128, lng: -74.006, name: "Green Valley Nursery", address: "123 Farm Road" },
//     { lat: 40.7589, lng: -73.9851, name: "Sunrise Seeds & Plants", address: "456 Garden Street" },
//     { lat: 40.6892, lng: -74.0445, name: "Farmer's Choice Nursery", address: "789 Crop Avenue" },
//   ]

//   nurseries.forEach((nursery) => {
//     L.marker([nursery.lat, nursery.lng]).addTo(map).bindPopup(`<b>${nursery.name}</b><br>${nursery.address}`)
//   })
// }

function initMap() {
      const map = L.map("map").setView([40.7128, -74.006], 13);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap contributors",
      }).addTo(map);

      const nurseries = [
        { lat: 40.7128, lng: -74.006, name: "Green Valley Nursery", address: "123 Farm Road" },
        { lat: 40.7589, lng: -73.9851, name: "Sunrise Seeds & Plants", address: "456 Garden Street" },
        { lat: 40.6892, lng: -74.0445, name: "Farmer's Choice Nursery", address: "789 Crop Avenue" },
      ];

      nurseries.forEach((n) => {
        L.marker([n.lat, n.lng])
          .addTo(map)
          .bindPopup(`<b>${n.name}</b><br>${n.address}`);
      });
    }

    // Initialize map after page loads
    window.onload = initMap;
    
// Initialize map when page loads
document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("map")) {
    initMap()
  }
})

// Video play functionality
document.querySelectorAll(".play-button").forEach((button) => {
  button.addEventListener("click", () => {
    // Simulate video play (you can integrate with actual video player)
    alert("Video player would open here. Integration with YouTube, Vimeo, or custom video player needed.")
  })
})

// Soil testing functionality
function analyzeSoil(input) {
  if (input.files && input.files[0]) {
    const file = input.files[0]
    const reader = new FileReader()

    reader.onload = (e) => {
      // Simulate soil analysis (replace with actual AI/ML analysis)
      setTimeout(() => {
        document.getElementById("soilResults").style.display = "block"

        // Generate random but realistic soil data
        const phValues = ["6.2 (Slightly Acidic)", "6.8 (Neutral)", "7.2 (Slightly Alkaline)"]
        const nutrientLevels = ["Low", "Medium", "High"]

        const results = document.querySelectorAll("#soilResults .result-value")
        results[0].textContent = phValues[Math.floor(Math.random() * phValues.length)]
        results[1].textContent = nutrientLevels[Math.floor(Math.random() * nutrientLevels.length)]
        results[2].textContent = nutrientLevels[Math.floor(Math.random() * nutrientLevels.length)]
        results[3].textContent = nutrientLevels[Math.floor(Math.random() * nutrientLevels.length)]
      }, 2000)
    }

    reader.readAsDataURL(file)
  }
}

// Pesticide recommendation functionality
function recommendPesticide() {
  const cropType = document.getElementById("cropType").value
  const pestType = document.getElementById("pestType").value

  if (!cropType || !pestType) {
    alert("Please select both crop type and pest type")
    return
  }

  // Simulate pesticide recommendation
  document.getElementById("pesticideResults").style.display = "block"

  // You can customize recommendations based on crop and pest type
  const recommendations = {
    organic: ["Neem Oil Spray", "Diatomaceous Earth", "Bacillus thuringiensis"],
    chemical: ["Imidacloprid 17.8% SL", "Chlorpyrifos 20% EC", "Cypermethrin 10% EC"],
  }

  const organicRec = recommendations.organic[Math.floor(Math.random() * recommendations.organic.length)]
  const chemicalRec = recommendations.chemical[Math.floor(Math.random() * recommendations.chemical.length)]

  document.querySelector("#pesticideResults .pesticide-item:first-child p").textContent = organicRec
  document.querySelector("#pesticideResults .pesticide-item:last-child p").textContent = chemicalRec
}

// Product filtering functionality
function filterProducts(category) {
  const products = document.querySelectorAll(".product-card")
  const buttons = document.querySelectorAll(".category-btn")

  // Update active button
  buttons.forEach((btn) => btn.classList.remove("active"))
  event.target.classList.add("active")

  // Filter products
  products.forEach((product) => {
    if (category === "all" || product.dataset.category === category) {
      product.style.display = "block"
    } else {
      product.style.display = "none"
    }
  })
}

// Redirect to online stores
function redirectToStore(platform, product) {
  const urls = {
    amazon: `https://amazon.com/s?k=${product}`,
    flipkart: `https://flipkart.com/search?q=${product}`,
    ebay: `https://ebay.com/sch/i.html?_nkw=${product}`,
  }

  window.open(urls[platform], "_blank")
}

// Open authentication page in new tab
function openAuthPage() {
  window.open("auth.html", "_blank")
}

// Scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Apply scroll animations to sections
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section")
  sections.forEach((section) => {
    section.style.opacity = "0"
    section.style.transform = "translateY(30px)"
    section.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(section)
  })
})
