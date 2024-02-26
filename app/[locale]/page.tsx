import ExampleClientComponent from "@/components/ExampleClientComponent";
import ThemeSwitcher from "@/components/ui/button/ThemeSwitcher";
import initTranslations from "../i18n";
import TranslationsProvider from "@/components/TranslationsProvider";
import LanguageChanger from "@/components/LanguageChanger";
import { useServerClientCheck } from "@/utils";
const i18nNamespaces = ["home"];
export default async function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <main className="flex min-h-screen  flex-col items-center justify-between p-24">
        <ThemeSwitcher />
        <h1>{t("header")}</h1>
        <div></div>
        <ExampleClientComponent />
        <LanguageChanger />
      </main>
    </TranslationsProvider>
  );
}
