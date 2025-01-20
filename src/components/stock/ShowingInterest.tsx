import { UUID } from 'crypto';
import Chart from '../shared/chart';
import SkeletonWrapper from '../skeleton/shared/SkeletonWrapper';

/**
 * - Skeleton 추가 예정
 */
export default function ShowingInterest({
  stocks,
  handleDeleteInterest,
}: {
  stocks: Array<any>;
  isLoading: boolean;
  handleDeleteInterest: (stockId: UUID) => void;
}) {
  return (
    <section className="flex flex-wrap gap-[19px]">
      {stocks.map(({ stock }, i) => (
        <Chart key={i}>
          <Chart.SpecificStockAIReport
            stock={stock}
            handleDeleteInterest={handleDeleteInterest}
          />
        </Chart>
      ))}
    </section>
  );
}
