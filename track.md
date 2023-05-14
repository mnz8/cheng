`nest n -g -s -p pnpm xxx`
`pnpm -r i @nestjs/microservices`
`pnpm i collect-config -F=\!collect-config --workspace`

### blog

`pnpm i @grpc/grpc-js @grpc/proto-loader`

### nan-tian-men

`pnpm i @nestjs/swagger`

### qian-men

`pnpm i @nestjs/platform-fastify`
`pnpm uni @nestjs/platform-express @types/express`
`pnpm i collect-config --workspace`

### command

`pnpm -r --workspace-concurrency Infinity start`

## delete

`find . -type d -name "node_modules" -exec rm -rf {} \;`
`find . -type d -name "dist" -exec rm -rf {} \;`
