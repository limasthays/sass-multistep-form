import './style.scss'
import { useFormContext } from 'react-hook-form'

type AddonCardProps = {
	title: string
	description: string
	price: number
	isOptionSelected: boolean
}

export const AddonCard = ({
	title,
	description,
	price,
	isOptionSelected,
}: AddonCardProps) => {
	const { register } = useFormContext()

	return (
		<>
			<label htmlFor={title}>
				<div
					className={`addon-card ${isOptionSelected ? 'addon-active' : ''} `}
				>
					<input
						type="checkbox"
						id={title}
						value={title}
						{...register('addon')}
					/>
					<div>
						<span className="addon-title">{title}</span>
						<span className="addon-description">{description}</span>
					</div>
					<span className="addon-price">+${price}/mo</span>
				</div>
			</label>
		</>
	)
}
