import { useFormContext } from 'react-hook-form'
import { ToggleButton } from '@/app/components/buttons/ToggleButton'
import GroupOptionCards from './components/plan-option-section/GroupOptionCards'
import { useEffect, useState } from 'react'

function SelectYourPlan() {
	const { setValue } = useFormContext()
	const [planBilling, setPlanBilling] = useState<boolean>(false)

	useEffect(() => {
		setValue('plan_billing', planBilling === false ? 'monthly' : 'yearly', {
			shouldValidate: true,
		})
	}, [planBilling])

	return (
		<>
			<div>
				<h2>Select your plan</h2>
				<p>You have the option of monthly or yearly billing.</p>
			</div>

			<GroupOptionCards />

			<div>
				<span>Monthly</span>

				<ToggleButton
					onChange={(event) => {
						setPlanBilling(event.target.checked)
					}}
				/>

				<span>Yearly</span>
			</div>
		</>
	)
}

export default SelectYourPlan
