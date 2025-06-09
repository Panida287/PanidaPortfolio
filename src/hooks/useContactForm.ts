import { useState, ChangeEvent, FormEvent } from 'react';

export interface ContactFormValues {
	name: string;
	number: string;
	email: string;
	subject: string;
	message: string;
}

export function useContactForm(onSuccess?: () => void) {
	const [values, setValues] = useState<ContactFormValues>({
		name: '',
		number: '',
		email: '',
		subject: '',
		message: '',
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [success, setSuccess] = useState(false);

	function handleChange(
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) {
		const { name, value } = e.target;
		setValues((v) => ({ ...v, [name]: value }));
	}

	async function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setIsSubmitting(true);
		setError(null);

		const form = e.currentTarget;
		const formData = new FormData(form);

		try {
			const response = await fetch('/', {
				method: 'POST',
				body: formData,
			});
			if (response.ok) {
				setSuccess(true);
				onSuccess?.();
				setValues({ name: '', number: '', email: '', subject: '', message: '' });
			}
		} catch (err) {
			console.error(err);
			setError('There was an issue submitting your form. Please try again.');
		} finally {
			setIsSubmitting(false);
		}
	}

	return {
		values,
		handleChange,
		handleSubmit,
		isSubmitting,
		error,
		success,
	};
}
