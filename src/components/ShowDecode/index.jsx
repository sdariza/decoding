import { ToastContainer, Row, Col } from "react-bootstrap";
import InfoCode from "../InfoCode";
const ShowDecode = ({ trama }) => {

    const formatoAA = (subTrama) => {
        var datos = [];
        for (let index = 0; index < 6; index++) {
            datos.push(parseInt(subTrama.substring(index, index + 2), 16));
            index = index + 1;
        }
        datos.push(parseInt(subTrama.substring(6, subTrama.lenght), 16));
        return datos;
    }

    const formatoDoble = (subTrama) => {
        var datos = [];
        for (let index = 0; index < subTrama.length; index++) {
            datos.push(parseInt(subTrama.substring(index, index + 2), 16));
            index = index + 1;
        }
        return datos;
    }

    return (
        <div
            aria-live="polite"
            aria-atomic="true"
            className="bg-dark position-relative"
            style={{ minHeight: '400px' }}
        >
            <ToastContainer className="p-3" position="top-start">
                <Row>
                    <Col>
                        <InfoCode title={"Código del equipo al cual corresponde"} info={parseInt(trama.substring(2, 6), 16)} />
                    </Col>
                    <Col>
                        <InfoCode title={"Fecha y hora de la última modificación de los planes de los cruces almacenados en el equipo. Formato: AAMMDDSSSSS"} info={formatoAA(trama.substring(6, 17))} />
                    </Col>
                    <Col>
                        <InfoCode title={"Fecha y hora con formato: HHMMSSAAMEMEDD - HH: hora | MM: mes | SS: seg | AA: año| MEME: mes| DD: día"} info={formatoDoble(trama.substring(17, 29))} />
                    </Col>
                    <Col className="mt-2">
                        <InfoCode title={"Contador de cruce"} info={parseInt(trama.substring(29, 31),16)} />
                    </Col>
                </Row>
            </ToastContainer>

        </div>
    )
}

export default ShowDecode;