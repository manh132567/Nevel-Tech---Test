import clsx from 'clsx';
import useTranslation from 'next-translate/useTranslation';
import React, { useMemo, useState } from 'react';

import { Icon, Typography } from '@/components';
import { useWindowResize } from '@/hooks';

import { getMenu } from '../constants';

export const Header = () => {
  const { t } = useTranslation('common');
  const { isMobileDevice } = useWindowResize();
  const menu = useMemo(() => getMenu(t), []);
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  return (
    <div className="public-layout-header">
      <div className="header-inner">
        <Icon
          name="logo"
          width={isMobileDevice ? 53 : 110}
          height={isMobileDevice ? 31 : 64}
          className={clsx(isMobileDevice && 'mobile-logo')}
        />
        <ul className={clsx('menu-bar', { '!hidden': isMobileDevice })}>
          {menu.map((item, index) => {
            return (
              <li key={index} className="menu-item">
                <Typography size="medium">{item.title}</Typography>
              </li>
            );
          })}
        </ul>
        <Icon
          name="toggle-menu"
          color="fill-white"
          width={42}
          height={42}
          className={clsx({ hidden: !isMobileDevice })}
          onClick={() => setToggleMenu(!toggleMenu)}
        />
        <ul className={clsx('menu-bar-mobile', toggleMenu && 'opened-mobile-menu', { '!hidden': !isMobileDevice })}>
          {menu.map((item, index) => {
            return (
              <li key={index} className="menu-item" onClick={() => setToggleMenu(!toggleMenu)}>
                <Typography size="normal">{item.title}</Typography>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
