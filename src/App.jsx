import { Route, Routes } from 'react-router-dom';
import HomePage from './container/HomePage';

const App = () => {
	return (
		<div className="app">
			<Routes>
				<Route path="/" element={<HomePage />} />
			</Routes>
		</div>
	);
};

export default App;
