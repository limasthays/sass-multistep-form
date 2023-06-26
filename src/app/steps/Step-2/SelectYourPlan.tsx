import { Controller, useFormContext } from 'react-hook-form'
import { ToggleButton } from '@/app/components/buttons/ToggleButton'

function SelectYourPlan() {
	const { register, setValue } = useFormContext()
	register('plan', { required: 'please choose a plan' })

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
				<span>Monthly</span>

				<Controller
					name="plan_billing"
					defaultValue="Monthly"
					rules={{
						onChange: (event) => {
							setValue(
								'plan_billing',
								event.target.value === true ? 'Yearly' : 'Monthly'
							)
						},
					}}
					render={({ field }) => {
						return <ToggleButton {...field} />
					}}
				/>

				<span>Yearly</span>
			</div>
		</>
	)
}

export default SelectYourPlan
