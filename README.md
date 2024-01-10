# ActivityPub Types

Fork from <https://github.com/SiranWeb/activitypub-types>

## Installation

```bash
npm i YieldRay/activitypub-types
```

## Available types

Implemented and documented every structure from [specification](https://www.w3.org/TR/activitystreams-vocabulary).
You can use interfaces and extend them by yourself, or you can use specified fields types:

```ts
// All models interfaces starts with AP
import {
    APObject,
    APNote,
    ContextField,
    ContentMapField,
} from 'activitypub-types'

// For Deno
import {
    APObject,
    APNote,
    ContextField,
    ContentMapField,
} from 'https://denopkg.com/yieldray/activitypub-types/index.ts'
```

## License

[MIT](LICENSE)
