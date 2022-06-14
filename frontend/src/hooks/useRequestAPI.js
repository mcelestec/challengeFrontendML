import { useEffect, useState } from 'react';
import axios from 'axios';

// Hook que permite buscar datos en la url recibida por parámetro 
export const useRequestAPI = (url) => {

    const [state, setState] = useState({ loaded: false, data: null });

    useEffect(() => {

        const requestAPI = async () => {
            const response = await axios.get(url)
                .catch(function (error) {
                    return null;
                });

            response ? setState({
                loaded: true,
                data: response.data
            }) : setState({
                data: null,
                loaded: false
            });
        }

        requestAPI();
    }, [url])

    return state;
}
