# typescript-tree

a typescript library for managing a generic tree

## Installation

To install the `typescript-tree` library, run the following command:

```bash
npm install typescript-tree
```

## Code Example

Here is an example of how to use the `Node` class from the `typescript-tree` library:

```typescript
import { Node } from "typescript-tree";

// Create a new instance of the Node class
const rootNode = new Node("root");

// Add child nodes
const childNode1 = new Node("child1");
const childNode2 = new Node("child2");
rootNode.addChild(childNode1);
rootNode.addChild(childNode2);

// Remove a child node
rootNode.removeChild("child1");

// Find a node by name
const foundNode = rootNode.find("child2");

// Export the tree to a file
rootNode.exportToFile("tree.json");

// Import the tree from a file
const importedNode = new Node("root");
importedNode.importFromFile("tree.json");
```

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on the [GitHub repository](https://github.com/your-username/typescript-tree).

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/your-username/typescript-tree/blob/main/LICENSE) file for more information.
