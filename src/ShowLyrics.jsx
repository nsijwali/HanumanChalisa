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
		const groups = (value = '') => value.split(/\n\s*\n/).map((group) => group.trim()).filter(Boolean);
		setTopDoha(groups(lyrics?.[lang]?.dohaTop));
		setChopai(groups(lyrics?.[lang]?.chopai));
		setBottomDoha(groups(lyrics?.[lang]?.dohaBottom));
	}, [lang]);

	useEffect(() => {
		if (!audioRef.current) return;
		if (buttonText === 'Play') {
			audioRef.current.pause();
		} else {
			audioRef.current.play().catch(() => setButtonText('Play'));
		}
	}, [buttonText]);

	const handleLangChange = (e) => {
		setlang(e.target.value);
	};

	const handleButtonClick = () => {
		setButtonText(buttonText === 'Play' ? 'Pause' : 'Play');
	};

	const renderVerse = (verse, index) => {
		const lines = verse.split(',').map((line) => line.trim()).filter(Boolean);
		return (
			<article className='verse-card' key={`${lang}-${index}`}>
				<span className='verse-number'>{String(index + 1).padStart(2, '0')}</span>
				<div className='verse-lines'>
					{lines.map((line, lineIndex) => <p key={lineIndex}>{line}</p>)}
				</div>
			</article>
		);
	};

	return (
		<div className='site-shell'>
			<div id='stars'></div>
			<div id='stars2'></div>
			<div id='stars3'></div>
			<header className='topbar'>
				<a className='brand' href='#top' aria-label='Hanuman Chalisa home'>
					<span className='brand-mark'>ॐ</span>
					<span><strong>Hanuman</strong><small>Chalisa</small></span>
				</a>
				<div className='topbar-actions'>
					<label className='language-control'>
						<span>Language</span>
						<select onChange={handleLangChange} value={lang} aria-label='Choose language'>
							{languages.map((lan) => <option value={lan.value} key={lan.value}>{lan.lable}</option>)}
						</select>
					</label>
					<button className='audio__btn' onClick={handleButtonClick} aria-label={`${buttonText} devotional audio`}>
						<span className={buttonText === 'Pause' ? 'pause-icon' : 'play-icon'} aria-hidden='true'></span>
						{buttonText === 'Pause' ? 'Pause' : 'Listen'}
					</button>
				</div>
			</header>

			<main id='top' className='content-wrap'>
				<section className='hero-panel'>
					<div className='hero-copy'>
						<p className='eyebrow'>A devotional reading</p>
						<h1>श्री हनुमान<br /><em>चालीसा</em></h1>
						<p className='hero-description'>Read, listen, and recite the forty verses of Tulsidas' beloved hymn in your chosen language.</p>
						<div className='hero-meta'><span><b>40</b> chaupais</span><span className='meta-dot'>·</span><span>Awadhi hymn</span></div>
					</div>
					<div className='hero-art' role='img' aria-label='Lord Hanuman devotional artwork'><div className='sun-disc'></div><div className='art-caption'>ॐ<br /><small>Jai Shri Ram</small></div></div>
				</section>

				<section className='reading-header'>
					<div><p className='eyebrow'>Begin here</p><h2>{translator[lang]?.doha || 'Doha'}</h2></div>
					<div className='reading-note'>Take a slow breath<br />and read with intention.</div>
				</section>
				<div className='doha-grid'>{dohaTop.map(renderVerse)}</div>

				<section className='section-divider'><span>✦</span><h2>{translator[lang]?.chopai || 'Chopai'}</h2><span>✦</span></section>
				<div className='verse-grid'>{chopai.map(renderVerse)}</div>

				<section className='section-divider closing'><span>✦</span><h2>{translator[lang]?.doha || 'Doha'}</h2><span>✦</span></section>
				<div className='doha-grid'>{dohaBottom.map(renderVerse)}</div>
			</main>
			<audio controls loop ref={audioRef} className='audio' autoPlay>
				<source src={music} type='audio/mpeg' />
				Your browser does not support the audio element.
			</audio>
			<Footer text={footerText[lang]} />
		</div>
	);
};

export default ShowLyrics;
