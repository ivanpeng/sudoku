import { Component, OnInit } from '@angular/core';

class Graph {
  nodes: Node[];
  adjacencyMatrix: number[][];

  constructor() {
    // Need 81 nodes for sure, along with 81*20 edges
    let nodes = new Array<Node>(81);
    let adjacencyMatrix = new Array<Array<number>>(81);
    for (let i = 0; i < 9; i++){
      for (let j = 0; j < 9; j++){
        nodes.push(new Node(i, j, 0));
      }
    }
    for (let i = 0; i < 81; i ++) {
      adjacencyMatrix[i] = new Array<number>(81);
      for (let j = 0; j < 81; j++) {
        let x_i = Math.trunc(i/9), y_i = i%9, x_j = Math.trunc(j/9), y_j = j%9;
        if (i != j && (x_i == x_j || y_i == y_j || (Math.trunc(x_i/3) == Math.trunc(x_j/3) && Math.trunc(y_i/3) == Math.trunc(y_j/3))))
          adjacencyMatrix[i][j] = 1;
      }
    }
    this.nodes = nodes;
    this.adjacencyMatrix = adjacencyMatrix;
  }

}

class Node {
  x: number;
  y: number;
  n: number;
  value: number;

  constructor(x, y, value) {
    this.x = x;
    this.y = y;
    this.n = x * 9 + y;
    this.value = value;
  }
}

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
