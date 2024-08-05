import Button from '@/components/common/Button/Button';
import ContentField from '@/components/common/ContentField/ContentField';
import React, { useState } from 'react';
import styles from './SignUp.module.scss';
import SignupForm from './SignupForm';
import useTimer from '@/hooks/useTimer';

const CERTIFICATION_MINUTE = 5;
const SignUp = () => {
  const [phone, setPhone] = useState('');
  const [step, setStep] = useState<'step1' | 'step2'>('step2');
  const { time, timeOut, resetTimer } = useTimer(CERTIFICATION_MINUTE);

  //서버로 인증번호 요청 완료됐을때 true로 바꿔줘야함
  const onRequestCertificationNumber = true;

  return (
    <>
      {step === 'step1' && (
        <div>
          {onRequestCertificationNumber && (
            <>
              <div className={styles.SignupPhoneHeader}>인증번호</div>
              <ContentField
                className={styles.SignupPhoneInputWrapper}
                backgroundColor="White"
                border="Border"
              >
                <input
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="인증번호"
                  type="number"
                  className={styles.Content}
                />
                {onRequestCertificationNumber && (
                  <span className={styles.SubContent}>time</span>
                )}
              </ContentField>
            </>
          )}

          <div className={styles.SignupPhoneHeader}>연락처</div>
          <ContentField
            className={styles.SignupPhoneInputWrapper}
            backgroundColor="White"
            border="Border"
          >
            <input
              onChange={(e) => setPhone(e.target.value)}
              placeholder="010-0000-0000"
              type="number"
              className={styles.Content}
            />
            {onRequestCertificationNumber && (
              <span className={styles.SubContent} onClick={resetTimer}>
                재요청
              </span>
            )}
          </ContentField>
          <Button className={styles.CertificationButton} buttonType="Primary">
            인증번호 {onRequestCertificationNumber ? '확인' : '전송'}
          </Button>
          <div className={styles.CertificationDescription}>
            <div>인증번호 발송에는 시간이 소요됩니다.</div>
            <div>
              인증번호는 문자메시지로 발송되며, 수신하지 못했다면 차단된
              메시지를 확인해주세요.
            </div>
          </div>
        </div>
      )}
      {step === 'step2' && <SignupForm />}
    </>
  );
};

export default SignUp;
