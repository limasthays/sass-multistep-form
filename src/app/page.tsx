'use client'

import './styles/global.scss'
import { nanoid } from 'nanoid'
import PersonalInfo from './steps/Step-1/PersonalInfo'
import SelectYourPlan from './steps/Step-2/SelectYourPlan'
import PickAddons from './steps/Step-3/PickAddons'
import FinishingUp from './steps/Step-4/FinishingUp'
import { useMultistepForm } from './hooks/useMultistepForm'
import { FormProvider, useForm } from 'react-hook-form'
import ContentContainer from './components/containers/Content'
import GroupStepButtons from './components/layouts/GroupStepButtons'
import FormStepControl from './components/layouts/FormStepControl'

export default function Home() {
	const steps = [
		<PersonalInfo key={nanoid()} />,
		<SelectYourPlan key={nanoid()} />,
		<PickAddons key={nanoid()} />,
		<FinishingUp key={nanoid()} />,
	]

	const methods = useForm({ mode: 'all' })

	const onSubmitMainForm = (data: any) => {
		console.log('all my data: ', data)
	}

	const {
		currentStepIndex,
		nextStep,
		backStep,
		goToStep,
		isFirstStep,
		isLastStep,
	} = useMultistepForm(steps)

	return (
		<main>
			<GroupStepButtons
				currentStepIndex={currentStepIndex}
				goToStep={goToStep}
				steps={steps}
			/>
			<FormProvider {...methods}>
				<form onSubmit={methods.handleSubmit(onSubmitMainForm)}>
					<ContentContainer>{steps[currentStepIndex]}</ContentContainer>
				</form>
				<FormStepControl
					backStep={backStep}
					nextStep={nextStep}
					isFirstStep={isFirstStep}
					isLastStep={isLastStep}
				/>
			</FormProvider>
		</main>
	)
}
