import { FormStepsContext } from '@/app/contexts/FormStepsContexts'
import { useContext } from 'react'

function StepHandler() {
	const { currentStepIndex, steps } = useContext(FormStepsContext)

	return <>{steps[currentStepIndex]}</>
}

export default StepHandler
