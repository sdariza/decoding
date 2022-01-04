import { Row, Col, Card } from "react-bootstrap";
import Decode from "../Decode";
const ShowTrama = ({trama}) => {
    return (
        <Row className="m-0 vh-100 justify-content-center align-items-center">
            <Col className="col-auto bg-success p-5 text-center">
            <Card className="text-center">
                <Card.Header>Trama recibida con éxito</Card.Header>
                <Card.Body>
                    <Card.Title>Trama recida:</Card.Title>
                    <Card.Text>
                        {`${trama}`}
                    </Card.Text>
                    <Decode trama={trama}/>
                </Card.Body>
            </Card>
            </Col>
        </Row>
    )
}

export default ShowTrama;