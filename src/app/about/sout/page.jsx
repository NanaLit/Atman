'use client';

import { menuItems } from '@/data/menuItems';

import PageTitle from '@/components/PageTitle/PageTitle';
import PolicySection from '@/components/policyPages/PolicySection/PolicySection';
import SoutContent from '@/components/policyPages/soutPage/SoutContent/SoutContent';
import useSaveScrollPosition from '@/hooks/useSaveScrollPosition.js';
// import ScrollLogger from '@/hooks/ScrollLogger.js';
import ScrollLogger from '@/components/ScrollLogger/ScrollLogger.tsx';

import { useRouter } from 'next/router';

export default function Sout() {
	const breadcrumbs = [
		{
			title: 'Главная',
			href: '/',
		},
		{
			title: 'Ведомости СОУТ',
		},
	];

	// const router = useRouter();
	// useSaveScrollPosition();

	return (
		<section>
			<ScrollLogger />
			<PageTitle
				title={
					'Безопасные условия труда — здоровый работник, успешная компания'
				}
				breadcrumbs={breadcrumbs}
			/>

			<PolicySection>
				<SoutContent />
			</PolicySection>
		</section>
	);
}
