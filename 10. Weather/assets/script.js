const mainContainer = document.getElementById("mainContainer");
const weatherCard = document.getElementById("weatherCard");
const loadingSpinner = document.getElementById("loadingSpinner");
const weatherContent = document.getElementById("weatherContent");
const defaultWeather = document.getElementById("defaultWeather");

document.getElementById("getWeatherBtn").addEventListener("click", () => {
  const lat = document.getElementById("lat").value.trim();
  const lon = document.getElementById("lon").value.trim();

  if (!lat || !lon) {
    alert("⚠️ Please Enter Both Latitude and Longitude...");
    return;
  }

  async function getWeather(lat, lon) {
    const apiKey = "8ec7c0305cd57b603debd4936ecae2f6";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    try {
      // Show spinner
      loadingSpinner.classList.remove("hidden");
      defaultWeather.classList.add("hidden");
      weatherContent.classList.add("hidden");

      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to fetch weather data");
      const data = await res.json();

      // Weather icon + description
      const iconCode = data.weather[0].icon;
      const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
      document.getElementById("weatherIcon").src = iconUrl;
      document.getElementById("weatherDescription").textContent =
        data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1);

      // Weather details grid
      const weatherHTML = `
        <div class="flex justify-between items-center px-4 py-2 bg-gray-800 rounded-lg shadow-sm">
          <span class="font-bold"><i class="fas fa-thermometer-half"></i> Temp:</span>
          <span class="text-blue-300">${data.main.temp} °C</span>
        </div>
        <div class="flex justify-between items-center px-4 py-2 bg-gray-800 rounded-lg shadow-sm">
          <span class="font-bold"><i class="fas fa-temperature-low"></i> Feels Like:</span>
          <span class="text-blue-300">${data.main.feels_like} °C</span>
        </div>
        <div class="flex justify-between items-center px-4 py-2 bg-gray-800 rounded-lg shadow-sm">
          <span class="font-bold"><i class="fas fa-arrow-up"></i> Max Temp:</span>
          <span class="text-blue-300">${data.main.temp_max} °C</span>
        </div>
        <div class="flex justify-between items-center px-4 py-2 bg-gray-800 rounded-lg shadow-sm">
          <span class="font-bold"><i class="fas fa-arrow-down"></i> Min Temp:</span>
          <span class="text-blue-300">${data.main.temp_min} °C</span>
        </div>
        <div class="flex justify-between items-center px-4 py-2 bg-gray-800 rounded-lg shadow-sm">
          <span class="font-bold"><i class="fas fa-tint"></i> Humidity:</span>
          <span class="text-blue-300">${data.main.humidity}%</span>
        </div>
        <div class="flex justify-between items-center px-4 py-2 bg-gray-800 rounded-lg shadow-sm">
          <span class="font-bold"><i class="fas fa-flag"></i> Country:</span>
          <span class="text-blue-300">${data.sys.country}</span>
        </div>
        <div class="flex justify-between items-center px-4 py-2 bg-gray-800 rounded-lg shadow-sm">
          <span class="font-bold"><i class="fas fa-wind"></i> Wind:</span>
          <span class="text-blue-300">${data.wind.speed} m/s</span>
        </div>
        <div class="flex justify-between items-center px-4 py-2 bg-gray-800 rounded-lg shadow-sm">
          <span class="font-bold"><i class="fas fa-map-marker-alt"></i> Location:</span>
          <span class="text-blue-300">${data.name}</span>
        </div>
      `;

      document.getElementById("weatherResult").innerHTML = weatherHTML;

      // Layout adjust
      mainContainer.classList.add("sm:flex-row", "sm:max-w-4xl");
      mainContainer.classList.remove("max-w-md");
      mainContainer.style.display = "flex";
      mainContainer.style.gap = "2rem";

      // Hide spinner, show content
      loadingSpinner.classList.add("hidden");
      weatherContent.classList.remove("hidden");
    } catch (err) {
      console.error("Error:", err);
      alert("Could not fetch weather data. Check API key or coordinates.");
      loadingSpinner.classList.add("hidden");
      defaultWeather.classList.remove("hidden");
    }
  }

  getWeather(lat, lon);
});