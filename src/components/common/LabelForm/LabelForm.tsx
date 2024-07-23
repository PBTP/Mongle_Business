import React, { Children, ReactNode } from 'react';
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
        <div>{children}</div>
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

LabelForm.HeaderTitle = HeaderTitle;
LabelForm.HeaderLabel = HeaderLabel;
LabelForm.HeaderSubLabel = HeaderSubLabel;

export default LabelForm;
