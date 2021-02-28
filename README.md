# use-webworker

> A react hook wrapper over webworker exposing message data from worker as state

[//]: <> (start placeholder for auto-badger)


[![Build Status](https://img.shields.io/github/workflow/status/technikhil314/use-webworker/publish?style=flat-square&color=%23007a1f)](https://github.com/technikhil314/use-webworker/actions)
[![version](https://img.shields.io/npm/v/use-webworker.svg?style=flat-square)](https://npmjs.org/use-webworker)
[![min size](https://img.shields.io/bundlephobia/min/use-webworker)](https://bundlephobia.com/result?p=use-webworker)
[![mingzip size](https://img.shields.io/bundlephobia/minzip/use-webworker)](https://bundlephobia.com/result?p=use-webworker)
[![license](https://img.shields.io/npm/l/use-webworker?color=%23007a1f)](https://github.com/technikhil314/use-webworker/blob/master/LICENSE)

[![dependancies](https://img.shields.io/librariesio/release/npm/use-webworker?color=%23007a1f)](https://libraries.io/npm/use-webworker)
[![downloads](https://img.shields.io/npm/dm/use-webworker)](https://npmcharts.com/compare/use-webworker)
[![all contributors](https://img.shields.io/github/all-contributors/technikhil314/use-webworker)](https://github.com/technikhil314/use-webworker/graphs/contributors)
[![code of conduct](https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square)](https://github.com/technikhil314/use-webworker/blob/master/CODE_OF_CONDUCT.md)

[![stargazers](https://img.shields.io/github/stars/technikhil314/use-webworker?style=social)](https://github.com/technikhil314/use-webworker/stargazers)
[![number of forks](https://img.shields.io/github/forks/technikhil314/use-webworker?style=social)](https://github.com/technikhil314/use-webworker/fork)

###### :clap: & :heart: to [auto badger](https://github.com/technikhil314/auto-badger) for making badging simple

[//]: <> (end placeholder for auto-badger)




## Install

```bash
npm install --save use-webworker
```

## Usage

```tsx
import useWebworker from 'use-webworker'

function Example {
  const {isProcessing, data: dataFromWorker } = useWebworker({
    url: '/worker.js', // available at %PUBLIC_URL%/worker.js
    data: {}
  });
  if(isProcessing) {
    return <h1>Loading...</h1>
  }
  return <h1>{dataFromWorker}</h1>
}
```

## License

MIT © [technikhil314](https://github.com/technikhil314)
