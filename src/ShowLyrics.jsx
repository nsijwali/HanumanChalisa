import { useState, useEffect } from 'react';
import lyrics from './lyrics';
import './App.css';

const ShowLyrics = () => {
	const [doha, setDoha] = useState([]);
	const [chopai, setChopai] = useState([]);
	const [lang, setlang] = useState('english');
	useEffect(() => {
		setDoha(lyrics?.[lang]?.doha.split('.'));
		setChopai(lyrics?.[lang]?.chopai.split('.'));
	}, [lang]);

	const handleLangChange = (e) => {
		setlang(e.target.value);
	};

	return (
		<>
			<h3>Doha</h3>
			{doha.map((para) => (
				<pre className='chopai'>
					<p>{para.split(',')[0]}</p>
					<p>{para.split(',')[1]}</p>
				</pre>
			))}
			<h3>Chopai</h3>
			{chopai.map((para) => (
				<pre className='chopai'>
					<p>{para.split(',')[0]}</p>
					<p>{para.split(',')[1]}</p>
				</pre>
			))}

			<select className='select__lang' onChange={handleLangChange} value={lang}>
				<option value='hindi'>Hindi</option>
				<option value='english'>English</option>
			</select>
		</>
	);
};

export default ShowLyrics;
