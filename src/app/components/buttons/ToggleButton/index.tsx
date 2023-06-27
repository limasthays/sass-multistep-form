/* eslint-disable react/display-name */
import React from 'react'
import './style.scss'

type ToggleButtonProps = React.ComponentPropsWithoutRef<'input'>

export const ToggleButton = React.forwardRef<
	HTMLInputElement,
	ToggleButtonProps
>((props, ref) => {
	return (
		<div className="toggle-container">
			<label className="switch">
				<input type="checkbox" {...props} ref={ref} defaultChecked={false} />
				<span className="slider round"></span>
			</label>
		</div>
	)
})
