import { useState } from "react";
import { Button, Modal, } from "react-bootstrap";
import { useHistory } from "react-router-dom";
const ValidateClick =({code})=>{
    const history = useHistory();
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const validateCode = ()=>{
        if (code === "00K"){
            history.push('/getTrama');
        }else{
            handleShow();
        }
    }

  return (
    <>
      <Button variant="primary" onClick={()=> validateCode()}>
        Enviar
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ups!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Revisa el comando de solicitud ingresado</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ValidateClick;