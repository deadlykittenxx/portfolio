// app/layout.tsx
'use client';

import React, { ReactNode } from 'react';
import Footer from './components/Footer';
import './styles/globals.css';
import './styles/color.css';


interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {

  return (

    <html lang="en">
      <title>Yeajin AHN</title>
      <body>

        <main>{children}</main> {/* page content */}
        <Footer />
      </body>
    </html>
  );
};

export default Layout;
