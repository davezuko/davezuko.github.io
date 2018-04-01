## [zuko.me](https://zuko.me)

My homepage, nothing fancy.

## Table of Contents
* [Installation](#installation)
* [Deployment](#deployment)

## Installation

Ensure you have `node@^8.0.0` and `yarn@^1.5.1` installed globally.

```sh
git clone https://github.com/davezuko/zuko.me   # clone the project
cd zuko.me                                      # enter the project
yarn                                            # install dependencies
yarn start                                      # start the dev server
```

## Deployment

```sh
yarn make     # compile assets to ./dist
```

Then deploy `dist` folder to web server of choice.
