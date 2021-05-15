import lyrics from './lyrics';
import './App.css';

const ShowLyrics = () => {
	const localLyrics = lyrics.split('।।');
	return (
		<>
			{localLyrics.map((para) => (
				<div className='chopai'>
					<p>{para.split('।')[0]}</p>
					<p>{para.split('।')[1]}</p>
				</div>
			))}
		</>
	);
};

export default ShowLyrics;
