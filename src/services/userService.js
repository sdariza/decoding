import {get} from './http'

const getTramaUser = async() =>{
    const json = await get('getTrama');
    return json;
}

export {getTramaUser};