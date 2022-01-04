import { useEffect, useState } from "react";
import useTrama from "../../hooks/useTrama";
import Loading from "../Loading";
import ShowTrama from "../ShowTrama";
const Main = () => {
    const [isLoadingTrama, setLoadingTrama] = useState(true);
    const [trama, setTrama] = useState("")
    const CustomGetData = () => {
        const { getTrama } = useTrama();
        getTrama().then((value) => {
            setLoadingTrama(false)
            setTrama(value.trama)
        })
    }

    useEffect(() => {
        CustomGetData();
    }, []);

    return (
        <div>
            {
                isLoadingTrama ? <Loading /> :
                    <div>
                        <ShowTrama trama={trama} />
                    </div>

            }
        </div>
    )
}

export default Main;