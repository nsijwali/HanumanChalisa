import { Helmet } from 'react-helmet';
import './App.css';
import ShowLyrics from './ShowLyrics';

function App() {
	return (
		<div className='App'>
			<Helmet>
				{/* html attributes */}
				<html lang='en' />

				{/* body attributes */}
				<body className='dark' />

				{/* title element */}
				<title>Hanuman Chalisa</title>

				{/* base element */}
				<base target='_blank' href='https://hanumanchalisa.netlify.app/' />

				{/* meta elements */}
				<meta
					name='description'
					content='The Hanuman Chalisa is the Forty Chaupais on Hanuman. It is a Hindu devotional hymn or stotra addressed to Lord Hanuman.It is authored by 16th-century poet Tulsidas in the Awadhi language and is his best-known text apart from the Ramcharitmanas. The Hanuman Chalisa has 40 verses (excluding the couplets at the beginning and at the end).'
				/>

				<meta name='theme-color' content='#E6E6FA' />

				{/* link elements */}
				<link rel='canonical' href='https://hanumanchalisa.netlify.app/' />
				<link
					href='https://fonts.googleapis.com/css?family=Roboto'
					rel='stylesheet'
				></link>
			</Helmet>
			<ShowLyrics />
		</div>
	);
}

export default App;
