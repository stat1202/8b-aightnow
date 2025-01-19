import NotFind from '../search/NotFind';
import FavoriteItem from './FavoriteItem';
import { UUID } from 'crypto';
import { businessAPI } from '@/service/apiInstance';
import { Stock } from '@/types/stock';
import { getTranslations } from 'next-intl/server';

export default async function FavoriteMain({
  userId,
}: {
  userId: UUID;
}) {
  const t = await getTranslations();
  const { getInterestStock } = businessAPI;
  const res = await getInterestStock({
    userId: userId as UUID,
    page: 1,
    size: 4,
    isServer: true,
  });
  const stocks = res.map(({ stock }: { stock: Stock }) => stock);

  return (
    <>
      <div className="flex flex-col">
        <div className="h4 font-bold text-primary-900">
          {t('Home.interest')}
        </div>
        <div className="flex flex-col items-center bg-[#FFFFFF] rounded-2xl mt-6 min-w-[590px] min-h-[374px] ">
          {stocks.length ? (
            <div className="mt-8">
              <FavoriteItem stocks={stocks} />
            </div>
          ) : (
            <div className="flex flex-col pt-20 mt-8">
              <NotFind type="stock" />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
