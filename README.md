## Running Express app on Lambda using Claudia


## To create lambda express wrapper

```
claudia generate-serverless-express-proxy --express-module app
```

This command creates lambda.js (wrapper) and adds the aws-serverless-express dependency


## To Deploy

First deployment:

```
claudia create --handler lambda.handler --deploy-proxy-api --region us-east-1
```

When running the initial deployment command, claudia will return the new API gateway url that it set up for us.

to make repeat deployments:

```
claudia update
```


## To test from the api gateway url:

https://xxxxxxxx.execute-api.us-east-1.amazonaws.com/latest/ping

should return pong, and:

https://xxxxxxxx.execute-api.us-east-1.amazonaws.com/latest/time

should return the current server time as string.


## To Test from cli

```
claudia test-lambda
```

with event data:

```
claudia test-lambda --event event-file.json
```

or

```
echo '{"name": "Fatih"}' | claudia test-lambda --event /dev/stdin
```


## Logs

To check the logs after invoking:

```
aws logs filter-log-events --log-group-name /aws/lambda/claudia-express
```