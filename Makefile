GOOSE_BIN=goose
UNAME_S=$(shell uname -s)

.PHONY: build
build:
	@npm run build -d

deploy: build 
	@firebase deploy --only hosting:testing-40917

act:
	@act push  \
	--container-architecture linux/amd64 \
	--secret-file github.secrets
