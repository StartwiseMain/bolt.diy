import type { ITheme } from '@xterm/xterm';

const style = getComputedStyle(document.documentElement);
const cssVar = (token: string) => style.getPropertyValue(token) || undefined;

export function getTerminalTheme(overrides?: ITheme): ITheme {
  return {
    cursor: cssVar('--wl-elements-terminal-cursorColor'),
    cursorAccent: cssVar('--wl-elements-terminal-cursorColorAccent'),
    foreground: cssVar('--wl-elements-terminal-textColor'),
    background: cssVar('--wl-elements-terminal-backgroundColor'),
    selectionBackground: cssVar('--wl-elements-terminal-selection-backgroundColor'),
    selectionForeground: cssVar('--wl-elements-terminal-selection-textColor'),
    selectionInactiveBackground: cssVar('--wl-elements-terminal-selection-backgroundColorInactive'),

    // ansi escape code colors
    black: cssVar('--wl-elements-terminal-color-black'),
    red: cssVar('--wl-elements-terminal-color-red'),
    green: cssVar('--wl-elements-terminal-color-green'),
    yellow: cssVar('--wl-elements-terminal-color-yellow'),
    blue: cssVar('--wl-elements-terminal-color-blue'),
    magenta: cssVar('--wl-elements-terminal-color-magenta'),
    cyan: cssVar('--wl-elements-terminal-color-cyan'),
    white: cssVar('--wl-elements-terminal-color-white'),
    brightBlack: cssVar('--wl-elements-terminal-color-brightBlack'),
    brightRed: cssVar('--wl-elements-terminal-color-brightRed'),
    brightGreen: cssVar('--wl-elements-terminal-color-brightGreen'),
    brightYellow: cssVar('--wl-elements-terminal-color-brightYellow'),
    brightBlue: cssVar('--wl-elements-terminal-color-brightBlue'),
    brightMagenta: cssVar('--wl-elements-terminal-color-brightMagenta'),
    brightCyan: cssVar('--wl-elements-terminal-color-brightCyan'),
    brightWhite: cssVar('--wl-elements-terminal-color-brightWhite'),

    ...overrides,
  };
}
