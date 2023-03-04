import { useState } from "react";

import Modal from "../Modal/Modal";
import Logo from "../../logo.svg";

import { directorMessage } from "../../utils/Message";


import "./DirectorMessage.css";

const DirectorMessage = () => {
    const [isModalOpen, setModalOpen] = useState(false)

    var pargraphs = directorMessage.message.map((e, i) => {
        return (
            <p className="message" key={i}>{e}</p>
        )
    })

    const openModal = () => {
        setModalOpen(true);
    }

    return (
        <>
            <div className="section_container">
                <div className="image_container">
                    <img src={Logo} alt='Director NIT Raipur' />
                </div>
                <div className="content">
                    <span className="section_heading">{directorMessage.title}</span>
                    <p className="message_short">{directorMessage.message}</p>
                    <button className="modals" onClick={openModal}>Read More</button>
                    <p className="salute">
                        <span>{directorMessage.name}</span> <br />
                        <span>NIT Raipur</span>
                    </p>
                </div>
            </div>
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