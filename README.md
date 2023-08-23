# keystone pnpm workspace problem 

this repo shows a problem when trying to create a keystone.js project
in a pnpm workspace.

It was created as such

```
mkdir test-pnpm
cd test-pnpm
pnpm create
# then create the `pnpm-workspace.yaml`
pnpm create keystone-app
# name the directory server
cd server
rm -rf yarn.lock node_modules
pnpm install
```

As the installation fails, update all dependencies to their latest version

```
pnpm upgrade --interactive --latest
```

Then apply the fix from https://github.com/keystonejs/keystone/issues/8581#issuecomment-1590581788

Now build the project
```
node build.js
```

This produces
```

Error occurred prerendering page "/init". Read more: https://nextjs.org/docs/messages/prerender-error
TypeError: Cannot read properties of null (reading 'useContext')
    at useContext (/Users/rainer/git/private/test-pnpm/server/node_modules/react/cjs/react.development.js:1618:21)
    at useHtmlContext (/Users/rainer/git/private/test-pnpm/server/node_modules/next/dist/shared/lib/html-context.js:29:43)
    at Html (/Users/rainer/git/private/test-pnpm/server/.keystone/admin/.next/server/chunks/332.js:678:119)
    at renderWithHooks (/Users/rainer/git/private/test-pnpm/node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/cjs/react-dom-server.browser.development.js:5658:16)
    at renderIndeterminateComponent (/Users/rainer/git/private/test-pnpm/node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/cjs/react-dom-server.browser.development.js:5731:15)
    at renderElement (/Users/rainer/git/private/test-pnpm/node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/cjs/react-dom-server.browser.development.js:5946:7)
    at renderNodeDestructiveImpl (/Users/rainer/git/private/test-pnpm/node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/cjs/react-dom-server.browser.development.js:6104:11)
    at renderNodeDestructive (/Users/rainer/git/private/test-pnpm/node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/cjs/react-dom-server.browser.development.js:6076:14)
    at finishClassComponent (/Users/rainer/git/private/test-pnpm/node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/cjs/react-dom-server.browser.development.js:5688:3)
    at renderClassComponent (/Users/rainer/git/private/test-pnpm/node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/cjs/react-dom-server.browser.development.js:5696:3)
- info Generating static pages (15/15)
unhandledRejection ExportError: Export encountered errors on following paths:
        /
        /_error: /404
        /_error: /500
        /init
        /no-access
        /posts
        /posts/[id]
        /posts/create
        /signin
        /tags
        /tags/[id]
        /tags/create
        /users
        /users/[id]
        /users/create
    at /Users/rainer/git/private/test-pnpm/node_modules/.pnpm/next@13.4.19_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/export/index.js:625:19
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async Span.traceAsyncFn (/Users/rainer/git/private/test-pnpm/node_modules/.pnpm/next@13.4.19_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/trace/trace.js:105:20)
    at async /Users/rainer/git/private/test-pnpm/node_modules/.pnpm/next@13.4.19_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/index.js:1604:21
    at async Span.traceAsyncFn (/Users/rainer/git/private/test-pnpm/node_modules/.pnpm/next@13.4.19_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/trace/trace.js:105:20)
    at async /Users/rainer/git/private/test-pnpm/node_modules/.pnpm/next@13.4.19_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/index.js:1460:17
    at async Span.traceAsyncFn (/Users/rainer/git/private/test-pnpm/node_modules/.pnpm/next@13.4.19_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/trace/trace.js:105:20)
    at async Object.build (/Users/rainer/git/private/test-pnpm/node_modules/.pnpm/next@13.4.19_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/index.js:148:29)
    at async build (/Users/rainer/git/private/test-pnpm/node_modules/.pnpm/@keystone-6+core@5.5.1_@prisma+generator-helper@5.2.0/node_modules/@keystone-6/core/scripts/cli/dist/keystone-6-core-scripts-cli.cjs.dev.js:535:3)
    at async /Users/rainer/git/private/test-pnpm/server/build.js:6:3 {
  code: 'NEXT_EXPORT_ERROR'
}
```