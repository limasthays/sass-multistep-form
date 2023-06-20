import { useFormContext } from 'react-hook-form'

function PickAddons() {
	const { register } = useFormContext()
	return (
		<section>
			<div>
				<h2>Pick add-ons</h2>
				<p>Add-ons help enhance your gaming experience.</p>
			</div>

			<div>
				<input
					type="checkbox"
					id="Online service"
					value="Online service"
					{...register('addon')}
				/>
				<label htmlFor="Online service">Online service</label>
			</div>

			<div>
				<input
					type="checkbox"
					id="Larger storage"
					value="Larger storage"
					{...register('addon')}
				/>
				<label htmlFor="Larger storage">Larger storage</label>
			</div>

			<div>
				<input
					type="checkbox"
					id="Customizable profile"
					value="Customizable profile"
					{...register('addon')}
				/>
				<label htmlFor="Customizable profile">Customizable profile</label>
			</div>
		</section>
	)
}

export default PickAddons
