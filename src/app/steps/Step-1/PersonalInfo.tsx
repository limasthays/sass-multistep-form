import { useFormContext } from 'react-hook-form'
import './style.scss'

function PersonalInfo() {
	const { register } = useFormContext()

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
						{...register('name')}
					/>
				</div>

				<div>
					<label htmlFor="email">Email Address</label>
					<input
						type="text"
						id="email"
						placeholder="e.g. stephenking@lorem.com"
						{...register('email')}
					/>
				</div>

				<div>
					<label htmlFor="phone">Phone Number</label>
					<input
						type="text"
						id="phone"
						placeholder="e.g. +1 234 567 890"
						{...register('phone')}
					/>
				</div>
			</div>
		</>
	)
}

export default PersonalInfo
