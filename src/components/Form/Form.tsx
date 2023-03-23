import { FormHTMLAttributes } from 'react';
import { Children } from '@/@types/common';
import styles from './Form.module.scss';

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
	children: Children;
	className?: string;
	legend: string;
}

export default function Form({
	children,
	className,
	legend,
	onSubmit,
}: FormProps) {
	return (
		<form onSubmit={onSubmit} className={className}>
			<fieldset>
				<legend>{legend}</legend>
				{children}
			</fieldset>
		</form>
	);
}
