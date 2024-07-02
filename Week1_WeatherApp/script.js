
async function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = '0d72db9b6c65c230fc298d1051f75f22';  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data); 

        if (data.cod === 200) {
            const now = new Date();
            const dateTime = now.toLocaleString();

            document.getElementById('city-name').innerText = data.name;
            document.getElementById('current-date-time').innerText = `Date & Time: ${dateTime}`;
            document.getElementById('temperature').innerText = `Temperature: ${data.main.temp}°C`;
            document.getElementById('description').innerText = `Weather: ${data.weather[0].description}`;
            document.getElementById('min-max-temp').innerText = `Min Temp: ${data.main.temp_min}°C | Max Temp: ${data.main.temp_max}°C`;
            document.getElementById('feels-like').innerText = `Feels Like: ${data.main.feels_like}°C`;
            document.getElementById('humidity').innerText = `Humidity: ${data.main.humidity}%`;
            document.getElementById('pressure').innerText = `Pressure: ${data.main.pressure} mb`;
            document.getElementById('wind-speed').innerText = `Wind Speed: ${data.wind.speed} KMPH`;
            document.querySelector('.weather').style.display = 'block';
        } else {
            alert('City not found');
        }
    } catch (error) {
        alert('Error fetching data');
    }
}

