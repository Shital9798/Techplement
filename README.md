
# Simple Weather App

A simple weather application that allows users to enter a city name and fetch the current weather information for that location using the OpenWeatherMap API. The app displays temperature, weather description, minimum and maximum temperature, feels like temperature, humidity, pressure, and wind speed.

## Features

- Fetches current weather information based on the city name.
- Displays temperature, weather description, minimum and maximum temperature, feels like temperature, humidity, pressure, and wind speed.
- Shows the current date and time.
- User-friendly interface with a background image.

## Technologies Used

- HTML
- CSS
- JavaScript
- OpenWeatherMap API

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

- A web browser to view the project.
- An API key from OpenWeatherMap. You can obtain it by signing up at [OpenWeatherMap](https://home.openweathermap.org/users/sign_up).

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/shital9798/simple-weather-app.git
    ```
2. Navigate to the project directory:
    ```bash
    cd simple-weather-app
    ```
3. Open `index.html` in your preferred web browser.

### Configuration

1. Replace the placeholder API key in `script.js` with your OpenWeatherMap API key:
    ```javascript
    const apiKey = 'your-api-key-here';  // Replace with your OpenWeatherMap API key
    ```

## Usage

1. Open the application in your web browser.
2. Enter the name of the city you want to get the weather information for in the input field.
3. Click the "Get Weather" button.
4. The weather information for the entered city will be displayed, including the temperature, weather description, minimum and maximum temperature, feels like temperature, humidity, pressure, and wind speed.

## Project Structure

- `index.html`: The main HTML file that contains the structure of the web page.
- `style.css`: The CSS file that contains the styles for the web page.
- `script.js`: The JavaScript file that contains the logic for fetching and displaying the weather information.

## Acknowledgments

- [OpenWeatherMap](https://openweathermap.org/) for providing the weather data API.
