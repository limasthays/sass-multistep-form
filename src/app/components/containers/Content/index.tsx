import { ReactNode } from 'react'
import './style.scss'

function ContentContainer({ children }: { children: ReactNode }) {
	return <section className="main-content-container">{children}</section>
}

export default ContentContainer
