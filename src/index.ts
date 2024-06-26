export class Node {
  Children: Node[];
  Data: any;
  Key: string;

  constructor(name: string) {
    this.Key = name;
    this.Children = [];
  }

  addChild(child: Node) {
    this.Children.push(child);
  }

  removeChild(name: string) {}

  find(name: string): Node {
    // DFS search
    let tobeVisit: Node[] = [];
    tobeVisit.push(this);

    while (tobeVisit.length) {
      const current = tobeVisit.pop();

      console.log(current.Key);
      if (current.Key == name) {
        return current;
      }

      tobeVisit = tobeVisit.concat(current.Children.reverse());
    }
  }

  exportToFile(fileName: string) {}

  importFromFile(fileName: string) {}
}

export default Node;
