---
icon: edit
date: 2022-01-01
category:
  - CategoryA
tag:
  - tag A
  - tag B
---

# 文章 1

## 标题 2

这里是内容。
```java
import java.util.*;
class Main{
  public static void main(String[] args){

  }
  // 模拟函数调用栈
  private Stack<TreeNode> stk = new Stack<>();

  // 左侧树枝一撸到底
  private void pushLeftBranch(TreeNode p) {
      while (p != null) {
          /*******************/
          /** 前序遍历代码位置 **/
          /*******************/
          stk.push(p);
          p = p.left;
      }
  }

  public List<Integer> traverse(TreeNode root) {
      // 指向上一次遍历完的子树根节点
      TreeNode visited = new TreeNode(-1);
      // 开始遍历整棵树
      pushLeftBranch(root);

      while (!stk.isEmpty()) {
          TreeNode p = stk.peek();

          // p 的左子树被遍历完了，且右子树没有被遍历过
          if ((p.left == null || p.left == visited) 
            && p.right != visited) {
              /*******************/
              /** 中序遍历代码位置 **/
              /*******************/
              // 去遍历 p 的右子树
              pushLeftBranch(p.right);
          }
          // p 的右子树被遍历完了
          if (p.right == null || p.right == visited) {
              /*******************/
              /** 后序遍历代码位置 **/
              /*******************/
              // 以 p 为根的子树被遍历完了，出栈
              // visited 指针指向 p
              visited = stk.pop();
          }
      }
  }
}

```
### 标题 3

这里是内容。
::: info
``` java
123
```
:::