import { useFormContext } from 'react-hook-form'
import StepControl from '../../buttons/StepControl'
import './style.scss'

type FormStepControlProps = {
	isFirstStep: boolean
	isLastStep: boolean
	nextStep: () => void
	backStep: () => void
}

function FormStepControl({
	isFirstStep,
	isLastStep,
	nextStep,
	backStep,
}: FormStepControlProps) {
	const { formState } = useFormContext()

	return (
		<div className="container-step-control">
			<div>
				{!isFirstStep && (
					<StepControl
						title="Go Back"
						variant="secondary"
						isDisabled={false}
						handleStepControl={backStep}
					/>
				)}
			</div>

			<div>
				{!isLastStep && (
					<StepControl
						title="Next Step"
						variant="primary"
						isDisabled={!formState.isValid}
						handleStepControl={nextStep}
					/>
				)}
			</div>
		</div>
	)
}

export default FormStepControl
