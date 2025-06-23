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
    // Navigation text - Now using Playfair Display for consistency
    navText: {
      fontSize: 'text-fluid-sm md:text-fluid-base',
      fontWeight: 'font-medium',
      fontFamily: 'font-playfair',
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
  
  // Responsive Spacing Scale - Further reduced for tighter sections
  spacing: {
    section: {
      paddingY: 'py-2 sm:py-3 md:py-4 lg:py-6',
      marginBottom: ''
    },
    container: {
      maxWidth: 'max-w-7xl',
      padding: 'px-4 sm:px-6 lg:px-8 xl:px-12',
      margin: 'mx-auto'
    },
    contentBlock: {
      marginBottom: 'mb-2 sm:mb-3 lg:mb-4',
      gap: 'gap-1.5 sm:gap-2 lg:gap-3'
    },
    grid: {
      gap: 'gap-1.5 sm:gap-2 md:gap-3 lg:gap-4'
    },
    textBlock: {
      marginBottom: 'mb-1 sm:mb-1.5 lg:mb-2'
    },
    listSpacing: {
      marginBottom: 'mb-1.5 sm:mb-2 lg:mb-3'
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
  
  // Add font family for headings and navigation - safely check if fontFamily exists
  if ('fontFamily' in token && token.fontFamily) {
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
