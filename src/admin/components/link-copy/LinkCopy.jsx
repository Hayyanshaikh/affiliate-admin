import copy from 'clipboard-copy';
import React, { useState } from 'react';
import * as Icons from "react-icons/tb";
import Alert from "../../../components/comman/Alert.jsx";

const LinkCopy = ({ initialLink, onCopy }) => {
  const [alertData, setAlertData] = useState({
    message: "",
    type: "",
    visible: false,
  });
  const [link, setLink] = useState(initialLink || '');
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = () => {
    copy(link);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 3000);
    if (onCopy) {
      onCopy(link);
    }

    alert("Link copied!", "success")
  };

  const alert = (message, type) => {
    setAlertData({
      message: message,
      type: type,
      visible: true,
    });
  };

  const handleDismiss = () => {
    setAlertData({ ...alertData, visible: false })
  }

  return (
    <div className="link-copy-container">
      <Alert
        message={alertData.message}
        type={alertData.type}
        onDismiss={handleDismiss}
        visible={alertData.visible}
      />
      <Icons.TbLink/>
      <input
        className="link-input"
        type="text"
        placeholder="Paste your link here"
        value={link}
        readOnly // Make the input field read-only
      />
      <button className="copy-button" onClick={handleCopyClick}>
        {!isCopied ? "Copy" : "Copied"}
      </button>
    </div>
  );
};

export default LinkCopy;