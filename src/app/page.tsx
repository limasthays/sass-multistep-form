'use client'

import { nanoid } from 'nanoid'
import PersonalInfo from './steps/Step-1/PersonalInfo'
import SelectYourPlan from './steps/Step-2/SelectYourPlan'
import PickAddons from './steps/Step-3/PickAddons'
import FinishingUp from './steps/Step-4/FinishingUp'
import { useMultistepForm } from './hooks/useMultistepForm'
import { FormProvider, useForm } from 'react-hook-form'
import './styles/global.scss'
import ContentContainer from './components/containers/Content'

export default function Home() {
	const steps = [
		<PersonalInfo key={nanoid()} />,
		<SelectYourPlan key={nanoid()} />,
		<PickAddons key={nanoid()} />,
		<FinishingUp key={nanoid()} />,
	]

	const methods = useForm()

	const onSubmitMainForm = (data: any) => {
		console.log('all my data: ', data)
	}

	const { currentStepIndex, nextStep, backStep, goToStep } =
		useMultistepForm(steps)

	console.log('my data: ', methods.watch('name'))

	return (
		<main>
			<div>
				{steps.map((_, index) => {
					return (
						<button
							type="button"
							key={index}
							onClick={() => {
								goToStep(index)
							}}
						>
							{index + 1}
						</button>
					)
				})}
			</div>
			<FormProvider {...methods}>
				<form onSubmit={methods.handleSubmit(onSubmitMainForm)}>
					<ContentContainer>{steps[currentStepIndex]}</ContentContainer>
				</form>
			</FormProvider>
		</main>
	)
}
