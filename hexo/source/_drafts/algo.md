https://leetcode.com/problems/number-of-ways-to-arrive-at-destination/  
#周赛题 #简单 #1981 
做的时候很容易联想到最短路的Floyd算法，因为其中d[i,j] = d[i,k] + d[k,j]，而这里的count正好是c[i,j] = c[i,k] * c[k,i]，结果不对，感觉这里的c[i,k]不是最终解。之后转念一想Dijkstra反而是通的，count是累加的。然后一定要熟悉一下%mod的操作，不然做周赛不方便 

https://leetcode.com/problems/number-of-ways-to-separate-numbers/  
#周赛题 #难 #1977  
整个周赛正常做完的就41个人，其实dp是好想到的，dp[i,j]肯定的一个代表位置，一个代表长度，因为上一个数可以用这两个表示出来了。关键是dp后面还有一层优化，就很困难了，用到lcp去preprocess 

https://leetcode.com/problems/minimize-the-difference-between-target-and-chosen-elements/  
#周赛题 #简单 #1981  
正常的一道分组背包问题，提一个点，分组背包优化的话，优化多在组内元素是否能减少选择。 

https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/
#随机题 #简单 #164
通。二分法，注意worst case O(N)

https://leetcode.com/problems/strong-password-checker/
#随机题 #难 #420
不通。没想法。
背后没有算法，分类讨论。
1.加减是硬性的。根据长度分为三种情况，需要加，不需要加减，需要减
2.替换是由不能相邻和字符特性两个限制条件决定的，所以为max(needReplace,needUpper+needLower+needDigit)
3.利用加减可以尽可能地抵消不能相邻所带来的replace。加法时加在中间，减法减在末尾。减法最后都是余2。

https://leetcode.com/problems/minimum-number-of-days-to-eat-n-oranges/
#随机题 #中等 #1553
不通。贪心应该不成立，搜索太复杂，或许可以倒推所有解。
反而很简单，因为吃一个不一定不好-》贪心不成立-***-》吃一个是为了后面吃多个-》所以选择是min(n%2+f(n/2),n%3+f(n/3))，因为问题规模不断缩小，所以是O(N)~O(N^^(log2/log3))时间复杂度

https://leetcode.com/problems/my-calendar-iii/
#随机题 #简单 #732
通。得出O(NlogN)堆解，猜想segment tree（未学），事实上segment tree解可以到O(logN)。看题解很多人用c++ map，c++ map背后是red-black-tree也是O(NlogN)。

https://leetcode.com/problems/similar-string-groups/
#随机题 #简单 #839
通。我以为没做出来，暴力解就是就是O(n^^2*m) 的并查集。不过的确需要之后再写一遍。

https://leetcode.com/problems/word-break-ii/
#随机题 #中等 #140
通一半吧。基本上知道dp取break point，set存词库，知道dp的时间复杂度是O(N*m),m<10,O(N),知道之后要存所有的情况可能需要很大空间。想到因为只有10所以可以space compression。
后面一半最好是dp的时候记录来源点，然后再backtracking，这样生成的时候空间最小，时间复杂度为O(N*totalNumResult)。这个应该是没有想清楚的。顺推加space compression（就是只记录最长词长的解集）应该做不到相等时间复杂度和空间复杂度，因为错误的路也会被带到最后，这样dp就白搞了。所以算想对了一半。

https://leetcode.com/problems/tiling-a-rectangle-with-the-fewest-squares/
#随机题 #难 #1240
不通。想不到好的搜索策略。
几个错误的尝试，都无法证明搜索是完整的：从四周包围，转化为平方数，处理多边形。
正确的搜索方法是用skyline，由最低点向上增加，取各种高度，这个需要想到。我觉得此题必须要想到skyline作为保底方法。

https://leetcode.com/problems/maximum-xor-with-an-element-from-array/
#随机题 #？ #1707
不通。位运算题。至少知道暴力解O((N+M)logN+MN)，知道有一些运算重复多遍，不知道如何优化。
前置是421。

https://leetcode.com/problems/largest-color-value-in-a-directed-graph/
#随机题 #简单 #1857
通。就是一个搜索走到底，看结果判断。没有办法剪枝，因为要判断是否有环。

https://leetcode.com/problems/sliding-puzzle/
#随机题 #简单 #773
通。就是一个bfs+backtracking。时间复杂度小于O(2*6!)，很快就想到了。

https://leetcode.com/problems/optimize-water-distribution-in-a-village/
#随机题 #中等 #1168
通。想了8分钟想到搜索算法，O(V(E+V))。加了6分钟之后想到按照图中有些路径是无效的+ 如果```(well[i]<well[j])```则必取i不取j，得到森林。每一个森林最小的node做根，是well的，其他的做最小生成树。minimum spanning tree。时间复杂度是O(ΣO(MST))
其实再进一步转化well[i] = pipe(node(-1),i) node(-1)永远有水，就是完全的MST了。

https://leetcode.com/problems/make-array-strictly-increasing/
#随机题 #中等 #1187
不通。4min之后想错了，不能贪心，有了提示之后7mins可以有dp解
解是2D dp + choice：可以换，可以不换，必须换

https://leetcode.com/problems/reverse-pairs/
#随机题 #难 #493
不通。可以想到O(NlogN)，然后需要一种数据结构可以logN时间插入，logN时间查询前缀和（这里是后缀和，但分析时候是一样的）。
其实这种数据结构是有的，比如平衡的二叉搜索树可以提供logN时间插入和搜索（前缀和可以加在根上），还有就是线段树（或者简化版BIT）。然后就是这篇文章写的真好，太推荐看了，https://leetcode.com/problems/reverse-pairs/discuss/97268/General-principles-behind-problems-similar-to-%22Reverse-Pairs%22

https://leetcode.com/problems/profitable-schemes/
#随机题 #中等 #879
不通。看错题目的意思了。
背包问题，最后是看多少种装法，所以装法是存的值，人数是空间，价值变成一个限制条件，所以加一维。```count = dp[group][people][profit]```压缩掉group，变成2D。最后求```Σdp[j][p>=P]```因为比P大的之后永远大，所以可以合并。时间是O(GNP)

https://leetcode.com/problems/stream-of-characters/
#随机题 #中等 #1032
不通。可以想到一种存贮所有可能性的解，时间复杂度理论上可以和trie一致，但是没有必要了，trie更好。
仔细看了解答，有一种叫ac自动机的东西更好，其实就是在trie上面引入一个fail指针，指向可能的下一个起点，我觉得非常的自然，因为trie本身就是一个“已经对了多少”的数据结构，与其让它直接回开头，为什么不指向一个更短但是可能的结果呢？然后可以顺便了解一下KMP算法，记住它是线性时间。

