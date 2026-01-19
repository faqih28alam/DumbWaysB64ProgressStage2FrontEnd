// WeatherApp.tsx
// custom hook => debounce
import { useEffect, useState } from "react";
import { fetchWeather } from "../api/weather";

function UseDebounce<T>(value:T, delay:number){
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(()=>{
        const handler = setTimeout(()=>{
            setDebouncedValue(value)
        }, delay)
        return () => {
            clearTimeout(handler)
        }
    }, [value, delay])

    return debouncedValue
}

export function WeatherApp(){
    const [cityInput, setCityInput] = useState("");
    const [weatherData, setWeatherData] = useState<{city:string, temp:number} | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(""); // Error State goes here

    const debouncedCity = UseDebounce(cityInput, 500)

    const handleSearch = async () => {
        // Put the "Empty Input" check at the very beginning of your function
        if (!cityInput.trim()) {
            setError("City name cannot be empty!");
            setWeatherData(null);
            return; 
        }
        // Reset states before fetching
        setError("");
        setLoading(true);

        try {
            const weather = await fetchWeather(cityInput);
            setWeatherData(weather);
        } catch (error) {
            setError("City not found!");
        } finally {
            setLoading(false);
        }
    };

    useEffect(()=>{
        if(debouncedCity){
            setLoading(true);
            fetchWeather(debouncedCity)     
            .then((data) => setWeatherData(data))
            .finally(() =>   setLoading(false));
            
        }
    }, [debouncedCity]);

    return (
        <>
            <div>
                <h1>Weather App</h1>
                <input 
                type="text" 
                placeholder="Enter City" 
                value={cityInput} 
                onChange={(e) => {
                    setCityInput(e.target.value);
                    if (error) setError(" "); // Optional: Clear error as user types
                }}
                />
                <button onClick={handleSearch}>Search</button>
                {loading && <div>Loading...</div>}
                {weatherData && (
                    <div>
                        <p>{weatherData.city}</p>
                        <p>{weatherData.temp}"F</p>
                    </div>
                )}
            </div>
        </>
    )   
}