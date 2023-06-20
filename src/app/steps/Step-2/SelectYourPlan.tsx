import { useFormContext } from 'react-hook-form'

function SelectYourPlan() {
	const { register } = useFormContext()

	return (
		<>
			<div>
				<h2>Select your plan</h2>
				<p>You have the option of monthly or yearly billing.</p>
			</div>

			<div>
				<input type="radio" value="Arcade" id="Arcade" {...register('plan')} />
				<label htmlFor="Arcade">Arcade</label>
			</div>

			<div>
				<input
					type="radio"
					value="Advanced"
					id="Advanced"
					{...register('plan')}
				/>
				<label htmlFor="Advanced">Advanced</label>
			</div>

			<div>
				<input type="radio" value="Pro" id="Pro" {...register('plan')} />
				<label htmlFor="Pro">Pro</label>
			</div>

			<div>
				<span>monthly</span>
				<input
					type="checkbox"
					id="plan_billing"
					{...register('plan_billing')}
				/>
				<span>yearly</span>
			</div>
		</>
	)
}

export default SelectYourPlan
