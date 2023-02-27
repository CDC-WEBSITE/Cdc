import { useState } from "react";
import Modal from "../Modal/Modal";
import { directorMessage } from "../../utils/Message";

import "./DirectorMessage.css";

const DirectorMessage = () => {
    const [isModalOpen, setModalOpen] = useState(false)

    var pargraphs = directorMessage.message.map((e, i) => {
        return (
            <p class="message" key={i}>{e}</p>
        )
    })

    const openModal = () => {
        setModalOpen(true);
    }

    return (
        <>
            <button onClick={openModal}>Modal</button>
            {isModalOpen &&
                <Modal isOpen={isModalOpen} setOpen={setModalOpen} title={directorMessage.title}>
                    {pargraphs}
                    <p className="message">
                        <i>{directorMessage.name}</i> <br />
                        <i>{directorMessage.designation}</i> <br />
                        <i><b>NIT Raipur</b></i>
                    </p>
                </Modal>}
        </>

    )
}

export default DirectorMessage;