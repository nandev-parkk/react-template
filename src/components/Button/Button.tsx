import { ButtonHTMLAttributes } from 'react';
import { Children } from '@/@types/common';
import styles from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	children: string | Children;
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
