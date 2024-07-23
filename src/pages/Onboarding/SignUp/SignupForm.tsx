import ContentField from '@/components/common/ContentField/ContentField';
import CheckIcon from '@/icons/icon/CheckIcon';
import React from 'react';
import styles from './SignupForm.module.scss';

const SignupForm = () => {
  return (
    <>
      <div className={styles.SignupFormWrapper}>
        <div className={styles.SignupFormHeader}>
          <div>이메일</div>
          <div className={styles.SignupFormSubHeader}>
            <CheckIcon width={14} height={14} className={styles.CheckIcon} />
            <span className={styles.SignupFormSubHeaderText}>필수입력</span>
          </div>
        </div>
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
        <div className={styles.SignupFormHeader}>
          <div>비밀번호</div>
          <div className={styles.SignupFormSubHeader}>
            <CheckIcon width={14} height={14} className={styles.CheckIcon} />
            <span className={styles.SignupFormSubHeaderText}>필수입력</span>
          </div>
        </div>
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
      </div>
      <div className={styles.SignupFormWrapper}>
        <div className={styles.SignupFormHeader}>
          <div>업체명</div>
          <div className={styles.SignupFormSubHeader}>
            <CheckIcon width={14} height={14} className={styles.CheckIcon} />
            <span className={styles.SignupFormSubHeaderText}>필수입력</span>
          </div>
        </div>
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
      </div>
      <div className={styles.SignupFormWrapper}>
        <div className={styles.SignupFormHeader}>
          <div>업체 연락처</div>
          <div className={styles.SignupFormSubHeader}>
            <CheckIcon width={14} height={14} className={styles.CheckIcon} />
            <span className={styles.SignupFormSubHeaderText}>필수입력</span>
          </div>
        </div>
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
      </div>
      <div className={styles.SignupFormWrapper}>
        <div className={styles.SignupFormHeader}>
          <div>활동지역</div>
          <div className={styles.SignupFormSubHeader}>
            <CheckIcon width={14} height={14} className={styles.CheckIcon} />
            <span className={styles.SignupFormSubHeaderText}>필수입력</span>
          </div>
        </div>
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
        <div className={styles.SignupFormHeader}>
          <div>SNS 주소</div>
          {/* <div className={styles.SignupFormSubHeader}>
            <CheckIcon width={14} height={14} className={styles.CheckIcon} />
            <span className={styles.SignupFormSubHeaderText}>필수입력</span>
          </div> */}
        </div>
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
    </>
  );
};

export default SignupForm;
