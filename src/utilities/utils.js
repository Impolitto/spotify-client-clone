// Convert milliseconds to time format (MM:SS)
const msTimeFormat = (ms) => {
	if (!ms || ms === 0) return "0:00";
	
	const totalSeconds = Math.floor(ms / 1000);
	const minutes = Math.floor(totalSeconds / 60);
	const seconds = totalSeconds % 60;
	
	return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};

export default msTimeFormat;
