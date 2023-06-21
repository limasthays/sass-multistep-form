import './style.scss'

type StepButtonProps = {
	step: number
	handleClick: () => void
	isCurrentStep: boolean
}

function StepButton({ step, handleClick, isCurrentStep }: StepButtonProps) {
	return (
		<button
			type="button"
			onClick={handleClick}
			className={`step-button ${isCurrentStep ? 'step-active' : ''}`}
		>
			{step}
		</button>
	)
}

export default StepButton
