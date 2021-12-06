/** 简单的树结构 */
export interface TreeStruct {
  title: string
  children?: TreeStruct[]
}

/**
 *
 * @param {TreeStruct} tree 树节点
 * @param {number} maxDeep 指定的最大深度
 */
export const getLevelContent = (tree: TreeStruct, maxDeep: number): string[][] => {
  // TODO: 完成该函数
  const result: string[][] = []

  return result
}
