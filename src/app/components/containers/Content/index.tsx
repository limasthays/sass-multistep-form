import { ReactNode } from 'react'
import './style.scss'

function ContentContainer({ children }: { children: ReactNode }) {
	return <section>{children}</section>
}

export default ContentContainer
