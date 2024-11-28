document.getElementById("weather-form").addEventListener("submit", async function (event) {
    event.preventDefault();
  
    const city = document.getElementById("city").value;
    const API_KEY = "200de175e3717cbaff99e791f2124387";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      if (data.cod === 200) {
        // Update the results section
        document.getElementById("city-name").textContent = data.name;
        document.getElementById("temperature").textContent = data.main.temp;
        document.getElementById("wind-speed").textContent = data.wind.speed;
  
        // Simple prediction logic
        const solarPotential =
          data.main.temp > 20 ? "High solar energy potential" : "Low solar energy potential";
        const windPotential =
          data.wind.speed > 5 ? "High wind energy potential" : "Low wind energy potential";
  
        document.getElementById("prediction").textContent = `${solarPotential}, ${windPotential}`;
  
        // Show the results
        document.getElementById("results").classList.remove("hidden");
      } else {
        alert("City not found. Please try again.");
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
      alert("An error occurred. Please try again later.");
    }
  });
  