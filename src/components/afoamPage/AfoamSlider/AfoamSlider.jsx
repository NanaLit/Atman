import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, A11y, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './AfoamSlider.module.scss';

export default function AfoamSlider() {
	const paginationRef = useRef(null);
	const onSlideChangeHandler = (swiper) => {
		const even = swiper.realIndex % 2 === 0;
		const bullets = paginationRef.current.querySelectorAll(".bullet")
		
		if (paginationRef.current) {
			if (even) {
				bullets.forEach(bullet => {
					bullet.classList.add(styles.bulletEven);
					bullet.classList.remove(styles.bulletOdd);
				})
			} else {
				bullets.forEach(bullet => {
					bullet.classList.add(styles.bulletOdd);
					bullet.classList.remove(styles.bulletEven);
				})
			}
		}
	};
	return (
		<>
			<section className={styles.section}>
				<div className="container">
					<div className={styles.wrap} ref={paginationRef}>
						<Swiper
							
							// onSlideChange={onSlideChangeHandler}
							wrapperClass={styles.swiperWrapper}
							className={styles.swiper}
							modules={[Navigation, Scrollbar, A11y, Pagination]}
							slidesPerView={1}
							spaceBetween={20}
							pagination={{
								dynamicBullets: true,
								clickable: true,
								bulletClass: `bullet ${styles.bulletEven}`,
								bulletActiveClass: styles.bulletActive,
								horizontalClass: styles.paginationWrap,
							}}
						>
							<SwiperSlide className={styles.swiperSlideOne}>
								<div className={styles.innerWrap}>
									<div className={styles.afoamTitle}>
										<Image
											className={styles.imgAfoam}
											src="/about/Afoam/afoam.png"
											width={482}
											height={96}
											alt="Afoam"
											// priority={true}
										/>
									</div>

									<div className={styles.subTitle}>
										<span> Материалы, которые работают на вас.</span> <br />
										Присоединяйтесь к числу производств, которые уже <br />
										экономят и повышают качество вместе с нами.
									</div>
								</div>
							</SwiperSlide>

							<SwiperSlide className={styles.swiperSlideTwo}>
								<div className={styles.innerWrap}>
									<div className={styles.afoamTitle}>
										<Image
											className={styles.imgAfoam}
											src="/about/Afoam/afoam.png"
											width={482}
											height={96}
											alt="Afoam"
											// priority={true}
										/>

										<Image
											className={styles.imgAfoamMobile}
											src="/about/Afoam/afoam.png"
											width={482}
											height={96}
											alt="Afoam"
											// priority={true}
										/>
									</div>

									<div className={styles.subTitle}>
										<span> Материалы, которые работают на вас.</span> <br />
										Присоединяйтесь к числу производств, которые уже <br />
										экономят и повышают качество вместе с нами.
									</div>
								</div>
							</SwiperSlide>
						</Swiper>
					</div>
				</div>
			</section>
		</>
	);
}
