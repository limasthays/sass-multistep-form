import './style.scss'
import { useFormContext, useWatch } from 'react-hook-form'

type AddonCardProps = {
	title: string
	description: string
	price: {
		monthly: number
		yearly: number
	}
	isOptionSelected: boolean
}

export const AddonCard = ({
	title,
	description,
	price,
	isOptionSelected,
}: AddonCardProps) => {
	const { register } = useFormContext()
	const { plan_billing } = useWatch()
	const billingMode = {
		yearly: '/yr',
		monthly: '/mo',
	}

	return (
		<>
			<label htmlFor={title}>
				<div
					className={`addon-card ${isOptionSelected ? 'addon-active' : ''} `}
				>
					<input
						type="checkbox"
						id={title}
						value={JSON.stringify({ option: title, price: price })}
						{...register('addon')}
					/>
					<div>
						<span className="addon-title">{title}</span>
						<span className="addon-description">{description}</span>
					</div>
					<span className="addon-price">
						+${price[plan_billing as 'monthly' | 'yearly']}
						{billingMode[plan_billing as 'monthly' | 'yearly']}
					</span>
				</div>
			</label>
		</>
	)
}
