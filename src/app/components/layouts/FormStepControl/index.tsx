import { useFormState } from 'react-hook-form'
import StepControl from '../../buttons/StepControl'
import './style.scss'
import { useContext } from 'react'
import { FormStepsContext } from '@/app/contexts/FormStepsContexts'

function FormStepControl() {
	const { isValid } = useFormState()

	const { isFirstStep, isLastStep, backStep, nextStep } =
		useContext(FormStepsContext)

	return (
		<div className="container-step-control">
			<div>
				{!isFirstStep && (
					<StepControl
						title="Go Back"
						variant="secondary"
						isDisabled={!isValid}
						handleStepControl={backStep}
					/>
				)}
			</div>

			<div>
				{!isLastStep && (
					<StepControl
						title="Next Step"
						variant="primary"
						isDisabled={!isValid}
						handleStepControl={nextStep}
					/>
				)}
				{isLastStep && <button type="submit">Submit!</button>}
			</div>
		</div>
	)
}

export default FormStepControl
