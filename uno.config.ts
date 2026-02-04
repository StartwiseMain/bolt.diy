import { globSync } from 'fast-glob';
import fs from 'node:fs/promises';
import { basename } from 'node:path';
import { defineConfig, presetIcons, presetUno, transformerDirectives } from 'unocss';

const iconPaths = globSync('./icons/*.svg');

const collectionName = 'wl';

const customIconCollection = iconPaths.reduce(
  (acc, iconPath) => {
    const [iconName] = basename(iconPath).split('.');

    acc[collectionName] ??= {};
    acc[collectionName][iconName] = async () => fs.readFile(iconPath, 'utf8');

    return acc;
  },
  {} as Record<string, Record<string, () => Promise<string>>>,
);

const BASE_COLORS = {
  white: '#FFFFFF',
  gray: {
    50: '#FAFAFA',
    100: '#F5F5F5',
    200: '#E5E5E5',
    300: '#D4D4D4',
    400: '#A3A3A3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
    950: '#0A0A0A',
  },
  accent: {
    50: '#EFF6FF',
    100: '#DBEAFE',
    200: '#BFDBFE',
    300: '#93C5FD',
    400: '#60A5FA',
    500: '#3B82F6',
    600: '#2563EB',
    700: '#1D4ED8',
    800: '#1E40AF',
    900: '#1E3A8A',
    950: '#172554',
  },
  green: {
    50: '#F0FDF4',
    100: '#DCFCE7',
    200: '#BBF7D0',
    300: '#86EFAC',
    400: '#4ADE80',
    500: '#22C55E',
    600: '#16A34A',
    700: '#15803D',
    800: '#166534',
    900: '#14532D',
    950: '#052E16',
  },
  orange: {
    50: '#FFFAEB',
    100: '#FEEFC7',
    200: '#FEDF89',
    300: '#FEC84B',
    400: '#FDB022',
    500: '#F79009',
    600: '#DC6803',
    700: '#B54708',
    800: '#93370D',
    900: '#792E0D',
  },
  red: {
    50: '#FEF2F2',
    100: '#FEE2E2',
    200: '#FECACA',
    300: '#FCA5A5',
    400: '#F87171',
    500: '#EF4444',
    600: '#DC2626',
    700: '#B91C1C',
    800: '#991B1B',
    900: '#7F1D1D',
    950: '#450A0A',
  },
};

const COLOR_PRIMITIVES = {
  ...BASE_COLORS,
  alpha: {
    white: generateAlphaPalette(BASE_COLORS.white),
    gray: generateAlphaPalette(BASE_COLORS.gray[900]),
    red: generateAlphaPalette(BASE_COLORS.red[500]),
    accent: generateAlphaPalette(BASE_COLORS.accent[500]),
  },
};

export default defineConfig({
  safelist: [...Object.keys(customIconCollection[collectionName] || {}).map((x) => `i-wl:${x}`)],
  shortcuts: {
    'wl-ease-cubic-bezier': 'ease-[cubic-bezier(0.4,0,0.2,1)]',
    'transition-theme': 'transition-[background-color,border-color,color] duration-150 wl-ease-cubic-bezier',
    kdb: 'bg-wl-elements-code-background text-wl-elements-code-text py-1 px-1.5 rounded-md',
    'max-w-chat': 'max-w-[var(--chat-max-width)]',
  },
  rules: [
    /**
     * This shorthand doesn't exist in Tailwind and we overwrite it to avoid
     * any conflicts with minified CSS classes.
     */
    ['b', {}],
  ],
  theme: {
    colors: {
      ...COLOR_PRIMITIVES,
      wl: {
        elements: {
          borderColor: 'var(--wl-elements-borderColor)',
          borderColorActive: 'var(--wl-elements-borderColorActive)',
          background: {
            depth: {
              1: 'var(--wl-elements-bg-depth-1)',
              2: 'var(--wl-elements-bg-depth-2)',
              3: 'var(--wl-elements-bg-depth-3)',
              4: 'var(--wl-elements-bg-depth-4)',
            },
          },
          textPrimary: 'var(--wl-elements-textPrimary)',
          textSecondary: 'var(--wl-elements-textSecondary)',
          textTertiary: 'var(--wl-elements-textTertiary)',
          code: {
            background: 'var(--wl-elements-code-background)',
            text: 'var(--wl-elements-code-text)',
          },
          button: {
            primary: {
              background: 'var(--wl-elements-button-primary-background)',
              backgroundHover: 'var(--wl-elements-button-primary-backgroundHover)',
              text: 'var(--wl-elements-button-primary-text)',
            },
            secondary: {
              background: 'var(--wl-elements-button-secondary-background)',
              backgroundHover: 'var(--wl-elements-button-secondary-backgroundHover)',
              text: 'var(--wl-elements-button-secondary-text)',
            },
            danger: {
              background: 'var(--wl-elements-button-danger-background)',
              backgroundHover: 'var(--wl-elements-button-danger-backgroundHover)',
              text: 'var(--wl-elements-button-danger-text)',
            },
          },
          item: {
            contentDefault: 'var(--wl-elements-item-contentDefault)',
            contentActive: 'var(--wl-elements-item-contentActive)',
            contentAccent: 'var(--wl-elements-item-contentAccent)',
            contentDanger: 'var(--wl-elements-item-contentDanger)',
            backgroundDefault: 'var(--wl-elements-item-backgroundDefault)',
            backgroundActive: 'var(--wl-elements-item-backgroundActive)',
            backgroundAccent: 'var(--wl-elements-item-backgroundAccent)',
            backgroundDanger: 'var(--wl-elements-item-backgroundDanger)',
          },
          actions: {
            background: 'var(--wl-elements-actions-background)',
            code: {
              background: 'var(--wl-elements-actions-code-background)',
            },
          },
          artifacts: {
            background: 'var(--wl-elements-artifacts-background)',
            backgroundHover: 'var(--wl-elements-artifacts-backgroundHover)',
            borderColor: 'var(--wl-elements-artifacts-borderColor)',
            inlineCode: {
              background: 'var(--wl-elements-artifacts-inlineCode-background)',
              text: 'var(--wl-elements-artifacts-inlineCode-text)',
            },
          },
          messages: {
            background: 'var(--wl-elements-messages-background)',
            linkColor: 'var(--wl-elements-messages-linkColor)',
            code: {
              background: 'var(--wl-elements-messages-code-background)',
            },
            inlineCode: {
              background: 'var(--wl-elements-messages-inlineCode-background)',
              text: 'var(--wl-elements-messages-inlineCode-text)',
            },
          },
          icon: {
            success: 'var(--wl-elements-icon-success)',
            error: 'var(--wl-elements-icon-error)',
            primary: 'var(--wl-elements-icon-primary)',
            secondary: 'var(--wl-elements-icon-secondary)',
            tertiary: 'var(--wl-elements-icon-tertiary)',
          },
          preview: {
            addressBar: {
              background: 'var(--wl-elements-preview-addressBar-background)',
              backgroundHover: 'var(--wl-elements-preview-addressBar-backgroundHover)',
              backgroundActive: 'var(--wl-elements-preview-addressBar-backgroundActive)',
              text: 'var(--wl-elements-preview-addressBar-text)',
              textActive: 'var(--wl-elements-preview-addressBar-textActive)',
            },
          },
          terminals: {
            background: 'var(--wl-elements-terminals-background)',
            buttonBackground: 'var(--wl-elements-terminals-buttonBackground)',
          },
          dividerColor: 'var(--wl-elements-dividerColor)',
          loader: {
            background: 'var(--wl-elements-loader-background)',
            progress: 'var(--wl-elements-loader-progress)',
          },
          prompt: {
            background: 'var(--wl-elements-prompt-background)',
          },
          sidebar: {
            dropdownShadow: 'var(--wl-elements-sidebar-dropdownShadow)',
            buttonBackgroundDefault: 'var(--wl-elements-sidebar-buttonBackgroundDefault)',
            buttonBackgroundHover: 'var(--wl-elements-sidebar-buttonBackgroundHover)',
            buttonText: 'var(--wl-elements-sidebar-buttonText)',
          },
          cta: {
            background: 'var(--wl-elements-cta-background)',
            text: 'var(--wl-elements-cta-text)',
          },
        },
      },
    },
  },
  transformers: [transformerDirectives()],
  presets: [
    presetUno({
      dark: {
        light: '[data-theme="light"]',
        dark: '[data-theme="dark"]',
      },
    }),
    presetIcons({
      warn: true,
      collections: {
        ...customIconCollection,
      },
      unit: 'em',
    }),
  ],
});

/**
 * Generates an alpha palette for a given hex color.
 *
 * @param hex - The hex color code (without alpha) to generate the palette from.
 * @returns An object where keys are opacity percentages and values are hex colors with alpha.
 *
 * Example:
 *
 * ```
 * {
 *   '1': '#FFFFFF03',
 *   '2': '#FFFFFF05',
 *   '3': '#FFFFFF08',
 * }
 * ```
 */
function generateAlphaPalette(hex: string) {
  return [1, 2, 3, 4, 5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100].reduce(
    (acc, opacity) => {
      const alpha = Math.round((opacity / 100) * 255)
        .toString(16)
        .padStart(2, '0');

      acc[opacity] = `${hex}${alpha}`;

      return acc;
    },
    {} as Record<number, string>,
  );
}
