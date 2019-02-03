import readline         from 'readline'
import fs               from 'fs'
import path             from 'path'
import { DenseGraph   } from './dense-graph/dense-graph'
import { SparseGraph  } from './sparse-graph/sparse-graph'

export const readGraph = async function (filename: string, graphType: 'dense' | 'sparse', isDirected?: boolean): Promise<DenseGraph | SparseGraph> {
  const rl = readline.createInterface({
    input: fs.createReadStream(path.resolve(__dirname, filename)),
    crlfDelay: Infinity,
  })
  let isFirstLine = true
  
  let graph: DenseGraph | SparseGraph
  
  return new Promise<DenseGraph | SparseGraph> ((resolve, reject) => {
    rl.on('line', data => {
      // 去掉多余的空行
      if (data.length === 0) {
        return
      }
      if (isFirstLine) {
        const vertex = parseInt(data.split(' ')[0])
        switch (graphType) {
          case 'dense':
            graph = new DenseGraph(vertex, isDirected || false)
            break
          case 'sparse':
            graph = new SparseGraph(vertex, isDirected || false) 
            break
          default: throw new Error ('no supprted the type')
        }
        isFirstLine      = false
        return
      }
      const start = parseInt(data.split(' ')[0])
      const end   = parseInt(data.split(' ')[1])
      graph.addEdge(start, end)
    })
    
    rl.on('close', () => {
      resolve(graph)
    })
  })
}
