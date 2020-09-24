import {get} from "@/service/axios";

export const getSepaData = async (city) => {
    const response =
        await get(`https://api.breezometer.com/air-quality/v2/current-conditions?lat=${city.lat}&lon=${city.lon}&k` +
            'ey=655cbd12835a4cfca100b336cf60dedd&datetime=2020-09-25T11:00:00');
    return response.data.data;
}