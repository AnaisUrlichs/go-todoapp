FROM golang:1.15.1-alpine3.12 AS build-env
WORKDIR /go/src/app
COPY . .
RUN go mod download
RUN go build -o go-todolist todolist.go
EXPOSE 8000
CMD ["/go/src/app/go-todolist"]