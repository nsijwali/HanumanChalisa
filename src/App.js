import { Helmet } from 'react-helmet';
import './App.css';

function App() {
	return (
		<div className='App'>
			<Helmet>
				{/* html attributes */}
				<html lang='en' />

				{/* body attributes */}
				<body className='dark' />

				{/* title element */}
				<title>React Helmet Tutorial</title>

				{/* base element */}
				<base target='_blank' href='https://keep-a-note.web.app/' />

				{/* meta elements */}
				<meta name='description' content='Tutorial for React Helmet' />

				<meta name='theme-color' content='#E6E6FA' />

				{/* link elements */}
				<link rel='canonical' href='https://keep-a-note.web.app/' />
			</Helmet>
			Hello World
		</div>
	);
}

export default App;
