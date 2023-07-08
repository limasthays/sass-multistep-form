import './style.scss'

type TotalCardProps = {
	plan_billing: 'monthly' | 'yearly'
	totalPrice: number
}

function TotalCard({ plan_billing, totalPrice }: TotalCardProps) {
	const billingMode = {
		monthly: 'month',
		yearly: 'year',
	}

	return (
		<div className="resume-total-card">
			<span className="total-billing">
				Total (per {billingMode[plan_billing]})
			</span>
			<span className="total-price">+${totalPrice}</span>
		</div>
	)
}

export default TotalCard
