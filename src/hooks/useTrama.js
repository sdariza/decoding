import {getTramaUser} from '../services/userService'

const useTrama = () =>{
    const getTrama = async () =>{
        const result = await getTramaUser();
        if (result.status === 200){
            const data = result.dataBody;
            return data;
        }
    }
    return {getTrama};
}

export default useTrama;