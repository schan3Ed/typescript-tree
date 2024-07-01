import Node from "../src/index";

describe("testing typescript tree", () => {
  test("testing find", () => {
    const node = new Node("first node");
    const childNode1 = new Node("child node 1");
    const childNode2 = new Node("child node 2");
    const childchildNode1 = new Node("child child node 1");

    childNode1.addChild(childchildNode1);
    node.addChild(childNode1);
    node.addChild(childNode2);

    node.find("child node 2");
    node.exportToFile("./tests/testTree.json");

    const newNode = new Node("");
    newNode.importFromFile("./tests/testTree.json");
  });
});
