import { TestComponent } from '@/components';
import { Link } from 'react-router-dom';
import styles from './Home.module.scss';

export default function Home() {
	return (
		<section>
			<TestComponent name='shpark' age={20} />
		</section>
	);
}
