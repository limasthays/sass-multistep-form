import Image from 'next/image'
import ThankYouIcon from '../../assets/images/icon-thank-you.svg'

function ThankUser() {
	return (
		<>
			<div>
				<Image src={ThankYouIcon} alt="Checkmark icon" />

				<h2>Thank you!</h2>

				<p>
					Thanks for confirming your subscription! We hope you have fun using
					our platform. If you ever need support, please feel free to email us
					at support@loremgaming.com.
				</p>
			</div>
		</>
	)
}

export default ThankUser
