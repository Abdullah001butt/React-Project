import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Sialkot",
        feelsLike: 7.9,
        humidity: 87,
        temp: 7.9,
        tempMax: 7.9,
        tempMin: 7.9,
        weather: "mist",
    });

    return (
        <div style={{textAlign: "center"}}>
            <h2>Weather app by Delta-Student</h2>
            <SearchBox />
            <InfoBox Info={weatherInfo} />
        </div>
    )
}