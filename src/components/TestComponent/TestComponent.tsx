interface TestComponentProps {
	name: string;
	age: number;
}

export default function TestComponent({ name, age }: TestComponentProps) {
	return (
		<div>
			<span>{name}</span>
			<span>{age}</span>
		</div>
	);
}
