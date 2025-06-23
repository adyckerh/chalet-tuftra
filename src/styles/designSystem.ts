// Design System Tokens
export const designTokens = {
  // Typography Scale with fluid responsive sizing
  typography: {
    // Headings - Now using Playfair Display for warmth and elegance
    h1: {
      fontSize: 'text-fluid-4xl md:text-fluid-5xl',
      fontWeight: 'font-bold',
      fontFamily: 'font-playfair',
      color: 'text-emerald-900',
      lineHeight: 'leading-tight',
      marginBottom: ''
    },
    h2: {
      fontSize: 'text-fluid-3xl md:text-fluid-4xl',
      fontWeight: 'font-bold',
      fontFamily: 'font-playfair',
      color: 'text-emerald-900',
      lineHeight: 'leading-tight',
      marginBottom: ''
    },
    h3: {
      fontSize: 'text-fluid-2xl md:text-fluid-3xl',
      fontWeight: 'font-bold',
      fontFamily: 'font-playfair',
      color: 'text-emerald-900',
      lineHeight: 'leading-tight',
      marginBottom: ''
    },
    h4: {
      fontSize: 'text-fluid-xl md:text-fluid-2xl',
      fontWeight: 'font-semibold',
      fontFamily: 'font-playfair',
      color: 'text-emerald-900',
      lineHeight: 'leading-tight',
      marginBottom: ''
    },
    // Body Text - Keeping sans-serif for readability
    bodyLarge: {
      fontSize: 'text-fluid-lg md:text-fluid-xl',
      fontWeight: 'font-normal',
      color: 'text-stone-700',
      lineHeight: 'leading-relaxed',
      marginBottom: ''
    },
    bodyBase: {
      fontSize: 'text-fluid-base md:text-fluid-lg',
      fontWeight: 'font-normal',
      color: 'text-stone-700',
      lineHeight: 'leading-relaxed',
      marginBottom: ''
    },
    bodySmall: {
      fontSize: 'text-fluid-sm md:text-fluid-base',
      fontWeight: 'font-normal',
      color: 'text-stone-600',
      lineHeight: 'leading-relaxed',
      marginBottom: ''
    },
    // Navigation text
    navText: {
      fontSize: 'text-fluid-sm md:text-fluid-base',
      fontWeight: 'font-medium',
      lineHeight: 'leading-normal',
      color: 'text-stone-700',
      marginBottom: ''
    },
    // Button text
    buttonText: {
      fontSize: 'text-fluid-sm md:text-fluid-base',
      fontWeight: 'font-semibold',
      lineHeight: 'leading-normal',
      color: 'text-white',
      marginBottom: ''
    }
  },
  
  // Responsive Spacing Scale
  spacing: {
    section: {
      paddingY: 'py-6 sm:py-8 md:py-12 lg:py-16',
      marginBottom: ''
    },
    container: {
      maxWidth: 'max-w-7xl',
      padding: 'px-4 sm:px-6 lg:px-8 xl:px-12',
      margin: 'mx-auto'
    },
    contentBlock: {
      marginBottom: 'mb-6 sm:mb-8 lg:mb-12',
      gap: 'gap-4 sm:gap-6 lg:gap-8'
    },
    grid: {
      gap: 'gap-4 sm:gap-6 md:gap-8 lg:gap-12'
    },
    textBlock: {
      marginBottom: 'mb-3 sm:mb-4 lg:mb-6'
    },
    listSpacing: {
      marginBottom: 'mb-4 sm:mb-6 lg:mb-8'
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
  
  // Add font family for headings
  if (token.fontFamily) {
    classes.push(token.fontFamily);
  }
  
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
