import React, { ReactNode } from 'react';
import ContentField from '../ContentField/ContentField';
import styles from './LabelForm.module.scss';

interface LabelFormProps {
  children: ReactNode;
  className?: string;
}
const LabelForm = ({ children }: LabelFormProps) => {
  return <div>{children}</div>;
};

interface HeaderLabelProp {
  children: ReactNode;
  spaceBetween?: boolean;
  gap?: number;
  className?: string;
}
const HeaderLabel = ({ children, spaceBetween, gap }: HeaderLabelProp) => {
  return (
    <div
      style={{ gap }}
      className={`${styles.LabelFormHeaderLabel} ${spaceBetween && styles.SpaceBetween}`}
    >
      {children}
    </div>
  );
};

interface HeaderSubLabelProp {
  children: ReactNode;
}

const HeaderSubLabel = ({ children }: HeaderSubLabelProp) => {
  return <>{children}</>;
};

interface LabelFormContentProps {
  backgroundColor: 'White' | 'Gray';
  border: 'Border' | 'None';
  value?: string;
  setValue?: (args: unknown) => void;
  placeholder?: string;
  asChild?: ReactNode;
}

const LabelFormContent = ({
  backgroundColor,
  border,
  value,
  setValue,
  placeholder,
  asChild,
}: LabelFormContentProps) => {
  return asChild ? (
    asChild
  ) : (
    <ContentField backgroundColor={backgroundColor} border={border}>
      <input
        value={value}
        onChange={(e) => setValue?.(e.target.value)}
        placeholder={placeholder}
      />
    </ContentField>
  );
};

interface LabelFormDescription {
  children: string | ReactNode;
}
const LabelFormDescription = ({ children }: LabelFormDescription) => {
  return <>{children}</>;
};

LabelForm.HeaderLabel = HeaderLabel;
LabelForm.HeaderSubLabel = HeaderSubLabel;
LabelForm.Content = LabelFormContent;
LabelForm.Description = LabelFormDescription;

export default LabelForm;
