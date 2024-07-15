import { readFileSync, writeFileSync } from "fs";

export class Node {
  Children: Node[];
  Data: any;
  Key: string;

  constructor(name: string, data: any = null) {
    this.Key = name;
    this.Children = [];
    this.Data = data;
  }

  addChild(child: Node) {
    this.Children.push(child);
  }

  removeChild(name: string) {
    this.Children = this.Children.filter((child) => {
      return child.Key != name;
    });
  }

  find(name: string): Node {
    // DFS search
    let tobeVisit: Node[] = [];
    tobeVisit.push(this);

    while (tobeVisit.length) {
      const current = tobeVisit.pop();

      if (current.Key == name) {
        return current;
      }

      tobeVisit = tobeVisit.concat(current.Children.reverse());
    }
  }

  exportToFile(fileName: string) {
    const treeJSON = treeToJSON(this);
    writeFileSync(fileName, JSON.stringify(treeJSON));
  }

  importFromFile(fileName: string) {
    const json = readFileSync(fileName);
    const node = jsonToTree(JSON.parse(json.toString()));

    this.Children = node.Children;
    this.Data = node.Data;
    this.Key = node.Key;
  }
}

function treeToJSON(node: Node): any {
  let obj: any = {
    name: node.Key,
    data: node.Data,
  };

  obj.children = node.Children.map((child) => treeToJSON(child));

  return obj;
}

function jsonToTree(json: any): Node {
  let node: Node = new Node(json.name);

  if (json.children && json.children.length > 0) {
    node.Children = json.children.map((childJson: any) =>
      jsonToTree(childJson)
    );
  }

  return node;
}

export default Node;
