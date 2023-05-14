outernal-http: 2xxxx
internal-microservices: 5xxxx
outernal-microservices: 6xxxx

| port         | project        | type       | httpAdapter |
| ------------ | -------------- | ---------- | ----------- |
| 20001, xxxxx | qian-men       | x          | fastify     |
| 60002, 59998 | authentication | http + tcp | express     |
| 60003, 59997 | authorization  | http + tcp | express     |
| xxxxx, 50001 | blog           | rpc        | express     |
| 60004        | gateway        | x          | express     |
| 60001        | nan-tian-men   | x          | express     |
| xxxxx, 59999 | user-manager   | tcp        | express     |

shu-mi-yuan
