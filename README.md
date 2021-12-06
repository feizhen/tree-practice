# 一个简单的树练习

## 需求描述

有一颗树，树的结构很简单

```ts
interface TreeStruct {
  title: string

  children: TreeStruct[]
}
```

需要对这颗树进行遍历，生成一个 `m*n` 的矩阵，其中:

- `m` 代表树的叶子节点数
- `n` 代码树的深度

例如：

输入为：

```js
{
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
```

输出为：

```js
[
  ['a', '', '', '', ''],
  ['b', '', 'e', '', ''],
  ['c', 'd', 'f', 'g', ''],
  ['', '', '', 'h', 'i'],
]
```

示意图

```
        a                    [
      __|__                    ['a', '', '', '', ''],
     |     |                   ['b', '', 'e', '', ''],
     b     e       =>          ['c', 'd', 'f', 'g', ''],
    _|_   _|_                  ['', '', '', 'h', 'i'],
   |   | |   |               ]
   c   d f   g
            _|_  
           |   |
           h   i                       
```


## 如何开发

### 1.安装依赖

```bash

npm install

# or

yarn install

```

### 2.启动开发

```bash

npm run test:watch

# or

yarn test:watch

```

启动后即可看到所有测试用例结果，修改 `src/tree.ts` 里的代码并保持即可实时看到测试结果，所有测试用例都通过代表开发完成
