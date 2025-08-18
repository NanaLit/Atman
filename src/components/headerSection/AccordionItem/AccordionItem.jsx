import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useRef } from 'react';

import { TriangleIcon, DEFAULT_COLOR } from './../../TriangleIcon/TriangleIcon';

import styles from './AccordionItem.module.scss';
import { useDispatch } from 'react-redux';
import {
	getFilteredMainParamGoods,
	setFilterMainParamGoods,
	setFirstFilter,
} from '@/store/goods/goodsSlice';

export default function AccordionItem({
	onClick,
	isOpen,
	title,
	items,
	setActive,
	isActiveLink,
}) {
	const itemRef = useRef(null);
	const router = useRouter();
	const dispatch = useDispatch();
	const pathname = usePathname();

	const handleClick = (item) => {
		if (item.href === '/goods') {
			// полностью скопировано из dropdown меню
			const filterIndex = items.findIndex((link) => link.text === item.text);

			const filterMainParam = Array(8).fill(0); // Заполняем массив нулями

			if (filterIndex === 0) {
				dispatch(setFirstFilter([filters[0].id]));
				dispatch(setFilterMainParamGoods([0, 0, 0, 0, 0, 0, 0, 0]));
				dispatch(getAllGoods());
			} else {
				filterMainParam[filterIndex - 1] = 1; // Устанавливаем нужную цифру в массив, начиная со второго элемента

				router.push('/goods');

				// Выполняем запрос
				dispatch(setFilterMainParamGoods(filterMainParam));
				dispatch(setFirstFilter([]));
				dispatch(getFilteredMainParamGoods(filterMainParam));
			}
		}
		setActive(false);
	};

	return (
		<li className={styles.accordionItem}>
			<button
				className={`${
					isOpen
						? `${styles.active} ${styles.accordionHeader}`
						: styles.accordionHeader
				} ${isActiveLink ? styles.buttonLinkActive : ''}`}
				onClick={() => onClick()}
			>
				{title}
				<TriangleIcon
					className={styles.accordionArrow}
					color={isActiveLink ? 'var(--red)' : DEFAULT_COLOR}
					isOpen={isOpen}
				/>
			</button>
			<div
				className={styles.accordionCollapse}
				style={
					isOpen ? { height: itemRef.current.scrollHeight } : { height: '0px' }
				}
			>
				<div className={styles.accordionBody} ref={itemRef}>
					<ul className={styles.list}>
						{items.map((item, index) => {
							return (
								<li key={index}>
									<Link
										href={item.href}
										className={`${styles.link} ${
											pathname === item.href && index === 0
												? styles.linkActive
												: ''
										}`}
										onClick={() => handleClick(item)}
									>
										{item.text}
									</Link>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</li>
	);
}
