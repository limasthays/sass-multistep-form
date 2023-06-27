import { useFormContext } from 'react-hook-form'
import './style.scss'
import { ReactNode } from 'react'

type OptionCardProps = {
	title: string
	icon: ReactNode
	price: {
		monthly: number
		yearly: number
	}
	promoCall?: string

	plan_billing: 'yearly' | 'monthly'
}

function OptionCard({
	title,
	icon,
	price,
	promoCall,
	plan_billing,
}: OptionCardProps) {
	const pricingMode = {
		monthly: '/mo',
		yearly: '/yr',
	}

	const { register, watch } = useFormContext()

	return (
		<div
			className={`option-card ${
				watch('plan') === title ? 'option-checked' : ''
			}`}
		>
			<input type="radio" {...register('plan')} id={title} value={title} />
			<label htmlFor={title}>
				<div className="opt-content">
					{icon}

					<div className="plan-description">
						<span className="plan-title">{title}</span>
						<span className="plan-price">
							${price[plan_billing]}
							{pricingMode[plan_billing]}
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
