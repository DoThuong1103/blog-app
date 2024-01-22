import { Provider } from 'react-redux'
import { blogStore } from './store'

/* Instruments */

export const Providers = (props: React.PropsWithChildren) => {
	return <Provider store={blogStore}>{props.children}</Provider>
}
