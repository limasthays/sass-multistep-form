import { useFormContext } from 'react-hook-form'
import OptionCard from './card/OptionCard'
import { nanoid } from 'nanoid'
import { plans } from '@/app/data/step2-plans'
import './style.scss'

function GroupOptionCards() {
	const { watch, register } = useFormContext()
	const planBilling = watch('plan_billing') === true ? 'yearly' : 'monthly'

	register('plan', { required: true })

	console.log('vejaaa: ', watch())

	return (
		<div className="plan-cards">
			{plans.map((opt) => (
				<OptionCard
					key={nanoid()}
					title={opt.title}
					icon={opt.icon}
					price={opt.price}
					promoCall={opt.promoCall}
					plan_billing={planBilling}
				/>
			))}
		</div>
	)
}

export default GroupOptionCards
