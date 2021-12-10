# test-auto-release-npm-package


# Q&A

## Cannot get access to private repository

`npm publish --access public`

## TODO
`npm version minor --no-git-tag-version`
` && git push --tags`
`$(grep -m1 version package.json | awk -F: '{ print $2 }' | sed 's/[", ]//g')`

# Links

- Good example of workflows: https://github.com/MylesBorins/node-osc/tree/main/.github/workflows
- https://stedolan.github.io/jq
