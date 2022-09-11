import { useTranslation } from 'react-i18next';

function Home() {
  const { t } = useTranslation(['common']);

  return (
    <>
      <h1>Hello World</h1>
      <h2>i18n: {t('description')}</h2>
    </>
  );
}

export default Home;
