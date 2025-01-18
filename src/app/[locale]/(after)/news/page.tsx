import NewsHeading from '@/components/news/NewsHeading';
import NewsSection from '@/components/news/NewsSection';
import RecentNews from '@/components/news/RecentNews';
import RelatedNewsToStock from '@/components/news/RelatedNewsToStock';
import TodayPopularNews from '@/components/news/TodayPopularNews';
import IntlClientProvider from '@/components/shared/IntlClientProvider';
import SkeletonRelatedNewsToStock from '@/components/skeleton/news/SkeletonRelatedNewsToStock';
import SkeletonTodayPopularNews from '@/components/skeleton/news/SkeletonTodayPopularNews';
import { getTranslations } from 'next-intl/server';
import { Suspense } from 'react';

export const experimental_ppr = true;

export async function generateStaticParams() {
  const locales = ['en', 'fr', 'ja', 'ko', 'zh'];

  return locales.map((locale) => ({
    locale,
  }));
}

export default async function News() {
  const t = await getTranslations('News');
  return (
    <main className="flex items-center justify-center flex-col gap-12">
      {/* 오늘 인기있는 뉴스 */}
      <NewsSection>
        <NewsHeading>{t('popular_news_today')}</NewsHeading>
        <Suspense fallback={<SkeletonTodayPopularNews />}>
          <TodayPopularNews />
        </Suspense>
      </NewsSection>
      {/* 관심종목과 관련된 뉴스 */}
      <NewsSection>
        <NewsHeading>{t('news_about_interest_stocks')}</NewsHeading>
        <Suspense fallback={<SkeletonRelatedNewsToStock />}>
          <RelatedNewsToStock />
        </Suspense>
      </NewsSection>
      {/* 최신 뉴스 */}
      <NewsSection>
        <NewsHeading>{t('latest_news')}</NewsHeading>
        <IntlClientProvider>
          <RecentNews />
        </IntlClientProvider>
      </NewsSection>
    </main>
  );
}
