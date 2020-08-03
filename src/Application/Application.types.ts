import { ReactNode } from 'react';
import defaultTheme from '../theme';

/**
 * TODO typing theme prop
 * export type Theme = typeof defaultTheme;
 */

export interface AplicationProps {
  /**
   * This prop should not be visible in the documentation.
   * @ignore
   */
  children: ReactNode;
  /** The Application theme */
  theme?: object;
}