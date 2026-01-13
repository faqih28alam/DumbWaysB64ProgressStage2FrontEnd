//App.tsx
import './App.css'
import { WeatherApp } from './components/WeatherApp'

function App() {
  // // State goes here
  // const [city, setCity] = useState("");
  // const [weather, setWeather] = useState(null);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState("");

  // const handleSearch = async () => {
  //   // Check if input is empty
  //   if (!city.trim()) {
  //     setError("Please enter a city name first!");
  //     setWeather(null);
  //     return; // Stop the function here
  //   }

  //   // Reset states before fetching
  //   setLoading(true);
  //   setError(""); // Clear previous errors
    
  //   try {
  //     // ... fetch logic ...
  //   } catch (err) {
  //     setError("City not found");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <>
      <WeatherApp />    
    </>
  )
}

export default App
