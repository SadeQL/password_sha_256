package main

import (
	"crypto/md5"
	"crypto/sha256"
	"fmt"
)

func main() {
	message := []byte("AzertyQwerty")

	fmt.Printf("MD5: %x\n\n", md5.Sum(message))
	fmt.Printf("SHA256: %x\n\n", sha256.Sum256(message))
}
