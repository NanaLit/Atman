import { ALL_GOODS_URL } from '@/constants/url.js';

import type { ProductPageProps } from '@/types/product';

import Showcase from '@/components/goodsPage/Showcase/Showcase.jsx';
import Properties from '@/components/goodsPage/Properties/Properties.jsx';

const ProductPage = async ({ params: { id } }: ProductPageProps) => {
	const response = await fetch(ALL_GOODS_URL + `/${id}`, {
		cache: 'no-cache',
	});
	const product = await response.json();

	return (
		<>
			<Showcase product={product} />
			<Properties product={product} />
		</>
	);
};

export default ProductPage;
