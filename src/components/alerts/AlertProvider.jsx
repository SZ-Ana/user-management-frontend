import React, { createContext, useContext, useState } from "react";
import Swal from "sweetalert2";

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const [alertData, setAlertData] = useState(null);

  const showAlert = (config) => {
    setAlertData(config);
  };

  const handleConfirm = () => {
    if (alertData && alertData.onConfirm) {
      alertData.onConfirm();
    }
    setAlertData(null);
  };

  const handleCancel = () => {
    if (alertData && alertData.onCancel) {
      alertData.onCancel();
    }
    setAlertData(null);
  };

  return (
    <AlertContext.Provider value={showAlert}>
      {children}
      {alertData && (
        <Swal.fire
          title={alertData.title}
          text={alertData.text}
          icon={alertData.icon}
          showCancelButton
          confirmButtonColor="#3085d6"
          cancelButtonColor="#d33"
          confirmButtonText="Confirm"
          cancelButtonText="Cancel"
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      )}
    </AlertContext.Provider>
  );
};

export const useAlert = () => {
  return useContext(AlertContext);
};
