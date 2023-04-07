import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'

const Weather = () => {
    /*const url = process.env.REACT_APP_END_POINT;*/
    let cityToFind = useSelector(state => state.weather.city);
    const apy_key = process.env.REACT_APP_MY_KEY;
    const [cityCoordinates, setCityCoordinates] = useState({});
    const [cityWeather, setCityWeather] = useState({
        main: {
            feels_like: 0,
            humidity: 0,
            pressure: 0,
            temp: 0,
            temp_max: 0,
            temp_min: 0
        },
        weather: [
            {
                description: '',
                sys: {
                    country: '',
                    sunrise: 0,
                    sunset: 0
                }
            }
        ],
        wind: {
            speed: 0,
            deg: 0
        }
    });

    useEffect(() => {
        async function fetchData() {
            console.log('useEffect', cityToFind);
            await fetchCityCoordinates();
            await fetchCityWeather();
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }
        fetchData();
    }, [cityToFind]);

    const fetchCityCoordinates = async () => {
        let url = `http://api.openweathermap.org/geo/1.0/direct?q=${cityToFind}&limit=5&appid=`;
        try {
            let response = await fetch(`${url}${apy_key}`)
            if (response.ok) {
                let data = await response.json()
                console.log(data[0]);
                setCityCoordinates(data[0]);
            } else {
                console.log('errore nella chiamata')
            }
        } catch (error) {
            console.log(error)
        }
    }

    const fetchCityWeather = async () => {
        let urlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${cityCoordinates.lat}&lon=${cityCoordinates.lon}&appid=`;
        try {
            let response = await fetch(`${urlWeather}${apy_key}`)
            if (response.ok) {
                let data = await response.json()
                console.log(data);
                setCityWeather(data);
            } else {
                console.log('errore nella chiamata')
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <h2>{`${cityCoordinates.name}, ${cityCoordinates.state}, ${cityCoordinates.country}`}</h2>
            <img src={`http://openweathermap.org/img/w/${cityWeather.weather[0].icon}.png`} alt="Weather img" />
            <p>Temperature: {parseInt(cityWeather.main.temp - 273.15)}° C</p>
            <p>Wind deg: {cityWeather.wind.deg} Wind speed: {cityWeather.wind.speed}</p>
            <p>Humidity: {cityWeather.main.humidity}</p>
            <p>Feels Like: {parseInt(cityWeather.main.feels_like - 273.15)}° C</p>
        </div>
    );
}

export default Weather;