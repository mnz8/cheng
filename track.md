[TOC]

## back

`nest n -g -s -p pnpm xxx`
`pnpm -r i @nestjs/microservices`
`pnpm i collect-config -F=\!collect-config --workspace`

### command

`pnpm -r --workspace-concurrency Infinity start`

### blog

`pnpm i @grpc/grpc-js @grpc/proto-loader`

### nan-tian-men

`pnpm i @nestjs/swagger`

### qian-men

`pnpm i @nestjs/platform-fastify`
`pnpm uni @nestjs/platform-express @types/express`
`pnpm i collect-config --workspace`

## delete

`find . -type d -name "node_modules" -exec rm -rf {} \;`
`find . -type d -name "dist" -exec rm -rf {} \;`

## sample

### proxy

`nest n -g -s -p pnpm with-http-proxy-middleware`
Temporarily as a workaround, create an empty `pnpm-workspace.yaml` file in the project directory.
`pnpm i http-proxy-middleware -w`

### learn

Enable authentication globally

`nest g module auth`
`nest g controller auth`
`nest g service auth`

`nest g module users`
`nest g service users`

`curl http://localhost:3000/`
`curl -X POST http://localhost:3000/auth/login -d '{"username": "john", "password": "changeme"}' -H "Content-Type: application/json"`
`curl http://localhost:3000/ -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2Vybm..."`
`curl http://localhost:3000/auth/profile -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2Vybm..."`
