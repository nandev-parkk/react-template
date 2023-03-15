import styles from './Layout.module.scss';
import { Header, Footer } from '@/components/index';
import { Children } from '@/@types/common';

export default function Layout({ children }: Children) {
	return (
		<div className={styles.container}>
			<Header />
			<main className={styles.main}>{children}</main>
			<Footer />
		</div>
	);
}
