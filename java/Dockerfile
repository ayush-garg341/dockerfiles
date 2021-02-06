# multi-stage docker file
# Use an image with the SDK for compilation

FROM openjdk:8-jdk-alpine AS builder

WORKDIR /out

COPY *.java .

RUN javac hello.java


# Create a lightweight image

FROM openjdk:8-jre-alpine

COPY --from=builder /out/*.class .

CMD ["java", "hello"]