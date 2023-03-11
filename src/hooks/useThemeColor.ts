import { useThemeStore } from '@/stores/useThemeStore';
import { useTheme } from '@chakra-ui/react';
import { useCallback, useMemo, useState } from 'react';

export const useThemeColor = () => {
  const { isDarkMode, toggleDarkMode } = useThemeStore();

  const theme = useTheme();

  const textColor = useMemo(
    () => (isDarkMode ? theme.colors.primary.light : theme.colors.primary.dark),
    [isDarkMode, theme.colors.primary.dark, theme.colors.primary.light],
  );

  const navBackgroundColor = useMemo(
    () => (!isDarkMode ? 'background.main' : 'background.dark2'),
    [isDarkMode],
  );

  const bottomBackgroundColor = useMemo(
    () => (!isDarkMode ? 'primary.main' : 'background.dark3'),
    [isDarkMode],
  );

  const bgGradient = useMemo(
    () =>
      isDarkMode
        ? `linear(to-r, ${bottomBackgroundColor}, brand.900, brand.800)`
        : `linear(to-r, ${bottomBackgroundColor}, brand.700, brand.800)`,
    [bottomBackgroundColor, isDarkMode],
  );

  return {
    isDarkMode,
    toggleDarkMode,
    textColor,
    navBackgroundColor,
    bgGradient,
  };
};
