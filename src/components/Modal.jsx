import { Icon } from "@iconify/react";
import React from "react";
import "../styles/modal.css";

const Modal = ({
  show,
  onclose,
  message,
  actionText,
  title,
  onAccept,
  Comp,
  icon,
  iconSize,
  iconColor,
  closeText,
  modalStyle
}) => {
  return (
    <main id="modal" style={{ display: show == true ? "flex" : "none" }}>
      <section className="modal-holder">
        <div className="modal-section" style={modalStyle}>
          <p className="title">{title}</p>
          <Icon icon={icon} color={iconColor} width={iconSize} />
          <p className="desc">{message}</p>
          {Comp ? Comp : null}
          <div className="buttons">
            {actionText ? (
              <button onClick={onAccept}>{actionText}</button>
            ) : null}
            {closeText?<button className="cancel" onClick={onclose}>
              {closeText}
            </button>:null}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Modal;
