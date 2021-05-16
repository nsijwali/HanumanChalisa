import { useState, useEffect, useRef } from 'react';
import lyrics from './lyrics';
import './App.css';
import './star.css';
import music from './Static/mp3/mahadev-music.mp3';

const ShowLyrics = () => {
	const [dohaTop, setTopDoha] = useState([]);
	const [dohaBottom, setBottomDoha] = useState([]);
	const [chopai, setChopai] = useState([]);
	const [lang, setlang] = useState('english');
	const audioRef = useRef(null);
	const bodyRef = useRef(null);
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
		{
			lable: 'Konkani',
			value: 'konkani',
		},
		{
			lable: 'Oriya',
			value: 'oriya',
		},
		{
			lable: 'Bengali',
			value: 'bengali',
		},
		{
			lable: 'Tamil',
			value: 'tamil',
		},
		{
			lable: 'Telgu',
			value: 'telgu',
		},
	];

	const translator = {
		hindi: {
			doha: 'दोहा',
			chopai: 'चौपाई ',
		},
		english: {
			doha: 'Doha',
			chopai: 'Chopai ',
		},
		konkani: {
			doha: 'दोहा',
			chopai: 'चौपाई ',
		},
		oriya: {
			doha: 'ଦୋହା',
			chopai: 'ଚୌପାଈ ',
		},
		bengali: {
			doha: 'দোহা',
			chopai: 'চৌপাঈ ',
		},
		kannada: {
			doha: 'ದೋಹಾ',
			chopai: 'ಚೌಪಾಈ ',
		},
		tamil: {
			doha: 'தோஹா',
			chopai: 'சௌபாஈ',
		},
		telgu: {
			doha: 'దోహా',
			chopai: 'చౌపాఈ',
		},
	};

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
			<div id='stars'></div>
			<div id='stars2'></div>
			<div id='stars3'></div>
			<h3 className='chopai'>{translator[lang]?.doha || 'Doha'}</h3>
			{dohaTop.map((para) => (
				<pre className='chopai'>
					<p>{para.split(',')[0]}</p>
					<p>{para.split(',')[1]}</p>
				</pre>
			))}
			<h3 className='chopai'>{translator[lang]?.chopai || 'Doha'}</h3>
			{chopai.map((para) => (
				<pre className='chopai'>
					<p>{para.split(',')[0]}</p>
					<p>{para.split(',')[1]}</p>
				</pre>
			))}
			<h3 className='chopai'>{translator[lang]?.doha || 'Doha'}</h3>
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
			<audio controls loop ref={audioRef} className='audio' autoPlay>
				<source src={music} type='audio/mpeg' />
				Your browser does not support the audio element.
			</audio>
		</>
	);
};

export default ShowLyrics;
