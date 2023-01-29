import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const showErrorToast = (message: string) => {
  toast(message, {
    type: "error",
  });
};

const Toast = () => {
  return <ToastContainer draggable />;
};

export default Toast;
