GOOSE_BIN=goose
UNAME_S=$(shell uname -s)

act:
	@act push  \
	--container-architecture linux/amd64 \
	--secret-file github.secrets
