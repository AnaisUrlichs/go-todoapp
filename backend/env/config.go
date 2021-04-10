package env

import (
	"os"
)

func Username() string {
	value := os.Getenv("username")
	return value
}

func Password() string {
	value := os.Getenv("password")
	return value
}

func Host() string {
	value := os.Getenv("host")
	return value
}

func Name() string {
	value := os.Getenv("name")
	return value
}