import { useFormContext } from 'react-hook-form'
import './style.scss'

function PersonalInfo() {
	const { register, setValue } = useFormContext()

	return (
		<>
			<div>
				<h2>Personal info</h2>
				<p>Please provide your name, email address, and phone number.</p>
			</div>

			<div className="personal-inputs">
				<div>
					<label htmlFor="name">Name</label>
					<input
						type="text"
						id="name"
						placeholder="e.g. Stephen King"
						{...register('name', {
							required: 'Name field is required',
						})}
					/>
				</div>

				<div>
					<label htmlFor="email">Email Address</label>
					<input
						type="text"
						id="email"
						placeholder="e.g. stephenking@lorem.com"
						{...register('email', {
							required: 'Email field is required',
						})}
					/>
				</div>

				<div>
					<label htmlFor="phone">Phone Number</label>
					<input
						type="text"
						id="phone"
						placeholder="e.g. +1 234 567 890"
						{...register('phone', {
							required: 'Phone field is required',
							onChange: (event) => {
								const numericInput = event.target.value.replace(/\D/g, '')
								setValue('phone', numericInput)
							},
						})}
					/>
				</div>
			</div>
		</>
	)
}

export default PersonalInfo
