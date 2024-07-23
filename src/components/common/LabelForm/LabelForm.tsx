import React, { Children, ReactNode } from 'react';
import ContentField from '../ContentField/ContentField';
import styles from './LabelForm.module.scss';

interface LabelFormProps {
  children: ReactNode;
  className?: string;
}
const LabelForm = ({ children }: LabelFormProps) => {
  return <div>{children}</div>;
};

interface HeaderTitleProps {
  children: ReactNode | string;
  className?: string;
}

const getChildren = (children: ReactNode, type: unknown) => {
  const childArray = Children.toArray(children);
  const filterChildArray = childArray.filter((child) => child === type);
  return filterChildArray.length > 0 ? filterChildArray : false;
};

const HeaderTitle = ({ children }: HeaderTitleProps) => {
  const subLabel = getChildren(children, HeaderSubLabelType);
  const label = getChildren(children, HeaderLabelType);
  return (
    <div className={styles.HeaderTitleWrapper}>
      <div className={styles.HeaderTitle}>
        {children}
        {label && <div>{label}</div>}
      </div>
      {subLabel && <div className={styles.HeaderSubLabel}>{subLabel}</div>}
    </div>
  );
};

interface HeaderSubLabelProps {
  children?: ReactNode;
}

const HeaderSubLabel = ({ children }: HeaderSubLabelProps) => {
  return <>{children}</>;
};

interface HeaderLabelProps {
  children?: ReactNode;
}

const HeaderLabel = ({ children }: HeaderLabelProps) => {
  return <>{children}</>;
};

const HeaderSubLabelType = (<HeaderSubLabel />).type;
const HeaderLabelType = (<HeaderLabel />).type;

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

interface LabelFormDescriptionProps {
  children: string | ReactNode;
}
const LabelFormDescription = ({ children }: LabelFormDescriptionProps) => {
  return <>{children}</>;
};

LabelForm.HeaderTitle = HeaderTitle;
LabelForm.HeaderLabel = HeaderLabel;
LabelForm.HeaderSubLabel = HeaderSubLabel;
LabelForm.Content = LabelFormContent;
LabelForm.Description = LabelFormDescription;

export default LabelForm;
