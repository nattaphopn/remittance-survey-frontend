import type { ITheme } from 'survey-core'
import { DefaultLight } from 'survey-core/themes'

// Philippine flag colours
const blue = '0, 56, 168' // #0038A8
const blueDark = '0, 40, 122' // #00287A
const red = '206, 17, 38' // #CE1126
const redDark = '163, 13, 30' // #A30D1E

export const philippinesTheme: ITheme = {
  ...DefaultLight,
  themeName: 'philippines',
  cssVariables: {
    ...DefaultLight.cssVariables,
    // Blue: buttons, selected answers, progress bar, focus
    '--sjs2-color-project-brand-600': `rgba(${blue}, 1)`,
    '--sjs2-color-bg-brand-primary-dim': `rgba(${blueDark}, 1)`,
    '--sjs2-color-bg-brand-secondary': `rgba(${blue}, 0.1)`,
    '--sjs2-color-utility-surface-survey': 'rgba(238, 243, 252, 1)', // page background
    // Red: survey title and validation errors
    '--sjs2-color-component-survey-header-default-title': `rgba(${red}, 1)`,
    '--sjs2-color-bg-alert-primary': `rgba(${red}, 1)`,
    '--sjs2-color-bg-alert-primary-dim': `rgba(${redDark}, 1)`,
    '--sjs2-color-bg-alert-secondary': `rgba(${red}, 0.1)`,
    '--sjs2-color-border-alert-primary': `rgba(${red}, 1)`,
    '--sjs2-color-fg-alert-primary': `rgba(${redDark}, 1)`,
  },
}
