import supabase from '@/lib/supabaseClient';
import dayjs from 'dayjs';

const initialData: ExchangeData[] = [
  {
    result: 1,
    cur_unit: 'USD',
    ttb: '1,200.50',
    tts: '1,205.50',
    deal_bas_r: '1,203.00',
    bkpr: '1,200',
    yy_efee_r: '1.00',
    ten_dd_efee_r: '0.50',
    kftc_bkpr: '1,201.00',
    kftc_deal_bas_r: '1,203.00',
    cur_nm: 'US Dollar',
  },
  {
    result: 1,
    cur_unit: 'KRW',
    ttb: '1.00',
    tts: '1.00',
    deal_bas_r: '1.00',
    bkpr: '1',
    yy_efee_r: '0.00',
    ten_dd_efee_r: '0.00',
    kftc_bkpr: '1.00',
    kftc_deal_bas_r: '1.00',
    cur_nm: 'Korean Won',
  },
  {
    result: 1,
    cur_unit: 'JPY(100)',
    ttb: '900.50',
    tts: '905.50',
    deal_bas_r: '903.00',
    bkpr: '900',
    yy_efee_r: '1.00',
    ten_dd_efee_r: '0.50',
    kftc_bkpr: '901.00',
    kftc_deal_bas_r: '903.00',
    cur_nm: 'Japanese Yen',
  },
  {
    result: 1,
    cur_unit: 'EUR',
    ttb: '1,300.00',
    tts: '1,305.00',
    deal_bas_r: '1,302.50',
    bkpr: '1,300',
    yy_efee_r: '1.50',
    ten_dd_efee_r: '0.70',
    kftc_bkpr: '1,301.00',
    kftc_deal_bas_r: '1,302.50',
    cur_nm: 'Euro',
  },
  {
    result: 1,
    cur_unit: 'CNH',
    ttb: '190.50',
    tts: '195.50',
    deal_bas_r: '193.00',
    bkpr: '190',
    yy_efee_r: '0.50',
    ten_dd_efee_r: '0.20',
    kftc_bkpr: '191.00',
    kftc_deal_bas_r: '193.00',
    cur_nm: 'Chinese Yuan Offshore',
  },
];

export async function GET() {
  try {
    const today = dayjs().format('YYYYMMDD');
    // const response = await fetch(
    //   `https://www.koreaexim.go.kr/site/program/financial/exchangeJSON?authkey=${process.env.NEXT_PUBLIC_KOREA_EXIM_API_KEY}&searchdate=${today}&data=AP01`,
    // );

    // const data: ExchangeData[] = await response.json();
    const data: ExchangeData[] = initialData;
    data.forEach(async (d) => {
      const rate = Number(d.deal_bas_r.replaceAll(',', ''));
      if (d.cur_unit === 'USD') {
        await supabase
          .from('exchange-rate')
          .update({ exchange_rate: rate })
          .eq('locale', 'en');
      } else if (d.cur_unit === 'KRW') {
        await supabase
          .from('exchange-rate')
          .update({ exchange_rate: rate })
          .eq('locale', 'ko');
      } else if (d.cur_unit === 'JPY(100)') {
        await supabase
          .from('exchange-rate')
          .update({ exchange_rate: rate })
          .eq('locale', 'ja');
      } else if (d.cur_unit === 'EUR') {
        await supabase
          .from('exchange-rate')
          .update({ exchange_rate: rate })
          .eq('locale', 'fr');
      } else if (d.cur_unit === 'CNH') {
        await supabase
          .from('exchange-rate')
          .update({ exchange_rate: rate })
          .eq('locale', 'zh');
      }
    });
  } catch (error) {
    console.error('Exchange API Error', error);
  } finally {
    const { data: exchangeRate, error } = await supabase
      .from('exchange-rate')
      .select('locale, exchange_rate');
    return Response.json(exchangeRate);
  }
}

type ExchangeData = {
  result: number;
  cur_unit: string;
  ttb: string;
  tts: string;
  deal_bas_r: string;
  bkpr: string;
  yy_efee_r: string;
  ten_dd_efee_r: string;
  kftc_bkpr: string;
  kftc_deal_bas_r: string;
  cur_nm: string;
};

export const dynamic = 'force-dynamic';
