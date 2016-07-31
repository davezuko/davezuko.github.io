declare module 'webpack-dev-middleware' {
  interface middleware {
    (...args: any[]): any
  }
  export = middleware
}

declare module 'webpack-hot-middleware' {
  interface middleware {
    (...args: any[]): any
  }
  export = middleware
}

declare module 'connect-history-api-fallback' {
  interface middleware {
    (...args: any[]): any
  }
  export = middleware
}
