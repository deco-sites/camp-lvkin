import { Temperature } from "apps/weather/loaders/temperature.ts";

export interface WeatherProps {
    temperature: Temperature | null;
};

const Weather = ({ temperature }: WeatherProps) => (
    <div class="py-2 px-5 weather-section absolute bottom-[10%] left-10 rounded-3xl shadow-2xl bg-black text-white">
        {temperature?.celsius} ºC
    </div>
);

export default Weather;