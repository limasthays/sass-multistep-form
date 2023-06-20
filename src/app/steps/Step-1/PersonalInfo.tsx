import { useFormContext } from 'react-hook-form'

function PersonalInfo() {
	const { register } = useFormContext()

	return (
		<section>
			<div>
				<h2>Personal info</h2>
				<p>Please provide your name, email address, and phone number.</p>
			</div>

			<div>
				<label htmlFor="name">Name</label>
				<input type="text" id="name" {...register('name')} />
			</div>

			<div>
				<label htmlFor="email">Email Address</label>
				<input type="text" id="email" {...register('email')} />
			</div>

			<div>
				<label htmlFor="phone">Phone Number</label>
				<input type="text" id="phone" {...register('phone')} />
			</div>
		</section>
	)
}

export default PersonalInfo
