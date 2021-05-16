import './scrollTop.css';

const ScrollTop = () => {
	const handleScroll = () => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth',
		});
	};
	return (
		<div className='scroll_top' onClick={handleScroll}>
			{'>'}
		</div>
	);
};

export default ScrollTop;
