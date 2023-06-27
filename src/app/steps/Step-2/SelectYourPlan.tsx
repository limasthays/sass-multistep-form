import { useFormContext } from 'react-hook-form'
import { ToggleButton } from '@/app/components/buttons/ToggleButton'
import GroupOptionCards from './components/plan-option-section/GroupOptionCards'

function SelectYourPlan() {
	const { register } = useFormContext()

	return (
		<>
			<div>
				<h2>Select your plan</h2>
				<p>You have the option of monthly or yearly billing.</p>
			</div>

			<GroupOptionCards />

			<div>
				<span>Monthly</span>

				<ToggleButton {...register('plan_billing')} />

				<span>Yearly</span>
			</div>
		</>
	)
}

export default SelectYourPlan
