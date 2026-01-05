# Changesets

This folder is used for managing versions and changelogs.

## Adding a changeset

Run `bunx changeset` to create a new changeset. You'll be prompted to:

1. Select what kind of change this is (patch/minor/major)
2. Write a summary of the change

## Releasing

When changesets are merged to main, the release workflow will:

1. Create a "Version Packages" PR with version bumps and changelog updates
2. When that PR is merged, publish to npm automatically

For more info, see [changesets documentation](https://github.com/changesets/changesets).
