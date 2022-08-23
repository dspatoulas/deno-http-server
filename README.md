# Deno HTTP Server Example

Created an example web service in Deno to experiment and answer some fundamental questions of the Deno runtime,
such as library support, easy of use, and other developer experience related aspects of the environment.

## Basic HTTP Service

Running the basic HTTP service is extremely simple.

```shell
deno run ./src/main.ts
```

Deno is a sandbox runtime by default, which means it needs to be granted explicit permissions to interact with 
services, areas of the filesystem, environment variables and other functionality external to the runtime environment. 

To avoid interactive prompts, run the HTTP service with the following arguments.
```shell
deno run --allow-env --allow-net ./src/main.ts 
```

## Lambda HTTP Service

Use the `docker-compose up` command to run the example service as a Lambda function.

### Invoking the Lambda

The Lambda function can be invoked with the following request.

```shell
curl -XPOST http://localhost:8080/2015-03-31/functions/function/invocations -d "{}"
```

To prettify the results, pipe them into `json_pp` utility. Use the `utf8` option to support non-ascii characters
used in emojis.

```shell
curl  -XPOST http://localhost:8080/2015-03-31/functions/function/invocations -d {} | json_pp -json_opt pretty,utf8
```
