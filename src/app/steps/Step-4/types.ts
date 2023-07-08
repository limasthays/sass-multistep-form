export type ResumeSelectedPlan = {
	plan_billing: 'monthly' | 'yearly'
	plan: {
		option: string
		price: any
	}
	addons: {
		option: string
		price: any
	}[]
}
