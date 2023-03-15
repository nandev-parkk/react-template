import { ReactNode } from 'react';
import styles from './Layout.module.scss';
import { Header, Footer } from '@/components/index';

interface LayoutProps {
	children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
	return (
		<>
			<Header />
			<main className={styles.main}>{children}</main>
			<Footer />
		</>
	);
}
