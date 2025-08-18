import Header from '@/components/headerSection/Header/Header';
import Footer from '@/components/Footer/Footer';

export default function KnowledgeLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<Header />
			<main style={{ backgroundColor: 'rgb(228, 229, 231)' }}>{children}</main>
			<Footer />
		</>
	);
}
