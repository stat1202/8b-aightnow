import supabase from '@/lib/supabaseClient';
import { UUID } from 'crypto';

// 관심종목 업데이트
export const updateInterestStocks = async (
  userId: UUID,
  interestStock: string,
) => {
  try {
    // interestStock에서 # 제거하고 stock 테이블에서 일치하는 stock_id 가져오기
    const stockNames = interestStock
      .split('#')
      .map((name) => name.trim()) // 주식명 양쪽의 공백 제거
      .filter((name) => name !== '');

    // stockNames 배열을 사용하여 한 번의 쿼리로 stock_id를 가져오기
    const { data: stockData, error: stockError } = await supabase
      .from('stock')
      .select('stock_id, stock_name')
      .in('stock_name', stockNames);

    if (stockError) {
      throw stockError;
    }

    // stock테이블에서 가져온 stock_id값 추출
    const stockIds = stockData.map((stock) => stock.stock_id);

    // 기존 관심종목 삭제
    const { error: deleteError } = await supabase
      .from('interest_stock')
      .delete()
      .eq('user_id', userId);

    if (deleteError) {
      throw deleteError;
    }

    // 관심종목 삽입
    const { data: interesData, error: insertError } = await supabase
      .from('interest_stock')
      .insert(
        stockIds.map((stockId) => ({
          user_id: userId,
          stock_id: stockId,
        })),
      );
    if (insertError) {
      throw insertError;
    }

    return interesData;
  } catch (error) {
    throw error;
  }
};

// 사용자 존재 여부 확인 함수
export async function getUserByEmail(email: string) {
  const { data: existingUser, error } = await supabase
    .from('user')
    .select('*')
    .eq('email', email)
    .single();
  if (error) {
    throw error;
  }
  return existingUser;
}

// userId로 이메일 조회 함수
export async function getEmailByUserId(userId: string) {
  const { data: userData, error: userError }: any = await supabase
    .from('user')
    .select('email')
    .eq('user_id', userId)
    .single();
  if (userError) {
    throw userError;
  }
  return userData?.email || null;
}

// 사용자 이미 소셜로 회원가입한 유저인지 체크 함수
export async function checkSocialUser(
  email: string,
  provider: string,
) {
  const { data: socialUser, error } = await supabase
    .from('user')
    .select('*')
    .eq('email', email)
    .eq('provider_account_id', provider)
    .single();
  if (error) {
    throw error;
  }
  return socialUser;
}

// 이메일 중복 체크 함수
export async function checkEmailExists(
  email: string,
): Promise<boolean> {
  const { data, error } = await supabase
    .from('user')
    .select('email')
    .eq('email', email);
  if (error) {
    throw error;
  }
  return data.length > 0;
}

// 회원탈퇴한 유저 이메일 체크 함수
export async function checkEmailInDeletedUsers(email: string) {
  const { data, error } = await supabase
    .from('deleted_users')
    .select('id')
    .eq('email', email);

  if (error) {
    return error;
  }
  return data.length > 0;
}

// 아이디 중복 체크 함수
export async function checkUserIdExists(userId: string) {
  const { data, error } = await supabase
    .from('user')
    .select('user_id')
    .eq('user_id', userId);

  if (error) {
    throw error;
  }

  return data.length > 0;
}

// 이전 프로필 이미지 삭제 함수
export const deleteProfileImage = async (profileImage: string) => {
  const { error } = await supabase.storage
    .from('8b-sf')
    .remove([`profile_img/${profileImage}`]);
  if (error) {
    throw new Error('프로필 이미지 삭제 오류');
  }
};

// URL에서 이미지를 다운로드하고 Blob으로 반환 함수.
export const fetchImageAsBlob = async (
  imageUrl: string,
): Promise<Blob> => {
  const response = await fetch(imageUrl);
  if (!response.ok) {
    throw new Error('이미지 다운로드 오류');
  }
  return await response.blob();
};

// 프로필 이미지 설정 함수
export async function uploadProfileImage(
  fileName: string,
  file: File,
): Promise<string> {
  const { error } = await supabase.storage
    .from('8b-sf')
    .upload(`profile_img/${fileName}`, file);

  if (error) {
    throw new Error('프로필이미지 설정 오류');
  }

  const { data: publicUrlData } = supabase.storage
    .from('8b-sf')
    .getPublicUrl(`profile_img/${fileName}`);

  if (!publicUrlData || !publicUrlData.publicUrl) {
    throw new Error('Public URL 생성 오류');
  }

  return publicUrlData.publicUrl;
}
