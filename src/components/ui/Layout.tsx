
import React from 'react';
import { getSectionClasses, getContainerClasses, designTokens } from '@/styles/designSystem';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'primary' | 'secondary' | 'accent' | 'dark';
}

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ 
  children, 
  className = '', 
  id, 
  background = 'primary' 
}) => {
  const bgClass = designTokens.backgrounds[background];
  return (
    <section id={id} className={`${getSectionClasses()} ${bgClass} ${className}`}>
      {children}
    </section>
  );
};

export const Container: React.FC<ContainerProps> = ({ children, className = '' }) => (
  <div className={`${getContainerClasses()} ${className}`}>
    {children}
  </div>
);

export const ContentGrid: React.FC<ContainerProps> = ({ children, className = '' }) => (
  <div className={`grid md:grid-cols-2 ${designTokens.spacing.grid.gap} items-center ${className}`}>
    {children}
  </div>
);

export const ContentBlock: React.FC<ContainerProps> = ({ children, className = '' }) => (
  <div className={`${designTokens.spacing.contentBlock.marginBottom} ${className}`}>
    {children}
  </div>
);
