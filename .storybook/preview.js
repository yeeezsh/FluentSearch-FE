import { withNextRouter } from 'storybook-addon-next-router';
import { addDecorator } from '@storybook/react';
import * as nextImage from 'next/image';

// next/images override
Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: (props) => {
    return <img {...props} />;
  },
});

// next/router override
addDecorator(
  withNextRouter({
    path: '/', // defaults to `/`
    asPath: '/', // defaults to `/`
    query: {}, // defaults to `{}`
    push() {}, // defaults to using addon actions integration, can override any method in the router
  }),
);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};
