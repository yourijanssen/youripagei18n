import { languages, fallbackLng } from '../../i18n/settings'
import { useTranslation } from '../../i18n'

export async function generateStaticParams() {
	return languages.map((lng) => ({ lng }))
}

export async function generateMetadata({ params: { lng } }) {
	if (languages.indexOf(lng) < 0) lng = fallbackLng
	const { t } = await useTranslation(lng, 'services')
	return {
		title: t('Youri Janssen - Services')
	}
}

export default async function Layout({ children }) {
	return children
}
