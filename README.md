# test-auto-release-npm-package

# How to implement

- copy `.github/workflows/npm-publish.yml` to your project, made some adjustments, if necessary
  - dependency on test
  - remove test flow if you have separate CI/CD for testing (with complicated)
- set up secret for project `NPM_TOKEN`
- every time you push a new tag it will create a new publishing


# Flow

## Manual / automatic

- do tasks
- before release create pr:
  - easy way `npm version minor --no-git-tag-version` with bumping
- after merge bump release, trigger git action by running \
`npm run create-tag` \
it should switch to main, create tag based on version in package json and push it
- wait and check create release after git action done )

## To do it Automatic

Note: Not all changes in the main branch can be triggered as a new publication

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
