import { useLanguage, useTheme } from '@haneulab/react-apis'
import PrimaryLayout from 'apps/layouts/primary/PrimaryLayout'
import { type PageWithLayout } from 'apps/types/declaration'

const HomePage: PageWithLayout = () => {
    const { lang, onLanguageSwitch } = useLanguage()
    const { theme, onThemeSwitch } = useTheme()

    return <></>
}

HomePage.getLayout = (page) => {
    return <PrimaryLayout>{page}</PrimaryLayout>
}

export default HomePage
