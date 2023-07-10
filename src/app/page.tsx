'use client'

import './styles/global.scss'
import { FormProvider, useForm } from 'react-hook-form'
import ContentContainer from './components/containers/Content'
import GroupStepButtons from './components/layouts/GroupStepButtons'
import FormStepControl from './components/layouts/FormStepControl'
import ThankUser from './steps/Thanks/ThankUser'
import { FormStepsContextProvider } from './contexts/FormStepsContexts'
import StepHandler from './steps/StepHandler'

export default function Home() {
	const methods = useForm({
		mode: 'all',
		defaultValues: {
			name: '',
			email: '',
			phone: '',
			plan_billing: 'monthly',
			plan: '',
			addon: [''],
		},
	})

	const onSubmitMainForm = (data: any) => {
		const parsedAddons =
			data.addon.length === 0
				? ['']
				: data.addon.map((item: any) => JSON.parse(item))

		const parsedPlan = JSON.parse(data.plan)
		const plan = { ...parsedPlan, price: parsedPlan.price[data.plan_billing] }
		const addon =
			data.addon.length === 0
				? ['']
				: parsedAddons.map((item: any) => {
						return { ...item, price: item.price[data.plan_billing] }
				  })

		const dataToSubmit = {
			...data,
			plan,
			addon,
		}
		console.log('resume: ', dataToSubmit)
	}

	return (
		<main>
			<FormStepsContextProvider>
				<FormProvider {...methods}>
					<GroupStepButtons />
					<form onSubmit={methods.handleSubmit(onSubmitMainForm)}>
						<div className="main-container">
							<ContentContainer>
								{methods.formState.isSubmitted ? (
									<ThankUser />
								) : (
									<StepHandler />
								)}
							</ContentContainer>

							{!methods.formState.isSubmitted && <FormStepControl />}
						</div>
					</form>
				</FormProvider>
			</FormStepsContextProvider>
		</main>
	)
}
