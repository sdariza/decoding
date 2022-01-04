import { useState } from "react";
import {Modal, Button} from "react-bootstrap";
import ShowDecode from "../ShowDecode";
const Decode =({trama})=>{
  const [lgShow, setLgShow] = useState(false);

  return (
    <>
      <Button onClick={() => setLgShow(true)}>Decodificar!</Button>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            La trama se ha decodificado con la siguiente información
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ShowDecode trama={trama}/>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Decode;