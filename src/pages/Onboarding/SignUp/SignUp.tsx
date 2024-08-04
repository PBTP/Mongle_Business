import SignupForm from './SignupForm';
import SignUpCertification from './SignUpCertification/SignUpCertification';
import { useState } from 'react';
import CheckCertification from './SignUpCertification/CheckCertification';
import { useNavigate } from 'react-router';
import { useSearchParams } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [step, setStep] = useState<'certification' | 'check' | 'signup'>('certification');

  return (
    <>
      {step === 'certification' && <SignUpCertification onNextStep={() => setStep('check')} />}
      {step === 'check' && <CheckCertification onNextStep={() => setStep('signup')} />}
      {step === 'signup' && <SignupForm />}
    </>
  );
};

export default SignUp;
