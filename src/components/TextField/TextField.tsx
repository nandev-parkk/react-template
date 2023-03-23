import { InputHTMLAttributes } from 'react';
import styles from './TextField.module.scss';

export default function TextField({
	type,
	value,
	disabled,
	id,
	name,
	readOnly,
	onChange,
}: InputHTMLAttributes<HTMLInputElement>) {
	return (
		<input
			type={type}
			value={value}
			disabled={disabled}
			id={id}
			name={name}
			readOnly={readOnly}
			onChange={onChange}
		/>
	);
}
