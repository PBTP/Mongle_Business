import React, { Children, ReactElement, ReactNode } from 'react';
import styles from './LabelForm.module.scss';
import CheckIcon from '@/icons/icon/CheckIcon';
import ContentField from '../ContentField/ContentField';

interface LabelFormProps {
  children: ReactNode;
  className?: string;
}
const LabelForm = ({ children, className }: LabelFormProps) => {
  return <div className={className}>{children}</div>;
};

interface TitleProps {
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

const Title = ({ children, title, className }: TitleProps) => {
  const subLabel = getChildren(children, SubLabelType);
  const label = getChildren(children, LabelType);
  return (
    <div className={styles.TitleWrapper}>
      <div className={styles.TitleContainer}>
        <div className={`${styles.Title} ${className}`}>{title}</div>
        {label && <>{label}</>}
      </div>
      {subLabel && <div className={styles.SubLabel}>{subLabel}</div>}
    </div>
  );
};

interface SubLabelProps {
  children?: ReactNode;
  className?: string;
}

const SubLabel = ({ children, className }: SubLabelProps) => {
  return <div className={className}>{children}</div>;
};

interface LabelProps {
  require?: boolean;
  children?: ReactNode;
  className?: string;
}

const Label = ({ require, children, className }: LabelProps) => {
  return require ? (
    <div className={styles.LabelRequire}>
      <CheckIcon width={14} height={14} className={styles.CheckIcon} />
      <span className={styles.LabelRequireText}>필수입력</span>
    </div>
  ) : (
    <div className={className}>{children}</div>
  );
};

interface ContentProps {
  children: ReactElement<HTMLInputElement>;
  backgroundColor?: 'Gray' | 'White';
  border?: 'Border' | 'None';
  className?: string;
  onClick?: () => void;
}
const Content = ({
  children,
  backgroundColor = 'White',
  border = 'Border',
  onClick,
  className,
}: ContentProps) => {
  return (
    <ContentField
      onClick={onClick}
      className={className}
      backgroundColor={backgroundColor}
      border={border}
    >
      {children}
    </ContentField>
  );
};

interface DescriptionProps {
  children: ReactNode;
}
const Description = ({ children }: DescriptionProps) => {
  return <div className={styles.Description}>{children}</div>;
};

const SubLabelType = (<SubLabel />).type;
const LabelType = (<Label />).type;

LabelForm.Title = Title;
LabelForm.Label = Label;
LabelForm.SubLabel = SubLabel;
LabelForm.Content = Content;
LabelForm.Description = Description;

export default LabelForm;
