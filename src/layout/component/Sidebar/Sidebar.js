import config from '~/config';
import styles from './Sidebar.module.scss';
import className from 'classnames/bind';
import Menu, { MenuItem } from './Menu';
import {
  HomeIcon,
  UserGroupIcon,
  LiveIcon,
  HomeActiveIcon,
  UserGroupActiveIcon,
  LiveActiveIcon,
} from '~/components/Icons';
import SuggestAccount from '~/components/SuggestAccount';

const cx = className.bind(styles);
function Sidebar() {
  return (
    <aside className={cx('wrapper')}>
      <Menu>
        <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
        <MenuItem
          title="Following"
          to={config.routes.following}
          icon={<UserGroupIcon />}
          activeIcon={<UserGroupActiveIcon />}
        />
        <MenuItem title="Live" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
      </Menu>

      <SuggestAccount label="Suggested accounts" />
      <SuggestAccount label="For accounts" />
    </aside>
  );
}

export default Sidebar;
