# typescript-tree

a typescript library for managing a generic tree

## Usage

To use this TypeScript library for managing a generic tree, follow these steps:

1. Install the library by running the following command:

   ```bash
   npm install typescript-tree
   ```

2. Import the library into your TypeScript file:

   ```typescript
   import { Tree } from "typescript-tree";
   ```

3. Create a new instance of the `Tree` class:

   ```typescript
   const tree = new Tree();
   ```

4. Add nodes to the tree using the `addNode` method:

   ```typescript
   tree.addNode("root");
   tree.addNode("child", "root");
   ```

5. Retrieve information about the tree using the provided methods:

   ```typescript
   const rootNode = tree.getNode("root");
   const childNode = tree.getNode("child");
   const children = tree.getChildren("root");
   ```

6. Perform operations on the tree, such as removing nodes or traversing the tree structure.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on the [GitHub repository](https://github.com/your-username/typescript-tree).

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/your-username/typescript-tree/blob/main/LICENSE) file for more information.
