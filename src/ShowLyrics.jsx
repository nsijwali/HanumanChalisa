import { useState, useEffect, useRef } from 'react';
import lyrics from './lyrics';
import './App.css';
import './star.css';
import music from './Static/mp3/mahadev-music.mp3';
import Footer from './Footer';

const ShowLyrics = () => {
	const [dohaTop, setTopDoha] = useState([]);
	const [dohaBottom, setBottomDoha] = useState([]);
	const [chopai, setChopai] = useState([]);
	const [lang, setlang] = useState('english');
	const [buttonText, setButtonText] = useState('Play');
	const audioRef = useRef(null);
	const btnRef = useRef(null);
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

	const footerText = {
		english: 'Created with love by Nitin Sijwali',
		hindi: 'नितिन सिजवाली द्वारा प्यार से बनाया गया',
		bengali: 'প্রেম দিয়ে তৈরি করেছেন নিতিন সিজওয়ালি',
		oriya: 'ନିତିନ ସିଜୱାଲୀଙ୍କ ଦ୍ୱାରା ପ୍ରେମ ସହିତ ସୃଷ୍ଟି |',
		kannada: 'ಪ್ರೀತಿಯಿಂದ ನಿತಿನ್ ಸಿಜ್ವಾಲಿ ರಚಿಸಿದ್ದಾರೆ',
		tamil: 'நிதின் சிஜ்வாலி அன்பால் உருவாக்கப்பட்டது',
		telgu: 'నితిన్ సిజ్వాలి ప్రేమతో సృష్టించారు',
		konkani: 'नितिन सिजवाली द्वारा प्यार से बनाया गया',
	};

	useEffect(() => {
		setTopDoha(lyrics?.[lang]?.dohaTop.split('.'));
		setChopai(lyrics?.[lang]?.chopai.split('.'));
		setBottomDoha(lyrics?.[lang]?.dohaBottom.split('.'));
	}, [lang]);

	useEffect(() => {
		if (buttonText === 'Play') {
			audioRef.current.pause();
		} else {
			audioRef.current.play();
		}
	}, [buttonText]);

	const handleLangChange = (e) => {
		setlang(e.target.value);
	};

	const handleButtonClick = () => {
		setButtonText(buttonText === 'Play' ? 'Pause' : 'Play');
	};

	return (
		<>
			<div id='stars'></div>
			<div id='stars2'></div>
			<div id='stars3'></div>
			<h3 className='chopai'>{translator[lang]?.doha || 'Doha'}</h3>
			{dohaTop.map((para, index) => (
				<pre className='chopai' key={index}>
					<p>{para.split(',')[0]}</p>
					<p>{para.split(',')[1]}</p>
				</pre>
			))}
			<h3 className='chopai'>{translator[lang]?.chopai || 'Doha'}</h3>
			{chopai.map((para, index) => (
				<pre className='chopai' key={index}>
					<p>{para.split(',')[0]}</p>
					<p>{para.split(',')[1]}</p>
				</pre>
			))}
			<h3 className='chopai'>{translator[lang]?.doha || 'Doha'}</h3>
			{dohaBottom.map((para, index) => (
				<pre className='chopai' key={index}>
					<p>{para.split(',')[0]}</p>
					<p>{para.split(',')[1]}</p>
				</pre>
			))}

			<select className='select__lang' onChange={handleLangChange} value={lang}>
				{languages.map((lan) => (
					<option value={lan.value} key={lan.value}>
						{lan.lable}
					</option>
				))}
			</select>
			<audio controls loop ref={audioRef} className='audio' autoPlay>
				<source src={music} type='audio/mpeg' />
				Your browser does not support the audio element.
			</audio>
			<button ref={btnRef} className='audio__btn' onClick={handleButtonClick}>
				{buttonText}
			</button>
			<Footer text={footerText[lang]} />
		</>
	);
};

export default ShowLyrics;
