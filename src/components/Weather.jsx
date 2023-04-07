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
                description: ''
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
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Time</th>
                    <th>Temp.</th>
                    <th>Precip.</th>
                    <th>Wind</th>
                    <th>Humidity</th>
                    <th>Perc.</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>{cityWeather.weather[0].description}</td>
                    <td>{parseInt(cityWeather.main.temp - 273.15)}° C</td>
                    <td>deg: {cityWeather.wind.deg} speed: {cityWeather.wind.speed}</td>
                    <td>{cityWeather.main.humidity}</td>
                    <td>{parseInt(cityWeather.main.feels_like - 273.15)}° C</td>
                </tr>
            </tbody>
        </Table>
    );
}

export default Weather;