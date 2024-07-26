import ContentField from '@/components/common/ContentField/ContentField';
import CheckIcon from '@/icons/icon/CheckIcon';
import React, { ChangeEvent, useState } from 'react';
import styles from './SignupForm.module.scss';
import LabelForm from '@/components/common/LabelForm/LabelForm';
import CheckBox from '@/components/common/Checkbox/CheckBox';
import Button from '@/components/common/Button/Button';

const platformList = [
  '네이버 블로그',
  '네이버 카페',
  '인스타그램 DM',
  '카카오톡',
  '구글 폼',
];

const SignupForm = () => {
  const [signupInfo, setSignupInfo] = useState({
    email: '',
    password: '',
    platformName: '',
    phoneNumber: '',
    defaultPhone: false,
    location: '',
    sns: '',
  });

  const [selectedPlatformList, setSelectedPlatformList] = useState<string[]>(
    []
  );

  const handleSignupInfo = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setSignupInfo((prevSignupInfo) => ({
      ...prevSignupInfo,
      [name]: value,
    }));
  };

  const handleSelectedPlatformList = (platform: string) => {
    if (selectedPlatformList.includes(platform)) {
      setSelectedPlatformList(
        selectedPlatformList.filter((item) => item !== platform)
      );
      return;
    }
    setSelectedPlatformList([...selectedPlatformList, platform]);
  };

  return (
    <>
      <div className={styles.SignupFormWrapper}>
        <LabelForm>
          <LabelForm.HeaderTitle title="이메일">
            <LabelForm.HeaderLabel require />
          </LabelForm.HeaderTitle>
        </LabelForm>
        <ContentField
          className={styles.SignupFormInputWrapper}
          backgroundColor="White"
          border="Border"
        >
          <input
            className={styles.SignupFormInput}
            type="email"
            placeholder="mongle@mongle.com"
          />
        </ContentField>
      </div>
      <div className={styles.SignupFormWrapper}>
        <LabelForm>
          <LabelForm.HeaderTitle title="비밀번호">
            <LabelForm.HeaderLabel require />
          </LabelForm.HeaderTitle>
        </LabelForm>
        <ContentField
          className={styles.SignupFormInputWrapper}
          backgroundColor="White"
          border="Border"
        >
          <input
            className={styles.SignupFormInput}
            type="email"
            placeholder="비밀번호 조건"
          />
        </ContentField>
        <div className={styles.SignupFormDescriptionWrapper}>
          <div className={styles.SignupFormDescriptionLine}>
            <CheckIcon width={14} height={14} className={styles.CheckIcon} />
            <span>영문, 숫자, 특수문자 중 2가지 이상 조합</span>
          </div>
          <div className={styles.SignupFormDescriptionLine}>
            <CheckIcon width={14} height={14} className={styles.CheckIcon} />
            <span>10자리 이상</span>
          </div>
        </div>
      </div>
      <div className={styles.SignupFormWrapper}>
        <LabelForm>
          <LabelForm.HeaderTitle title="업체명">
            <LabelForm.HeaderLabel require />
          </LabelForm.HeaderTitle>
        </LabelForm>
        <ContentField
          className={styles.SignupFormInputWrapper}
          backgroundColor="White"
          border="Border"
        >
          <input
            className={styles.SignupFormInput}
            type="email"
            placeholder="몽글몽글 2호점"
          />
        </ContentField>
        <div className={styles.SignupFormDescriptionWrapper}>
          (직영 또는 가맹점이라면) 몇호점까지 입력해주세요.
        </div>
      </div>
      <div className={styles.SignupFormWrapper}>
        <LabelForm>
          <LabelForm.HeaderTitle title="업체 연락처">
            <LabelForm.HeaderLabel require />
          </LabelForm.HeaderTitle>
        </LabelForm>
        <ContentField
          className={styles.SignupFormInputWrapper}
          backgroundColor="White"
          border="Border"
        >
          <input
            className={styles.SignupFormInput}
            type="email"
            placeholder="010-0000-0000"
          />
        </ContentField>
        <div className={styles.SignupFormDescriptionWrapper}>
          <CheckBox
            width={20}
            height={20}
            isSelected={signupInfo.defaultPhone}
          />
          <span>기본 연락처와 동일</span>
        </div>
      </div>
      <div className={styles.SignupFormWrapper}>
        <LabelForm>
          <LabelForm.HeaderTitle title="활동지역">
            <LabelForm.HeaderLabel require />
          </LabelForm.HeaderTitle>
        </LabelForm>
        <ContentField
          className={styles.SignupFormInputWrapper}
          backgroundColor="White"
          border="Border"
        >
          <input
            className={styles.SignupFormInput}
            type="email"
            placeholder="지역 선택"
          />
        </ContentField>
      </div>
      <div className={styles.SignupFormWrapper}>
        <LabelForm>
          <LabelForm.HeaderTitle title="SNS 주소" />
        </LabelForm>
        <ContentField
          className={styles.SignupFormInputWrapper}
          backgroundColor="White"
          border="Border"
        >
          <input
            className={styles.SignupFormInput}
            type="email"
            placeholder="업체명 입력"
          />
        </ContentField>
      </div>
      <div className={styles.SignupFormWrapper}>
        <LabelForm>
          <LabelForm.HeaderTitle title="현재 이용 중인 예약 플랫폼" />
        </LabelForm>
        <div className={styles.SignupFormPlatformWrapper}>
          {platformList.map((platfrom, idx) => (
            <div
              key={platfrom + idx}
              onClick={() => handleSelectedPlatformList(platfrom)}
              className={styles.SignupFormPlatformField}
            >
              <CheckBox
                width={20}
                height={20}
                isSelected={selectedPlatformList.includes(platfrom)}
              />
              <div className={styles.SignupFormPlatformName}>{platfrom}</div>
            </div>
          ))}
        </div>
      </div>
      <Button className={styles.SignupButton} buttonType="Primary">
        회원가입
      </Button>
    </>
  );
};

export default SignupForm;
