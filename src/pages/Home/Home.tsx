import { useEffect, useState } from 'react';
import { useHttpService } from '@/modules/HttpService';
import { Response } from '@/@types/common';
import styles from './Home.module.scss';

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
