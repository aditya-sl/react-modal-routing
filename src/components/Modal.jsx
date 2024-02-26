import axios from 'axios';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Modal = () => {
	const [user, setUser] = useState({});
	const ref = useRef();
	const navigate = useNavigate();
	const { id } = useParams();

	useEffect(() => {
		axios
			.get(`https://jsonplaceholder.typicode.com/users/${id}`)
			.then((res) => setUser(res.data))
			.catch((error) => console.log(error));
	}, [id]);

	useEffect(() => {
		const targetElement = ref.current;

		disableBodyScroll(targetElement);

		return () => {
			if (targetElement) {
				enableBodyScroll(targetElement);
			}
		};
	}, []);

	const handleClose = () => {
		navigate('/');
	};

	return (
		<div className="modal-wrapper">
			<div className="shadow-overlay" onClick={handleClose}></div>
			<div ref={ref} className="modal">
				<p>Name: {user.name}</p>
				<p>Email: {user.email}</p>
				<p>Phone: {user.phone}</p>
				<p>Website: {user.website}</p>
				<p>Company: {user.company?.name}</p>
				<button onClick={handleClose}>Close</button>
			</div>
		</div>
	);
};

export default Modal;
