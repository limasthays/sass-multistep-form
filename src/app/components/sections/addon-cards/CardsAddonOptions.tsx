import { useWatch } from 'react-hook-form'
import { AddonCard } from '../../cards/addon-card/AddonCard'
import { addons } from '@/app/data/step3-addons'
import './style.scss'

function CardsAddonOptions() {
	const { addon, plan_billing } = useWatch()

	const getSelectedOptions = () => {
		if (addon) {
			return addon as string[]
		}
		return ['']
	}

	return (
		<div className="addon-cards-container">
			{addons.map((item) => {
				const isOptionSelected = getSelectedOptions().includes(
					JSON.stringify({ option: item.title, price: item.price })
				)
				return (
					<AddonCard
						key={item.title}
						description={item.description}
						price={item.price}
						title={item.title}
						isOptionSelected={isOptionSelected}
						plan_billing={plan_billing}
					/>
				)
			})}
		</div>
	)
}

export default CardsAddonOptions
