import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const notifyCart = () => toast.success("This product has been successfuly added to cart!", {
    position: "bottom-right",
    autoClose: 1000,
  });
  const warnCart = () => toast.error("This product already exists in the cart!!", {
    position: "bottom-right",
    autoClose: 1000,
  });

export {notifyCart, warnCart}