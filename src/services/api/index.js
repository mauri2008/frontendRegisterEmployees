import qs from 'qs';
import axios from 'axios';

const BASEAPI = 'http://localhost:8000/api/';

const  API = {
    get: async (url,params)=> {

        const response = await fetch(`${BASEAPI}${url}?${qs.stringify(params)}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        })

        if(response.status === 200){
            const json = await response.json();
            return json;
        }else{
            return false;
        }


    },

    post : async (url, data) => {
        
        const response = await fetch(`${BASEAPI}${url}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(data)
        })

        if(response.status === 200){
            const json = await response.json();
            return json;
        }else{
            return false;
        }

    },

    put : async (url, data) => {

        const response = await fetch(`${BASEAPI}${url}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(data)
        })

        if(response.status === 200){
            const json = await response.json();
            return json;
        }else{
            return false;
        }

        
        // await axios.put(`${BASEAPI}${url}`, data)
        // .then((response) => {
        //     return response;
        // })
        // .catch((error) => {
        //     return error;   
        // })
    },

    del : async (url) => {     
        
        const response = await fetch(`${BASEAPI}${url}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        })
        
        if(response.status === 200){
            const json = await response.json();
            return json;
        }else{
            return false;
        }

        // await axios.delete(`${BASEAPI}${url}`)
        // .then((response) => {
        //     return response;
        // })
        // .catch((error) => {
        //     return error;   
        // })
    }
}

export default ()=>API;


