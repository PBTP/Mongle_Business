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
      <LabelForm className={styles.SignupFormWrapper}>
        <LabelForm.Title title="이메일">
          <LabelForm.Label require />
        </LabelForm.Title>
        <LabelForm.Content className={styles.SignupFormInputWrapper}>
          <input
            className={styles.SignupFormInput}
            type="email"
            placeholder="mongle@mongle.com"
            name="email"
          />
        </LabelForm.Content>
      </LabelForm>

      <LabelForm className={styles.SignupFormWrapper}>
        <LabelForm.Title title="비밀번호">
          <LabelForm.Label require />
        </LabelForm.Title>
        <LabelForm.Content className={styles.SignupFormInputWrapper}>
          <input
            className={styles.SignupFormInput}
            type="password"
            placeholder="비밀번호 조건"
            name="password"
          />
        </LabelForm.Content>
        <LabelForm.Description>
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
        </LabelForm.Description>
      </LabelForm>

      <LabelForm className={styles.SignupFormWrapper}>
        <LabelForm.Title title="업체명">
          <LabelForm.Label require />
        </LabelForm.Title>
        <LabelForm.Content className={styles.SignupFormInputWrapper}>
          <input
            className={styles.SignupFormInput}
            placeholder="몽글몽글 2호점"
          />
        </LabelForm.Content>
        <LabelForm.Description>
          (직영 또는 가맹점이라면) 몇호점까지 입력해주세요.
        </LabelForm.Description>
      </LabelForm>

      <LabelForm className={styles.SignupFormWrapper}>
        <LabelForm.Title title="업체 연락처">
          <LabelForm.Label require />
        </LabelForm.Title>
        <LabelForm.Content className={styles.SignupFormInputWrapper}>
          <input
            className={styles.SignupFormInput}
            type="tell"
            placeholder="010-0000-0000"
          />
        </LabelForm.Content>
        <LabelForm.Description>
          <div className={styles.SignupFormDescriptionWrapper}>
            <CheckBox
              width={20}
              height={20}
              isSelected={signupInfo.defaultPhone}
            />
            <span>기본 연락처와 동일</span>
          </div>
        </LabelForm.Description>
      </LabelForm>

      <div className={styles.SignupFormWrapper}>
        <LabelForm>
          <LabelForm.Title title="활동지역">
            <LabelForm.Label require />
          </LabelForm.Title>
        </LabelForm>
        <ContentField
          className={styles.SignupFormInputWrapper}
          backgroundColor="White"
          border="Border"
        >
          <input className={styles.SignupFormInput} placeholder="지역 선택" />
        </ContentField>
      </div>

      <LabelForm className={styles.SignupFormWrapper}>
        <LabelForm.Title title="SNS 주소" />
        <LabelForm.Content className={styles.SignupFormInputWrapper}>
          <input className={styles.SignupFormInput} placeholder="업체명 입력" />
        </LabelForm.Content>
      </LabelForm>

      <div className={styles.SignupFormWrapper}>
        <LabelForm>
          <LabelForm.Title title="현재 이용 중인 예약 플랫폼" />
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
