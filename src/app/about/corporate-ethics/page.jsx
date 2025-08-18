'use client';
import { menuItems } from '@/data/menuItems';

import PageTitle from '@/components/PageTitle/PageTitle';
import PolicySection from '@/components/policyPages/PolicySection/PolicySection';
import PolicyTextContent from '@/components/policyPages/PolicyTextContent/PolicyTextContent';
import useSaveScrollPosition from '@/hooks/useSaveScrollPosition.js';
// import ScrollLogger from '@/hooks/ScrollLogger.js';
import ScrollLogger from '@/components/ScrollLogger/ScrollLogger.tsx';
import { useRouter } from 'next/router';
import { CorporateEthicsTextContent } from './CorporateEthicsTextContent';

export default function CorporateEthics() {
	const breadcrumbs = [
		{
			title: 'Главная',
			href: '/',
		},
		{
			title: 'Кодекс корпоративной этики',
		},
	];

	// const router = useRouter();
	// useSaveScrollPosition();
	// ScrollLogger();

	return (
		<section>
			<ScrollLogger />
			<PageTitle
				title={'Единые ценности - единая команда'}
				breadcrumbs={breadcrumbs}
			/>

			<PolicySection>
				<CorporateEthicsTextContent />
			</PolicySection>
		</section>
	);
}
