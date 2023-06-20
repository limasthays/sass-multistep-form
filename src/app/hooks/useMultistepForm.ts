'use client'

import { ReactNode, useState } from 'react'

export function useMultistepForm(stepsList: ReactNode[]) {
	const [currentStepIndex, setCurrentStepIndex] = useState<number>(0)

	function nextStep() {
		setCurrentStepIndex((prev) => {
			if (prev >= stepsList.length - 1) return prev
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

	return {
		currentStepIndex,
		nextStep,
		backStep,
		goToStep,
		isFirstStep: currentStepIndex === 0,
		isLastStep: currentStepIndex === stepsList.length - 1,
	}
}
