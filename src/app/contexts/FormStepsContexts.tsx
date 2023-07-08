import React, { createContext, useState } from 'react'
import PersonalInfo from '../steps/Step-1/PersonalInfo'
import SelectYourPlan from '../steps/Step-2/SelectYourPlan'
import PickAddons from '../steps/Step-3/PickAddons'
import FinishingUp from '../steps/Step-4/FinishingUp'
import { nanoid } from 'nanoid'

type FormStepsContextProps = {
	currentStepIndex: number
	nextStep: () => void
	backStep: () => void
	goToStep: (index: number) => void
	isFirstStep: boolean
	isLastStep: boolean
	steps: React.JSX.Element[]
}

export const FormStepsContext = createContext({} as FormStepsContextProps)

export const FormStepsContextProvider = ({
	children,
}: {
	children: React.ReactNode
}) => {
	const [currentStepIndex, setCurrentStepIndex] = useState<number>(0)

	const steps = [
		<PersonalInfo key={nanoid()} />,
		<SelectYourPlan key={nanoid()} />,
		<PickAddons key={nanoid()} />,
		<FinishingUp key={nanoid()} />,
	]

	function nextStep() {
		setCurrentStepIndex((prev) => {
			if (prev >= steps.length - 1) return prev
			return prev + 1
		})
	}

	function backStep() {
		setCurrentStepIndex((prev) => {
			if (prev <= 0) return prev
			return prev - 1
		})
	}

	function goToStep(index: number) {
		setCurrentStepIndex(index)
	}

	return (
		<FormStepsContext.Provider
			value={{
				currentStepIndex,
				nextStep,
				backStep,
				goToStep,
				isFirstStep: currentStepIndex === 0,
				isLastStep: currentStepIndex === steps.length - 1,
				steps,
			}}
		>
			{children}
		</FormStepsContext.Provider>
	)
}
