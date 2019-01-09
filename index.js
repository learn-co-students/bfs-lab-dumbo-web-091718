function bfs(rootNode, vertices, edges){
  rootNode.distance = 0;
  let queue = [rootNode];
  let exploredNodes = [rootNode]
  while(queue.length > 0){
    let node = queue.shift();
    let adjacentNodes = findAdjacent(node.name, vertices, edges)
    queue = queue.concat(adjacentNodes)
    markDistanceAndPredecessor(node, adjacentNodes)
    exploredNodes = exploredNodes.concat(adjacentNodes)
  }
  return exploredNodes;
}

function findAdjacent(nodeName, vertices, edges){
  let adj = edges.filter(edge => {
    return edge.includes(nodeName)
  }).map(edge => {
    return edge.filter(vertex => {
      return vertex !== nodeName
    })[0]
  }).map(vertex => {
    return vertices.find(tex => {
      return tex.name === vertex
    })
  }).filter(vertex => vertex.distance === null)

  return adj
}

function markDistanceAndPredecessor(vertex, adjacentNodes){
  adjacentNodes.map(node => node.distance = 1)
  adjacentNodes.map(node => node.predecessor = vertex)
  return adjacentNodes
}
