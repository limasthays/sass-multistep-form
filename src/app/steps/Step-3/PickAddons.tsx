import CardsAddonOptions from '@/app/components/sections/addon-cards/CardsAddonOptions'
import { useFormContext } from 'react-hook-form'

function PickAddons() {
	return (
		<>
			<div>
				<h2>Pick add-ons</h2>
				<p>Add-ons help enhance your gaming experience.</p>
			</div>
			<CardsAddonOptions />
		</>
	)
}

export default PickAddons
