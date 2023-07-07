import PlanCard from '@/app/components/cards/resume-cards/plan-card'
import TotalCard from '@/app/components/cards/resume-cards/total-card'
import { useFormContext, useWatch } from 'react-hook-form'

function FinishingUp() {
	const registeredValues = useWatch()

	return (
		<>
			<div>
				<h2>Finishing up</h2>
				<p>Double-check everything looks OK before confirming.</p>
			</div>

			<section className="resume-container">
				<PlanCard />
				<TotalCard />
			</section>

			<button type="submit">submit!</button>
		</>
	)
}

export default FinishingUp
