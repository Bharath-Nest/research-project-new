import React from 'react';
import ModalComp from '../../components/Modal';
import { InputGroup, FormControl, ButtonToolbar, Button } from 'react-bootstrap';


const ModalContent = () => {
    return(
        <div>
              <h4>Centered Modal</h4>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        placeholder="Username"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>
        </div>
    )
}

const AddStudy = () => {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <div>
             <ButtonToolbar>
            <Button variant="primary" onClick={() => setModalShow(true)}>
                show
        </Button>

            <ModalComp
                show={modalShow}
                onHide={() => setModalShow(false)}
            >
                <ModalContent/>
            </ModalComp>
        </ButtonToolbar>        
        </div>
    )
}

export default AddStudy;