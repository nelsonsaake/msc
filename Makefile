.PHONY: dep
.SILENT:
.ONESHELL:

dep:
	git add .
	git commit -m "chore: commit everything"
	git push origin main

build:
	cd msc
#	npm run export
	copy out ..\doc
