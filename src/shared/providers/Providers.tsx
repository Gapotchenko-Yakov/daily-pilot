'use client';

import ReactQueryProvider from './ReactQueryProvider';
import AuthProvider from './AuthProvider';
import ThemeProvider from './ThemeProvider';
// import ZustandProvider from './ZustandProvider';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  session?: any;
}

export default function Providers({ children, session }: Props) {
  return (
    <ReactQueryProvider>
      <AuthProvider session={session}>
        <ThemeProvider>
          {/* <ZustandProvider> */}
          {children}
          {/* </ZustandProvider> */}
        </ThemeProvider>
      </AuthProvider>
    </ReactQueryProvider>
  );
}
