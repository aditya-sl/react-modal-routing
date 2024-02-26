import { Route, Routes, useLocation } from 'react-router-dom';
import Modal from './components/Modal';
import HomePage from './container/HomePage';

const App = () => {
	const location = useLocation();
	const previousLocation = location.state?.previousLocation;

	return (
		<div>
			<Routes location={previousLocation}>
				<Route path="/" element={<HomePage />} />
			</Routes>

			<Routes>
				<Route path="/users/:id" element={<Modal />} />
			</Routes>
		</div>
	);
};

export default App;
