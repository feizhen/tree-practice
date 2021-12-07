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
      title: 'a',
      children: [
        {
          title: 'b',
          children: [
            {
              title: 'c'
            },
            {
              title: 'd'
            }
          ]
        },
        {
          title: 'e',
          children: [
            {
              title: 'f'
            },
            {
              title: 'g',
              children: [
                {
                  title: 'h'
                },
                {
                  title: 'i'
                }
              ]
            }
          ]
        }
      ]
    }
    const maxDeep = 4
    const output: string[][] = [
      ['a', '', '', '', ''],
      ['b', '', 'e', '', ''],
      ['c', 'd', 'f', 'g', ''],
      ['', '', '', 'h', 'i']
    ]
    expect(getLevelContent(input, maxDeep)).toEqual(output)
  })

  it('case6: return correct when a node contains 3 child nodes', () => {
    const input: TreeStruct = {
      title: 'a',
      children: [
        {
          title: 'b',
          children: [
            {
              title: 'e'
            },
            {
              title: 'f',
              children: [
                {
                  title: 'k'
                },
                {
                  title: 'l'
                }
              ]
            }
          ]
        },
        {
          title: 'c',
          children: [
            {
              title: 'g'
            },
            {
              title: 'h'
            },
            {
              title: 'i'
            }
          ]
        },
        {
          title: 'd',
          children: [
            {
              title: 'j'
            }
          ]
        }
      ]
    }

    const maxDeep = 4
    const output: string[][] = [
      ['a', '', '', '', '', '', ''],
      ['b', '', '', 'c', '', '', 'd'],
      ['e', 'f', '', 'g', 'h', 'i', 'j'],
      ['', 'k', 'l', '', '', '', '']
    ]
    expect(getLevelContent(input, maxDeep)).toEqual(output)
  })

  it('case7: return correct when a node contains 4 child nodes', () => {
    const input: TreeStruct = {
      title: 'a',
      children: [
        {
          title: 'b',
          children: [
            {
              title: 'f'
            },
            {
              title: 'g'
            }
          ]
        },
        {
          title: 'c',
          children: [
            {
              title: 'h'
            }
          ]
        },
        {
          title: 'd',
          children: [
            {
              title: 'i'
            },
            {
              title: 'j'
            }
          ]
        },
        {
          title: 'e',
          children: [
            {
              title: 'k'
            }
          ]
        }
      ]
    }
    const maxDeep = 3
    const output: string[][] = [
      ['a', '', '', '', '', ''],
      ['b', '', 'c', 'd', '', 'e'],
      ['f', 'g', 'h', 'i', 'j', 'k']
    ]
    expect(getLevelContent(input, maxDeep)).toEqual(output)
  })

  it('case8: return correct when a node contains many child nodes', () => {
    const input: TreeStruct = {
      title: 'a',
      children: [
        {
          title: 'b'
        },
        {
          title: 'c'
        },
        {
          title: 'd'
        },
        {
          title: 'e'
        },
        {
          title: 'f'
        },
        {
          title: 'g'
        }
      ]
    }

    const maxDeep = 2
    const output: string[][] = [
      ['a', '', '', '', '', ''],
      ['b', 'c', 'd', 'e', 'f', 'g']
    ]
    expect(getLevelContent(input, maxDeep)).toEqual(output)
  })
})
