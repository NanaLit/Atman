import NewsContent from '../NewsContent/NewsContent.jsx';

import styles from './NewsWrapContent.module.scss';

const NewsWrapContent = async () => {
	const res = await fetch(`${process.env.HOST}/api/news`, {
		cache: 'no-cache',
	});
	const news = await res.json();
	return (
		<section
			style={{ backgroundColor: 'rgb(228, 229, 231)' }}
			className={styles.section}
		>
			<NewsContent news={news}></NewsContent>
		</section>
	);
};

export default NewsWrapContent;
