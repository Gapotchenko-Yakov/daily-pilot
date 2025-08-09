'use client';

import { ReactNode } from 'react';
import { Providers } from '@/shared/providers';

interface Props {
  children: ReactNode;
  session?: any;
}

export function TestProviders({ children }: Props) {
  return <Providers>{children}</Providers>;
}
