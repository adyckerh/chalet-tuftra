import React from 'react';
import { getTypographyClasses } from '@/styles/designSystem';
interface TypographyProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}
export const H1: React.FC<TypographyProps> = ({
  children,
  className = '',
  id
}) => <h1 id={id} className={`${getTypographyClasses('h1')} ${className}`}>
    {children}
  </h1>;
export const H2: React.FC<TypographyProps> = ({
  children,
  className = '',
  id
}) => {};
export const H3: React.FC<TypographyProps> = ({
  children,
  className = '',
  id
}) => <h3 id={id} className={`${getTypographyClasses('h3')} ${className}`}>
    {children}
  </h3>;
export const H4: React.FC<TypographyProps> = ({
  children,
  className = '',
  id
}) => <h4 id={id} className={`${getTypographyClasses('h4')} ${className}`}>
    {children}
  </h4>;
export const BodyLarge: React.FC<TypographyProps> = ({
  children,
  className = ''
}) => <p className={`${getTypographyClasses('bodyLarge')} ${className}`}>
    {children}
  </p>;
export const BodyBase: React.FC<TypographyProps> = ({
  children,
  className = ''
}) => <p className={`${getTypographyClasses('bodyBase')} ${className}`}>
    {children}
  </p>;
export const BodySmall: React.FC<TypographyProps> = ({
  children,
  className = ''
}) => <p className={`${getTypographyClasses('bodySmall')} ${className}`}>
    {children}
  </p>;