import { useState, useEffect, useRef } from 'react';
import lyrics from './lyrics';
import './App.css';
import music from './Static/mp3/mahadev-music.mp3';

const ShowLyrics = () => {
	const [dohaTop, setTopDoha] = useState([]);
	const [dohaBottom, setBottomDoha] = useState([]);
	const [chopai, setChopai] = useState([]);
	const [lang, setlang] = useState('english');
	const audioRef = useRef(null);
	const languages = [
		{
			lable: 'Hindi',
			value: 'hindi',
		},
		{
			lable: 'English',
			value: 'english',
		},
		{
			lable: 'Kannada',
			value: 'kannada',
		},
	];
	useEffect(() => {
		setTopDoha(lyrics?.[lang]?.dohaTop.split('.'));
		setChopai(lyrics?.[lang]?.chopai.split('.'));
		setBottomDoha(lyrics?.[lang]?.dohaBottom.split('.'));
		audioRef.current.play();
	}, [lang]);

	const handleLangChange = (e) => {
		setlang(e.target.value);
	};

	return (
		<>
			<h3 className='chopai'>Doha</h3>
			{dohaTop.map((para) => (
				<pre className='chopai'>
					<p>{para.split(',')[0]}</p>
					<p>{para.split(',')[1]}</p>
				</pre>
			))}
			<h3 className='chopai'>Chopai</h3>
			{chopai.map((para) => (
				<pre className='chopai'>
					<p>{para.split(',')[0]}</p>
					<p>{para.split(',')[1]}</p>
				</pre>
			))}
			<h3 className='chopai'>Doha</h3>
			{dohaBottom.map((para) => (
				<pre className='chopai'>
					<p>{para.split(',')[0]}</p>
					<p>{para.split(',')[1]}</p>
				</pre>
			))}

			<select className='select__lang' onChange={handleLangChange} value={lang}>
				{languages.map((lan) => (
					<option value={lan.value}>{lan.lable}</option>
				))}
			</select>
			<audio controls loop ref={audioRef}>
				<source src={music} type='audio/mpeg' />
				Your browser does not support the audio element.
			</audio>
			{/* <embed
				src='/Static/mp3/Mahadev_bg_music.mp3'
				loop='true'
				autostart='true'
				width='2'
				height='0'
				type='audio/mp3'
			></embed> */}
		</>
	);
};

export default ShowLyrics;
