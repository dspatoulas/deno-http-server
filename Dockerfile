###################
### Build Image ###
###################
#FROM denoland/deno as build
#WORKDIR /var/app
#COPY src ./src
#RUN deno compile --allow-net ./src/lambda.ts --target x86_64-unknown-linux-gnu

######################
### Lambda Runtime ###
######################
#FROM public.ecr.aws/lambda/provided:al2
#COPY --from=build /var/app/lambda /var/runtime/bootstrap
#
#CMD ["lambda.handler"]

######################
### Lambda Runtime ###
######################
FROM hayd/deno-lambda:1.10.3

COPY src .
RUN deno cache lambda.ts

CMD ["lambda.handler"]
