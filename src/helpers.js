export const currentDate = () => {
	let date = new Date(),
		currentYear = date.getFullYear(),
		currentMonth = date.getMonth() + 1,
		currentDay = date.getDate(),
		currentHour = date.getHours(),
		currentMinutes = date.getMinutes(),
		currentSeconds = date.getSeconds();

	if (currentDay < 10) currentDay = `0${currentDay}`;
	if (currentMonth < 10) currentMonth = `0${currentMonth}`;
	if (currentSeconds < 10) currentSeconds = `0${currentSeconds}`;
	if (currentMinutes < 10) currentMinutes = `0${currentMinutes}`;

	return `${currentDay}/${currentMonth}/${currentYear} ${currentHour}:${currentMinutes}:${currentSeconds}`;
};

export const scrollToTop = () => {
	const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	if (scrollTop > 0) {
		window.scrollBy(0, -100);
		setTimeout(scrollToTop, 10);
	}
};
