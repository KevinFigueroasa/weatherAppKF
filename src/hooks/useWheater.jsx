import axios from 'axios'
import { useEffect, useState } from "react";

const useWheater = () => {

    const [data, setData] = useState({})

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(success);

        function success(pos) {
            const crd = pos.coords;

            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=b16ccd2d7bbe3874d3ac7b7bcd793390`)
            .then(res => setData(res.data))
        }
        }, []);

        const [whatUnit, setWhatUnit] = useState(true)

        const convert = () =>{
            setWhatUnit(!whatUnit)
        }

    return {
        data,
        whatUnit,
        convert
    }
};

export default useWheater;