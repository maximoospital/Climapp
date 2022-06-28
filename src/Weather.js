import React from 'react';
import Card from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import moment from 'moment';
import 'moment/locale/es-mx';
import ReactAnimatedWeather from 'react-animated-weather';
import './Weather.css';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const refresh = () => {
    window.location.reload();
}

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));



export default function Weather({weatherData, dataSemanal}) {
    const [expanded, setExpanded] = React.useState(false);
    const [expanded2, setExpanded2] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
        setExpanded2(false);
    };
    const handleExpandClick2 = () => {
        setExpanded2(!expanded2);
        setExpanded(false);
    };

    return(
    <Card variant="outlined" sx={{ minWidth: 275 }} class="cardweather">
        <CardContent style={{paddingBottom: '0'}}>
        <Typography sx={{ fontSize: 14 }} color="text.secondary">
            {moment().format('lll')}
        </Typography>
            <div style={{float: 'right'}}>
            <ReactAnimatedWeather
                icon={weatherData.icon}
                color="WHITE"
            />
            </div>
        <Typography variant="h5">
            <b id="climaText">{weatherData.main.temp.toFixed(0)}&deg;C</b>
        </Typography>


            <Typography variant="body2">
                <b>{weatherData.weather[0].description.charAt(0).toUpperCase()}{weatherData.weather[0].description.slice(1)}</b>
                <br />
                <b>Sensacion Termica:</b> {weatherData.main.feels_like.toFixed(0)}&deg;
                <br />
                <b>Minima:</b> {weatherData.main.temp_min.toFixed(0)}&deg;
                <br />
                <b>Maxima:</b> {weatherData.main.temp_max.toFixed(0)}&deg;
                <br />
                <b>Humedad:</b> {weatherData.main.humidity}%
            </Typography>
        </CardContent>
        <CardActions style={{justifyContent: 'center'}}>
                <Button variant="contained" size="small" expand={expanded2} onClick={handleExpandClick2} aria-expanded={expanded2} aria-label="pronostico" style={{backgroundColor: "#fafafa", color: "#212121"}}>PRONOSTICO</Button>
            <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="acerca de esta app"
            >
                <ExpandMoreIcon />
            </ExpandMore>
            <Button variant="contained" size="small" onClick={refresh} style={{backgroundColor: "#fafafa", color: "#212121"}}>Actualizar</Button>
        </CardActions>
        <Collapse in={expanded2} timeout="auto" unmountOnExit >
            <CardContent>
                <Typography variant="h6">
                    <b id="climaText">Pronostico Semanal</b>
                </Typography>
                <Grid container spacing={1}   justifyContent="center" alignItems="center" style={{textAlign: 'center'}}>
                    <Grid item xs={4} >
                        <Card class="tarjetaSemanal">
                            <Typography variant="body2">
                                <b>{moment.unix(dataSemanal.daily[0].dt).format("dddd").charAt(0).toUpperCase()}{moment.unix(dataSemanal.daily[0].dt).format("dddd D/M").slice(1)}</b>
                                <ReactAnimatedWeather
                                    icon={dataSemanal.icon1}
                                    color="BLACK"
                                />
                                <br/><b>{dataSemanal.daily[0].temp.max.toFixed(0)}&deg;</b> {dataSemanal.daily[0].temp.min.toFixed(0)}&deg;
                            </Typography>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card class="tarjetaSemanal">
                            <Typography variant="body2">
                                <b>{moment.unix(dataSemanal.daily[1].dt).format("dddd").charAt(0).toUpperCase()}{moment.unix(dataSemanal.daily[1].dt).format("dddd D/M").slice(1)}</b>
                                <ReactAnimatedWeather
                                    icon={dataSemanal.icon2}
                                    color="BLACK"
                                />
                                <br/>
                                <b>{dataSemanal.daily[1].temp.max.toFixed(0)}&deg;</b> {dataSemanal.daily[1].temp.min.toFixed(0)}&deg;
                            </Typography>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card class="tarjetaSemanal">
                            <Typography variant="body2">
                                <b>{moment.unix(dataSemanal.daily[2].dt).format("dddd").charAt(0).toUpperCase()}{moment.unix(dataSemanal.daily[2].dt).format("dddd D/M").slice(1)}</b>
                                <ReactAnimatedWeather
                                    icon={dataSemanal.icon3}
                                    color="BLACK"
                                />
                                <br/><b>{dataSemanal.daily[2].temp.max.toFixed(0)}&deg;</b> {dataSemanal.daily[2].temp.min.toFixed(0)}&deg;
                            </Typography>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card class="tarjetaSemanal">
                            <Typography variant="body2">
                                <b>{moment.unix(dataSemanal.daily[3].dt).format("dddd").charAt(0).toUpperCase()}{moment.unix(dataSemanal.daily[3].dt).format("dddd D/M").slice(1)}</b>
                                <ReactAnimatedWeather
                                    icon={dataSemanal.icon4}
                                    color="BLACK"
                                />
                                <br/><b>{dataSemanal.daily[3].temp.max.toFixed(0)}&deg;</b> {dataSemanal.daily[3].temp.min.toFixed(0)}&deg;
                            </Typography>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card class="tarjetaSemanal">
                            <Typography variant="body2">
                                <b>{moment.unix(dataSemanal.daily[4].dt).format("dddd").charAt(0).toUpperCase()}{moment.unix(dataSemanal.daily[4].dt).format("dddd D/M").slice(1)}</b>
                                <ReactAnimatedWeather
                                    icon={dataSemanal.icon5}
                                    color="BLACK"
                                />
                                <br/><b>{dataSemanal.daily[4].temp.max.toFixed(0)}&deg;</b> {dataSemanal.daily[4].temp.min.toFixed(0)}&deg;
                            </Typography>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card class="tarjetaSemanal">
                            <Typography variant="body2">
                                <b>{moment.unix(dataSemanal.daily[5].dt).format("dddd").charAt(0).toUpperCase()}{moment.unix(dataSemanal.daily[5].dt).format("dddd D/M").slice(1)}</b>
                                <ReactAnimatedWeather
                                    icon={dataSemanal.icon6}
                                    color="BLACK"
                                />
                                <br/><b>{dataSemanal.daily[5].temp.max.toFixed(0)}&deg;</b> {dataSemanal.daily[5].temp.min.toFixed(0)}&deg;
                            </Typography>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card class="tarjetaSemanal">
                            <Typography variant="body2">
                                <b>{moment.unix(dataSemanal.daily[6].dt).format("dddd").charAt(0).toUpperCase()}{moment.unix(dataSemanal.daily[6].dt).format("dddd D/M").slice(1)}</b>
                                <ReactAnimatedWeather
                                    icon={dataSemanal.icon7}
                                    color="BLACK"
                                />
                                <br/><b>{dataSemanal.daily[6].temp.max.toFixed(0)}&deg;</b> {dataSemanal.daily[6].temp.min.toFixed(0)}&deg;
                            </Typography>
                        </Card>
                    </Grid>
                </Grid>
            </CardContent>
        </Collapse>

        <Collapse in={expanded} timeout="auto" unmountOnExit >
            <CardContent>
                <Typography variant="h6">
                    <b id="climaText">Climapp</b>
                </Typography>
                <Typography variant="body2">
                    App/Demo hecha en <b>React</b>
                    <br />
                    Usa Geolocalizacion y <b>OpenWeatherMap</b> para dar un pronostico del clima local del usuario.
                    <br />
                    Basada en en la informacion dada por la api de OWM, muestra esta tarjeta, con estilizado, iconos animados y un fondo GIF segun el clima y hora del usuario.
                    <br />
                </Typography>
            </CardContent>
        </Collapse>
        <Typography sx={{ fontSize: 12, textAlign: 'center' }} color="text.secondary">
            Maximo Ospital, 2022.
        </Typography>

    </Card>

    );
}