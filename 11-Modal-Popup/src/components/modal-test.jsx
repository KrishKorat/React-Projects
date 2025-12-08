import { useState } from 'react';
import Modal from './modal';
import './modal.css';



export default function ModalTest() {
  const [showModal, setShowModal] = useState(false);

  function handleToggleModal() {
    setShowModal(!showModal);
  }

  function onClose() {
    setShowModal(false);
  }

  return(
    <div>
      <button onClick={handleToggleModal}>Open up</button>
      {
        showModal && (
          <Modal 
            id={"custom-id"}
            header={<h1>Customized header</h1>}
            footer={<h4>Custom footer</h4>}
            onClose={onClose}
            body={<p>Custom body</p>}
          />
        )
      }
    </div>
  );
}