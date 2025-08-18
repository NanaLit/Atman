'use client';

import PageTitle from './../../components/PageTitle/PageTitle.jsx';
import KnowledgeContent from './../../components/KnowledgeContent/KnowledgeContent.jsx';

export default function Knowledge() {
	const breadcrumbs = [
		{
			title: 'Главная',
			href: '/',
		},
		{
			title: 'База знаний',
		},
	];
	return (
		<div className="relative">
			<PageTitle
				title={
					<div>
						База <span>знаний</span>
					</div>
				}
				text={<div>Наш опыт для вашей эффективности</div>}
				breadcrumbs={breadcrumbs}
			></PageTitle>

			<KnowledgeContent></KnowledgeContent>
		</div>
	);
}
