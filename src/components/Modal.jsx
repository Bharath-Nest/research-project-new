import React from 'react';
import { Modal, ButtonToolbar, Button, InputGroup, FormControl } from 'react-bootstrap';

function ModalComp({children, ...props}) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body>
               {children}
               <Button onClick={props.onHide}>Submit</Button>
            </Modal.Body>
        </Modal>
    );
}

export default ModalComp;