import { Header, Footer } from '@/components/index';
import { Children } from '@/@types/common';
import styles from './Layout.module.scss';

interface LayoutProps {
	children: Children;
}

export default function Layout({ children }: LayoutProps) {
	return (
		<div className={styles.container}>
			<Header />
			<main className={styles.main}>{children}</main>
			<Footer />
		</div>
	);
}
