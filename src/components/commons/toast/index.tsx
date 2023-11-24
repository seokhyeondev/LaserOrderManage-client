import styled from "@emotion/styled";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Toast = () => {
    return (
        <CustomToast
        position="top-center"
        autoClose={3000}
        closeButton={false}
        newestOnTop
        limit={5}
        icon={false}
        hideProgressBar
        toastStyle={{
            borderRadius: '10px',
            backgroundColor: 'black',
            margin: '6px',
        }}
        bodyStyle={{ color: "white"}}
        />
    );
}

export default Toast;

const CustomToast = styled(ToastContainer)``;