import GoodsCard from '../GoodsCard/GoodsCard';

import { HOST } from '@/constants/url';
import goodsTest from '../../../../public/goods.test.png';
import styles from './GoodsList.module.scss';

const GoodsList = ({ products }) => {
	if (!Array.isArray(products)) {
		return null;
	}
	// fix
	return (
		<ul className={styles.cards}>
			{products.map((product) => (
				<li className={styles.cardContainer} key={product.id}>
					<GoodsCard
						id={product.id}
						brand={product.brand}
						title={product.name}
						subtitle={product.type}
						imageurl={`${HOST}/${product.imageurl}`}
					/>
				</li>
			))}
		</ul>
	);
};

export default GoodsList;
