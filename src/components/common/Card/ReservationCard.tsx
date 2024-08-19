import { MessageIcon, PhoneIcon } from '@/icons/icon';
import styles from './ReservationCard.module.scss'

const ReservationCard = () => {
  return (
    <div className={styles.ReservationCardWrapper}>
      <div className={styles.ReservationStatusWrapper}>
        <div className={styles.ReservationStatusLine}>
          <div className={styles.ReservationDday}>D-1</div>
          <div className={styles.ReservationStatusText}>예약 확정</div>
          <div>|</div>
          <div className={`${styles.ReservationStatusText}  ${styles.Gray}`}>결제 완료</div>
        </div>
        <div className={styles.ReservationInfo}>
          <MessageIcon width={24} height={24} />
          <PhoneIcon width={24} height={24} />
        </div>
      </div>
    </div>
  );
}

export default ReservationCard;