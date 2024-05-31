import classNames from 'classnames/bind';
import styles from './SuggestAccount.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('account-item')}>
      <img
        className={cx('avatar')}
        src="https://static-images.vnncdn.net/files/publish/2022/9/3/bien-vo-cuc-thai-binh-344.jpg"
        alt="avatar"
      />
      <div className={cx('item-info')}>
        <p className={cx('nickname')}>
          <strong>abc</strong>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </p>
        <p className={cx('name')}>abc</p>
      </div>
    </div>
  );
}

export default AccountItem;
