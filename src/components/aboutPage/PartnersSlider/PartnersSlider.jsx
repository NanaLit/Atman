'use client';

import styles from './PartnersSlider.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, A11y } from 'swiper/modules';

const partners = [
	{
		logo: '/about/Partners-slider/partner-logo1.png',
		title: '3M',
		description:
			'Мировой лидер в производстве инновационных технологий и материалов для различных отраслей,  включая автомобильную промышленность. ',
	},
	{
		logo: '/about/Partners-slider/partner-logo2.png',
		title: 'ГАЗ',
		description:
			'Ведущий российский производитель коммерческого и легкового транспорта. Продукция завода востребована в бизнес-сегменте, коммунальной сфере.',
	},
	{
		logo: '/about/Partners-slider/partner-logo3.png',
		title: 'AURUS',
		description:
			'Флагман российского автопрома, Производит автомобили премиум-класса, люксовые седаны, внедорожники и лимузины, сочетающие передовые технологии, безупречный дизайн и высочайший уровень комфорта.',
	},
	{
		logo: '/about/Partners-slider/partner-logo4.png',
		title: 'НАМИ',
		description:
			'Центральный научно-исследовательский автомобильный институт. Главный экспертный центр автомобильной отрасли России.',
	},
	{
		logo: '/about/Partners-slider/partner-logo5.png',
		title: 'Ritrama',
		description:
			'Лидер рынка в разработке и производстве самоклеящихся пленок и материалов для авиации, строительства и автопрома. ',
	},
	{
		logo: '/about/Partners-slider/partner-logo6.png',
		title: 'HAVAL',
		description:
			'Суббренд Great Wall Motors. Один из самых популярных китайских автобрендов на российском рынке, известный своими стильными кроссоверами и внедорожниками.',
	},
	{
		logo: '/about/Partners-slider/partner-logo7.png',
		title: 'АвтоВАЗ',
		description:
			'Крупнейший российский производитель легковых автомобилей, выпускающий популярные модели LADA. Компания является ключевым игроком отечественного автопрома.',
	},
];

export default function PartnersSlider() {
	return (
		<>
			<section className={styles.section}>
				<div className={styles.container}>
					<div className={styles.wrap}>
						<h2 className={styles.title}>
							Партнёры<span> и потребители </span>
						</h2>

						<div className={styles.swiperContainer}>
							<Swiper
								wrapperClass={styles.swiperWrapper}
								className={styles.swiper}
								modules={[Navigation, Scrollbar, A11y]}
								spaceBetween={20}
								slidesPerView={4.2}
								breakpoints={{
									0: {
										slidesPerView: 1.5,
									},
									576: {
										slidesPerView: 2.5,
									},
									768: {
										slidesPerView: 3.3,
									},
									1024: {
										slidesPerView: 4.2,
									},
								}}
							>
								{partners.map((item, index) => (
									<SwiperSlide key={index} className={styles.swiperSlide}>
										<div className={styles.slideInner}>
											<div className={styles.imgContainer}>
												<img
													className={styles.logo}
													src={item.logo}
													alt="logo"
												/>
											</div>

											<div className={styles.titleCard}>{item.title}</div>
											<div className={styles.description}>
												{item.description}
											</div>
										</div>
									</SwiperSlide>
								))}
							</Swiper>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
