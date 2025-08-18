import NewsTitle from '@/components/newsPage/SingleNews/NewsTitle/NewsTitle.jsx';
import NewsSliderAndContent from '@/components/newsPage/SingleNews/NewsSliderAndContent/NewsSliderAndContent.jsx';

const NewsPage = async ({ params }) => {
	const id = await params.id;
	const res = await fetch(`${process.env.HOST}/api/news/${id}`, {
		cache: 'no-cache',
	});
	const news = await res.json();

	const title = news.title;
	const descr = news.descr;
	const content = news.content;
	const imagessrc = news.imagessrc;

	return (
		<>
			<NewsTitle title={title} descr={descr} />
			<NewsSliderAndContent imagessrc={imagessrc} content={content} />
		</>
	);
};

export default NewsPage;
