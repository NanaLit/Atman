import Link from 'next/link';
import Image from 'next/image';
import styles from './GoodsCardFavourite.module.scss';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

const GoodsCardFavourite = ({ id, name, description, imageurl }) => {
	description = description.replace(/\\n/g, '<br />');

	return (
		<Link href={`/goods/${id}`} className={styles.card}>
			<div className={styles.content}>
				<h1 className={styles.name}>{name}</h1>
				<div className={styles.description}>
					<ReactMarkdown rehypePlugins={[rehypeRaw]} children={description} />
				</div>
			</div>

			<div className={styles.imgWrap}>
				<Image
					src={`${process.env.HOST}/${imageurl}`}
					alt="img"
					width={400}
					height={300}
					className={styles.img}
				/>
			</div>
		</Link>
	);
};

export default GoodsCardFavourite;
