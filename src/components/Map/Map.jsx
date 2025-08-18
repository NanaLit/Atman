import styles from './Map.module.scss';
import Image from 'next/image';
import img from '@/../public/map-pin.png';
export default function Map() {
	return (
		<section className={styles.wrap}>
			<div className="container">
				<Image
					src="/map2х.jpg"
					alt="map"
					className={styles.mapImg}
					width={1880}
					height={1062}
					// priority={true}
				/>
				<div className={styles.mobileVisible}>
					<div className={styles.wrapper}>
						<p className={styles.title}>Офисы</p>
						<ul className={styles.list}>
							<li className={styles.listItem}>
								<Image src={img} alt="" />
								Москва
							</li>
							<li className={styles.listItem}>
								<Image src={img} alt="" />
								Новомосковск
							</li>
							<li className={styles.listItem}>
								<Image src={img} alt="" />
								Тольятти
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}
