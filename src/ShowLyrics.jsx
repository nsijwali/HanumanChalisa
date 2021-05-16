import { useState, useEffect } from 'react';
import lyrics from './lyrics';
import './App.css';

const ShowLyrics = () => {
	const [dohaTop, setTopDoha] = useState([]);
	const [dohaBottom, setBottomDoha] = useState([]);
	const [chopai, setChopai] = useState([]);
	const [lang, setlang] = useState('english');
	useEffect(() => {
		setTopDoha(lyrics?.[lang]?.dohaTop.split('.'));
		setChopai(lyrics?.[lang]?.chopai.split('.'));
		setBottomDoha(lyrics?.[lang]?.dohaBottom.split('.'));
	}, [lang]);

	const handleLangChange = (e) => {
		setlang(e.target.value);
	};

	return (
		<>
			<h3>Doha</h3>
			{dohaTop.map((para) => (
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
			<h3>Doha</h3>
			{dohaBottom.map((para) => (
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
