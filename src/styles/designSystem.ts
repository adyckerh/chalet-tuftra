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
      marginBottom: ''
    },
    h2: {
      fontSize: 'text-3xl md:text-4xl',
      fontWeight: 'font-bold',
      color: 'text-emerald-900',
      lineHeight: 'leading-tight',
      marginBottom: ''
    },
    h3: {
      fontSize: 'text-2xl md:text-3xl',
      fontWeight: 'font-bold',
      color: 'text-emerald-900',
      lineHeight: 'leading-tight',
      marginBottom: ''
    },
    h4: {
      fontSize: 'text-xl md:text-2xl',
      fontWeight: 'font-semibold',
      color: 'text-emerald-900',
      lineHeight: 'leading-tight',
      marginBottom: ''
    },
    // Body Text
    bodyLarge: {
      fontSize: 'text-xl',
      fontWeight: 'font-normal',
      color: 'text-stone-700',
      lineHeight: 'leading-relaxed',
      marginBottom: ''
    },
    bodyBase: {
      fontSize: 'text-lg',
      fontWeight: 'font-normal',
      color: 'text-stone-700',
      lineHeight: 'leading-relaxed',
      marginBottom: ''
    },
    bodySmall: {
      fontSize: 'text-base',
      fontWeight: 'font-normal',
      color: 'text-stone-600',
      lineHeight: 'leading-relaxed',
      marginBottom: ''
    },
    // Navigation text
    navText: {
      fontSize: 'text-lg',
      fontWeight: 'font-medium',
      lineHeight: 'leading-normal',
      color: 'text-stone-700',
      marginBottom: ''
    },
    // Button text
    buttonText: {
      fontSize: 'text-lg',
      fontWeight: 'font-semibold',
      lineHeight: 'leading-normal',
      color: 'text-white',
      marginBottom: ''
    }
  },
  
  // Spacing Scale - Reduced for less disjointed feel
  spacing: {
    section: {
      paddingY: 'py-8 md:py-12',
      marginBottom: ''
    },
    container: {
      maxWidth: 'max-w-7xl',
      padding: 'px-4 sm:px-6 lg:px-8',
      margin: 'mx-auto'
    },
    contentBlock: {
      marginBottom: 'mb-8',
      gap: 'gap-6'
    },
    grid: {
      gap: 'gap-6 md:gap-8'
    },
    textBlock: {
      marginBottom: 'mb-4'
    },
    listSpacing: {
      marginBottom: 'mb-6'
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
  const classes = [
    token.fontSize,
    token.fontWeight,
    token.lineHeight
  ];
  
  // Only add color and marginBottom if they exist and are not empty
  if (token.color) {
    classes.push(token.color);
  }
  
  if (token.marginBottom) {
    classes.push(token.marginBottom);
  }
  
  return classes.filter(Boolean).join(' ');
};

export const getSectionClasses = () => {
  return `${designTokens.spacing.section.paddingY}`;
};

export const getContainerClasses = () => {
  return `${designTokens.spacing.container.maxWidth} ${designTokens.spacing.container.padding} ${designTokens.spacing.container.margin}`;
};

export const getTextBlockClasses = () => {
  return designTokens.spacing.textBlock.marginBottom;
};

export const getListSpacingClasses = () => {
  return designTokens.spacing.listSpacing.marginBottom;
};
