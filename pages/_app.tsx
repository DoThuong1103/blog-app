import { Providers } from '@/libs/redux/providers'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Providers>
			<div className="bg-[#f4f4f4] min-h-screen">
				<div className="mx-auto">
					<Component {...pageProps} />
				</div>
			</div>
		</Providers>
	)
}
