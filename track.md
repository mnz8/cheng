`nest n -g -s -p pnpm xxx`
`pnpm -r i @nestjs/microservices`
`pnpm i @grpc/grpc-js @grpc/proto-loader`
`pnpm i collect-config -F=\!collect-config --workspace`

`pnpm -r --workspace-concurrency Infinity start`
`find . -type d -name "node_modules" -exec rm -rf {} \;`
`find . -type d -name "dist" -exec rm -rf {} \;`
