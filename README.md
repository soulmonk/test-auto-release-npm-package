# test-auto-release-npm-package

# TODO how to implement

# Flow

## Manual / automatic

- do tasks
- before release create pr:
  - `npm version minor --no-git-tag-version` with bumping
- after merge bump release, trigger git action by running \
`npm run create-tag` \
it should switch to main, create tag based on version in package json and push it
- wait and check create release after git action done )

## To do it Automatic

Update `npm-publish.yml` flow `on: push: branches: [ main ]`

and then:
- open pr
- do not forget before marge to run `npm version minor` 

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
