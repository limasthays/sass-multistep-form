import { nanoid } from 'nanoid'
import StepButton from '../../buttons/StepButton'
import { useMultistepForm } from '@/app/hooks/useMultistepForm'
import './style.scss'

type GroupStepButtonsProps = {
	steps: JSX.Element[]
	currentStepIndex: number
	goToStep: (index: number) => void
}

function GroupStepButtons({
	steps,
	currentStepIndex,
	goToStep,
}: GroupStepButtonsProps) {
	return (
		<div className="step-buttons-container">
			{steps.map((_, index) => {
				return (
					<StepButton
						key={nanoid()}
						handleClick={() => {
							goToStep(index)
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
