import { useEffect, useState } from 'react';
import styles from './Home.module.scss';
import { useHttpService } from '@/modules/HttpService';
import { Response } from '@/@types/common';

interface Post {
	id: number;
	title: string;
	body: string;
	userId: number;
}

export default function Home() {
	const [posts, setPosts] = useState<Post[]>([]);
	const { getPosts } = useHttpService();

	useEffect(() => {
		getPosts() //
			.then((res: Response) => {
				const { data, status } = res;
				if (status === 200) {
					setPosts(data);
				} else {
					return;
				}
			});
	}, []);

	return (
		<section className={styles.home}>
			<ul className={styles.posts}>
				{posts.map((post) => {
					const { id, title, body } = post;

					return (
						<li key={id} className={styles.post}>
							<span className={styles.postTitle}>
								{id}. {title}
							</span>
							<p className={styles.postDesc}>{body}</p>
						</li>
					);
				})}
			</ul>
		</section>
	);
}
