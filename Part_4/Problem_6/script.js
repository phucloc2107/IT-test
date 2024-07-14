document.getElementById('weatherForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    const city = document.getElementById('cityInput').value;
    const apiKey = '7b5f1315bf5921d8cee56ee442c57ecd'; // Replace with your actual API key
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    console.log('API URL:', url); // Log the API URL for debugging
  
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Failed to fetch weather data. Status code: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        displayWeather(data);
      })
      .catch(error => {
        console.error('Error:', error.message);
        document.getElementById('weatherInfo').innerHTML = `<p>Error fetching weather data.</p>`;
      });
  });
  
  function displayWeather(data) {
    const city = data.name;
    const country = data.sys.country;
    const description = data.weather[0].description;
    const temperature = data.main.temp;
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;
  
    const weatherInfoDiv = document.getElementById('weatherInfo');
    weatherInfoDiv.innerHTML = `
      <h3>Weather in ${city}, ${country}:</h3>
      <p>Condition: ${description}</p>
      <p>Temperature: ${temperature} °C</p>
      <p>Humidity: ${humidity}%</p>
      <p>Wind Speed: ${windSpeed} m/s</p>
    `;
  }
  