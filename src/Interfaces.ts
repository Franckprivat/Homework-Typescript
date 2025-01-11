// interface Point {
//     x: number
// }

import ts from "typescript"

// interface Point {
//     x: number
// }

interface Point {
    x: number
    y: number
    // origin: {x: 0, y: 0}
    // get (): number
}

class TwoDimensionPoint implements Point {
    x = 0
    y = 0
}

function Draw(p: Point) {

}

Draw(new TwoDimensionPoint())



// ## Type

````ts 
type NAME = ...
```

- Peut utiliser les types primaires;
- Ne peut être redéfini;

## Interface

```ts
interface NAME {}

- Peut être étendu;
-Peut être Implémenté;


