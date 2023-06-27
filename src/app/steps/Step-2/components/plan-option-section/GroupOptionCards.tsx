import ArcadeIcon from '../../../../assets/images/icon-arcade.svg'
import AdvancedIcon from '../../../../assets/images/icon-advanced.svg'
import ProIcon from '../../../../assets/images/icon-pro.svg'

import Image from 'next/image'
import { useFormContext } from 'react-hook-form'
import OptionCard from './card/OptionCard'
import { nanoid } from 'nanoid'
import './style.scss'

function GroupOptionCards() {
	const { watch, register } = useFormContext()
	const planBilling = watch('plan_billing') === true ? 'yearly' : 'monthly'

	const plans = [
		{
			title: 'Arcade',
			icon: <Image src={ArcadeIcon} alt="arcade plan icon" />,
			price: {
				monthly: 9,
				yearly: 90,
			},
			promoCall: '2 months free',
			plan_billing: planBilling,
		},
		{
			title: 'Advanced',
			icon: <Image src={AdvancedIcon} alt="advanced plan icon" />,
			price: {
				monthly: 12,
				yearly: 120,
			},
			promoCall: '2 months free',
			plan_billing: planBilling,
		},
		{
			title: 'Pro',
			icon: <Image src={ProIcon} alt="Pro plan icon" />,
			price: {
				monthly: 15,
				yearly: 150,
			},
			promoCall: '2 months free',
			plan_billing: planBilling,
		},
	]

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
					plan_billing={planBilling}
				/>
			))}
		</div>
	)
}

export default GroupOptionCards
