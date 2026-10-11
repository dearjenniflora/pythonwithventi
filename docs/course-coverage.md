# L3–L5 课件覆盖表

页码按提供 PDF 的物理页计；标题、目录、重复答案页合并到相应知识点。每个 ID 对应一个独立教学页和一道练习。L3 共 30，L4 共 24，L5 共 33；每三点组成一封书简。

## L3 Operators and Conditionals

| 页码 | 内容 | 关卡 ID（前缀 l3-） |
| --- | --- | --- |
| 3–6、9 | 算术、浮点除法、向下整除、余数、乘方、除零、浮点近似 | arithmetic, division, floor, modulo, power, zero, float |
| 7–8 | 公式 x²y/(z+1) | formula |
| 10–13 | 六种关系运算、数值比较、链式比较 | compare, chain |
| 14–18 | not/and/or、真假、短路及返回操作数、优先级 | not, and, or, short, precedence |
| 19–20 | 赋值与 += 等复合赋值 | augmented |
| 21–22 | is/is not 与对象身份 | identity |
| 23–24 | in/not in；字典查键 | membership |
| 25–29 | 单分支、双分支、冒号与缩进 | if, else |
| 30–33 | 奇偶、取小数部分 | even, decimal |
| 34–37 | 多分支、正负零分类 | elif, sign |
| 38–41 | 组合条件、课件计算器 | compound, retire |
| 42–43 | 三数最大值，含相等边界 | greatest |
| 44–47 | 嵌套条件、嵌套取最大值 | nested, greatest-nested |
| 48 | 总结中的位运算术语，标为补充基础 | bitwise |

矩阵乘法 @ 仅在优先级表中出现，保留其名称与用途说明，不引入课件没有讲解的矩阵库。条件计算器是程序逻辑示例，不是财务建议。含输入的示例用固定变量或函数参数模拟，避免浏览器弹窗阻塞。

## L4 Loops

| 页码 | 内容 | 关卡 ID（前缀 l4-） |
| --- | --- | --- |
| 3–5 | 重复、序列遍历、求和、计数 | for, sum, count |
| 6 | range 的起终点、步长、len 与索引 | range, step, index |
| 7–8 | for 阶乘，含 0! | factorial-for |
| 9–10 | 七的乘法表 | table |
| 11–12 | 区间偶数求和，包含两端 | even-sum |
| 13–14 | 完全数与真因子 | perfect |
| 15–17 | while、哨兵值、更新变量与无限循环 | while, sentinel, termination |
| 18–19 | while 阶乘 | factorial-while |
| 20–21 | break 与 continue | break, continue |
| 22–23 | 嵌套次数、行列、矩形与三角形 | nested-count, rectangle, triangle |
| 24–25 | 外层 for / 内层 while，每个名字打印五次 | five |
| 26–27 | 外层 while / 内层 for，打印 1–100 完全数 | perfects |
| 28–29 | 嵌套中的 break / continue 作用范围 | nested-break, nested-continue |
| 30–31 | pass 与注释区别、总结 | pass |

输入哨兵例子以预先给定的序列模拟；其他循环任务真实执行。阶乘限定非负整数；需要更长时间的综合编程题允许自行慢慢完成。

## L5 String

| 页码 | 内容 | 关卡 ID（前缀 l5-） |
| --- | --- | --- |
| 3–7 | Unicode、ASCII 容量、UTF-8、Unicode 转义 | unicode, ascii, utf8, unicode-escape |
| 8–9 | 单双引号、三引号、转义、原始字符串 | quotes, triple, raw |
| 3、10–11、18–19 | 不可变性、内容比较、身份比较 | immutable, equal, identity |
| 12、16 | 正负索引、越界、索引与切片区别 | index, negative-index, bounds |
| 13–15 | 切片边界、步长、倒序练习 | slice, reverse |
| 17–19 | 拼接、重复、遍历、子串判断 | concat, repeat, traverse, contains |
| 20–21 | 重叠子串计数、任意窗口长度的范围说明 | overlap |
| 22–23 | len、str、lower/upper、replace、join | len, str, case, replace, join |
| 24–26 | split/maxsplit、strip/chars、find/start/end | split, strip, find |
| 27–28 | 忽略大小写统计元音 | vowels |
| 29–30 | isalpha、isdigit、keyword、完整变量名练习 | alpha, digits, keyword, valid-name |
| 31–34 | 总结概念，合并到上述对应知识点 | 全章复习 |

标准 ASCII 与扩展 8 位字符表分别说明；Unicode 编号和 UTF-8 编码分别说明；len 按码点计数，避免称为字节数。三引号是字符串，不是多行注释。原始字符串补充末尾反斜杠边界；字符串内容不使用 is 判断。课件变量名检查算法在最终关限定 ASCII，正文另提示完整 Unicode 标识符可用 isidentifier()。
