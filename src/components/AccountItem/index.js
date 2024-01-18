import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { Link } from 'react-router-dom';
import Image from '../Image';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
  return (
    <Link to={`/@${data.nickname}`} className={cx('wrapper')} onClick={data}>
      <Image
        className={cx('avatar')}
        src={data.avatar}
        alt={data.full_name}
        //fallback="https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/336166849_1347076489194332_6065977855998949488_n.jpg?stp=cp6_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeEvcUv3D1RYbn_HLBV5LtLHjdwtQ30a2XmN3C1DfRrZeTQa_80tcyUu6qrQU-Fm9W4H6EB3sgkCp9IYqzjxsB78&_nc_ohc=Z8m5tqa4CmkAX-FvAr6&_nc_ht=scontent.fsgn8-4.fna&oh=00_AfCdjQjMTjtDJ08s1HRKNy3v-HQoJ0YaBffyrs6hSUDTCA&oe=65A6190A"
      />
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span>{data.full_name}</span>
          {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}{' '}
        </h4>
        <span className={cx('username')}>{data.nickname}</span>
      </div>
    </Link>
  );
}

export default AccountItem;
