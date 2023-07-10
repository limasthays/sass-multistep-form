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
	plan_billing: 'monthly' | 'yearly'
}

export const AddonCard = ({
	title,
	description,
	price,
	isOptionSelected,
	plan_billing,
}: AddonCardProps) => {
	const { register } = useFormContext()
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
						className="custom-checkbox"
						id={title}
						value={JSON.stringify({ option: title, price: price })}
						{...register('addon')}
					/>
					<div>
						<span className="addon-title">{title}</span>
						<span className="addon-description">{description}</span>
					</div>
					<span className="addon-price">
						+${price[plan_billing]}
						{billingMode[plan_billing]}
					</span>
				</div>
			</label>
		</>
	)
}
