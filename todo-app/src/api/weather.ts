// weather.ts

export async function fetchWeather(city:string):Promise<{city:string, temp:number}> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                city: city,
                temp: Math.round(Math.random() * 100)});
        }, 1000);        
    })
}