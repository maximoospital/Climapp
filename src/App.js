import React, { useEffect, useState } from "react";
import './App.css';
import Weather from './Weather.js';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Poppins from './fonts/Poppins-Regular.ttf';

function App() {
    const [data, setData] = useState([]);
    const [dataSemanal, setDataSemanal] = useState([]);
    const hours = new Date().getHours();
    function getLongAndLat() {
        return new Promise((resolve, reject) =>
            navigator.geolocation.getCurrentPosition(resolve, reject)
        );
    };
    useEffect(() => {
        const locate = async () => {
            try {
                let position = await getLongAndLat(),
                    { coords } = position,
                    url = 'https://api.openweathermap.org/data/2.5/weather?lat='+coords.latitude+'&lon='+coords.longitude+'&lang=sp&appid='+process.env.REACT_APP_API_KEY+'&units=metric';
                await fetch(url)
                    .then(resp => resp.json())
                    .then(data => {
                        if(data.weather[0].id === 800 & hours > 6 & hours < 20){
                            data.icon = "CLEAR_DAY";
                            data.bg = "https://c.tenor.com/Xl68k_UY0boAAAAC/sunrise-desert.gif";
                            data.weather[0].description = "Despejado"
                        } else if(data.weather[0].id === 800 & hours < 6 & hours > 20){
                            data.icon = "CLEAR_NIGHT";
                            data.bg = "https://media2.giphy.com/media/11kn6DFp9BNqWA/giphy.gif";
                            data.weather[0].description = "Despejado"
                        } else if(data.weather[0].id === 801 & hours < 6 & hours > 20){
                            data.icon = "PARTLY_CLOUDY_NIGHT";
                            data.bg = "https://media4.giphy.com/media/nV5l2SFsU93ckaWlyn/giphy.gif";
                            data.weather[0].description = "Parcialmente nublado"
                        } else if (data.weather[0].id === 801 & hours > 6 & hours < 20) {
                            data.icon = "PARTLY_CLOUDY_DAY";
                            data.bg = "https://c.tenor.com/AXST3pQh5r8AAAAC/sunny-day-when-sharks-attack.gif";
                            data.weather[0].description = "Parcialmente nublado"
                        } else if (data.weather[0].id === 802 || data.weather[0].id === 803 || data.weather[0].id === 804 ){
                            data.icon = "CLOUDY";
                            data.bg = "https://media4.giphy.com/media/HoUgegTjteXCw/giphy.gif";
                            data.weather[0].description = "Nublado"
                        } else if (String(data.weather[0].id)[0] === '7'){
                            data.icon = "FOG";
                            data.bg = "https://media4.giphy.com/media/l2Je9dUI5LpzfHGTe/giphy.gif";
                            data.weather[0].description = "Con niebla"
                        } else if (String(data.weather[0].id)[0] === '6'){
                            data.icon = "SNOW";
                            data.bg = "https://media4.giphy.com/media/7Bgpw7PwdxoDC/giphy.gif";
                            data.weather[0].description = "Nevando"
                        } else if (String(data.weather[0].id)[0] === '2'){
                            data.icon = "SLEET";
                            data.bg = "https://c.tenor.com/qMdl4kA0ATYAAAAd/lightning-rain.gif";
                            data.weather[0].description = "Tormentas"
                        } else if (String(data.weather[0].id)[0] === '5' || String(data.weather[0].id)[0] === '3' ){
                            data.icon = "RAIN";
                            data.bg = "https://media4.giphy.com/media/dI3D3BWfDub0Q/giphy.gif";
                            data.weather[0].description = "Lluvia"
                        } else {
                            data.icon = "CLEAR_DAY";
                            data.bg = "https://c.tenor.com/Xl68k_UY0boAAAAC/sunrise-desert.gif";
                            data.weather[0].description = "Despejado"
                        };
                        let future = data;
                        setData(future);
                        console.log(future);
                    })
            } catch (e) {
                console.log(e);
            }
        }
        const semanal = async () => {
            try {
                let position = await getLongAndLat(),
                    { coords } = position,
                    url2 = 'https://api.openweathermap.org/data/2.5/onecall?lat='+coords.latitude+'&lon='+coords.longitude+'&exclude=current,minutely,hourly,alerts&lang=sp&appid='+process.env.REACT_APP_API_KEY+'&units=metric';
                await fetch(url2)
                    .then(resp => resp.json())
                    .then(dataSemanal => {
                        if(dataSemanal.daily[0].weather[0].id === 800 & hours > 6 & hours < 20){
                            dataSemanal.icon1 = "CLEAR_DAY";
                            dataSemanal.daily[0].description = "Despejado"
                        } else if(dataSemanal.daily[0].weather[0].id === 800 & hours < 6 & hours > 20){
                            dataSemanal.icon1 = "CLEAR_NIGHT";
                            dataSemanal.daily[0].description = "Despejado"
                        } else if(dataSemanal.daily[0].weather[0].id === 801 & hours < 6 & hours > 20){
                            dataSemanal.icon1 = "PARTLY_CLOUDY_NIGHT";
                            dataSemanal.daily[0].description = "Parcialmente nublado"
                        } else if (dataSemanal.daily[0].weather[0].id === 801 & hours > 6 & hours < 20) {
                            dataSemanal.icon1 = "PARTLY_CLOUDY_DAY";
                            dataSemanal.daily[0].description = "Parcialmente nublado"
                        } else if (dataSemanal.daily[0].weather[0].id === 802 || dataSemanal.daily[0].weather[0].id === 803 || dataSemanal.daily[0].weather[0].id === 804 ){
                            dataSemanal.icon1 = "CLOUDY";
                            dataSemanal.daily[0].description = "Nublado"
                        } else if (String(dataSemanal.daily[0].weather[0].id)[0] === '7'){
                            dataSemanal.icon1 = "FOG";
                            dataSemanal.daily[0].description = "Con niebla"
                        } else if (String(dataSemanal.daily[0].weather[0].id)[0] === '6'){
                            dataSemanal.icon1 = "SNOW";
                            dataSemanal.daily[0].description = "Nevando"
                        } else if (String(dataSemanal.daily[0].weather[0].id)[0] === '2'){
                            dataSemanal.icon1 = "SLEET";
                            dataSemanal.daily[0].description = "Tormentas"
                        } else if (String(dataSemanal.daily[0].weather[0].id)[0] === '5' || String(dataSemanal.daily[0].weather[0].id)[0] === '3' ){
                            dataSemanal.icon1 = "RAIN";
                            dataSemanal.daily[0].description = "Lluvia"
                        } else {
                            dataSemanal.icon1 = "CLEAR_DAY";
                            dataSemanal.daily[0].description = "Despejado"
                        };
                        if(dataSemanal.daily[1].weather[0].id === 800 & hours > 6 & hours < 20){
                            dataSemanal.icon2 = "CLEAR_DAY";
                            dataSemanal.daily[1].description = "Despejado"
                        } else if(dataSemanal.daily[1].weather[0].id === 800 & hours < 6 & hours > 20){
                            dataSemanal.icon2 = "CLEAR_NIGHT";
                            dataSemanal.daily[1].description = "Despejado"
                        } else if(dataSemanal.daily[1].weather[0].id === 801 & hours < 6 & hours > 20){
                            dataSemanal.icon2 = "PARTLY_CLOUDY_NIGHT";
                            dataSemanal.daily[1].description = "Parcialmente nublado"
                        } else if (dataSemanal.daily[1].weather[0].id === 801 & hours > 6 & hours < 20) {
                            dataSemanal.icon2 = "PARTLY_CLOUDY_DAY";
                            dataSemanal.daily[1].description = "Parcialmente nublado"
                        } else if (dataSemanal.daily[1].weather[0].id === 802 || dataSemanal.daily[1].weather[0].id === 803 || dataSemanal.daily[1].weather[0].id === 804 ){
                            dataSemanal.icon2 = "CLOUDY";
                            dataSemanal.daily[1].description = "Nublado"
                        } else if (String(dataSemanal.daily[1].weather[0].id)[0] === '7'){
                            dataSemanal.icon2 = "FOG";
                            dataSemanal.daily[1].description = "Con niebla"
                        } else if (String(dataSemanal.daily[1].weather[0].id)[0] === '6'){
                            dataSemanal.icon2 = "SNOW";
                            dataSemanal.daily[1].description = "Nevando"
                        } else if (String(dataSemanal.daily[1].weather[0].id)[0] === '2'){
                            dataSemanal.icon2 = "SLEET";
                            dataSemanal.daily[1].description = "Tormentas"
                        } else if (String(dataSemanal.daily[1].weather[0].id)[0] === '5' || String(dataSemanal.daily[1].weather[0].id)[0] === '3' ){
                            dataSemanal.icon2 = "RAIN";
                            dataSemanal.daily[1].description = "Lluvia"
                        } else {
                            dataSemanal.icon2 = "CLEAR_DAY";
                            dataSemanal.daily[1].description = "Despejado"
                        };
                        if(dataSemanal.daily[2].weather[0].id === 800 & hours > 6 & hours < 20){
                            dataSemanal.icon3 = "CLEAR_DAY";
                            dataSemanal.daily[2].description = "Despejado"
                        } else if(dataSemanal.daily[2].weather[0].id === 800 & hours < 6 & hours > 20){
                            dataSemanal.icon3 = "CLEAR_NIGHT";
                            dataSemanal.daily[2].description = "Despejado"
                        } else if(dataSemanal.daily[2].weather[0].id === 801 & hours < 6 & hours > 20){
                            dataSemanal.icon3 = "PARTLY_CLOUDY_NIGHT";
                            dataSemanal.daily[2].description = "Parcialmente nublado"
                        } else if (dataSemanal.daily[2].weather[0].id === 801 & hours > 6 & hours < 20) {
                            dataSemanal.icon3 = "PARTLY_CLOUDY_DAY";
                            dataSemanal.daily[2].description = "Parcialmente nublado"
                        } else if (dataSemanal.daily[2].weather[0].id === 802 || dataSemanal.daily[2].weather[0].id === 803 || dataSemanal.daily[2].weather[0].id === 804 ){
                            dataSemanal.icon3 = "CLOUDY";
                            dataSemanal.daily[2].description = "Nublado"
                        } else if (String(dataSemanal.daily[2].weather[0].id)[0] === '7'){
                            dataSemanal.icon3 = "FOG";
                            dataSemanal.daily[2].description = "Con niebla"
                        } else if (String(dataSemanal.daily[2].weather[0].id)[0] === '6'){
                            dataSemanal.icon3 = "SNOW";
                            dataSemanal.daily[2].description = "Nevando"
                        } else if (String(dataSemanal.daily[2].weather[0].id)[0] === '2'){
                            dataSemanal.icon3 = "SLEET";
                            dataSemanal.daily[2].description = "Tormentas"
                        } else if (String(dataSemanal.daily[2].weather[0].id)[0] === '5' || String(dataSemanal.daily[2].weather[0].id)[0] === '3' ){
                            dataSemanal.icon3 = "RAIN";
                            dataSemanal.daily[2].description = "Lluvia"
                        } else {
                            dataSemanal.icon3 = "CLEAR_DAY";
                            dataSemanal.daily[2].description = "Despejado"
                        };
                        if(dataSemanal.daily[3].weather[0].id === 800 & hours > 6 & hours < 20){
                            dataSemanal.icon4 = "CLEAR_DAY";
                            dataSemanal.daily[3].description = "Despejado"
                        } else if(dataSemanal.daily[3].weather[0].id === 800 & hours < 6 & hours > 20){
                            dataSemanal.icon4 = "CLEAR_NIGHT";
                            dataSemanal.daily[3].description = "Despejado"
                        } else if(dataSemanal.daily[3].weather[0].id === 801 & hours < 6 & hours > 20){
                            dataSemanal.icon4 = "PARTLY_CLOUDY_NIGHT";
                            dataSemanal.daily[3].description = "Parcialmente nublado"
                        } else if (dataSemanal.daily[3].weather[0].id === 801 & hours > 6 & hours < 20) {
                            dataSemanal.icon4 = "PARTLY_CLOUDY_DAY";
                            dataSemanal.daily[3].description = "Parcialmente nublado"
                        } else if (dataSemanal.daily[3].weather[0].id === 802 || dataSemanal.daily[3].weather[0].id === 803 || dataSemanal.daily[3].weather[0].id === 804 ){
                            dataSemanal.icon4 = "CLOUDY";
                            dataSemanal.daily[3].description = "Nublado"
                        } else if (String(dataSemanal.daily[3].weather[0].id)[0] === '7'){
                            dataSemanal.icon4 = "FOG";
                            dataSemanal.daily[3].description = "Con niebla"
                        } else if (String(dataSemanal.daily[3].weather[0].id)[0] === '6'){
                            dataSemanal.icon4 = "SNOW";
                            dataSemanal.daily[3].description = "Nevando"
                        } else if (String(dataSemanal.daily[3].weather[0].id)[0] === '2'){
                            dataSemanal.icon4 = "SLEET";
                            dataSemanal.daily[3].description = "Tormentas"
                        } else if (String(dataSemanal.daily[3].weather[0].id)[0] === '5' || String(dataSemanal.daily[3].weather[0].id)[0] === '3' ){
                            dataSemanal.icon4 = "RAIN";
                            dataSemanal.daily[3].description = "Lluvia"
                        } else {
                            dataSemanal.icon4 = "CLEAR_DAY";
                            dataSemanal.daily[3].description = "Despejado"
                        };
                        if(dataSemanal.daily[4].weather[0].id === 800 & hours > 6 & hours < 20){
                            dataSemanal.icon5 = "CLEAR_DAY";
                            dataSemanal.daily[4].description = "Despejado"
                        } else if(dataSemanal.daily[4].weather[0].id === 800 & hours < 6 & hours > 20){
                            dataSemanal.icon5 = "CLEAR_NIGHT";
                            dataSemanal.daily[4].description = "Despejado"
                        } else if(dataSemanal.daily[4].weather[0].id === 801 & hours < 6 & hours > 20){
                            dataSemanal.icon5 = "PARTLY_CLOUDY_NIGHT";
                            dataSemanal.daily[4].description = "Parcialmente nublado"
                        } else if (dataSemanal.daily[4].weather[0].id === 801 & hours > 6 & hours < 20) {
                            dataSemanal.icon5 = "PARTLY_CLOUDY_DAY";
                            dataSemanal.daily[4].description = "Parcialmente nublado"
                        } else if (dataSemanal.daily[4].weather[0].id === 802 || dataSemanal.daily[4].weather[0].id === 803 || dataSemanal.daily[4].weather[0].id === 804 ){
                            dataSemanal.icon5 = "CLOUDY";
                            dataSemanal.daily[4].description = "Nublado"
                        } else if (String(dataSemanal.daily[4].weather[0].id)[0] === '7'){
                            dataSemanal.icon5 = "FOG";
                            dataSemanal.daily[4].description = "Con niebla"
                        } else if (String(dataSemanal.daily[4].weather[0].id)[0] === '6'){
                            dataSemanal.icon5 = "SNOW";
                            dataSemanal.daily[4].description = "Nevando"
                        } else if (String(dataSemanal.daily[4].weather[0].id)[0] === '2'){
                            dataSemanal.icon5 = "SLEET";
                            dataSemanal.daily[4].description = "Tormentas"
                        } else if (String(dataSemanal.daily[4].weather[0].id)[0] === '5' || String(dataSemanal.daily[4].weather[0].id)[0] === '3' ){
                            dataSemanal.icon5 = "RAIN";
                            dataSemanal.daily[4].description = "Lluvia"
                        } else {
                            dataSemanal.icon5 = "CLEAR_DAY";
                            dataSemanal.daily[4].description = "Despejado"
                        };
                        if(dataSemanal.daily[5].weather[0].id === 800 & hours > 6 & hours < 20){
                            dataSemanal.icon6 = "CLEAR_DAY";
                            dataSemanal.daily[5].description = "Despejado"
                        } else if(dataSemanal.daily[5].weather[0].id === 800 & hours < 6 & hours > 20){
                            dataSemanal.icon6 = "CLEAR_NIGHT";
                            dataSemanal.daily[5].description = "Despejado"
                        } else if(dataSemanal.daily[5].weather[0].id === 801 & hours < 6 & hours > 20){
                            dataSemanal.icon6 = "PARTLY_CLOUDY_NIGHT";
                            dataSemanal.daily[5].description = "Parcialmente nublado"
                        } else if (dataSemanal.daily[5].weather[0].id === 801 & hours > 6 & hours < 20) {
                            dataSemanal.icon6 = "PARTLY_CLOUDY_DAY";
                            dataSemanal.daily[5].description = "Parcialmente nublado"
                        } else if (dataSemanal.daily[5].weather[0].id === 802 || dataSemanal.daily[5].weather[0].id === 803 || dataSemanal.daily[5].weather[0].id === 804 ){
                            dataSemanal.icon6 = "CLOUDY";
                            dataSemanal.daily[5].description = "Nublado"
                        } else if (String(dataSemanal.daily[5].weather[0].id)[0] === '7'){
                            dataSemanal.icon6 = "FOG";
                            dataSemanal.daily[5].description = "Con niebla"
                        } else if (String(dataSemanal.daily[5].weather[0].id)[0] === '6'){
                            dataSemanal.icon6 = "SNOW";
                            dataSemanal.daily[5].description = "Nevando"
                        } else if (String(dataSemanal.daily[5].weather[0].id)[0] === '2'){
                            dataSemanal.icon6 = "SLEET";
                            dataSemanal.daily[5].description = "Tormentas"
                        } else if (String(dataSemanal.daily[5].weather[0].id)[0] === '5' || String(dataSemanal.daily[5].weather[0].id)[0] === '3' ){
                            dataSemanal.icon6 = "RAIN";
                            dataSemanal.daily[5].description = "Lluvia"
                        } else {
                            dataSemanal.icon6 = "CLEAR_DAY";
                            dataSemanal.daily[5].description = "Despejado"
                        };
                        if(dataSemanal.daily[6].weather[0].id === 800 & hours > 6 & hours < 20){
                            dataSemanal.icon7 = "CLEAR_DAY";
                            dataSemanal.daily[6].description = "Despejado"
                        } else if(dataSemanal.daily[6].weather[0].id === 800 & hours < 6 & hours > 20){
                            dataSemanal.icon7 = "CLEAR_NIGHT";
                            dataSemanal.daily[6].description = "Despejado"
                        } else if(dataSemanal.daily[6].weather[0].id === 801 & hours < 6 & hours > 20){
                            dataSemanal.icon7 = "PARTLY_CLOUDY_NIGHT";
                            dataSemanal.daily[6].description = "Parcialmente nublado"
                        } else if (dataSemanal.daily[6].weather[0].id === 801 & hours > 6 & hours < 20) {
                            dataSemanal.icon7 = "PARTLY_CLOUDY_DAY";
                            dataSemanal.daily[6].description = "Parcialmente nublado"
                        } else if (dataSemanal.daily[6].weather[0].id === 802 || dataSemanal.daily[6].weather[0].id === 803 || dataSemanal.daily[6].weather[0].id === 804 ){
                            dataSemanal.icon7 = "CLOUDY";
                            dataSemanal.daily[6].description = "Nublado"
                        } else if (String(dataSemanal.daily[6].weather[0].id)[0] === '7'){
                            dataSemanal.icon7 = "FOG";
                            dataSemanal.daily[6].description = "Con niebla"
                        } else if (String(dataSemanal.daily[6].weather[0].id)[0] === '6'){
                            dataSemanal.icon7 = "SNOW";
                            dataSemanal.daily[6].description = "Nevando"
                        } else if (String(dataSemanal.daily[6].weather[0].id)[0] === '2'){
                            dataSemanal.icon7 = "SLEET";
                            dataSemanal.daily[6].description = "Tormentas"
                        } else if (String(dataSemanal.daily[6].weather[0].id)[0] === '5' || String(dataSemanal.daily[6].weather[0].id)[0] === '3' ){
                            dataSemanal.icon7 = "RAIN";
                            dataSemanal.daily[6].description = "Lluvia"
                        } else {
                            dataSemanal.icon7 = "CLEAR_DAY";
                            dataSemanal.daily[6].description = "Despejado"
                        };
                        let future2 = dataSemanal;
                        setDataSemanal(future2);
                        console.log(dataSemanal);
                        console.log(dataSemanal.icon1);
                        console.log(dataSemanal.daily[2].weather[0].id);
                        console.log(dataSemanal.daily[1].weather[0].id);
                    })
            } catch (e) {
                console.log(e);
            }
        }
        locate();
        semanal();
    }, [hours]);

    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
        },
        typography: {
            fontFamily: 'Poppins, Roboto',
        },
        MuiCssBaseline: {
            styleOverrides: `
        @font-face {
          font-family: 'Poppins';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Poppins'), local('Poppins'), url(${Poppins}) format('ttf');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
        }
    });

    var divStyle = {
        backgroundImage: 'url(' + data.bg + ')',
        width: '100%',
        height: '100%' ,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    };
    return (
        <div className="App" style={divStyle}>
            <ThemeProvider theme={darkTheme}>
                <header className="App">
                    {(typeof data.main != 'undefined') ? (
                        <Weather weatherData={data} dataSemanal={dataSemanal}/>
                    ) : (
                        <div><p>Cargando ubicacion...</p></div>
                    )}
                </header>
            </ThemeProvider>
        </div>
    );
}

export default App;
