import Image from 'next/image'
import ArcadeIcon from '../../app/assets/images/icon-arcade.svg'
import AdvancedIcon from '../../app/assets/images/icon-advanced.svg'
import ProIcon from '../../app/assets/images/icon-pro.svg'

export const plans = [
	{
		title: 'Arcade',
		icon: <Image src={ArcadeIcon} alt="arcade plan icon" />,
		price: {
			monthly: 9,
			yearly: 90,
		},
		promoCall: '2 months free',
	},
	{
		title: 'Advanced',
		icon: <Image src={AdvancedIcon} alt="advanced plan icon" />,
		price: {
			monthly: 12,
			yearly: 120,
		},
		promoCall: '2 months free',
	},
	{
		title: 'Pro',
		icon: <Image src={ProIcon} alt="Pro plan icon" />,
		price: {
			monthly: 15,
			yearly: 150,
		},
		promoCall: '2 months free',
	},
]
