/** @type {import('next').NextConfig} */

import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const nextTranslate = require('next-translate-plugin');

const nextConfig = {
  reactStrictMode: true,
  ...nextTranslate(),
  transpilePackages: [
    'rc-util',
    '@ant-design',
    '@ant-design/icons',
    'antd',
    'rc-pagination',
    'rc-picker',
    'next-translate-plugin',
    'next-translate'
  ],
  i18n: undefined,
  // Cấu hình để export static site
  output: 'export',  // Thêm cấu hình này để Next.js xuất site tĩnh
  
  // Nếu bạn cần thêm cấu hình basePath hoặc assetPrefix cho GitHub Pages:
  basePath: '/Nevel-Tech---Test',
  assetPrefix: '/Nevel-Tech---Test',
};

export default nextConfig;
