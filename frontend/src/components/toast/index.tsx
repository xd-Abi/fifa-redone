import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const showErrorToast = (message: string) => {
  toast(message, {
    type: "error",
  });
};

export const showSuccessToast = (message: string) => {
  toast(message, {
    type: "success",
  });
};

const Toast = () => {
  return <ToastContainer draggable />;
};

export default Toast;
