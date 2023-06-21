import './style.scss'

type StepControlProps = {
	title: string
	handleStepControl: () => void
	isDisabled: boolean
	variant: 'primary' | 'secondary'
}

function StepControl({
	title,
	handleStepControl,
	isDisabled,
	variant,
}: StepControlProps) {
	return (
		<button
			type="button"
			onClick={handleStepControl}
			className={`btn-step-control ${variant} ${
				isDisabled ? 'disabled-state' : ''
			}`}
			disabled={isDisabled}
		>
			{title}
		</button>
	)
}

export default StepControl
