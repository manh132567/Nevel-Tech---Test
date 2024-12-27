import { PropsWithChildren } from 'react';

import { Banner } from './components/banner';
import { Footer } from './components/footer';
import { Header } from './components/header';

export const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="w-full">
      <Header />
      <Banner />
      {children}
      <Footer />
    </div>
  );
};
