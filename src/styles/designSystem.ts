
// Design System Tokens
export const designTokens = {
  // Typography Scale
  typography: {
    // Headings
    h1: {
      fontSize: 'text-4xl md:text-5xl',
      fontWeight: 'font-bold',
      color: 'text-emerald-900',
      lineHeight: 'leading-tight',
      marginBottom: 'mb-6'
    },
    h2: {
      fontSize: 'text-3xl md:text-4xl',
      fontWeight: 'font-bold',
      color: 'text-emerald-900',
      lineHeight: 'leading-tight',
      marginBottom: 'mb-4'
    },
    h3: {
      fontSize: 'text-2xl md:text-3xl',
      fontWeight: 'font-bold',
      color: 'text-emerald-900',
      lineHeight: 'leading-tight',
      marginBottom: 'mb-4'
    },
    h4: {
      fontSize: 'text-xl md:text-2xl',
      fontWeight: 'font-semibold',
      color: 'text-emerald-900',
      lineHeight: 'leading-tight',
      marginBottom: 'mb-3'
    },
    // Body Text
    bodyLarge: {
      fontSize: 'text-xl',
      fontWeight: 'font-normal',
      color: 'text-stone-700',
      lineHeight: 'leading-relaxed',
      marginBottom: 'mb-4'
    },
    bodyBase: {
      fontSize: 'text-lg',
      fontWeight: 'font-normal',
      color: 'text-stone-700',
      lineHeight: 'leading-relaxed',
      marginBottom: 'mb-4'
    },
    bodySmall: {
      fontSize: 'text-base',
      fontWeight: 'font-normal',
      color: 'text-stone-600',
      lineHeight: 'leading-relaxed',
      marginBottom: 'mb-3'
    },
    // Navigation text
    navText: {
      fontSize: 'text-lg',
      fontWeight: 'font-medium',
      lineHeight: 'leading-normal'
    },
    // Button text
    buttonText: {
      fontSize: 'text-lg',
      fontWeight: 'font-semibold',
      lineHeight: 'leading-normal'
    }
  },
  
  // Spacing Scale
  spacing: {
    section: {
      paddingY: 'py-16',
      marginBottom: 'mb-16'
    },
    container: {
      maxWidth: 'max-w-7xl',
      padding: 'px-4 sm:px-6 lg:px-8',
      margin: 'mx-auto'
    },
    contentBlock: {
      marginBottom: 'mb-8',
      gap: 'gap-8'
    },
    grid: {
      gap: 'gap-8 md:gap-12'
    }
  },
  
  // Colors
  colors: {
    primary: 'text-emerald-900',
    secondary: 'text-stone-700',
    muted: 'text-stone-600',
    accent: 'text-emerald-700',
    white: 'text-white'
  },
  
  // Backgrounds
  backgrounds: {
    primary: 'bg-white',
    secondary: 'bg-stone-50',
    accent: 'bg-emerald-50',
    dark: 'bg-stone-900'
  }
};

// Utility function to combine classes
export const getTypographyClasses = (variant: keyof typeof designTokens.typography) => {
  const token = designTokens.typography[variant];
  return `${token.fontSize} ${token.fontWeight} ${token.color} ${token.lineHeight} ${token.marginBottom}`;
};

export const getSectionClasses = () => {
  return `${designTokens.spacing.section.paddingY}`;
};

export const getContainerClasses = () => {
  return `${designTokens.spacing.container.maxWidth} ${designTokens.spacing.container.padding} ${designTokens.spacing.container.margin}`;
};
