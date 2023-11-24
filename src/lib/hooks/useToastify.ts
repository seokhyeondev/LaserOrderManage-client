import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Toast from '../../components/commons/toast';

type ToastType = 'info' | 'success' | 'warning' | 'error';
interface ISetToastProps {
    type?: ToastType;
    comment: string;
}

export const useToastify = () => {
    const setToast = ({type = 'info', comment, ...props}: ISetToastProps) => {
        toast(comment, {type:type, ...props});
    };
    return { Toast, setToast };
};