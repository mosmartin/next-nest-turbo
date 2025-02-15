FROM node:lts-alpine AS build-stage
WORKDIR /app
RUN npm install -g turbo
COPY . .
RUN turbo prune --scope=web --docker

FROM node:lts-alpine AS installer-stage
WORKDIR /app
COPY --from=build-stage /app/out/json .
COPY --from=build-stage /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
COPY --from=build-stage /app/turbo.json ./turbo.json

RUN npm install -g pnpm
RUN pnpm install --frozen-lockfile

FROM node:lts-alpine AS builder-stage
WORKDIR /app
COPY --from=installer-stage /app/ .
COPY --from=build-stage /app/out/full .
RUN npm install -g pnpm
RUN pnpm build

FROM node:lts-alpine AS production-stage
WORKDIR /app
ENV NODE_ENV=production
RUN npm install -g pnpm
COPY --from=builder-stage /app/ .
WORKDIR /app/apps/web

EXPOSE 3000

CMD [ "pnpm", "start" ]
