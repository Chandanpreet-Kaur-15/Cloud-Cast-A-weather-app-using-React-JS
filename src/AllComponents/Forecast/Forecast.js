import React from 'react';
import './Forecast.css';
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion';
import GridItem from './DailyDetailsGridItem';

const WEEK_DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const Forecast = ({ data }) => {
    const dayOfWeek = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(dayOfWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayOfWeek));

    return (
        <>
            <label className="title">Daily Forecast</label>
            <Accordion allowZeroExpanded>
                {data.list.splice(0, 7).map((item, idx) => (
                    <AccordionItem key={idx}>

                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className="daily-item">
                                    <img alt="weather" className="icon-small" src={`AllImages/${item.weather[0].icon}.png`} />
                                    <label className="day">{forecastDays[idx]}</label>
                                    <label className="description">
                                        {item.weather[0].description}</label>
                                    <label className="min-maxtemp">
                                        {Math.round(item.main.temp_min)}°C /
                                        {Math.round(item.main.temp_max)}°C</label>

                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>

                        <AccordionItemPanel>
                            <div className="daily-details-grid">

                                <GridItem
                                    detail="Pressure"
                                    value={item.main.pressure}
                                    units=" hPa" />

                                <GridItem
                                    detail="Humidity"
                                    value={item.main.humidity}
                                    units="%" />

                                <GridItem
                                    detail="Clouds"
                                    value={item.clouds.all}
                                    units="%" />

                                <GridItem
                                    detail="Wind speed "
                                    value={item.wind.speed}
                                    units="m/s" />

                                <GridItem
                                    detail="Sea level "
                                    value={item.main.sea_level}
                                    units="m" />

                                <GridItem
                                    detail="Feels like "
                                    value={item.main.feels_like}
                                    units="°C" />



                            </div>
                        </AccordionItemPanel>

                    </AccordionItem>
                ))}
            </Accordion>
        </>
    )
}

export default Forecast
