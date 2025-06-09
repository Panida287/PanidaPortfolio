import { useContactForm } from '../hooks/useContactForm';

export default function ContactForm() {
	const {
		values,
		handleChange,
		handleSubmit,
		isSubmitting,
		error,
		success,
	} = useContactForm(() => alert('Form submitted successfully!'));

	return (
		<section className="form my-3 w-[80%] mx-auto max-w-[900px]">
			<form
				name="contact"
				method="POST"
				data-netlify="true"
				onSubmit={handleSubmit}
				className="form-container font-paragraph w-full flex flex-col gap-2"
			>
				{/* Netlify hidden field */}
				<input type="hidden" name="form-name" value="contact" />

				{/* Name & Number */}
				<div className="form-row flex justify-between gap-2">
					<label className="w-full">
						<input
							type="text"
							name="name"
							placeholder="Name"
							required
							className="form-input"
							value={values.name}
							onChange={handleChange}
						/>
					</label>
					<label className="w-full">
						<input
							type="tel"
							name="number"
							placeholder="Phone number"
							className="form-input"
							value={values.number}
							onChange={handleChange}
						/>
					</label>
				</div>

				{/* Email */}
				<div className="form-row">
					<label>
						<input
							type="email"
							name="email"
							placeholder="Email"
							required
							className="form-input"
							value={values.email}
							onChange={handleChange}
						/>
					</label>
				</div>

				{/* Subject */}
				<div className="form-row">
					<label>
						<input
							type="text"
							name="subject"
							placeholder="Subject"
							required
							className="form-input"
							value={values.subject}
							onChange={handleChange}
						/>
					</label>
				</div>

				{/* Message */}
				<div className="form-row">
					<label>
            <textarea
	            name="message"
	            placeholder="Message"
	            required
	            className="form-input h-48"
	            value={values.message}
	            onChange={handleChange}
            />
					</label>
				</div>

				{/* Error / Success */}
				{error && (
					<p className="text-error text-sm text-center">{error}</p>
				)}
				{success && (
					<p className="text-neon text-sm text-center">
						Thanks! I’ll get back to you soon.
					</p>
				)}

				{/* Submit */}
				<div className="btn-container mt-4 flex justify-center items-center">
					<button
						type="submit"
						className="neon-button"
						disabled={isSubmitting}
					>
						{isSubmitting ? 'Sending…' : 'Send Message'}
					</button>
				</div>
			</form>
		</section>
	);
}
