export class Node {
  Children: Node[];
  Data: any;
  Key: string;

  constructor(name: string) {
    this.Key = name;
  }

  addChild(child: Node) {
    this.Children.push(child);
  }

  removeChild(name: string) {}

  find(name: string) {}

  exportToFile(fileName: string) {}

  importFromFile(fileName: string) {}

}
