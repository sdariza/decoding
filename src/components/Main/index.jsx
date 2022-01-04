import { useEffect, useState } from "react";
import useTrama from "../../hooks/useTrama";
import Loading from "../Loading";
const Main = () => {
    const [isLoadingTrama, setLoadingTrama] = useState(true);
    const [trama, setTrama] = useState("")
    const CustomGetData = () =>{
        const {getTrama} = useTrama();
        getTrama().then((value) =>{
            setLoadingTrama(false)
            setTrama(value.trama)
            console.log(value)
        })
    }
    
    useEffect(()=>{
        CustomGetData();
    },[]);

    const formatoAA = (subTrama)=>{
        var datos=[];
        for (let index = 0; index < 6; index++) {
            datos.push(parseInt(subTrama.substring(index, index+2),16));
            index = index+1;
        }
        datos.push(parseInt(subTrama.substring(6, subTrama.lenght),16));
        return datos;
    }

    const formatoDoble = (subTrama) =>{
        var datos = [];
        for (let index = 0; index < subTrama.length; index++) {
            datos.push(parseInt(subTrama.substring(index, index+2),16));
            index = index+1;
        }
        return datos;
    }


    return (
        <div>
            {
                isLoadingTrama? <Loading/> : 
                <div>
                    <p>{`${trama}`}</p>
                    <p>{`${parseInt(trama.substring(2,6),16)}`}</p>
                    <p>{formatoAA(trama.substring(6,17))}</p>
                    <p>{formatoDoble(trama.substring(17,29))}</p>
                </div>
                
            }
        </div>
    )
}

export default Main;