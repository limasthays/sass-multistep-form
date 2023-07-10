import './style.scss'

type StepControlProps = React.ComponentPropsWithoutRef<'button'> & {
	title: string
	handleStepControl?: () => void
	isDisabled: boolean
	variant: 'primary' | 'secondary'
}

function StepControl({
	title,
	handleStepControl,
	isDisabled,
	variant,
	type,
}: StepControlProps) {
	return (
		<button
			type={type}
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
