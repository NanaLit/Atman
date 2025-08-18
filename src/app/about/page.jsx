import PageTitle from './../../components/PageTitle/PageTitle.jsx';
import SubtitleAbout from '../../components/aboutPage/SubtitleAbout/SubtitleAbout.jsx';
import Algorithm from '../../components/aboutPage/Algorithm/Algorithm.jsx';
import Values from '../../components/aboutPage/Values/Values.jsx';
import Certificates from '../../components/aboutPage/Certificates/Certificates.jsx';
import Afoam from '@/components/aboutPage/Afoam/Afoam.jsx';
import Delivery from '../../components/aboutPage/Delivery/Delivery.jsx';
import PartnersSlider from '@/components/aboutPage/PartnersSlider/PartnersSlider.jsx';
import Team from './../../components/Team/Team.jsx';
import Map from './../../components/Map/Map.jsx';
import Requisites from '../../components/aboutPage/Requisites/Requisites.jsx';

export default function About() {
	const breadcrumbs = [
		{
			title: 'Главная',
			href: '/',
		},
		{
			title: 'О нас',
		},
	];

	return (
		<>
			<PageTitle
				title={
					<div>
						Проектируя соединения <br /> <span>вспомните о нас</span>
					</div>
				}
				text="Мы работаем для вашего процветания, предлагая решения, которые отвечают  высоким требованиям качества и надежности."
				breadcrumbs={breadcrumbs}
			></PageTitle>
			<SubtitleAbout></SubtitleAbout>
			<Algorithm></Algorithm>
			<Values></Values>
			<Certificates></Certificates>
			<Afoam></Afoam>
			<Delivery></Delivery>
			<PartnersSlider></PartnersSlider>
			<Team></Team>
			<Map></Map>
			<Requisites></Requisites>
		</>
	);
}
