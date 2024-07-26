import React, { Children, ReactNode } from 'react';
import styles from './LabelForm.module.scss';
import CheckIcon from '@/icons/icon/CheckIcon';

interface LabelFormProps {
  children: ReactNode;
  className?: string;
}
const LabelForm = ({ children, className }: LabelFormProps) => {
  return <div className={className}>{children}</div>;
};

interface HeaderTitleProps {
  children?: ReactNode;
  title: string;
  className?: string;
}

const getChildren = (children: ReactNode, type: unknown) => {
  const childArray = Children.toArray(children);
  const filterChildArray = childArray.filter(
    (child): child is React.ReactElement =>
      React.isValidElement(child) && child.type === type
  );
  return filterChildArray.length > 0 ? filterChildArray : false;
};

const HeaderTitle = ({ children, title, className }: HeaderTitleProps) => {
  const subLabel = getChildren(children, HeaderSubLabelType);
  const label = getChildren(children, HeaderLabelType);
  return (
    <div className={styles.HeaderTitleWrapper}>
      <div className={styles.HeaderTitleContainer}>
        <div className={`${styles.HeaderTitle} ${className}`}>{title}</div>
        {label && <>{label}</>}
      </div>
      {subLabel && <div className={styles.HeaderSubLabel}>{subLabel}</div>}
    </div>
  );
};

interface HeaderSubLabelProps {
  children?: ReactNode;
  className?: string;
}

const HeaderSubLabel = ({ children, className }: HeaderSubLabelProps) => {
  return <div className={className}>{children}</div>;
};

interface HeaderLabelProps {
  require?: boolean;
  children?: ReactNode;
  className?: string;
}

const HeaderLabel = ({ require, children, className }: HeaderLabelProps) => {
  return require ? (
    <div className={styles.HeaderLabelRequire}>
      <CheckIcon width={14} height={14} className={styles.CheckIcon} />
      <span className={styles.HeaderLabelRequireText}>필수입력</span>
    </div>
  ) : (
    <div className={className}>{children}</div>
  );
};

const HeaderSubLabelType = (<HeaderSubLabel />).type;
const HeaderLabelType = (<HeaderLabel />).type;

LabelForm.HeaderTitle = HeaderTitle;
LabelForm.HeaderLabel = HeaderLabel;
LabelForm.HeaderSubLabel = HeaderSubLabel;

export default LabelForm;
