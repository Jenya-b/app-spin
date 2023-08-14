import { path } from 'modules/router/path';
import { menuIcon } from './images';
import { INavMenu, ISocialMenu, IBasicNavMenu } from 'interfaces/menu';

export const navMenu: INavMenu[] = [
  {
    title: 'long',
    iconUrl: menuIcon.long,
    path: path.home,
  },
  {
    title: 'roulette',
    iconUrl: menuIcon.roulette,
    path: path.roulette,
  },
  {
    title: 'btc x eth',
    iconUrl: menuIcon.btnEth,
    path: path.btcEth,
  },
  {
    title: 'futures',
    iconUrl: menuIcon.futures,
    path: path.futures,
  },
];

export const footerMenu: IBasicNavMenu[] = [
  {
    title: 'termsOfService',
    path: path.info,
  },
  {
    title: 'responsibleGamingPolicy',
    path: '#',
  },
  {
    title: 'fairPlay',
    path: '#',
  },
  {
    title: 'amlPolicy',
    path: '#',
  },
  {
    title: 'contact',
    path: '#',
  },
];

export const socialMediaMenu: ISocialMenu[] = [
  {
    svg: (
      <svg
        width="22"
        height="13"
        viewBox="0 0 22 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21.1772 1.02303C21.3256 0.52858 21.1772 0.165161 20.4714 0.165161H18.1375C17.5441 0.165161 17.2707 0.479068 17.1223 0.825315C17.1223 0.825315 15.9354 3.71816 14.254 5.59726C13.71 6.14122 13.4628 6.3141 13.166 6.3141C13.0177 6.3141 12.803 6.14122 12.803 5.64677V1.02303C12.803 0.429557 12.6307 0.165161 12.1361 0.165161H8.46861C8.09785 0.165161 7.8748 0.440559 7.8748 0.70162C7.8748 1.26425 8.71533 1.39395 8.80202 2.97632V6.41329C8.80202 7.1668 8.66599 7.30349 8.36925 7.30349C7.57807 7.30349 5.65362 4.39748 4.51202 1.07254C4.2883 0.426222 4.06391 0.165161 3.46744 0.165161H1.13356C0.466738 0.165161 0.333374 0.479068 0.333374 0.825315C0.333374 1.44346 1.12473 4.50951 4.01757 8.56446C5.94635 11.3334 8.66332 12.8348 11.1359 12.8348C12.6196 12.8348 12.803 12.5014 12.803 11.9271V9.83408C12.803 9.16726 12.9435 9.03423 13.4131 9.03423C13.7595 9.03423 14.3528 9.20727 15.7376 10.5424C17.32 12.1246 17.5807 12.8348 18.4709 12.8348H20.8048C21.4716 12.8348 21.8051 12.5014 21.6127 11.8434C21.4023 11.1876 20.6468 10.2363 19.6442 9.10842C19.1003 8.46543 18.2842 7.7731 18.0372 7.42702C17.6909 6.98192 17.7898 6.78421 18.0372 6.38878C18.0372 6.38878 20.8805 2.38318 21.1772 1.0232V1.02303Z"
          fill="white"
          fillOpacity="0.25"
        />
      </svg>
    ),
    path: '#',
  },
  {
    svg: (
      <svg
        width="18"
        height="15"
        viewBox="0 0 18 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.19158 6.64734C5.84445 4.57755 8.94709 3.21302 10.4995 2.55374C14.932 0.671377 15.853 0.344391 16.4533 0.333479C16.5853 0.331219 16.8806 0.364628 17.0718 0.523059C17.2333 0.656834 17.2777 0.837546 17.2989 0.96438C17.3202 1.09121 17.3467 1.38014 17.3256 1.60591C17.0854 4.18272 16.0461 10.436 15.5174 13.322C15.2936 14.5432 14.8531 14.9527 14.4266 14.9928C13.4997 15.0799 12.7959 14.3674 11.8982 13.7665C10.4934 12.8263 9.69983 12.2411 8.33628 11.3236C6.76046 10.2634 7.782 9.68061 8.68006 8.72825C8.91508 8.47901 12.9989 4.6864 13.0779 4.34235C13.0878 4.29932 13.097 4.13893 13.0037 4.05424C12.9103 3.96954 12.7726 3.99851 12.6732 4.02154C12.5323 4.05419 10.2882 5.56864 5.94088 8.56488C5.3039 9.01148 4.72694 9.22907 4.21001 9.21767C3.64013 9.2051 2.54391 8.88868 1.72898 8.61821C0.729438 8.28647 -0.0649766 8.11108 0.00419916 7.54768C0.0402301 7.25423 0.436023 6.95411 1.19158 6.64734Z"
          fill="white"
          fillOpacity="0.25"
        />
      </svg>
    ),
    path: '#',
  },
  {
    svg: (
      <svg
        width="20"
        height="17"
        viewBox="0 0 20 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.8416 4.54163C17.8416 4.71663 17.8416 4.89163 17.8416 5.04163C17.8416 10.2166 13.8916 16.1916 6.69163 16.1916C4.46663 16.1916 2.41663 15.5416 0.666626 14.4416C0.966626 14.4666 1.29163 14.4916 1.59163 14.4916C3.41663 14.4916 5.11663 13.8666 6.46663 12.8166C4.74163 12.7916 3.29163 11.6416 2.81663 10.0916C3.06663 10.1416 3.29163 10.1666 3.56663 10.1666C3.91663 10.1666 4.26663 10.1166 4.59163 10.0166C2.79163 9.66663 1.44163 8.09163 1.44163 6.19163C1.44163 6.16663 1.44163 6.16663 1.44163 6.14163C1.96663 6.44163 2.56663 6.61663 3.21663 6.64163C2.16663 5.94163 1.46663 4.74163 1.46663 3.36663C1.46663 2.64163 1.66663 1.96663 1.99163 1.39163C3.91663 3.76663 6.81663 5.31663 10.0666 5.49163C9.99163 5.21663 9.96663 4.89163 9.96663 4.59163C9.96663 2.41663 11.7166 0.666626 13.8916 0.666626C15.0166 0.666626 16.0416 1.14163 16.7416 1.89163C17.6416 1.71663 18.4666 1.39163 19.2416 0.941626C18.9416 1.86663 18.3166 2.61663 17.5166 3.11663C18.3166 3.01663 19.0666 2.81663 19.7666 2.49163C19.2666 3.29163 18.6166 3.99163 17.8416 4.54163Z"
          fill="white"
          fillOpacity="0.25"
        />
      </svg>
    ),
    path: '#',
  },
];

export const settingTableMenu = [
  'transHistory',
  'longStats',
  'futureStats',
  'bxeStats',
  'rouletteStats',
];

export const adminMenu: INavMenu[] = [
  {
    title: 'users',
    iconUrl: menuIcon.users,
    path: path.admin,
  },
  {
    title: 'long',
    iconUrl: menuIcon.long,
    path: path.adminLong,
  },
  {
    title: 'roulette',
    iconUrl: menuIcon.roulette,
    path: path.adminRoulette,
  },
  {
    title: 'btc x eth',
    iconUrl: menuIcon.btnEth,
    path: path.adminBtcEth,
  },
  {
    title: 'futures',
    iconUrl: menuIcon.futures,
    path: path.adminFutures,
  },
];
