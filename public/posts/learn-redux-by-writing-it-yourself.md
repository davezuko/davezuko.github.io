# Learn Redux By Implementing It Yourself

## The Store

### API

```js
type ReduxStore<State> = {
  getState: () => State,
  dispatch: (Action) => void,
  subscribe: (Function) => () => void,
}

store.dispatch({ type: 'INCREMENT' })
store.subscribe(() => {
  console.log('the store has changed!', store.getState())
})
```

## Connecting React


### Provider
```js
class Provider extends React.Component {
  static childContexTypes = {
    store: React.PropTypes.object,
  }

  getChildContext () {
    return {
      store: props.store,
    }
  }

  render () {
    return React.Children.only(this.props.children)
  }
}
```

```js
class App extends React.Component {
  props: {
    store: object,
  }

  render () {
    return (
      <Provider store={store}>
        {/* your application */}
      </Provider>
    )
  }
}
```

### Connect
```js
const connect = (WrappedComponent) => {
  class ConnectedComponent extends React.Component {
    static contextTypes = {
      store: React.PropTypes.object,
    }

    state = {
      storeState: null,
    }

    constructor (props, ctx) {
      super(props, ctx)
      this._store = ctx.store
      this._unsubscribe = this._store.subscribe(() => {
        this.setState({
          storeState: this._store.getState()
        })
      })
    }

    componentWillUnmount () {
      if (this._unsubscribe) {
        this._unsubscribe()
      }
    }

    render () {
      return React.createElement(WrappedComponent, {
        ...this.props,
        state: this.state.storeState,
      })
    }
  }
  return ConnectedComponent
}
```