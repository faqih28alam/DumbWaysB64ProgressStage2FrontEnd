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

    const debouncedCity = UseDebounce(cityInput, 500)

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
                <input type="text" placeholder="Enter City" value={cityInput} onChange={e => setCityInput(e.target.value)} />
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