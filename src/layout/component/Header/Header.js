import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleQuestion,
  faCoins,
  faEarthAsia,
  faEllipsisVertical,
  faGear,
  faKeyboard,
  faSignOut,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import { Link } from 'react-router-dom';

import classNames from 'classnames/bind';
import { InboxIcon, MessageIcon } from '~/components/Icons/Icons';

import styles from './Header.module.scss';
import Button from '~/components/Button/Button';
import images from '~/assets/Images';
import Menu from '~/components/Popper/Menu';
import 'tippy.js/dist/tippy.css';
import Image from '~/components/Image/Image';
import Search from '../Search/Search';
import config from '~/config';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: 'English',
    children: {
      title: 'Language',
      data: [
        {
          type: 'language',
          code: 'en',
          title: 'English',
        },
        {
          type: 'language',
          code: 'vi',
          title: 'Tiếng Việt',
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: 'Feedback and help',
    to: './feedback',
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: 'Keyboard Shortcuts',
  },
];

function Header() {
  const currentUser = true;

  const handleMenuChange = (MenuItem) => {
    switch (MenuItem.type) {
      case 'language':
        break;
      default:
    }
  };

  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: 'View Profile',
      to: './@hoa',
    },
    {
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: 'Get Coins',
      to: './coin',
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: 'Setting',
      to: './setting',
    },
    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faSignOut} />,
      title: 'Log Out',
      to: './logout',
      separate: true,
    },
  ];
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <Link to={config.routes.home} className={cx('logo')}>
          <img src={images.logo} alt="tiktok" />
        </Link>
        <Search />
        {/* {SEARCH} */}
        <div className={cx('actions')}>
          {currentUser ? (
            <>
              <Tippy delay={[0, 200]} content="Upload videos" placement="bottom">
                <button className={cx('action-btn')}>
                  <MessageIcon />
                </button>
              </Tippy>
              <Tippy delay={[0, 200]} content="Inbox" placement="bottom">
                <button className={cx('action-btn')}>
                  <InboxIcon />
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button text>Upload</Button>
              <Button primary>Log in</Button>
            </>
          )}
          <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
            {currentUser ? (
              <Image
                src="https://static-images.vnncdn.net/files/publish/2022/9/3/bien-vo-cuc-thai-binh-344.jpg"
                className={cx('user-avt')}
                alt="loging"
                //fallback="https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/336166849_1347076489194332_6065977855998949488_n.jpg?stp=cp6_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeEvcUv3D1RYbn_HLBV5LtLHjdwtQ30a2XmN3C1DfRrZeTQa_80tcyUu6qrQU-Fm9W4H6EB3sgkCp9IYqzjxsB78&_nc_ohc=Z8m5tqa4CmkAX-FvAr6&_nc_ht=scontent.fsgn8-4.fna&oh=00_AfCdjQjMTjtDJ08s1HRKNy3v-HQoJ0YaBffyrs6hSUDTCA&oe=65A6190A"
              />
            ) : (
              <button className={cx('menu-btn')}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
