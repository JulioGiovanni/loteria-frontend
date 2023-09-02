'use client';
import { ThemeProvider } from '@/components/theme-provider';
import React, { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
// Create a client
const queryClient = new QueryClient();

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
      >
        {children}
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default Providers;
