# 🌦️ Weather App

This is a simple 🌍 **Weather Application** that fetches and displays real-time weather information for any location using the **WeatherAPI**. It shows the 🌡️ **temperature**, 📍 **location name**, 📅 **date**, 🕒 **time**, weather condition, and an **icon** representing the current weather condition.

## ✨ Features

- **Live Weather Updates** 🌍: Displays the current weather data including temperature, location, time, and weather conditions.
- **Search Functionality** 🔍: Allows users to search for weather in any city or location worldwide.
- **Weather Condition Icon** 🌦️: Dynamically updates the weather condition image based on real-time data.

## 🛠️ Technologies Used

- **HTML5** 📝: For the structure of the web page.
- **CSS3** 🎨: For styling the layout.
- **JavaScript (ES6)** 💻: To fetch and display real-time weather data.
- **WeatherAPI** 🌤️: Provides the weather data based on the location query.

## 🚀 How It Works

1. When the page loads, the default weather information for **Delhi** is fetched and displayed.
2. Users can enter a location in the search field to get the current weather for that specific area.
3. The application makes an asynchronous request to the **WeatherAPI** using JavaScript's `fetch()` method.
4. Upon receiving the data, the app dynamically updates the DOM to display the 🌡️ temperature, 📍 location name, 🕒 time, 📅 date, weather condition, and an icon for the condition.

## 🔧 Installation & Setup

1. **Clone the repository** 🧑‍💻:

   ```bash
   git clone https://github.com/your-username/weather-app.git
   ```

2. **Navigate to the project directory** 📂:

   ```bash
   cd weather-app
   ```

3. **Add your WeatherAPI Key** 🔑:
   - Sign up on **WeatherAPI** to get your free API key.
   - Open the JavaScript file and replace `API_KEY` with your own API key:

     ```javascript
     let url = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${target}&aqi=no`;
     ```

   ⚠️ **Note**: The app will not work without your own valid API key.

4. **Open `index.html` in a web browser** 🌐:
   Simply open the `index.html` file in your favorite web browser to see the app in action.

## 🧩 Code Overview

### 🖼️ HTML

The layout contains a search bar, weather information section, and fields to display the location, temperature, condition, and date.

### 🎨 CSS

The `temp`, `time_location`, `conditions`, and other sections are styled for a simple and clean look.

### 💻 JavaScript

- **Fetch Data** 📡: The `fetchResults()` function fetches the weather data from **WeatherAPI**.
- **Update DOM** 📝: The `updateData()` function updates the UI with the fetched data.
- **Search Feature** 🔍: The `searchforLocation()` function handles the form submission and updates the weather data based on the user's input.

#### 🧠 Functions Breakdown

- `fetchResults()` 📡: Fetches weather data using the **WeatherAPI** for the target location.
- `updateData()` 📝: Updates the weather information on the webpage (temperature, location, time, condition, etc.).
- `searchforLocation()` 🔍: Handles the search form submission and triggers the data fetch based on user input.
- `getDayName()` 📅: Helper function to convert the date into a human-readable day name (e.g., "Sunday").

## 📖 Example Usage

### 🌞 Default weather data for Delhi:

- Temperature: **30°C**
- Location: **Delhi**
- Time: **2024-09-24 Tuesday 14:00**
- Condition: **Clear**
- Icon: 🌞

### ☁️ After searching for New York:

- Temperature: **22°C**
- Location: **New York**
- Time: **2024-09-24 Tuesday 09:00**
- Condition: **Cloudy**
- Icon: ☁️


## 🚀 Future Improvements

- 🌤️ Add forecast functionality for the upcoming days.
- 🌬️ Show more detailed weather information like wind speed, humidity, etc.
- 🎨 Improve the UI with animations and better design.

