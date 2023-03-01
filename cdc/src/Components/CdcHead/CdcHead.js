import { useState } from "react";

import Modal from "../Modal/Modal";
import Logo from "../../logo.svg";

import { CDCHeadMessage } from "../../utils/Message";


import "../DirectorMessage/DirectorMessage.css";

const CdcHead = () => {
    const [isModalOpen, setModalOpen] = useState(false)

    var pargraphs = CDCHeadMessage.message.map((e, i) => {
        return (
            <p class="message" key={i}>{e}</p>
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
                    <span className="section_heading">{CDCHeadMessage.title}</span>
                    <p className="message_short">{CDCHeadMessage.message}</p>
                    <button className="modals" onClick={openModal}>Read More</button>
                    <p className="salute">
                        <span>{CDCHeadMessage.name}</span> <br />
                        <span>NIT Raipur</span>
                    </p>
                </div>
            </div>
            {isModalOpen &&
                <Modal isOpen={isModalOpen} setOpen={setModalOpen} title={CDCHeadMessage.title}>
                    {pargraphs}
                    <p className="message">
                        <i>{CDCHeadMessage.name}</i> <br />
                        <i>{CDCHeadMessage.designation}</i> <br />
                        <i><b>NIT Raipur</b></i>
                    </p>
                </Modal>}
        </>

    )
}

export default CdcHead;