import { Address, useDaumPostcodePopup } from "react-daum-postcode"

export const useDaumPostPopup = (callback: (data: Address) => void) => {
    const postPopup = useDaumPostcodePopup();

    const openPostPopup = () => {
        postPopup({
            popupKey: "postPopup",
            top: 0,
            left: 0,
            onComplete: callback
        })
    }
    return openPostPopup;
}