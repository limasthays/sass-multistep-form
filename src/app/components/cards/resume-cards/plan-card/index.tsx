import { nanoid } from 'nanoid'
import './style.scss'
import { ResumeSelectedPlan } from '@/app/steps/Step-4/types'
import { useContext } from 'react'
import { FormStepsContext } from '@/app/contexts/FormStepsContexts'

function PlanCard({ addons, plan, plan_billing }: ResumeSelectedPlan) {
	const billingMode = {
		yearly: '/yr',
		monthly: '/mo',
	}

	const { goToStep } = useContext(FormStepsContext)
	return (
		<div className="resume-plan-card">
			<div className="submited-plan">
				<div>
					<span>
						{plan.option} ({plan_billing})
					</span>
					<button
						type="button"
						onClick={() => {
							goToStep(1)
						}}
					>
						Change
					</button>
				</div>

				<span className="resume-plan-total">
					${plan.price[plan_billing]}
					{billingMode[plan_billing]}
				</span>
			</div>

			<hr />
			{addons.length !== 0 && (
				<div className="addons-container">
					{addons?.map((item) => {
						return (
							<div key={nanoid()} className="addon-opt-card">
								<span className="addon-opt-title">{item.option}</span>
								<span className="addon-opt-price">
									+{item.price[plan_billing]}
									{billingMode[plan_billing]}
								</span>
							</div>
						)
					})}
				</div>
			)}
		</div>
	)
}

export default PlanCard
