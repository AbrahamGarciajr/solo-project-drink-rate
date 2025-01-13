import { useModal } from '../../context/Modal';

function OpenReviewModal({
    modalComponent, // component to render inside the modal
    itemText, // text of the button that opens the modal
    onItemClick, // optional: callback function that will be called once the button that opens the modal is clicked
    onModalClose // optional: callback function that will be called once the modal is closed
}) {
    const { setModalContent, setOnModalClose } = useModal();

    const onClick = () => {
        if (onModalClose) setOnModalClose(onModalClose);
        setModalContent(modalComponent);
        if (typeof onItemClick === "function") onItemClick();
    };

    return (
        <>
            {itemText === 'Delete' && (
                <button className='options-for-delete' onClick={onClick}>{itemText}</button>
            )}
            {itemText === 'Update' && (
                <button className='options-for-update' onClick={onClick}>{itemText}</button>
            )}
        </>

    );
}

export default OpenReviewModal;
