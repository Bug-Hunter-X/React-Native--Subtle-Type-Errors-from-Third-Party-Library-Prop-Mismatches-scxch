The solution involves carefully checking the documentation of third-party libraries to understand the expected types of their props.  Using TypeScript (or Flow) for static type checking can greatly improve the chances of catching these errors during development.

Here's the corrected code:

```javascript
// FixedComponent.js
import React from 'react';
import { MyComponent } from 'some-third-party-library';

const FixedComponent = () => {
  const someProp = "123"; // Correct type

  return <MyComponent someProp={someProp} />;
};

export default FixedComponent;
```

By ensuring that the `someProp` is explicitly a string, we prevent the runtime error.  Always refer to the library's documentation for the correct prop types.