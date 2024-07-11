import TextButton from '../shared/buttons/TextButton';
import SectionBox from './SectionBox';
import MyPageSection from './MyPageSection';
import UserInfoList from './UserInfoList';
import { User } from '@/store/userStore';
import UserProfile from './UserProfile';

type ProfileSectionProps = {
  handleProfileEdit: () => void;
  handleAccountEdit: () => void;
  user: User;
};

export default function ProfileSection({
  handleProfileEdit,
  handleAccountEdit,
  user,
}: ProfileSectionProps) {
  const { id, name, birth, nickname, profileImg } = user;

  const userInfo = [
    { label: '아이디', value: id! },
    { label: '이름', value: name! },
    { label: '생년월일', value: birth! },
  ];

  return (
    <>
      {/* 유저 프로필 설정 */}
      <MyPageSection>
        <SectionBox
          title="프로필 설정"
          description="서비스 사용시 보여지는 프로필을 생성 및 변경합니다. 프로필을 설정해보세요."
        >
          <TextButton
            size="sm"
            width="w-40"
            onClick={handleProfileEdit}
          >
            프로필 수정
          </TextButton>
        </SectionBox>
        {/* 유저 프로필 정보 */}
        <UserProfile
          nickname={nickname!}
          profileImg={profileImg as string}
        />
      </MyPageSection>
      {/* 유저 계정 설정 */}
      <MyPageSection className="mt-14">
        <SectionBox
          title="계정 설정"
          description="서비스 이용시 사용하는 계정을 생성 및 변경합니다. 계정을 인증하여 다양한 서비스를 이용해보세요."
        >
          <TextButton
            size="sm"
            width="w-40"
            onClick={handleAccountEdit}
          >
            개인정보 수정
          </TextButton>
        </SectionBox>

        {/* 유저 생년월일, 이름, 아이디 */}
        <UserInfoList userInfo={userInfo} />
      </MyPageSection>
    </>
  );
}
