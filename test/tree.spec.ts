import { getLevelContent, TreeStruct } from '../src/tree'

describe('getLevelContent unit test', () => {
  it('case1: return empty array when pass a nolegal object', () => {
    const input: any = {}
    const output: string[][] = []
    expect(getLevelContent(input, 1)).toEqual(output)
  })

  it('case2: return correct when maxDeep grater than tree deep', () => {
    const input = {
      title: 'root'
    }
    const maxDeep = 4
    const output: string[][] = [['root'], [''], [''], ['']]
    expect(getLevelContent(input, maxDeep)).toEqual(output)
  })

  it('case3: return correct when maxDeep less than tree deep', () => {
    const input: TreeStruct = {
      title: 'root',
      children: [
        {
          title: 'node1',
          children: [
            {
              title: 'leaf1'
            }
          ]
        },
        {
          title: 'node2',
          children: [
            {
              title: 'leaf2'
            }
          ]
        }
      ]
    }
    const maxDeep = 2
    const output: string[][] = [
      ['root', ''],
      ['node1', 'node2']
    ]

    expect(getLevelContent(input, maxDeep)).toEqual(output)
  })

  it('case4: return correct when maxDeep equal node deep', () => {
    const input: TreeStruct = {
      title: 'root',
      children: [
        {
          title: 'node1',
          children: [
            {
              title: 'leaf1'
            }
          ]
        },
        {
          title: 'node2',
          children: [
            {
              title: 'leaf2'
            }
          ]
        }
      ]
    }
    const maxDeep = 3
    const output: string[][] = [
      ['root', ''],
      ['node1', 'node2'],
      ['leaf1', 'leaf2']
    ]
    expect(getLevelContent(input, maxDeep)).toEqual(output)
  })

  it('case5: return correct', () => {
    const input: TreeStruct = {
      title: 'root',
      children: [
        {
          title: 'node1',
          children: [
            {
              title: 'leaf1'
            },
            {
              title: 'leaf2'
            }
          ]
        },
        {
          title: 'node2',
          children: [
            {
              title: 'leaf3'
            },
            {
              title: 'node3',
              children: [
                {
                  title: 'leaf4'
                },
                {
                  title: 'leaf5'
                }
              ]
            }
          ]
        }
      ]
    }
    const maxDeep = 4
    const output: string[][] = [
      ['root', '', '', '', ''],
      ['node1', '', 'node2', '', ''],
      ['leaf1', 'leaf2', 'leaf3', 'node3', ''],
      ['', '', '', 'leaf4', 'leaf5']
    ]
    expect(getLevelContent(input, maxDeep)).toEqual(output)
  })
})
