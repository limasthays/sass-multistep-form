import { useFormContext, useWatch } from 'react-hook-form'
import './style.scss'
import { ReactNode } from 'react'

type OptionCardProps = {
	title: string
	icon: ReactNode
	price: {
		monthly: number
		yearly: number
	}
	promoCall: string
}

function OptionCard({ title, icon, price, promoCall }: OptionCardProps) {
	const { setValue } = useFormContext()
	const { plan_billing } = useWatch()

	const pricingMode = {
		monthly: '/mo',
		yearly: '/yr',
	}
	return (
		<div
			className={`option-card ${
				useWatch().plan.includes(title) ? 'option-checked' : ''
			}`}
		>
			<input
				type="radio"
				onClick={(event) => {
					setValue('plan', event.target.value, { shouldValidate: true })
				}}
				id={title}
				value={JSON.stringify({
					option: title,
					price: price,
				})}
			/>
			<label htmlFor={title}>
				<div className="opt-content">
					{icon}

					<div className="plan-description">
						<span className="plan-title">{title}</span>
						<span className="plan-price">
							${price[plan_billing as 'monthly' | 'yearly']}
							{pricingMode[plan_billing as 'monthly' | 'yearly']}
						</span>
						{plan_billing === 'yearly' && (
							<span className="plan-promo">{promoCall}</span>
						)}
					</div>
				</div>
			</label>
		</div>
	)
}

export default OptionCard
