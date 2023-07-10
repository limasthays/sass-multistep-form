import Image from 'next/image'
import ThankYouIcon from '../../assets/images/icon-thank-you.svg'
import './style.scss'

function ThankUser() {
	return (
		<>
			<div className="finish-form">
				<Image src={ThankYouIcon} alt="Checkmark icon" width="56" />

				<div>
					<h2>Thank you!</h2>

					<p>
						Thanks for confirming your subscription! We hope you have fun using
						our platform. If you ever need support, please feel free to email us
						at support@loremgaming.com.
					</p>
				</div>
			</div>
		</>
	)
}

export default ThankUser
