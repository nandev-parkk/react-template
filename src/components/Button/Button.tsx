import { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	children: string | React.ReactNode;
}

export default function Button({
	type,
	disabled,
	onClick,
	className,
	children,
}: ButtonProps) {
	return (
		<button
			type={type}
			disabled={disabled}
			onClick={onClick}
			className={className}
		>
			{children}
		</button>
	);
}
