## Upgrade Creat-React-App

> [Upgrading a create-react-app project to a SSR + code splitting setup](https://medium.com/bucharestjs/upgrading-a-create-react-app-project-to-a-ssr-code-splitting-setup-9da57df2040a)
分为四项：

- SSR(Server-Side Rendering)
- 使用 React-loadable 进行 code-splitting
- 服务端的 code-splitting
- 使用 webpack 的 chunkNames

### SSR

采用 Express 框架实现：

```
yarn add express
```

> To be continued...