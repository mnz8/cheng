```
curl -XPOST localhost:8001/services \
  --data name=blog-grpc \
  --data protocol=grpc \
  --data host=localhost \
  --data port=50001

curl -XPOST localhost:8001/services/blog-grpc/routes \
  --data protocols=http \
  --data name=blog-http \
  --data paths[]=/bei-men/blog/

curl -X POST localhost:8001/routes/blog-http/plugins \
  --data name=grpc-gateway \
  --data "config.proto=/proto/blog.proto"
```
