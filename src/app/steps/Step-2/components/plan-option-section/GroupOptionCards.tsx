import { useFormContext } from 'react-hook-form'
import OptionCard from './card/OptionCard'
import { nanoid } from 'nanoid'
import { plans } from '@/app/data/step2-plans'
import './style.scss'

function GroupOptionCards() {
	const { register } = useFormContext()

	register('plan', { required: true })

	return (
		<div className="plan-cards">
			{plans.map((opt) => (
				<OptionCard
					key={nanoid()}
					title={opt.title}
					icon={opt.icon}
					price={opt.price}
					promoCall={opt.promoCall}
				/>
			))}
		</div>
	)
}

export default GroupOptionCards
