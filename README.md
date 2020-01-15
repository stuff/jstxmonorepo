This is a dummy application, splitted in 3 packages in a monorepo handled by yarn workspace.

## key features

- Shared config for all tools, currently:
  _ babel
  _ eslint
  _ webpack
  _ typescript
- Typescript and Javascript files are mixed, so we can migrate to TS step by step, or have sdk fully written in TS and the main app in JS.
- watcher listening to change for any package

## missing

- tests

## useful articles

- https://iamturns.com/typescript-babel/
