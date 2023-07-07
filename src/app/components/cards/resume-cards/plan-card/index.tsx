import './style.scss'

function PlanCard() {
	return (
		<div className="resume-plan-card">
			<div className="submited-plan">
				<div>
					<span>Arcade (Monthly)</span>
					<button type="button">Change</button>
				</div>

				<span className="resume-plan-total">$9/mo</span>
			</div>

			<hr />

			<div className="addon-card">
				<span className="addon-title">Addon title</span>
				<span className="addon-price">+1/mo</span>
			</div>
		</div>
	)
}

export default PlanCard
