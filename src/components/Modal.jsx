const Modal = ({ onClose }) => {
	return (
		<div className="modal-wrapper">
			<div className="shadow-overlay" onClick={onClose}></div>
			<div className="modal">
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quidem
					repellendus quo voluptas omnis asperiores consequatur eligendi iure
					quam obcaecati.
				</p>
				<button onClick={onClose}>Close</button>
			</div>
		</div>
	);
};

export default Modal;
