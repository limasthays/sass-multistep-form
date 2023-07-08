import PlanCard from '@/app/components/cards/resume-cards/plan-card'
import TotalCard from '@/app/components/cards/resume-cards/total-card'
import { useFormContext, useWatch } from 'react-hook-form'

function FinishingUp() {
	const data = useWatch({
		defaultValue: { plan: '', addon: [''], plan_billing: '' },
	})

	const handleJsonData = (data: string): { option: string; price: any } => {
		if (data.length !== 0) {
			return JSON.parse(data)
		}

		return { option: '', price: '' }
	}

	const parsedPlanData = handleJsonData(data.plan!)
	const parsedAddonData = data.addon?.map((item) => handleJsonData(item))
	const planBilling = data.plan_billing! as 'monthly' | 'yearly'

	const totalPrices = () => {
		if (parsedAddonData?.length !== 0) {
			const values = parsedAddonData!.map(
				(item) => item.price[planBilling] as number
			)
			const total = values!.reduce((prev, curr) => (prev += curr))
			return (total + parsedPlanData.price[planBilling]) as number
		}

		return parsedPlanData.price[planBilling] as number
	}

	return (
		<>
			<div>
				<h2>Finishing up</h2>
				<p>Double-check everything looks OK before confirming.</p>
			</div>

			<section className="resume-container">
				<PlanCard
					plan={parsedPlanData}
					addons={parsedAddonData ?? []}
					plan_billing={planBilling}
				/>
				<TotalCard plan_billing={planBilling} totalPrice={totalPrices()} />
			</section>
		</>
	)
}

export default FinishingUp
