import { useFormContext } from 'react-hook-form'
import { AddonCard } from '../../cards/addon-card/AddonCard'
import './style.scss'

function CardsAddonOptions() {
	const addonOptions = [
		{
			title: 'Online service',
			description: 'Access to multiplayer games',
			price: 1,
		},
		{
			title: 'Larger storage',
			description: 'Extra 1TB of cloud save',
			price: 2,
		},
		{
			title: 'Customizable profile',
			description: 'Custom theme on your profile',
			price: 2,
		},
	]

	const { watch } = useFormContext()

	const getSelectedOptions = () => {
		if (watch('addon')) {
			return watch('addon') as string[]
		}
		return ['']
	}

	return (
		<div className="addon-cards-container">
			{addonOptions.map((item) => {
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
