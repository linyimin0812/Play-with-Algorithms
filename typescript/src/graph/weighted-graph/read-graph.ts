import fs from 'fs'
import path from 'path'
import readline from 'readline'
import { DenseGraph } from './dense-graph/dense-graph'
import { SparseGraph } from './sparse-graph/sparse-graph';
export const readGraph = async function(filename: string, graphType: 'dense' | 'sparse', isDirected?: boolean): Promise<DenseGraph | SparseGraph> {
  const rl = readline.createInterface({
    input: fs.createReadStream(path.resolve(__dirname, filename)),
    crlfDelay: Infinity,
  })  
  return new Promise<DenseGraph | SparseGraph>((resolve, reject) => {
    let isFirstLine = true
    let graph: DenseGraph | SparseGraph
    rl.on('line', (data: string) => {
      // 去除多余的行
      if (data.length === 0) {
        return
      }
      if (isFirstLine) {
        const v = parseInt(data.split(' ')[0], 10)
        switch(graphType) {
          case 'dense':
            graph = new DenseGraph(v, isDirected || false)
            break
          case 'sparse':
            graph = new SparseGraph(v, isDirected || false) 
            break         
          default:
            throw new Error('not support the type')
        }
        isFirstLine = false
        return
      }
      const edgeInfo = data.split(' ')
      const from     = parseInt(edgeInfo[0], 10)
      const to       = parseInt(edgeInfo[1], 10)
      const weight   = parseFloat(edgeInfo[2])
      graph.addEdge(from, to, weight)
    })  
    
    rl.on('close', () => {
      resolve(graph)
    })
  })
}