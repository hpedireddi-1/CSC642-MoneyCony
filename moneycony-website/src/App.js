import './App.css';
import ViewGroupPage from './Pages/ViewGroupPage';
import Home from './Pages/home';
import CreateGroup from './Pages/createGroup';
import Profile from './Pages/profile';
import Reminder from './Pages/reminder';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import Product from './Pages/Product';
import Construction from './Pages/Construction';

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.0/font/bootstrap-icons.css" />;

const AppRoutes = () => {
	let routes = useRoutes([
		{ path: '*', element: <Construction /> },
		{ path: '/', element: <Home /> },
		{ path: '/home', element: <Home /> },
		{ path: '/profile', element: <Profile /> },
		{ path: '/createGroup', element: <CreateGroup /> },
		{ path: '/viewGroupPage', element: <ViewGroupPage /> },
		{ path: '/reminder', element: <Reminder /> },
		{ path: '/creategroup', element: <CreateGroup /> },
		{ path: '/product', element: <Product /> },
		{ path: '/construction', element: <Construction /> }
	]);
	return routes;
};

function App() {
	return (
		<div classname="full-page">
			<Router>
				<AppRoutes />
			</Router>
		</div>
	);
}

export default App;
