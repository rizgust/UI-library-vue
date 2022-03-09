import '../dist/quark.css'
import { app } from '@storybook/vue3'
import { Quark } from 'quark'

app.use(Quark, {})
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}