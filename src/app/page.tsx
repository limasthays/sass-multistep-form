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
			addon: [],
		},
	})

	const onSubmitMainForm = (data: any) => {
		console.log('all my data: ', data)
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
