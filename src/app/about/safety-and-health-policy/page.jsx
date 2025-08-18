'use client';

import { menuItems } from '@/data/menuItems';

import PageTitle from '@/components/PageTitle/PageTitle';
import PolicySection from '@/components/policyPages/PolicySection/PolicySection';
import SoutContent from '@/components/policyPages/soutPage/SoutContent/SoutContent.tsx';
import useSaveScrollPosition from '@/hooks/useSaveScrollPosition.js';
// import ScrollLogger from '@/hooks/ScrollLogger.js';
import ScrollLogger from '@/components/ScrollLogger/ScrollLogger.tsx';

import { useRouter } from 'next/router';
import { SafetyAndHealthPolicyTextContent } from './SafetyAndHealthPolicyTextContent';

export default function SafetyAndHealthPolicy() {
	const breadcrumbs = [
		{
			title: 'Главная',
			href: '/',
		},
		{
			title: 'Политика в области охраны труда',
		},
	];

	// const router = useRouter();
	// useSaveScrollPosition();

	return (
		<section>
			<ScrollLogger />
			<PageTitle
				title={
					<>
						Думай о безопасности, <br /> действуй безопасно, <br /> будь в
						безопасности
					</>
				}
				breadcrumbs={breadcrumbs}
			/>

			<PolicySection>
				<SafetyAndHealthPolicyTextContent />
			</PolicySection>
		</section>
	);
}
