FROM node:10.16.3-alpine
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN yarn install

COPY .babelrc .
COPY jest.config.js .
COPY jest.setup.js .
COPY tsconfig.jest.json .
COPY yarn.lock .
COPY __tests__ ./__tests__
COPY .storybook ./.storybook
COPY components ./components
COPY pages ./pages
COPY static ./static
COPY utils ./utils

EXPOSE 3000
CMD yarn dev
