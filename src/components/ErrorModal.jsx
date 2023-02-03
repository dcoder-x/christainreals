import { toast } from "react-toastify";

export function validate(
  inputID,
  messageOptions = { patternError, missinError, minError, maxError }
) {
  const input = document.getElementById(inputID);
  const validityState = input.validity;

  const errorModal = (message) => {
    const toastExist = document.querySelector('.Toastify__toast')
    if (toastExist) {
      const toastList = document.querySelectorAll('.Toastify__toast')
      for (let i = 0; i < toastList.length-1; i++) {
        const activeToast = toastList[i];
        activeToast.style.display='none'
      }
      console.log()
      toast(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    else{
      toast(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    
 
  };

  if (validityState.patternMismatch) {
    input.setCustomValidity(
      messageOptions.patternError || "Please remove Invalid characters"
    );
    errorModal(messageOptions.patternError || "Invalid characters detected");
  } else if (validityState.valueMissing) {
    input.setCustomValidity(
      messageOptions.missinError || "this field cannot be empty"
    );
    errorModal(messageOptions.missinError || "this field cannot be empty");
  } else if (validityState.tooLong) {
    input.setCustomValidity(messageOptions.minError || "Too many characters");
    errorModal(messageOptions.minError || "Too many characters");
  } else if (validityState.tooShort) {
    input.setCustomValidity(
      messageOptions.minError || "characters are too few"
    );
    errorModal(messageOptions.minError || "characters are too few");
  } else {
    input.setCustomValidity("");
  }

  input.reportValidity();
}
