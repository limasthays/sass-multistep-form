import { useFormContext } from 'react-hook-form'
import { AddonCard } from '../../cards/addon-card/AddonCard'
import { addons } from '@/app/data/step3-addons'
import './style.scss'

function CardsAddonOptions() {
	const { watch } = useFormContext()

	const getSelectedOptions = () => {
		if (watch('addon')) {
			return watch('addon') as string[]
		}
		return ['']
	}

	return (
		<div className="addon-cards-container">
			{addons.map((item) => {
				const isOptionSelected = getSelectedOptions().includes(item.title)
				return (
					<AddonCard
						key={item.title}
						description={item.description}
						price={item.price}
						title={item.title}
						isOptionSelected={isOptionSelected}
					/>
				)
			})}
		</div>
	)
}

export default CardsAddonOptions
