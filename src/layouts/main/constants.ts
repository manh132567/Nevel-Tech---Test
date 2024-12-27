import { Translate } from 'next-translate';

export const getMenu = (t: Translate) => {
  return [
    {
      title: t('menu.home'),
      link: '',
    },
    {
      title: t('menu.games'),
      link: '',
    },
    {
      title: t('menu.news'),
      link: '',
    },
    {
      title: t('menu.match'),
      link: '',
    },
    {
      title: t('menu.company'),
      link: '',
    },
    {
      title: t('menu.events'),
      link: '',
    },
    {
      title: t('menu.partners'),
      link: '',
    },
  ];
};

export const bannerDesktopList = [
  {
    title: 'Futebol Fever',
    link: '',
    imageUrl: '/images/banner-pc.webp',
  },
  {
    title: 'Futebol Fever',
    link: '',
    imageUrl: '/images/banner-pc.webp',
  },
  {
    title: 'Futebol Fever',
    link: '',
    imageUrl: '/images/banner-pc.webp',
  },
  {
    title: 'Futebol Fever',
    link: '',
    imageUrl: '/images/banner-pc.webp',
  },
  {
    title: 'Futebol Fever',
    link: '',
    imageUrl: '/images/banner-pc.webp',
  },
];

export const bannerMobileList = [
  {
    title: 'Chicky Run',
    link: '',
    imageUrl: '/images/banner-mobile.webp',
  },
  {
    title: 'Chicky Run',
    link: '',
    imageUrl: '/images/banner-mobile.webp',
  },
  {
    title: 'Chicky Run',
    link: '',
    imageUrl: '/images/banner-mobile.webp',
  },
  {
    title: 'Chicky Run',
    link: '',
    imageUrl: '/images/banner-mobile.webp',
  },
  {
    title: 'Chicky Run',
    link: '',
    imageUrl: '/images/banner-mobile.webp',
  },
];
