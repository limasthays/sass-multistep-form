import { nanoid } from 'nanoid'
import StepButton from '../../buttons/StepButton'
import './style.scss'
import { useContext } from 'react'
import { FormStepsContext } from '@/app/contexts/FormStepsContexts'
import { useFormContext } from 'react-hook-form'

function GroupStepButtons() {
	const { steps, goToStep, currentStepIndex } = useContext(FormStepsContext)
	const { formState } = useFormContext()

	return (
		<div className="step-buttons-container">
			{steps.map((_, index) => {
				return (
					<StepButton
						key={nanoid()}
						handleClick={() => {
							if (formState.isValid) {
								goToStep(index)
							}
						}}
						step={index + 1}
						isCurrentStep={currentStepIndex === index}
					/>
				)
			})}
		</div>
	)
}

export default GroupStepButtons
