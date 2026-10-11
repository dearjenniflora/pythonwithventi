import type {Letter} from './course';
import type {Lesson,Moment} from './learning';
// Authored from the supplied PDFs; page numbers refer to physical PDF pages.
export const extraLetters:Letter[]=[
  {
    "id": "l3-letter-1",
    "chapter": "L3",
    "title": "分给风的苹果",
    "subtitle": "L3 · 第1封 · 分给风的苹果",
    "place": "晨曦果园",
    "description": "把数量算清楚，给我们的野餐留一份。",
    "dialogue": [
      "篮子已经放好了。你挑苹果，我负责把风挡在外面。",
      "先看看程序怎样计算，再亲手算一小步。"
    ],
    "challenges": [
      {
        "id": "l3-arithmetic",
        "topic": "使用 +、-、*",
        "kind": "output",
        "title": "写出这三行的输出。",
        "explain": "运算符把左右的数变成一个结果。 + 加，- 减，* 乘；负号也可以只放在一个数前。",
        "code": "print(7 + 3)\nprint(7 - 3)\nprint(-2 * 3)",
        "hint": "+ 加，- 减，* 乘；负号也可以只放在一个数前。",
        "visual": [
          "运算符把左右的数变成一个结果。",
          "+ 加，- 减，* 乘；负号也可以只放在一个数前。"
        ],
        "success": "你能使用 +、-、*，并解释代码为什么这样运行。",
        "source": "L3 · p3–5",
        "answer": "10\n4\n-6"
      },
      {
        "id": "l3-division",
        "topic": "区分 / 与整数结果",
        "kind": "output",
        "title": "写出这行除法的输出。",
        "explain": "/ 的结果是浮点数，即使刚好除尽。 4 / 2 的结果是 2.0；小数点体现 float 类型。",
        "code": "print(9 / 3)",
        "hint": "4 / 2 的结果是 2.0；小数点体现 float 类型。",
        "visual": [
          "/ 的结果是浮点数，即使刚好除尽。",
          "4 / 2 的结果是 2.0；小数点体现 float 类型。"
        ],
        "success": "你能区分 / 与整数结果，并解释代码为什么这样运行。",
        "source": "L3 · p4–6,9",
        "answer": "3.0"
      },
      {
        "id": "l3-floor",
        "topic": "理解向下取整 //",
        "kind": "output",
        "title": "预测正数与负数整除的结果。",
        "explain": "// 向负无穷方向取整。 3.5 向下是 3，-3.5 向下是 -4。",
        "code": "print(5 // 2)\nprint(-5 // 2)",
        "hint": "3.5 向下是 3，-3.5 向下是 -4。",
        "visual": [
          "// 向负无穷方向取整。",
          "3.5 向下是 3，-3.5 向下是 -4。"
        ],
        "success": "你能理解向下取整 //，并解释代码为什么这样运行。",
        "source": "L3 · p4–6",
        "answer": "2\n-3"
      }
    ]
  },
  {
    "id": "l3-letter-2",
    "chapter": "L3",
    "title": "琴弦上的先后",
    "subtitle": "L3 · 第2封 · 琴弦上的先后",
    "place": "风车台阶",
    "description": "余数、乘方与括号，让计算各就各位。",
    "dialogue": [
      "台阶上的阳光正好。一小段旋律，我们慢慢排好顺序。",
      "先把运算顺序看清，下一行就更容易写。"
    ],
    "challenges": [
      {
        "id": "l3-modulo",
        "topic": "用 % 求余数",
        "kind": "code",
        "title": "从空白处打印 11 除以 4 的余数。",
        "explain": "% 取出除法剩下的部分。 8 = 3 × 2 + 2，所以余数是 2。",
        "code": "",
        "hint": "8 = 3 × 2 + 2，所以余数是 2。",
        "visual": [
          "% 取出除法剩下的部分。",
          "8 = 3 × 2 + 2，所以余数是 2。"
        ],
        "success": "你能用 % 求余数，并解释代码为什么这样运行。",
        "source": "L3 · p4–5",
        "test": "require_concepts(['Mod'])\nassert __output.strip() == \"3\""
      },
      {
        "id": "l3-power",
        "topic": "用 ** 表示乘方",
        "kind": "output",
        "title": "写出二的四次方。",
        "explain": "** 计算乘方，不是把两个数相乘。 3 ** 2 等于 3 × 3。",
        "code": "print(2 ** 4)",
        "hint": "3 ** 2 等于 3 × 3。",
        "visual": [
          "** 计算乘方，不是把两个数相乘。",
          "3 ** 2 等于 3 × 3。"
        ],
        "success": "你能用 ** 表示乘方，并解释代码为什么这样运行。",
        "source": "L3 · p4–5",
        "answer": "16"
      },
      {
        "id": "l3-precedence",
        "topic": "用括号安排运算顺序",
        "kind": "output",
        "title": "预测两种顺序的结果。",
        "explain": "括号可以明确先算哪一部分。 先括号，再乘方，再正负号，再乘除整除余数，最后加减；同级通常从左到右。比较后依次 not、and、or。@ 是矩阵乘法，本课不做矩阵运算。",
        "code": "print(10 - 2 * 3)\nprint((10 - 2) * 3)",
        "hint": "先括号，再乘方，再正负号，再乘除整除余数，最后加减；同级通常从左到右。比较后依次 not、and、or。@ 是矩阵乘法，本课不做矩阵运算。",
        "visual": [
          "括号可以明确先算哪一部分。",
          "先括号，再乘方，再正负号，再乘除整除余数，最后加减；同级通常从左到右。比较后依次 not、and、or。@ 是矩阵乘法，本课不做矩阵运算。"
        ],
        "success": "你能用括号安排运算顺序，并解释代码为什么这样运行。",
        "source": "L3 · p18",
        "answer": "4\n24"
      }
    ]
  },
  {
    "id": "l3-letter-3",
    "chapter": "L3",
    "title": "纸上的公式",
    "subtitle": "L3 · 第3封 · 纸上的公式",
    "place": "图书馆窗边",
    "description": "错误与近似，也能成为理解的线索。",
    "dialogue": [
      "我替你占了窗边的位置，那里不那么闷。",
      "报错先读原因，不必急着怪自己。"
    ],
    "challenges": [
      {
        "id": "l3-zero",
        "topic": "识别除零错误",
        "kind": "choice",
        "title": "选择程序会发生什么。",
        "explain": "除数为 0 会抛出 ZeroDivisionError。 /、//、% 遇到零除数都会报错。",
        "code": "print(3 // 0)",
        "hint": "/、//、% 遇到零除数都会报错。",
        "visual": [
          "除数为 0 会抛出 ZeroDivisionError。",
          "/、//、% 遇到零除数都会报错。"
        ],
        "success": "你能识别除零错误，并解释代码为什么这样运行。",
        "source": "L3 · p9",
        "answer": "ZeroDivisionError",
        "options": [
          "TypeError",
          "ZeroDivisionError",
          "正常输出",
          "SyntaxError"
        ]
      },
      {
        "id": "l3-float",
        "topic": "理解浮点数的近似",
        "kind": "output",
        "title": "预测比较结果：近似计算会完全相等吗？",
        "explain": "浮点数有时只能存下最接近的值。 二进制浮点数不能精确表示所有十进制小数；不是计算机随意算错。",
        "code": "print(0.1 + 0.2 == 0.3)",
        "hint": "二进制浮点数不能精确表示所有十进制小数；不是计算机随意算错。",
        "visual": [
          "浮点数有时只能存下最接近的值。",
          "二进制浮点数不能精确表示所有十进制小数；不是计算机随意算错。"
        ],
        "success": "你能理解浮点数的近似，并解释代码为什么这样运行。",
        "source": "L3 · p6",
        "answer": "False"
      },
      {
        "id": "l3-formula",
        "topic": "把数学式写成函数",
        "kind": "code",
        "title": "写 formula(x, y, z)，返回 x 的平方乘 y，再除以 (z + 1)。",
        "explain": "分数的整个分母要放在括号里。 a / (b + 2) 先算整个分母；a / b + 2 含义不同。",
        "code": "",
        "hint": "a / (b + 2) 先算整个分母；a / b + 2 含义不同。",
        "visual": [
          "分数的整个分母要放在括号里。",
          "a / (b + 2) 先算整个分母；a / b + 2 含义不同。"
        ],
        "success": "你能把数学式写成函数，并解释代码为什么这样运行。",
        "source": "L3 · p7–8",
        "test": "require_concepts(['Pow', 'Div'])\nassert formula(2,3,1)==6\nassert formula(3,4,2)==12\nassert formula(0,5,3)==0"
      }
    ]
  },
  {
    "id": "l3-letter-4",
    "chapter": "L3",
    "title": "两扇风的门",
    "subtitle": "L3 · 第4封 · 两扇风的门",
    "place": "城门小径",
    "description": "比较与取反，把问题变成明确的真假。",
    "dialogue": [
      "城门外有两条路，先看看每一道条件吧。",
      "答案是真还是假，都有可以解释的原因。"
    ],
    "challenges": [
      {
        "id": "l3-compare",
        "topic": "使用比较运算",
        "kind": "output",
        "title": "预测两次比较。",
        "explain": "比较返回 True 或 False。 <、<=、>、>= 比大小；== 比相等；!= 比不等。= 是赋值。",
        "code": "print(6 == 6.0)\nprint(5 >= 8)",
        "hint": "<、<=、>、>= 比大小；== 比相等；!= 比不等。= 是赋值。",
        "visual": [
          "比较返回 True 或 False。",
          "<、<=、>、>= 比大小；== 比相等；!= 比不等。= 是赋值。"
        ],
        "success": "你能使用比较运算，并解释代码为什么这样运行。",
        "source": "L3 · p10–12",
        "answer": "True\nFalse"
      },
      {
        "id": "l3-chain",
        "topic": "理解链式比较",
        "kind": "output",
        "title": "预测这组链式比较。",
        "explain": "a < b < c 要求两段比较同时成立。 中间的 3 同时参与两边比较，不是先算 True 再比较。",
        "code": "print(13 > 5 > 1)\nprint(13 > 5 < 1)",
        "hint": "中间的 3 同时参与两边比较，不是先算 True 再比较。",
        "visual": [
          "a < b < c 要求两段比较同时成立。",
          "中间的 3 同时参与两边比较，不是先算 True 再比较。"
        ],
        "success": "你能理解链式比较，并解释代码为什么这样运行。",
        "source": "L3 · p13",
        "answer": "True\nFalse"
      },
      {
        "id": "l3-not",
        "topic": "用 not 反转真假",
        "kind": "output",
        "title": "写出取反后的结果。",
        "explain": "not 把真变假，把假变真。 not 总是产生布尔值。",
        "code": "print(not (3 > 5))",
        "hint": "not 总是产生布尔值。",
        "visual": [
          "not 把真变假，把假变真。",
          "not 总是产生布尔值。"
        ],
        "success": "你能用 not 反转真假，并解释代码为什么这样运行。",
        "source": "L3 · p14–16",
        "answer": "True"
      }
    ]
  },
  {
    "id": "l3-letter-5",
    "chapter": "L3",
    "title": "条件与约定",
    "subtitle": "L3 · 第5封 · 条件与约定",
    "place": "风起地树下",
    "description": "把条件连接起来，也学会及时停下。",
    "dialogue": [
      "还是这棵树。你留的书签，我没有弄丢。",
      "今天的条件很短，一次只弄懂一个。"
    ],
    "challenges": [
      {
        "id": "l3-and",
        "topic": "用 and 同时要求两个条件",
        "kind": "output",
        "title": "预测同时满足条件的结果。",
        "explain": "and 需要两边都为真。 布尔条件中，只要一项为假，整体就是假。",
        "code": "n = 6\nprint(n > 0 and n % 2 == 0)",
        "hint": "布尔条件中，只要一项为假，整体就是假。",
        "visual": [
          "and 需要两边都为真。",
          "布尔条件中，只要一项为假，整体就是假。"
        ],
        "success": "你能用 and 同时要求两个条件，并解释代码为什么这样运行。",
        "source": "L3 · p14–16,38–39",
        "answer": "True"
      },
      {
        "id": "l3-or",
        "topic": "用 or 接受任一条件",
        "kind": "output",
        "title": "预测两个候选条件。",
        "explain": "or 只要至少一边为真。 两边都假时 or 才是假。",
        "code": "print(3 < 1 or 4 == 4)",
        "hint": "两边都假时 or 才是假。",
        "visual": [
          "or 只要至少一边为真。",
          "两边都假时 or 才是假。"
        ],
        "success": "你能用 or 接受任一条件，并解释代码为什么这样运行。",
        "source": "L3 · p14–16",
        "answer": "True"
      },
      {
        "id": "l3-short",
        "topic": "理解短路与操作数返回",
        "kind": "output",
        "title": "预测这两行，不需要计算被跳过的除法。",
        "explain": "and / or 在已能决定结果时停止求值。 and 返回首个假值，否则返回末值；or 返回首个真值，否则末值。不会必然返回 bool。空字符串、0、None 为假。",
        "code": "print(False and 1 / 0)\nprint(\"诗\" or \"风\")",
        "hint": "and 返回首个假值，否则返回末值；or 返回首个真值，否则末值。不会必然返回 bool。空字符串、0、None 为假。",
        "visual": [
          "and / or 在已能决定结果时停止求值。",
          "and 返回首个假值，否则返回末值；or 返回首个真值，否则末值。不会必然返回 bool。空字符串、0、None 为假。"
        ],
        "success": "你能理解短路与操作数返回，并解释代码为什么这样运行。",
        "source": "L3 · p17–18",
        "answer": "False\n诗"
      }
    ]
  },
  {
    "id": "l3-letter-6",
    "chapter": "L3",
    "title": "同一张诗页",
    "subtitle": "L3 · 第6封 · 同一张诗页",
    "place": "湖边长椅",
    "description": "更新、身份与成员，分清相似的问法。",
    "dialogue": [
      "这是上次那张诗页。边角的折痕还在呢。",
      "看内容和看身份，是两种不同的问题。"
    ],
    "challenges": [
      {
        "id": "l3-augmented",
        "topic": "使用复合赋值",
        "kind": "code",
        "title": "补上复合赋值，让 apples 从 3 增加 4。",
        "explain": "对数字，n += x 相当于 n = n + x。 同样有 -=、/=、//=、%=、**=；每一步都使用更新后的数。",
        "code": "apples = 3\n# 在这里增加 4\nprint(apples)",
        "hint": "同样有 -=、/=、//=、%=、**=；每一步都使用更新后的数。",
        "visual": [
          "对数字，n += x 相当于 n = n + x。",
          "同样有 -=、/=、//=、%=、**=；每一步都使用更新后的数。"
        ],
        "success": "你能使用复合赋值，并解释代码为什么这样运行。",
        "source": "L3 · p19–20",
        "test": "require_concepts(['AugAssign'])\nassert apples == 7\nassert __output.strip() == \"7\""
      },
      {
        "id": "l3-identity",
        "topic": "区分身份与相等",
        "kind": "output",
        "title": "预测内容与身份的差别。",
        "explain": "is 问是不是同一个对象；== 问值是否相等。 用新建列表演示身份，不依赖整数或字符串缓存；is not 取反身份判断。",
        "code": "a = [2]\nb = a\nprint(a is b)\nprint(a is not b)",
        "hint": "用新建列表演示身份，不依赖整数或字符串缓存；is not 取反身份判断。",
        "visual": [
          "is 问是不是同一个对象；== 问值是否相等。",
          "用新建列表演示身份，不依赖整数或字符串缓存；is not 取反身份判断。"
        ],
        "success": "你能区分身份与相等，并解释代码为什么这样运行。",
        "source": "L3 · p21–22",
        "answer": "True\nFalse"
      },
      {
        "id": "l3-membership",
        "topic": "用 in / not in 查成员",
        "kind": "output",
        "title": "预测字典里的成员判断。",
        "explain": "in 检查是否包含一个成员。 列表检查元素；字符串检查子串且区分大小写；字典检查键，不检查值。",
        "code": "poem = {1: \"风\", 2: \"诗\"}\nprint(2 in poem)\nprint(\"风\" in poem)",
        "hint": "列表检查元素；字符串检查子串且区分大小写；字典检查键，不检查值。",
        "visual": [
          "in 检查是否包含一个成员。",
          "列表检查元素；字符串检查子串且区分大小写；字典检查键，不检查值。"
        ],
        "success": "你能用 in / not in 查成员，并解释代码为什么这样运行。",
        "source": "L3 · p23–24",
        "answer": "True\nFalse"
      }
    ]
  },
  {
    "id": "l3-letter-7",
    "chapter": "L3",
    "title": "晴雨两条路",
    "subtitle": "L3 · 第7封 · 晴雨两条路",
    "place": "清泉镇屋檐",
    "description": "用分支让程序回应不同情况。",
    "dialogue": [
      "要下雨了？那我们先在屋檐下待一会儿。",
      "每条分支都可以安排清楚，不会让答案走丢。"
    ],
    "challenges": [
      {
        "id": "l3-if",
        "topic": "读懂单分支 if",
        "kind": "output",
        "title": "预测哪一行会显示。",
        "explain": "if 后的缩进代码只在条件为真时执行。 冒号后换行缩进；恢复原缩进的语句不属于 if。",
        "code": "n = -2\nif n > 0:\n    print(\"晴天\")\nprint(\"晚风\")",
        "hint": "冒号后换行缩进；恢复原缩进的语句不属于 if。",
        "visual": [
          "if 后的缩进代码只在条件为真时执行。",
          "冒号后换行缩进；恢复原缩进的语句不属于 if。"
        ],
        "success": "你能读懂单分支 if，并解释代码为什么这样运行。",
        "source": "L3 · p25–27",
        "answer": "晚风"
      },
      {
        "id": "l3-else",
        "topic": "读懂双分支 if / else",
        "kind": "code",
        "title": "用 if / else 写 shelter(rain)：下雨返回「树下」，否则「山坡」。",
        "explain": "if 与 else 只选择其中一条路。 条件是假，就执行 else；else 同样需要冒号。",
        "code": "",
        "hint": "条件是假，就执行 else；else 同样需要冒号。",
        "visual": [
          "if 与 else 只选择其中一条路。",
          "条件是假，就执行 else；else 同样需要冒号。"
        ],
        "success": "你能读懂双分支 if / else，并解释代码为什么这样运行。",
        "source": "L3 · p28–29",
        "test": "require_concepts(['If'])\nassert shelter(True)==\"树下\"\nassert shelter(False)==\"山坡\""
      },
      {
        "id": "l3-even",
        "topic": "用余数判断奇偶",
        "kind": "code",
        "title": "写 evenOrOdd(n)，偶数返回 \"even\"，奇数返回 \"odd\"。",
        "explain": "整数除以 2 余 0，就是偶数。 0 和负偶数也满足 n % 2 == 0。",
        "code": "",
        "hint": "0 和负偶数也满足 n % 2 == 0。",
        "visual": [
          "整数除以 2 余 0，就是偶数。",
          "0 和负偶数也满足 n % 2 == 0。"
        ],
        "success": "你能用余数判断奇偶，并解释代码为什么这样运行。",
        "source": "L3 · p30–31",
        "test": "require_concepts(['Mod', 'If'])\nassert evenOrOdd(0)==\"even\"\nassert evenOrOdd(3)==\"odd\"\nassert evenOrOdd(-4)==\"even\"\nassert evenOrOdd(9)==\"odd\""
      }
    ]
  },
  {
    "id": "l3-letter-8",
    "chapter": "L3",
    "title": "零也有名字",
    "subtitle": "L3 · 第8封 · 零也有名字",
    "place": "山间岔路",
    "description": "把多种情况放进一条清楚的选择链。",
    "dialogue": [
      "不确定走哪边也没关系，停下来看看路牌。",
      "程序中的每一种情况，都值得有一个答案。"
    ],
    "challenges": [
      {
        "id": "l3-elif",
        "topic": "读懂多分支 elif",
        "kind": "output",
        "title": "预测第一个满足的分支。",
        "explain": "if / elif 只执行第一个成立的分支。 即使后一个条件也为真，前一个已经选中时也不会再执行。",
        "code": "n = 5\nif n < 0:\n    print(\"北风\")\nelif n <= 5:\n    print(\"微风\")\nelse:\n    print(\"南风\")",
        "hint": "即使后一个条件也为真，前一个已经选中时也不会再执行。",
        "visual": [
          "if / elif 只执行第一个成立的分支。",
          "即使后一个条件也为真，前一个已经选中时也不会再执行。"
        ],
        "success": "你能读懂多分支 elif，并解释代码为什么这样运行。",
        "source": "L3 · p34–35",
        "answer": "微风"
      },
      {
        "id": "l3-sign",
        "topic": "判断正数、负数与零",
        "kind": "code",
        "title": "写 positiveNegativeOrZero(num)，返回 \"positive\"、\"negative\" 或 \"zero\"。",
        "explain": "先判零，再按大小选择正数或负数。 elif 把互斥的三种情况放在同一条选择链。",
        "code": "",
        "hint": "elif 把互斥的三种情况放在同一条选择链。",
        "visual": [
          "先判零，再按大小选择正数或负数。",
          "elif 把互斥的三种情况放在同一条选择链。"
        ],
        "success": "你能判断正数、负数与零，并解释代码为什么这样运行。",
        "source": "L3 · p36–37",
        "test": "require_concepts(['If'])\nassert positiveNegativeOrZero(0)==\"zero\"\nassert positiveNegativeOrZero(100)==\"positive\"\nassert positiveNegativeOrZero(-99.99)==\"negative\""
      },
      {
        "id": "l3-decimal",
        "topic": "处理小数部分的分支",
        "kind": "code",
        "title": "写 theDecimal(number)：余数为零返回 \"INTEGER\"，否则返回 number % 1。",
        "explain": "number % 1 得到向下取整后剩下的部分。 浮点结果可能近似；负数按 Python 取模规则，例如 -1.25 % 1 为 0.75。",
        "code": "",
        "hint": "浮点结果可能近似；负数按 Python 取模规则，例如 -1.25 % 1 为 0.75。",
        "visual": [
          "number % 1 得到向下取整后剩下的部分。",
          "浮点结果可能近似；负数按 Python 取模规则，例如 -1.25 % 1 为 0.75。"
        ],
        "success": "你能处理小数部分的分支，并解释代码为什么这样运行。",
        "source": "L3 · p32–33",
        "test": "require_concepts(['Mod', 'If'])\nassert theDecimal(99.0)==\"INTEGER\"\nassert abs(theDecimal(99.09)-0.09)<1e-9\nassert theDecimal(-1.25)==0.75"
      }
    ]
  },
  {
    "id": "l3-letter-9",
    "chapter": "L3",
    "title": "最亮的那颗星",
    "subtitle": "L3 · 第9封 · 最亮的那颗星",
    "place": "摘星崖石阶",
    "description": "嵌套与最大值，把大选择拆成小选择。",
    "dialogue": [
      "星星很多，先看离我们最近的这一颗。",
      "不用一次想完，先处理眼前的两个数。"
    ],
    "challenges": [
      {
        "id": "l3-nested",
        "topic": "跟踪嵌套条件",
        "kind": "output",
        "title": "预测这段嵌套分支。",
        "explain": "嵌套 if 只在外层分支选中后才会判断。 缩进层级表明 else 属于哪个 if。",
        "code": "n = 3\nif n > 0:\n    if n % 2 == 0:\n        print(\"偶\")\n    else:\n        print(\"奇\")\nprint(\"结束\")",
        "hint": "缩进层级表明 else 属于哪个 if。",
        "visual": [
          "嵌套 if 只在外层分支选中后才会判断。",
          "缩进层级表明 else 属于哪个 if。"
        ],
        "success": "你能跟踪嵌套条件，并解释代码为什么这样运行。",
        "source": "L3 · p44–45",
        "answer": "奇\n结束"
      },
      {
        "id": "l3-compound",
        "topic": "组合条件判断",
        "kind": "code",
        "title": "写 positive_even(n)，只有正偶数才返回 True。",
        "explain": "用括号把复合条件的意思写清楚。 比较先于 and；not、and、or 依次结合，忘记时用括号明确。",
        "code": "",
        "hint": "比较先于 and；not、and、or 依次结合，忘记时用括号明确。",
        "visual": [
          "用括号把复合条件的意思写清楚。",
          "比较先于 and；not、and、or 依次结合，忘记时用括号明确。"
        ],
        "success": "你能组合条件判断，并解释代码为什么这样运行。",
        "source": "L3 · p38–41",
        "test": "require_concepts(['And'])\nassert positive_even(4) is True\nassert positive_even(0) is False\nassert positive_even(-2) is False\nassert positive_even(3) is False"
      },
      {
        "id": "l3-greatest",
        "topic": "用条件选择三个数的最大值",
        "kind": "code",
        "title": "不用 max，写 greatest(x,y,z)，以条件分支返回最大值。",
        "explain": "候选最大值必须不小于另外两个数。 用 >= 包含相等情况；不要遗漏并列最大值。",
        "code": "",
        "hint": "先检查 x 是否不小于 y 和 z，再检查 y；都不是时选 z。",
        "visual": [
          "候选最大值必须不小于另外两个数。",
          "用 >= 包含相等情况；不要遗漏并列最大值。"
        ],
        "success": "你能用条件选择三个数的最大值，并解释代码为什么这样运行。",
        "source": "L3 · p42–43",
        "test": "require_concepts(['If'])\nassert greatest(1,2,3)==3\nassert greatest(6,2,1)==6\nassert greatest(3,3,2)==3\nassert greatest(-4,-2,-3)==-2"
      }
    ]
  },
  {
    "id": "l3-letter-10",
    "chapter": "L3",
    "title": "选择之后的回信",
    "subtitle": "L3 · 第10封 · 选择之后的回信",
    "place": "蒙德夜灯",
    "description": "写完条件，也读懂组合条件的边界。",
    "dialogue": [
      "今天的灯比平时亮。或许是你还在这里的缘故。",
      "最后几道选择，你已经有自己的判断了。"
    ],
    "challenges": [
      {
        "id": "l3-greatest-nested",
        "topic": "用嵌套分支取最大值",
        "kind": "code",
        "title": "写 greatest_nested(x,y,z)，至少有一层嵌套 if，返回最大值。",
        "explain": "先比较一对，再与第三个数比较。 第一步选出 a 与 b 中较大的候选，再与 c 比较。",
        "code": "",
        "hint": "第一步选出 a 与 b 中较大的候选，再与 c 比较。",
        "visual": [
          "先比较一对，再与第三个数比较。",
          "第一步选出 a 与 b 中较大的候选，再与 c 比较。"
        ],
        "success": "你能用嵌套分支取最大值，并解释代码为什么这样运行。",
        "source": "L3 · p46–47",
        "test": "require_concepts(['NestedIf'])\nassert greatest_nested(1,2,3)==3\nassert greatest_nested(6,2,1)==6\nassert greatest_nested(3,3,2)==3\nassert greatest_nested(-4,-2,-3)==-2"
      },
      {
        "id": "l3-retire",
        "topic": "读懂 not 与 or 的组合",
        "kind": "output",
        "title": "预测课件条件结构的输出。",
        "explain": "not (A or B) 表示两种条件都不成立。 课件示例中，存款达到阈值或 car 为 y / yes，进入 else。这只是代码示例。",
        "code": "money = 1000\ncar = \"n\"\nif not (money >= 1000000 or car == \"y\" or car == \"yes\"):\n    print(\"继续\")\nelse:\n    print(\"休息\")",
        "hint": "课件示例中，存款达到阈值或 car 为 y / yes，进入 else。这只是代码示例。",
        "visual": [
          "not (A or B) 表示两种条件都不成立。",
          "课件示例中，存款达到阈值或 car 为 y / yes，进入 else。这只是代码示例。"
        ],
        "success": "你能读懂 not 与 or 的组合，并解释代码为什么这样运行。",
        "source": "L3 · p40–41",
        "answer": "继续"
      },
      {
        "id": "l3-bitwise",
        "topic": "认识位运算与逻辑运算的区别",
        "kind": "output",
        "title": "预测 6 与 3 的按位与。",
        "explain": "&、|、^ 按整数的二进制位运算。 5 为 101，3 为 011；& 同为1才为1，| 任一为1，^ 不同为1。~ 取反，<< / >> 移位。这是总结术语的补充基础。",
        "code": "print(6 & 3)",
        "hint": "5 为 101，3 为 011；& 同为1才为1，| 任一为1，^ 不同为1。~ 取反，<< / >> 移位。这是总结术语的补充基础。",
        "visual": [
          "&、|、^ 按整数的二进制位运算。",
          "5 为 101，3 为 011；& 同为1才为1，| 任一为1，^ 不同为1。~ 取反，<< / >> 移位。这是总结术语的补充基础。"
        ],
        "success": "你能认识位运算与逻辑运算的区别，并解释代码为什么这样运行。",
        "source": "L3 · p48（总结扩展）",
        "answer": "2"
      }
    ]
  },
  {
    "id": "l4-letter-1",
    "chapter": "L4",
    "title": "重复的问候",
    "subtitle": "L4 · 第1封 · 重复的问候",
    "place": "城门花圃",
    "description": "让循环替你完成重复的小动作。",
    "dialogue": [
      "说好了要见面，我可没有迟到。",
      "今天让代码重复，解释却只讲一个要点。"
    ],
    "challenges": [
      {
        "id": "l4-for",
        "topic": "用 for 逐个遍历",
        "kind": "code",
        "title": "写循环，依次打印「苹果」与「羽毛」，一行一个。",
        "explain": "for 每次取出一个元素，执行一次循环体。 变量每轮绑定下一个元素，缩进的代码逐轮执行；列表、元组、字符串都能遍历。",
        "code": "",
        "hint": "变量每轮绑定下一个元素，缩进的代码逐轮执行；列表、元组、字符串都能遍历。",
        "visual": [
          "for 每次取出一个元素，执行一次循环体。",
          "变量每轮绑定下一个元素，缩进的代码逐轮执行；列表、元组、字符串都能遍历。"
        ],
        "success": "你能用 for 逐个遍历，并解释代码为什么这样运行。",
        "source": "L4 · p3–4",
        "test": "require_concepts(['For'])\nassert __output.strip() == \"苹果\\n羽毛\""
      },
      {
        "id": "l4-range",
        "topic": "理解 range 的终点不包含",
        "kind": "output",
        "title": "写出 range(4) 的每个输出。",
        "explain": "range(stop) 从 0 开始，不包含 stop。 range(3) 依次给出 0、1、2。",
        "code": "for i in range(4):\n    print(i)",
        "hint": "range(3) 依次给出 0、1、2。",
        "visual": [
          "range(stop) 从 0 开始，不包含 stop。",
          "range(3) 依次给出 0、1、2。"
        ],
        "success": "你能理解 range 的终点不包含，并解释代码为什么这样运行。",
        "source": "L4 · p6",
        "answer": "0\n1\n2\n3"
      },
      {
        "id": "l4-step",
        "topic": "设置 range 起点与步长",
        "kind": "code",
        "title": "从空白处打印 2、4、6、8，一行一个，用 range。",
        "explain": "range(start, stop, step) 按步长前进。 起点包含，终点不包含；负步长倒着走，步长不能为 0。",
        "code": "",
        "hint": "起点包含，终点不包含；负步长倒着走，步长不能为 0。",
        "visual": [
          "range(start, stop, step) 按步长前进。",
          "起点包含，终点不包含；负步长倒着走，步长不能为 0。"
        ],
        "success": "你能设置 range 起点与步长，并解释代码为什么这样运行。",
        "source": "L4 · p6",
        "test": "require_concepts(['For', 'call:range'])\nassert __output.strip() == \"2\\n4\\n6\\n8\""
      }
    ]
  },
  {
    "id": "l4-letter-2",
    "chapter": "L4",
    "title": "装满一篮风",
    "subtitle": "L4 · 第2封 · 装满一篮风",
    "place": "清泉镇果摊",
    "description": "索引、累加与计数，一步步保存结果。",
    "dialogue": [
      "别把篮子一次装得太满，我帮你提着。",
      "循环每走一轮，看看保存的数发生了什么。"
    ],
    "challenges": [
      {
        "id": "l4-index",
        "topic": "把 len 与 range 配合",
        "kind": "output",
        "title": "预测按索引遍历的结果。",
        "explain": "range(len(sequence)) 依次给出合法索引。 len 给元素个数；长度为 2 的列表，索引是 0 与 1。",
        "code": "words = [\"风\", \"诗\"]\nfor i in range(len(words)):\n    print(words[i])",
        "hint": "len 给元素个数；长度为 2 的列表，索引是 0 与 1。",
        "visual": [
          "range(len(sequence)) 依次给出合法索引。",
          "len 给元素个数；长度为 2 的列表，索引是 0 与 1。"
        ],
        "success": "你能把 len 与 range 配合，并解释代码为什么这样运行。",
        "source": "L4 · p6",
        "answer": "风\n诗"
      },
      {
        "id": "l4-sum",
        "topic": "用累加器保存总和",
        "kind": "code",
        "title": "写 sum_numbers(numbers)，用 for 返回列表总和，空列表返回 0。",
        "explain": "总和在循环外初始化，在循环内不断更新。 如果把 total = 0 放进循环，每轮都会把之前的总和清空。",
        "code": "",
        "hint": "如果把 total = 0 放进循环，每轮都会把之前的总和清空。",
        "visual": [
          "总和在循环外初始化，在循环内不断更新。",
          "如果把 total = 0 放进循环，每轮都会把之前的总和清空。"
        ],
        "success": "你能用累加器保存总和，并解释代码为什么这样运行。",
        "source": "L4 · p5",
        "test": "require_concepts(['For'])\nassert sum_numbers([6,5,3])==14\nassert sum_numbers([])==0\nassert sum_numbers([-2,5])==3"
      },
      {
        "id": "l4-count",
        "topic": "在循环里计数",
        "kind": "output",
        "title": "预测计数器最终的值。",
        "explain": "计数器每遇到一个符合条件的元素就加 1。 每轮加 1 统计次数；加 n 才是统计总和。",
        "code": "count = 0\nfor n in [2, 4, 6, 8]:\n    count += 1\nprint(count)",
        "hint": "每轮加 1 统计次数；加 n 才是统计总和。",
        "visual": [
          "计数器每遇到一个符合条件的元素就加 1。",
          "每轮加 1 统计次数；加 n 才是统计总和。"
        ],
        "success": "你能在循环里计数，并解释代码为什么这样运行。",
        "source": "L4 · p5–6",
        "answer": "4"
      }
    ]
  },
  {
    "id": "l4-letter-3",
    "chapter": "L4",
    "title": "一小节乘法",
    "subtitle": "L4 · 第3封 · 一小节乘法",
    "place": "风车下",
    "description": "从循环骨架，写出课件的计算函数。",
    "dialogue": [
      "风车转了一圈又一圈，我们不必跟着着急。",
      "先写循环的范围，再让每一轮更新答案。"
    ],
    "challenges": [
      {
        "id": "l4-factorial-for",
        "topic": "用 for 计算阶乘",
        "kind": "code",
        "title": "写 factorial(n)，对非负整数用 for 返回 n!。",
        "explain": "连乘的初始值是 1，不是 0。 1 × 2 × 3 = 6；0! 定义为 1，空循环保留初始值。",
        "code": "",
        "hint": "1 × 2 × 3 = 6；0! 定义为 1，空循环保留初始值。",
        "visual": [
          "连乘的初始值是 1，不是 0。",
          "1 × 2 × 3 = 6；0! 定义为 1，空循环保留初始值。"
        ],
        "success": "你能用 for 计算阶乘，并解释代码为什么这样运行。",
        "source": "L4 · p7–8",
        "test": "require_concepts(['For'])\nassert factorial(0)==1\nassert factorial(3)==6\nassert factorial(5)==120"
      },
      {
        "id": "l4-table",
        "topic": "生成乘法表",
        "kind": "code",
        "title": "写 multiplicationTableFor7(n)，打印 7 的乘法表，1 到 n；格式如 7 x 1 = 7。",
        "explain": "把变化的数字放进每轮输出中。 print 多个内容默认以空格连接，乘积每轮重新计算。",
        "code": "",
        "hint": "print 多个内容默认以空格连接，乘积每轮重新计算。",
        "visual": [
          "把变化的数字放进每轮输出中。",
          "print 多个内容默认以空格连接，乘积每轮重新计算。"
        ],
        "success": "你能生成乘法表，并解释代码为什么这样运行。",
        "source": "L4 · p9–10",
        "test": "require_concepts(['For'])\nimport contextlib, io\nfor _n in [0,2,5]:\n    _b=io.StringIO()\n    with contextlib.redirect_stdout(_b): multiplicationTableFor7(_n)\n    assert _b.getvalue().splitlines()==[f\"7 x {i} = {7*i}\" for i in range(1,_n+1)]"
      },
      {
        "id": "l4-even-sum",
        "topic": "筛选偶数再累加",
        "kind": "code",
        "title": "写 sumEvenNumbers(start,end)，求包含两端的所有偶数之和；start > end 返回 0。",
        "explain": "在循环内用 if 选择要加入总和的数。 循环负责逐个查看，条件负责筛选，累加器负责保存。",
        "code": "",
        "hint": "循环负责逐个查看，条件负责筛选，累加器负责保存。",
        "visual": [
          "在循环内用 if 选择要加入总和的数。",
          "循环负责逐个查看，条件负责筛选，累加器负责保存。"
        ],
        "success": "你能筛选偶数再累加，并解释代码为什么这样运行。",
        "source": "L4 · p11–12",
        "test": "require_concepts(['For', 'If'])\nassert sumEvenNumbers(1,10)==30\nassert sumEvenNumbers(2,2)==2\nassert sumEvenNumbers(-2,2)==0\nassert sumEvenNumbers(4,1)==0"
      }
    ]
  },
  {
    "id": "l4-letter-4",
    "chapter": "L4",
    "title": "停下来的条件",
    "subtitle": "L4 · 第4封 · 停下来的条件",
    "place": "林间路标",
    "description": "完全数与 while，学会开始也学会结束。",
    "dialogue": [
      "路标到了。休息一会儿，也算旅途的一部分。",
      "先把终止条件看清，代码才能平安走回来。"
    ],
    "challenges": [
      {
        "id": "l4-perfect",
        "topic": "累加真因子判断完全数",
        "kind": "code",
        "title": "写 isPerfectNumber(n)，返回是否为完全数；n <= 1 返回 False。",
        "explain": "真因子能整除 n，但不包含 n 自己。 6 的真因子是 1、2、3，总和等于 6。完全数必须为正整数。",
        "code": "",
        "hint": "6 的真因子是 1、2、3，总和等于 6。完全数必须为正整数。",
        "visual": [
          "真因子能整除 n，但不包含 n 自己。",
          "6 的真因子是 1、2、3，总和等于 6。完全数必须为正整数。"
        ],
        "success": "你能累加真因子判断完全数，并解释代码为什么这样运行。",
        "source": "L4 · p13–14",
        "test": "require_concepts(['For', 'Mod'])\nassert isPerfectNumber(6) is True\nassert isPerfectNumber(15) is False\nassert isPerfectNumber(28) is True\nassert isPerfectNumber(1) is False\nassert isPerfectNumber(0) is False"
      },
      {
        "id": "l4-while",
        "topic": "用 while 在条件成立时重复",
        "kind": "output",
        "title": "写出这段 while 的输出。",
        "explain": "while 在每轮开始前重新检查条件。 先判断再执行；一开始是假，循环体一次也不执行。",
        "code": "n = 2\nwhile n < 5:\n    print(n)\n    n += 1",
        "hint": "先判断再执行；一开始是假，循环体一次也不执行。",
        "visual": [
          "while 在每轮开始前重新检查条件。",
          "先判断再执行；一开始是假，循环体一次也不执行。"
        ],
        "success": "你能用 while 在条件成立时重复，并解释代码为什么这样运行。",
        "source": "L4 · p15–17",
        "answer": "2\n3\n4"
      },
      {
        "id": "l4-termination",
        "topic": "修复没有更新的无限循环",
        "kind": "code",
        "title": "补上更新，让代码打印 0、1、2 后停止。",
        "explain": "循环中要让条件有机会变成假。 少了 i += 1，i 永远是 0。游戏会停止超时程序，你可以继续修改。",
        "code": "i = 0\nwhile i < 3:\n    print(i)\n    # 在这里更新 i",
        "hint": "少了 i += 1，i 永远是 0。游戏会停止超时程序，你可以继续修改。",
        "visual": [
          "循环中要让条件有机会变成假。",
          "少了 i += 1，i 永远是 0。游戏会停止超时程序，你可以继续修改。"
        ],
        "success": "你能修复没有更新的无限循环，并解释代码为什么这样运行。",
        "source": "L4 · p17",
        "test": "require_concepts(['While'])\nassert __output.strip()==\"0\\n1\\n2\"\nassert i==3"
      }
    ]
  },
  {
    "id": "l4-letter-5",
    "chapter": "L4",
    "title": "留给下一轮的信",
    "subtitle": "L4 · 第5封 · 留给下一轮的信",
    "place": "低语森林",
    "description": "自己控制计数，也约定收集的终点。",
    "dialogue": [
      "上次那条小路还在，我想和你再走一次。",
      "这次每走一步，都记得更新自己的位置。"
    ],
    "challenges": [
      {
        "id": "l4-factorial-while",
        "topic": "用 while 计算阶乘",
        "kind": "code",
        "title": "写 factorial_while(n)，必须用 while 返回非负整数的阶乘。",
        "explain": "while 的计数变量需要自己初始化和更新。 乘积初始为 1，计数器每轮加 1，超过 n 后停止。",
        "code": "",
        "hint": "乘积初始为 1，计数器每轮加 1，超过 n 后停止。",
        "visual": [
          "while 的计数变量需要自己初始化和更新。",
          "乘积初始为 1，计数器每轮加 1，超过 n 后停止。"
        ],
        "success": "你能用 while 计算阶乘，并解释代码为什么这样运行。",
        "source": "L4 · p18–19",
        "test": "require_concepts(['While'])\nassert factorial_while(0)==1\nassert factorial_while(3)==6\nassert factorial_while(5)==120"
      },
      {
        "id": "l4-sentinel",
        "topic": "用哨兵值结束循环",
        "kind": "output",
        "title": "预测遇到 0 之前的总和。",
        "explain": "约定一个特殊值，表示停止收集。 课件用 input 读到 0 停止；这里用预先给定的数据模拟，不弹输入窗口。0 后的值不处理。",
        "code": "numbers = [2, 5, 0, 8]\ni = 0\ntotal = 0\nwhile numbers[i] != 0:\n    total += numbers[i]\n    i += 1\nprint(total)",
        "hint": "课件用 input 读到 0 停止；这里用预先给定的数据模拟，不弹输入窗口。0 后的值不处理。",
        "visual": [
          "约定一个特殊值，表示停止收集。",
          "课件用 input 读到 0 停止；这里用预先给定的数据模拟，不弹输入窗口。0 后的值不处理。"
        ],
        "success": "你能用哨兵值结束循环，并解释代码为什么这样运行。",
        "source": "L4 · p16",
        "answer": "7"
      },
      {
        "id": "l4-break",
        "topic": "用 break 结束当前循环",
        "kind": "output",
        "title": "写出停止前的输出。",
        "explain": "break 立刻离开所在的循环。 break 后本轮剩下的语句和该循环后续轮次都不执行。",
        "code": "for n in [2, 4, 6, 8]:\n    if n == 6:\n        break\n    print(n)",
        "hint": "break 后本轮剩下的语句和该循环后续轮次都不执行。",
        "visual": [
          "break 立刻离开所在的循环。",
          "break 后本轮剩下的语句和该循环后续轮次都不执行。"
        ],
        "success": "你能用 break 结束当前循环，并解释代码为什么这样运行。",
        "source": "L4 · p20",
        "answer": "2\n4"
      }
    ]
  },
  {
    "id": "l4-letter-6",
    "chapter": "L4",
    "title": "略过与告别",
    "subtitle": "L4 · 第6封 · 略过与告别",
    "place": "湖心小桥",
    "description": "break、continue 与嵌套循环，各有边界。",
    "dialogue": [
      "有些路可以跳过，不必每次都走到底。",
      "看清当前这一轮和整个循环的区别。"
    ],
    "challenges": [
      {
        "id": "l4-continue",
        "topic": "用 continue 跳过本轮余下代码",
        "kind": "code",
        "title": "用 for 和 continue 依次打印 [2,0,5] 中非零的数。",
        "explain": "continue 跳过本轮，下一轮仍会继续。 与 break 不同，continue 不结束整个循环。",
        "code": "",
        "hint": "与 break 不同，continue 不结束整个循环。",
        "visual": [
          "continue 跳过本轮，下一轮仍会继续。",
          "与 break 不同，continue 不结束整个循环。"
        ],
        "success": "你能用 continue 跳过本轮余下代码，并解释代码为什么这样运行。",
        "source": "L4 · p21",
        "test": "require_concepts(['For', 'Continue'])\nassert __output.strip()==\"2\\n5\""
      },
      {
        "id": "l4-nested-count",
        "topic": "跟踪嵌套循环次数",
        "kind": "choice",
        "title": "这段 print 一共执行几次？填写数字。",
        "explain": "外层每走一轮，内层会重新完整运行。 内外次数固定时，总次数 = 外层次数 × 内层次数；内层变量每次重新开始。",
        "code": "for i in range(3):\n    for j in range(2):\n        print(\"风\")",
        "hint": "内外次数固定时，总次数 = 外层次数 × 内层次数；内层变量每次重新开始。",
        "visual": [
          "外层每走一轮，内层会重新完整运行。",
          "内外次数固定时，总次数 = 外层次数 × 内层次数；内层变量每次重新开始。"
        ],
        "success": "你能跟踪嵌套循环次数，并解释代码为什么这样运行。",
        "source": "L4 · p22",
        "answer": "6",
        "options": [
          "8",
          "9",
          "6",
          "4"
        ]
      },
      {
        "id": "l4-triangle",
        "topic": "用嵌套循环画三角形",
        "kind": "code",
        "title": "用嵌套 for 打印三行：*、**、***。",
        "explain": "第几行，就在内层重复打印几颗星。 内层 print 的 end=\"\" 不换行；内层结束后，外层的 print() 换行。",
        "code": "",
        "hint": "内层 print 的 end=\"\" 不换行；内层结束后，外层的 print() 换行。",
        "visual": [
          "第几行，就在内层重复打印几颗星。",
          "内层 print 的 end=\"\" 不换行；内层结束后，外层的 print() 换行。"
        ],
        "success": "你能用嵌套循环画三角形，并解释代码为什么这样运行。",
        "source": "L4 · p23",
        "test": "require_concepts(['NestedFor'])\nassert __output.strip()==\"*\\n**\\n***\""
      }
    ]
  },
  {
    "id": "l4-letter-7",
    "chapter": "L4",
    "title": "一行比一行更近",
    "subtitle": "L4 · 第7封 · 一行比一行更近",
    "place": "蒙德广场",
    "description": "画图案，也给每个名字完整的循环。",
    "dialogue": [
      "广场上的灯排得整齐，我们也试着画一小片。",
      "外层和内层各做一件事，代码就不会挤在一起。"
    ],
    "challenges": [
      {
        "id": "l4-rectangle",
        "topic": "控制嵌套循环的行列",
        "kind": "output",
        "title": "预测图案。",
        "explain": "外层控制行，内层控制每行的列。 内层次数固定，每行列数就固定；换行放在内层循环外。",
        "code": "for row in range(2):\n    for col in range(2):\n        print(\"*\", end=\"\")\n    print()",
        "hint": "内层次数固定，每行列数就固定；换行放在内层循环外。",
        "visual": [
          "外层控制行，内层控制每行的列。",
          "内层次数固定，每行列数就固定；换行放在内层循环外。"
        ],
        "success": "你能控制嵌套循环的行列，并解释代码为什么这样运行。",
        "source": "L4 · p22",
        "answer": "**\n**"
      },
      {
        "id": "l4-five",
        "topic": "混合使用 for 与 while",
        "kind": "code",
        "title": "写 print5Time(names)：外层 for 遍历名字，内层 while 把每个名字各打印五次。",
        "explain": "每次进入外层时，都要重置内层计数器。 如果 count 没有在外层内重置，第二个名字就没有自己的循环。",
        "code": "",
        "hint": "如果 count 没有在外层内重置，第二个名字就没有自己的循环。",
        "visual": [
          "每次进入外层时，都要重置内层计数器。",
          "如果 count 没有在外层内重置，第二个名字就没有自己的循环。"
        ],
        "success": "你能混合使用 for 与 while，并解释代码为什么这样运行。",
        "source": "L4 · p24–25",
        "test": "require_concepts(['For', 'While'])\nimport io,contextlib\nfor _names in [[],[\"温迪\"],[\"风\",\"诗\"]]:\n    _b=io.StringIO()\n    with contextlib.redirect_stdout(_b): print5Time(_names)\n    assert _b.getvalue().splitlines()==[n for n in _names for _ in range(5)]"
      },
      {
        "id": "l4-perfects",
        "topic": "用双层循环搜索完全数",
        "kind": "code",
        "title": "用外层 while、内层 for，打印 1 到 100 的所有完全数，一行一个，不加标题。",
        "explain": "外层枚举候选数，内层计算每个数的真因子和。 每个 n 都要新建 total=0；内层结束后再与 n 比较。",
        "code": "",
        "hint": "每个 n 都要新建 total=0；内层结束后再与 n 比较。",
        "visual": [
          "外层枚举候选数，内层计算每个数的真因子和。",
          "每个 n 都要新建 total=0；内层结束后再与 n 比较。"
        ],
        "success": "你能用双层循环搜索完全数，并解释代码为什么这样运行。",
        "source": "L4 · p26–27",
        "test": "require_concepts(['While', 'For', 'Mod'])\nassert __output.strip()==\"6\\n28\""
      }
    ]
  },
  {
    "id": "l4-letter-8",
    "chapter": "L4",
    "title": "循环终点的座位",
    "subtitle": "L4 · 第8封 · 循环终点的座位",
    "place": "风起地晚霞",
    "description": "让双层循环收尾，给暂未完成的代码留位置。",
    "dialogue": [
      "晚霞还是那样，不过树下多了我们的纸页。",
      "写到最后，也记得看看循环到底停在哪里。"
    ],
    "challenges": [
      {
        "id": "l4-nested-break",
        "topic": "理解内层 break 的作用范围",
        "kind": "output",
        "title": "预测内层停止后的输出。",
        "explain": "内层 break 只退出内层循环。 外层不会因为内层 break 自动结束。",
        "code": "for i in range(3):\n    for j in range(3):\n        if j == i:\n            break\n        print(i, j)",
        "hint": "外层不会因为内层 break 自动结束。",
        "visual": [
          "内层 break 只退出内层循环。",
          "外层不会因为内层 break 自动结束。"
        ],
        "success": "你能理解内层 break 的作用范围，并解释代码为什么这样运行。",
        "source": "L4 · p28",
        "answer": "1 0\n2 0\n2 1"
      },
      {
        "id": "l4-nested-continue",
        "topic": "理解内层 continue 的作用范围",
        "kind": "output",
        "title": "预测略过相同组合的结果。",
        "explain": "内层 continue 只跳过内层的当前一轮。 外层不跳转；内层继续尝试下一个 j。",
        "code": "for i in [2, 4]:\n    for j in [2, 4]:\n        if i == j:\n            continue\n        print(i * j)",
        "hint": "外层不跳转；内层继续尝试下一个 j。",
        "visual": [
          "内层 continue 只跳过内层的当前一轮。",
          "外层不跳转；内层继续尝试下一个 j。"
        ],
        "success": "你能理解内层 continue 的作用范围，并解释代码为什么这样运行。",
        "source": "L4 · p29",
        "answer": "8\n8"
      },
      {
        "id": "l4-pass",
        "topic": "用 pass 占住代码块",
        "kind": "code",
        "title": "补上合法占位语句，让函数可以定义且返回 None。",
        "explain": "pass 是一个合法语句，执行时不做事。 注释会被忽略，不能独自充当非空代码块；pass 可以。",
        "code": "def wait():\n    # 这里还没有要做的事",
        "hint": "注释会被忽略，不能独自充当非空代码块；pass 可以。",
        "visual": [
          "pass 是一个合法语句，执行时不做事。",
          "注释会被忽略，不能独自充当非空代码块；pass 可以。"
        ],
        "success": "你能用 pass 占住代码块，并解释代码为什么这样运行。",
        "source": "L4 · p30–31",
        "test": "require_concepts(['Pass'])\nassert wait() is None"
      }
    ]
  },
  {
    "id": "l5-letter-1",
    "chapter": "L5",
    "title": "每个字都认得你",
    "subtitle": "L5 · 第1封 · 每个字都认得你",
    "place": "图书馆窗边",
    "description": "从 Unicode 开始，认识文字的存法。",
    "dialogue": [
      "这次带来的是文字的课。我想，应该很适合我们。",
      "先分清字符与字节，再去读一小段代码。"
    ],
    "challenges": [
      {
        "id": "l5-unicode",
        "topic": "认识 Unicode 字符串",
        "kind": "output",
        "title": "预测两个字符的长度。",
        "explain": "Python 3 的 str 是 Unicode 字符序列。 单个字符也是长度 1 的字符串；len 数 Unicode 码点，不是 UTF-8 字节数。",
        "code": "print(len(\"风诗\"))",
        "hint": "单个字符也是长度 1 的字符串；len 数 Unicode 码点，不是 UTF-8 字节数。",
        "visual": [
          "Python 3 的 str 是 Unicode 字符序列。",
          "单个字符也是长度 1 的字符串；len 数 Unicode 码点，不是 UTF-8 字节数。"
        ],
        "success": "你能认识 Unicode 字符串，并解释代码为什么这样运行。",
        "source": "L5 · p3",
        "answer": "2"
      },
      {
        "id": "l5-ascii",
        "topic": "区分 ASCII 与编码容量",
        "kind": "choice",
        "title": "16 位可以表示多少种不同组合？填写数字。",
        "explain": "n 个二进制位有 2**n 种组合。 8 位有 256 种组合，16 位有 65536 种。标准 ASCII 是 7 位、128 个编码；课件把扩展 8 位表称作 ASCII，需区分。A=65、a=97、0=48。",
        "code": "print(2 ** 16)",
        "hint": "8 位有 256 种组合，16 位有 65536 种。标准 ASCII 是 7 位、128 个编码；课件把扩展 8 位表称作 ASCII，需区分。A=65、a=97、0=48。",
        "visual": [
          "n 个二进制位有 2**n 种组合。",
          "8 位有 256 种组合，16 位有 65536 种。标准 ASCII 是 7 位、128 个编码；课件把扩展 8 位表称作 ASCII，需区分。A=65、a=97、0=48。"
        ],
        "success": "你能区分 ASCII 与编码容量，并解释代码为什么这样运行。",
        "source": "L5 · p4–6",
        "answer": "65536",
        "options": [
          "256",
          "32768",
          "65535",
          "65536"
        ]
      },
      {
        "id": "l5-utf8",
        "topic": "区分 Unicode 与 UTF-8 字节",
        "kind": "output",
        "title": "预测 ASCII 字母编码后的字节数。",
        "explain": "Unicode 编号字符，UTF-8 把编号编码成字节。 UTF-8 每个码点使用 1–4 字节；ASCII 字符用 1 字节。这不表示 Unicode 本身固定占 1–4 字节。",
        "code": "print(len(\"ABC\".encode(\"utf-8\")))",
        "hint": "UTF-8 每个码点使用 1–4 字节；ASCII 字符用 1 字节。这不表示 Unicode 本身固定占 1–4 字节。",
        "visual": [
          "Unicode 编号字符，UTF-8 把编号编码成字节。",
          "UTF-8 每个码点使用 1–4 字节；ASCII 字符用 1 字节。这不表示 Unicode 本身固定占 1–4 字节。"
        ],
        "success": "你能区分 Unicode 与 UTF-8 字节，并解释代码为什么这样运行。",
        "source": "L5 · p7",
        "answer": "3"
      }
    ]
  },
  {
    "id": "l5-letter-2",
    "chapter": "L5",
    "title": "引号里的来信",
    "subtitle": "L5 · 第2封 · 引号里的来信",
    "place": "窗台花影",
    "description": "转义、引号与多行诗，给文字一个边界。",
    "dialogue": [
      "窗台的光刚好照到纸上，适合写一封长一点的信。",
      "边界写清楚，文字就能安心留在里面。"
    ],
    "challenges": [
      {
        "id": "l5-unicode-escape",
        "topic": "用 Unicode 转义写字符",
        "kind": "code",
        "title": "用 Unicode 转义打印大写 A（编号 0041）。",
        "explain": "\\u 后接四位十六进制数字表示一个码点。 0050 是十六进制，表示 P；补充平面码点可用 \\U 加八位十六进制。",
        "code": "",
        "hint": "在字符串里写反斜杠、u、四位编号；不要加 r 前缀。",
        "visual": [
          "\\u 后接四位十六进制数字表示一个码点。",
          "0050 是十六进制，表示 P；补充平面码点可用 \\U 加八位十六进制。"
        ],
        "success": "你能用 Unicode 转义写字符，并解释代码为什么这样运行。",
        "source": "L5 · p7,31",
        "test": "assert __output.strip()==\"A\"\nassert \"\\\\u0041\" in __source"
      },
      {
        "id": "l5-quotes",
        "topic": "选择配对的字符串引号",
        "kind": "code",
        "title": "修复引号，让代码输出 He said, \"Hi\"。",
        "explain": "单双引号功能相同，可以包住另一种引号。 外层单引号，里面的双引号可以直接保留；也能用反斜杠转义。",
        "code": "print(\"He said, \"Hi\"\")",
        "hint": "外层单引号，里面的双引号可以直接保留；也能用反斜杠转义。",
        "visual": [
          "单双引号功能相同，可以包住另一种引号。",
          "外层单引号，里面的双引号可以直接保留；也能用反斜杠转义。"
        ],
        "success": "你能选择配对的字符串引号，并解释代码为什么这样运行。",
        "source": "L5 · p8",
        "test": "assert __output.strip()=='He said, \"Hi\"'"
      },
      {
        "id": "l5-triple",
        "topic": "用三引号保存多行文字",
        "kind": "output",
        "title": "预测这段多行诗。",
        "explain": "三引号可以直接包含换行。 三引号保留其中的换行和空格；函数开头的字符串还可以作 docstring。",
        "code": "poem = \"\"\"风\n诗\"\"\"\nprint(poem)",
        "hint": "三引号保留其中的换行和空格；函数开头的字符串还可以作 docstring。",
        "visual": [
          "三引号可以直接包含换行。",
          "三引号保留其中的换行和空格；函数开头的字符串还可以作 docstring。"
        ],
        "success": "你能用三引号保存多行文字，并解释代码为什么这样运行。",
        "source": "L5 · p8",
        "answer": "风\n诗"
      }
    ]
  },
  {
    "id": "l5-letter-3",
    "chapter": "L5",
    "title": "原来的那一页",
    "subtitle": "L5 · 第3封 · 原来的那一页",
    "place": "湖边长椅",
    "description": "原始字符串、不可变性与内容比较。",
    "dialogue": [
      "这张长椅，又遇见你啦。今天的纸页我带了两份。",
      "改写会产生新字符串，原来的值仍然在那里。"
    ],
    "challenges": [
      {
        "id": "l5-raw",
        "topic": "用原始字符串保留反斜杠",
        "kind": "output",
        "title": "预测原始字符串的输出。",
        "explain": "r 前缀让反斜杠通常按原样保留。 普通字符串中的 \\n 换行；原始字符串会显示反斜杠和 n。路径与正则常用；末尾不能只有奇数个反斜杠。",
        "code": "print(r\"A\\nB\")",
        "hint": "普通字符串中的 \\n 换行；原始字符串会显示反斜杠和 n。路径与正则常用；末尾不能只有奇数个反斜杠。",
        "visual": [
          "r 前缀让反斜杠通常按原样保留。",
          "普通字符串中的 \\n 换行；原始字符串会显示反斜杠和 n。路径与正则常用；末尾不能只有奇数个反斜杠。"
        ],
        "success": "你能用原始字符串保留反斜杠，并解释代码为什么这样运行。",
        "source": "L5 · p9",
        "answer": "A\\nB"
      },
      {
        "id": "l5-immutable",
        "topic": "理解字符串不可变",
        "kind": "choice",
        "title": "选择程序的结果。",
        "explain": "字符串不能按索引原地改动。 给 str 索引赋值会 TypeError；可以创建新字符串，再重新赋给变量。",
        "code": "word = \"Venti\"\nword[0] = \"v\"",
        "hint": "给 str 索引赋值会 TypeError；可以创建新字符串，再重新赋给变量。",
        "visual": [
          "字符串不能按索引原地改动。",
          "给 str 索引赋值会 TypeError；可以创建新字符串，再重新赋给变量。"
        ],
        "success": "你能理解字符串不可变，并解释代码为什么这样运行。",
        "source": "L5 · p3,18–19,33",
        "answer": "TypeError",
        "options": [
          "IndexError",
          "TypeError",
          "正常输出",
          "SyntaxError"
        ]
      },
      {
        "id": "l5-equal",
        "topic": "比较字符串的内容",
        "kind": "output",
        "title": "预测内容比较的结果。",
        "explain": "== 比较文字内容，区分大小写。 需要忽略大小写时，先统一 lower 或 upper 再比较。",
        "code": "print(\"Venti\" == \"venti\")\nprint(\"风\" == \"风\")",
        "hint": "需要忽略大小写时，先统一 lower 或 upper 再比较。",
        "visual": [
          "== 比较文字内容，区分大小写。",
          "需要忽略大小写时，先统一 lower 或 upper 再比较。"
        ],
        "success": "你能比较字符串的内容，并解释代码为什么这样运行。",
        "source": "L5 · p10",
        "answer": "False\nTrue"
      }
    ]
  },
  {
    "id": "l5-letter-4",
    "chapter": "L5",
    "title": "从第一字到最后一字",
    "subtitle": "L5 · 第4封 · 从第一字到最后一字",
    "place": "摘星崖草地",
    "description": "身份与索引，找到准确的字符。",
    "dialogue": [
      "把信翻到第一行，也可以从末尾看起。",
      "索引是位置，内容比较是另一回事。"
    ],
    "challenges": [
      {
        "id": "l5-identity",
        "topic": "避免用 is 比较字符串内容",
        "kind": "choice",
        "title": "检查两个变量文字是否相同，应该用哪一个运算符？",
        "explain": "判断两段文字相同，用 ==。 赋值共享同一个对象时 is 为真；不同字符串表达式的缓存行为不应成为内容判断依据。",
        "code": "left = \"wind\"\nright = \"wind\"",
        "hint": "赋值共享同一个对象时 is 为真；不同字符串表达式的缓存行为不应成为内容判断依据。",
        "visual": [
          "判断两段文字相同，用 ==。",
          "赋值共享同一个对象时 is 为真；不同字符串表达式的缓存行为不应成为内容判断依据。"
        ],
        "success": "你能避免用 is 比较字符串内容，并解释代码为什么这样运行。",
        "source": "L5 · p11,32",
        "answer": "==",
        "options": [
          "==",
          "is",
          "=",
          "in"
        ]
      },
      {
        "id": "l5-index",
        "topic": "用从 0 开始的索引取字符",
        "kind": "code",
        "title": "从空白处打印 \"Python\" 的第二个字符。",
        "explain": "第一个字符的索引是 0。 索引取出一个长度为 1 的字符串。",
        "code": "",
        "hint": "索引取出一个长度为 1 的字符串。",
        "visual": [
          "第一个字符的索引是 0。",
          "索引取出一个长度为 1 的字符串。"
        ],
        "success": "你能用从 0 开始的索引取字符，并解释代码为什么这样运行。",
        "source": "L5 · p12,16",
        "test": "require_concepts(['Subscript'])\nassert __output.strip()==\"y\""
      },
      {
        "id": "l5-negative-index",
        "topic": "用负索引从末尾取字符",
        "kind": "output",
        "title": "预测倒数第二个字符。",
        "explain": "-1 表示最后一个字符。 负索引从右向左，最后一个 -1，倒数第二个 -2。",
        "code": "print(\"Python\"[-2])",
        "hint": "负索引从右向左，最后一个 -1，倒数第二个 -2。",
        "visual": [
          "-1 表示最后一个字符。",
          "负索引从右向左，最后一个 -1，倒数第二个 -2。"
        ],
        "success": "你能用负索引从末尾取字符，并解释代码为什么这样运行。",
        "source": "L5 · p12",
        "answer": "o"
      }
    ]
  },
  {
    "id": "l5-letter-5",
    "chapter": "L5",
    "title": "倒着读的秘密",
    "subtitle": "L5 · 第5封 · 倒着读的秘密",
    "place": "图书馆书架间",
    "description": "切片与倒序，取出想要的一段文字。",
    "dialogue": [
      "这排书很安静，我们说话也轻一点。",
      "取一段文字之前，先看清起点和终点。"
    ],
    "challenges": [
      {
        "id": "l5-bounds",
        "topic": "识别索引越界",
        "kind": "choice",
        "title": "选择越界访问的结果。",
        "explain": "长度为 n 的字符串，正索引最大是 n-1。 非法整数索引会 IndexError；索引类型不是整数时通常 TypeError。",
        "code": "print(\"abc\"[3])",
        "hint": "非法整数索引会 IndexError；索引类型不是整数时通常 TypeError。",
        "visual": [
          "长度为 n 的字符串，正索引最大是 n-1。",
          "非法整数索引会 IndexError；索引类型不是整数时通常 TypeError。"
        ],
        "success": "你能识别索引越界，并解释代码为什么这样运行。",
        "source": "L5 · p12",
        "answer": "IndexError",
        "options": [
          "正常输出",
          "SyntaxError",
          "TypeError",
          "IndexError"
        ]
      },
      {
        "id": "l5-slice",
        "topic": "理解切片左含右不含",
        "kind": "code",
        "title": "用切片打印 \"Python\" 中的 \"yth\"。",
        "explain": "s[start:end] 包含 start，不包含 end。 索引 1、2、3 被选中；省略起点默认从开头，省略终点默认到末尾。越界切片会截断。",
        "code": "",
        "hint": "索引 1、2、3 被选中；省略起点默认从开头，省略终点默认到末尾。越界切片会截断。",
        "visual": [
          "s[start:end] 包含 start，不包含 end。",
          "索引 1、2、3 被选中；省略起点默认从开头，省略终点默认到末尾。越界切片会截断。"
        ],
        "success": "你能理解切片左含右不含，并解释代码为什么这样运行。",
        "source": "L5 · p13,16",
        "test": "require_concepts(['Slice'])\nassert __output.strip()==\"yth\""
      },
      {
        "id": "l5-reverse",
        "topic": "用切片步长倒序",
        "kind": "code",
        "title": "写 reverse_text(text)，用切片返回倒序字符串。",
        "explain": "s[::-1] 从末尾向前每次取一个字符。 步长 -1 倒序；步长 2 每隔一个取一个；步长不能为 0。",
        "code": "",
        "hint": "步长 -1 倒序；步长 2 每隔一个取一个；步长不能为 0。",
        "visual": [
          "s[::-1] 从末尾向前每次取一个字符。",
          "步长 -1 倒序；步长 2 每隔一个取一个；步长不能为 0。"
        ],
        "success": "你能用切片步长倒序，并解释代码为什么这样运行。",
        "source": "L5 · p13–15",
        "test": "require_concepts(['Slice'])\nassert reverse_text(\"Hello World\")==\"dlroW olleH\"\nassert reverse_text(\"\")==\"\"\nassert reverse_text(\"风诗\")==\"诗风\""
      }
    ]
  },
  {
    "id": "l5-letter-6",
    "chapter": "L5",
    "title": "把半句诗交给你",
    "subtitle": "L5 · 第6封 · 把半句诗交给你",
    "place": "星落湖岸",
    "description": "重复、遍历与子串，把文字慢慢连起来。",
    "dialogue": [
      "我有半句诗，想听你决定后半句。",
      "每个字符都有位置，拼接时也有自己的顺序。"
    ],
    "challenges": [
      {
        "id": "l5-concat",
        "topic": "用 + 拼接字符串",
        "kind": "output",
        "title": "预测这段拼接。",
        "explain": "两个字符串用 + 拼接成一个新字符串。 拼接不会改变原字符串；数字需要先 str 才能和文字拼接。",
        "code": "name = \"温迪\"\nprint(\"给\" + name)",
        "hint": "拼接不会改变原字符串；数字需要先 str 才能和文字拼接。",
        "visual": [
          "两个字符串用 + 拼接成一个新字符串。",
          "拼接不会改变原字符串；数字需要先 str 才能和文字拼接。"
        ],
        "success": "你能用 + 拼接字符串，并解释代码为什么这样运行。",
        "source": "L5 · p17",
        "answer": "给温迪"
      },
      {
        "id": "l5-repeat",
        "topic": "用 * 重复字符串",
        "kind": "code",
        "title": "用 * 打印三个连续的星号。",
        "explain": "字符串乘整数，重复指定次数。 负数或 0 次得到空字符串；不会进行数字乘法。",
        "code": "",
        "hint": "负数或 0 次得到空字符串；不会进行数字乘法。",
        "visual": [
          "字符串乘整数，重复指定次数。",
          "负数或 0 次得到空字符串；不会进行数字乘法。"
        ],
        "success": "你能用 * 重复字符串，并解释代码为什么这样运行。",
        "source": "L5 · p17",
        "test": "require_concepts(['Mult'])\nassert __output.strip()==\"***\""
      },
      {
        "id": "l5-traverse",
        "topic": "逐字符遍历字符串",
        "kind": "output",
        "title": "预测每轮显示的字母。",
        "explain": "for 每轮得到字符串中的一个字符。 循环顺序就是字符串顺序；读取字符不会改变原字符串。",
        "code": "for ch in \"Hi\":\n    print(ch)",
        "hint": "循环顺序就是字符串顺序；读取字符不会改变原字符串。",
        "visual": [
          "for 每轮得到字符串中的一个字符。",
          "循环顺序就是字符串顺序；读取字符不会改变原字符串。"
        ],
        "success": "你能逐字符遍历字符串，并解释代码为什么这样运行。",
        "source": "L5 · p18",
        "answer": "H\ni"
      }
    ]
  },
  {
    "id": "l5-letter-7",
    "chapter": "L5",
    "title": "没有漏掉的回声",
    "subtitle": "L5 · 第7封 · 没有漏掉的回声",
    "place": "回音山谷",
    "description": "子串、重叠匹配与长度，数清文字。",
    "dialogue": [
      "回声重叠的时候，也别漏掉小小的一声。",
      "逐个起点检查，你会知道每个答案从哪里来。"
    ],
    "challenges": [
      {
        "id": "l5-contains",
        "topic": "查找字符串中的子串",
        "kind": "output",
        "title": "预测子串成员判断。",
        "explain": "in 可以判断一整段子串是否出现。 子串必须连续，且区分大小写；not in 判断没有出现。",
        "code": "print(\"tho\" in \"Python\")\nprint(\"T\" not in \"Python\")",
        "hint": "子串必须连续，且区分大小写；not in 判断没有出现。",
        "visual": [
          "in 可以判断一整段子串是否出现。",
          "子串必须连续，且区分大小写；not in 判断没有出现。"
        ],
        "success": "你能查找字符串中的子串，并解释代码为什么这样运行。",
        "source": "L5 · p19",
        "answer": "True\nTrue"
      },
      {
        "id": "l5-overlap",
        "topic": "用滑动切片数重叠子串",
        "kind": "code",
        "title": "写 count_pairs(s)，用循环与切片数 \"ll\" 出现次数，包含重叠。",
        "explain": "逐个起点检查，才能保留重叠匹配。 起点 0、1、2 都匹配。str.count 默认不计算重叠；长度 m 的窗口有 len(s)-m+1 个候选起点。",
        "code": "",
        "hint": "起点 0、1、2 都匹配。str.count 默认不计算重叠；长度 m 的窗口有 len(s)-m+1 个候选起点。",
        "visual": [
          "逐个起点检查，才能保留重叠匹配。",
          "起点 0、1、2 都匹配。str.count 默认不计算重叠；长度 m 的窗口有 len(s)-m+1 个候选起点。"
        ],
        "success": "你能用滑动切片数重叠子串，并解释代码为什么这样运行。",
        "source": "L5 · p20–21",
        "test": "require_concepts(['For', 'Slice'])\nassert count_pairs(\"llletlll\")==4\nassert count_pairs(\"lll\")==2\nassert count_pairs(\"\")==0\nassert count_pairs(\"hello\")==1"
      },
      {
        "id": "l5-len",
        "topic": "用 len 统计字符数",
        "kind": "output",
        "title": "预测包含换行的字符串长度。",
        "explain": "len(s) 包含空格与换行字符。 一个空格也是一个字符；\\n 在普通字符串里是一个换行字符。",
        "code": "print(len(\"A\\nB\"))",
        "hint": "一个空格也是一个字符；\\n 在普通字符串里是一个换行字符。",
        "visual": [
          "len(s) 包含空格与换行字符。",
          "一个空格也是一个字符；\\n 在普通字符串里是一个换行字符。"
        ],
        "success": "你能用 len 统计字符数，并解释代码为什么这样运行。",
        "source": "L5 · p22–23",
        "answer": "3"
      }
    ]
  },
  {
    "id": "l5-letter-8",
    "chapter": "L5",
    "title": "换一种说法",
    "subtitle": "L5 · 第8封 · 换一种说法",
    "place": "风起地午后",
    "description": "转换、大小写与替换，写出新的文字。",
    "dialogue": [
      "同样的心情，也可以换一种说法。",
      "字符串方法给你新结果，记得接住它。"
    ],
    "challenges": [
      {
        "id": "l5-str",
        "topic": "用 str 把对象转成文字",
        "kind": "code",
        "title": "用 str 把 5 接到「封信」前并打印。",
        "explain": "str() 产生可以拼接的字符串。 str 不会把数字相加；转换后的 \"3\" 是文字。",
        "code": "",
        "hint": "str 不会把数字相加；转换后的 \"3\" 是文字。",
        "visual": [
          "str() 产生可以拼接的字符串。",
          "str 不会把数字相加；转换后的 \"3\" 是文字。"
        ],
        "success": "你能用 str 把对象转成文字，并解释代码为什么这样运行。",
        "source": "L5 · p22–23",
        "test": "require_concepts(['call:str'])\nassert __output.strip()==\"5封信\""
      },
      {
        "id": "l5-case",
        "topic": "用 lower / upper 统一大小写",
        "kind": "code",
        "title": "写 same_word(a,b)，忽略大小写比较文字内容。",
        "explain": "lower() 与 upper() 返回转换后的新字符串。 方法不会修改 word 原本的值。",
        "code": "",
        "hint": "方法不会修改 word 原本的值。",
        "visual": [
          "lower() 与 upper() 返回转换后的新字符串。",
          "方法不会修改 word 原本的值。"
        ],
        "success": "你能用 lower / upper 统一大小写，并解释代码为什么这样运行。",
        "source": "L5 · p22–23",
        "test": "require_concepts(['method:lower'])\nassert same_word(\"Venti\",\"VENTI\") is True\nassert same_word(\"wind\",\"poem\") is False\nassert same_word(\"\",\"\") is True"
      },
      {
        "id": "l5-replace",
        "topic": "用 replace 产生替换后的文字",
        "kind": "code",
        "title": "写 soften(text)，把所有 \"雨\" 替换为 \"风\" 后返回。",
        "explain": "replace(old,new) 返回新字符串。 默认替换所有匹配，原字符串仍然不变；第三个参数可限制次数。",
        "code": "",
        "hint": "默认替换所有匹配，原字符串仍然不变；第三个参数可限制次数。",
        "visual": [
          "replace(old,new) 返回新字符串。",
          "默认替换所有匹配，原字符串仍然不变；第三个参数可限制次数。"
        ],
        "success": "你能用 replace 产生替换后的文字，并解释代码为什么这样运行。",
        "source": "L5 · p22–23,33",
        "test": "require_concepts(['method:replace'])\nassert soften(\"雨与雨\")==\"风与风\"\nassert soften(\"晴天\")==\"晴天\"\nassert soften(\"\")==\"\""
      }
    ]
  },
  {
    "id": "l5-letter-9",
    "chapter": "L5",
    "title": "信封与留白",
    "subtitle": "L5 · 第9封 · 信封与留白",
    "place": "蒙德邮亭",
    "description": "连接、拆分与清理，整理一封来信。",
    "dialogue": [
      "信封整理好了，里面的空白就留着慢慢写。",
      "清理两端，不会抹掉中间的停顿。"
    ],
    "challenges": [
      {
        "id": "l5-join",
        "topic": "用分隔符 join 连接文字",
        "kind": "code",
        "title": "用 join 打印「风·诗·你」。",
        "explain": "分隔符.join(字符串序列) 连接每个元素。 分隔符写在点号左边；每个元素都必须是字符串。",
        "code": "",
        "hint": "分隔符写在点号左边；每个元素都必须是字符串。",
        "visual": [
          "分隔符.join(字符串序列) 连接每个元素。",
          "分隔符写在点号左边；每个元素都必须是字符串。"
        ],
        "success": "你能用分隔符 join 连接文字，并解释代码为什么这样运行。",
        "source": "L5 · p22–23",
        "test": "require_concepts(['method:join'])\nassert __output.strip()==\"风·诗·你\""
      },
      {
        "id": "l5-split",
        "topic": "用 split 拆成字符串列表",
        "kind": "output",
        "title": "预测按逗号拆分的列表。",
        "explain": "split 把一段文字拆成列表。 maxsplit 限制拆分次数；无参数按空白拆并去掉空项，显式分隔符会保留空项。",
        "code": "print(\"风,,诗\".split(\",\"))",
        "hint": "maxsplit 限制拆分次数；无参数按空白拆并去掉空项，显式分隔符会保留空项。",
        "visual": [
          "split 把一段文字拆成列表。",
          "maxsplit 限制拆分次数；无参数按空白拆并去掉空项，显式分隔符会保留空项。"
        ],
        "success": "你能用 split 拆成字符串列表，并解释代码为什么这样运行。",
        "source": "L5 · p24",
        "answer": "['风', '', '诗']"
      },
      {
        "id": "l5-strip",
        "topic": "用 strip 清理两端字符",
        "kind": "code",
        "title": "写 clean(text)，去掉两端空白后返回，保留中间空白。",
        "explain": "strip 只处理两端，不处理中间。 chars 是字符集合，不是一整段前后缀。默认去空白，返回新字符串。",
        "code": "",
        "hint": "chars 是字符集合，不是一整段前后缀。默认去空白，返回新字符串。",
        "visual": [
          "strip 只处理两端，不处理中间。",
          "chars 是字符集合，不是一整段前后缀。默认去空白，返回新字符串。"
        ],
        "success": "你能用 strip 清理两端字符，并解释代码为什么这样运行。",
        "source": "L5 · p25",
        "test": "require_concepts(['method:strip'])\nassert clean(\"  风 诗  \")==\"风 诗\"\nassert clean(\"\\t诗\\n\")==\"诗\"\nassert clean(\"\")==\"\""
      }
    ]
  },
  {
    "id": "l5-letter-10",
    "chapter": "L5",
    "title": "名字里的小规则",
    "subtitle": "L5 · 第10封 · 名字里的小规则",
    "place": "图书馆桌边",
    "description": "查找、字母与数字，准备独立检查。",
    "dialogue": [
      "最后几条规则了。要不要把椅子再挪近一点？",
      "每条规则分别检查，不会更难，只会更清楚。"
    ],
    "challenges": [
      {
        "id": "l5-find",
        "topic": "用 find 查子串位置",
        "kind": "output",
        "title": "预测两次查找的位置。",
        "explain": "find 返回第一个匹配的索引，找不到返回 -1。 可用 start/end 限定搜索区间，返回的仍是原字符串的索引；索引 0 不能误当没找到。",
        "code": "print(\"Venti\".find(\"en\"))\nprint(\"Venti\".find(\"x\"))",
        "hint": "可用 start/end 限定搜索区间，返回的仍是原字符串的索引；索引 0 不能误当没找到。",
        "visual": [
          "find 返回第一个匹配的索引，找不到返回 -1。",
          "可用 start/end 限定搜索区间，返回的仍是原字符串的索引；索引 0 不能误当没找到。"
        ],
        "success": "你能用 find 查子串位置，并解释代码为什么这样运行。",
        "source": "L5 · p26",
        "answer": "1\n-1"
      },
      {
        "id": "l5-alpha",
        "topic": "用 isalpha 检查字母",
        "kind": "output",
        "title": "预测字母检查。",
        "explain": "isalpha() 检查非空字符串是否全由字母构成。 下划线不算字母；Unicode 字母也可能成立。这里先用于课件变量名练习的简单字符规则。",
        "code": "print(\"Venti\".isalpha())\nprint(\"_\".isalpha())",
        "hint": "下划线不算字母；Unicode 字母也可能成立。这里先用于课件变量名练习的简单字符规则。",
        "visual": [
          "isalpha() 检查非空字符串是否全由字母构成。",
          "下划线不算字母；Unicode 字母也可能成立。这里先用于课件变量名练习的简单字符规则。"
        ],
        "success": "你能用 isalpha 检查字母，并解释代码为什么这样运行。",
        "source": "L5 · p29–30",
        "answer": "True\nFalse"
      },
      {
        "id": "l5-digits",
        "topic": "用 isdigit 检查数字字符",
        "kind": "output",
        "title": "预测数字字符检查。",
        "explain": "isdigit() 检查字符是否为数字字符。 判断文字类型，不是把文字变成 int；本练习限定 ASCII，避免扩展数字字符与 Python 标识符规则的差异。",
        "code": "print(\"42\".isdigit())\nprint(\"4a\".isdigit())",
        "hint": "判断文字类型，不是把文字变成 int；本练习限定 ASCII，避免扩展数字字符与 Python 标识符规则的差异。",
        "visual": [
          "isdigit() 检查字符是否为数字字符。",
          "判断文字类型，不是把文字变成 int；本练习限定 ASCII，避免扩展数字字符与 Python 标识符规则的差异。"
        ],
        "success": "你能用 isdigit 检查数字字符，并解释代码为什么这样运行。",
        "source": "L5 · p29–30",
        "answer": "True\nFalse"
      }
    ]
  },
  {
    "id": "l5-letter-11",
    "chapter": "L5",
    "title": "署名，与你",
    "subtitle": "L5 · 第11封 · 署名，与你",
    "place": "摘星崖夜风",
    "description": "把学过的文字工具组合成自己的程序。",
    "dialogue": [
      "这次的最后一页，我想和你一起署名。",
      "先讲清步骤，再让你的手把它写成代码。"
    ],
    "challenges": [
      {
        "id": "l5-keyword",
        "topic": "排除 Python 关键字",
        "kind": "output",
        "title": "预测两个名字是否为关键字。",
        "explain": "keyword.iskeyword(name) 判断保留关键字。 关键字不能作为普通变量名；import keyword 引入这份检查表。",
        "code": "import keyword\nprint(keyword.iskeyword(\"if\"))\nprint(keyword.iskeyword(\"wind_poem\"))",
        "hint": "关键字不能作为普通变量名；import keyword 引入这份检查表。",
        "visual": [
          "keyword.iskeyword(name) 判断保留关键字。",
          "关键字不能作为普通变量名；import keyword 引入这份检查表。"
        ],
        "success": "你能排除 Python 关键字，并解释代码为什么这样运行。",
        "source": "L5 · p29–30",
        "answer": "True\nFalse"
      },
      {
        "id": "l5-vowels",
        "topic": "综合统计不分大小写的元音",
        "kind": "code",
        "title": "写 countVowels(inputString)，统计 a/e/i/o/u，忽略大小写。",
        "explain": "先统一大小写，再遍历并统计元音。 每个元音字符分别计数，包括重复出现的；y 不在本题定义中。",
        "code": "",
        "hint": "每个元音字符分别计数，包括重复出现的；y 不在本题定义中。",
        "visual": [
          "先统一大小写，再遍历并统计元音。",
          "每个元音字符分别计数，包括重复出现的；y 不在本题定义中。"
        ],
        "success": "你能综合统计不分大小写的元音，并解释代码为什么这样运行。",
        "source": "L5 · p27–28",
        "test": "require_concepts(['For', 'method:lower', 'In'])\nassert countVowels(\"AEIOU\")==5\nassert countVowels(\"Venti\")==2\nassert countVowels(\"rhythm\")==0\nassert countVowels(\"\")==0"
      },
      {
        "id": "l5-valid-name",
        "topic": "独立检查变量名是否合法",
        "kind": "code",
        "title": "写 validVariable(name)：按上述规则检查 ASCII 变量名，返回 bool。输入保证只含 ASCII 字符。",
        "explain": "先排除空名，再检查首字符、后续字符和关键字。 首位字母或 _；后续字母、数字或 _；不能是关键字。逐字符检查。课件规则在本关限定 ASCII；完整 Unicode 标识符可用 isidentifier()。",
        "code": "",
        "hint": "首位字母或 _；后续字母、数字或 _；不能是关键字。逐字符检查。课件规则在本关限定 ASCII；完整 Unicode 标识符可用 isidentifier()。",
        "visual": [
          "先排除空名，再检查首字符、后续字符和关键字。",
          "首位字母或 _；后续字母、数字或 _；不能是关键字。逐字符检查。课件规则在本关限定 ASCII；完整 Unicode 标识符可用 isidentifier()。"
        ],
        "success": "你能独立检查变量名是否合法，并解释代码为什么这样运行。",
        "source": "L5 · p29–30",
        "test": "require_concepts(['For', 'method:iskeyword'])\nfor _name,_expected in [(\"wind_poem\",True),(\"_wind2\",True),(\"\",False),(\"2wind\",False),(\"for\",False),(\"wind-poem\",False),(\"a b\",False),(\"A\",True)]:\n    assert validVariable(_name) is _expected, \"检查空名、首位、后续字符与关键字\""
      }
    ]
  }
];
export const extraLessons:Record<string,Lesson>={
  "l3-arithmetic": {
    "idea": "运算符把左右的数变成一个结果。",
    "venti": "两篮苹果合在一起，数量就有了新答案。",
    "steps": [
      {
        "code": "print(4 + 2)\nprint(4 - 2)\nprint(4 * 2)",
        "result": "6\n2\n8",
        "why": "+ 加，- 减，* 乘；负号也可以只放在一个数前。"
      }
    ],
    "remember": "运算符把左右的数变成一个结果。",
    "task": "写出这三行的输出。",
    "proof": "你能使用 +、-、*，并解释代码为什么这样运行。",
    "after": "算清楚了。你的那一份，我已经替你留好了。"
  },
  "l3-division": {
    "idea": "/ 的结果是浮点数，即使刚好除尽。",
    "venti": "把四颗苹果分给两人，也要看清程序怎样记账。",
    "steps": [
      {
        "code": "print(4 / 2)",
        "result": "2.0",
        "why": "4 / 2 的结果是 2.0；小数点体现 float 类型。"
      }
    ],
    "remember": "/ 的结果是浮点数，即使刚好除尽。",
    "task": "写出这行除法的输出。",
    "proof": "你能区分 / 与整数结果，并解释代码为什么这样运行。",
    "after": "算清楚了。你的那一份，我已经替你留好了。"
  },
  "l3-floor": {
    "idea": "// 向负无穷方向取整。",
    "venti": "向下走一级台阶，不是把小数简单擦掉。",
    "steps": [
      {
        "code": "print(7 // 2)\nprint(-7 // 2)",
        "result": "3\n-4",
        "why": "3.5 向下是 3，-3.5 向下是 -4。"
      }
    ],
    "remember": "// 向负无穷方向取整。",
    "task": "预测正数与负数整除的结果。",
    "proof": "你能理解向下取整 //，并解释代码为什么这样运行。",
    "after": "算清楚了。你的那一份，我已经替你留好了。"
  },
  "l3-modulo": {
    "idea": "% 取出除法剩下的部分。",
    "venti": "分完苹果，留在篮底的就是余数。",
    "steps": [
      {
        "code": "print(8 % 3)",
        "result": "2",
        "why": "8 = 3 × 2 + 2，所以余数是 2。"
      }
    ],
    "remember": "% 取出除法剩下的部分。",
    "task": "从空白处打印 11 除以 4 的余数。",
    "proof": "你能用 % 求余数，并解释代码为什么这样运行。",
    "after": "顺序排好了。现在这小节，可以唱给你听了。"
  },
  "l3-power": {
    "idea": "** 计算乘方，不是把两个数相乘。",
    "venti": "一层层的回声，是同一个数重复相乘。",
    "steps": [
      {
        "code": "print(3 ** 2)",
        "result": "9",
        "why": "3 ** 2 等于 3 × 3。"
      }
    ],
    "remember": "** 计算乘方，不是把两个数相乘。",
    "task": "写出二的四次方。",
    "proof": "你能用 ** 表示乘方，并解释代码为什么这样运行。",
    "after": "顺序排好了。现在这小节，可以唱给你听了。"
  },
  "l3-precedence": {
    "idea": "括号可以明确先算哪一部分。",
    "venti": "不知道先弹哪根弦，就先把这一小节圈起来。",
    "steps": [
      {
        "code": "print(2 + 3 * 4)\nprint((2 + 3) * 4)",
        "result": "14\n20",
        "why": "先括号，再乘方，再正负号，再乘除整除余数，最后加减；同级通常从左到右。比较后依次 not、and、or。@ 是矩阵乘法，本课不做矩阵运算。"
      }
    ],
    "remember": "括号可以明确先算哪一部分。",
    "task": "预测两种顺序的结果。",
    "proof": "你能用括号安排运算顺序，并解释代码为什么这样运行。",
    "after": "顺序排好了。现在这小节，可以唱给你听了。"
  },
  "l3-zero": {
    "idea": "除数为 0 会抛出 ZeroDivisionError。",
    "venti": "空篮子不能当分组的大小。别怕，错误也在告诉我们原因。",
    "steps": [
      {
        "code": "print(5 / 0)",
        "result": "ZeroDivisionError",
        "why": "/、//、% 遇到零除数都会报错。"
      }
    ],
    "remember": "除数为 0 会抛出 ZeroDivisionError。",
    "task": "选择程序会发生什么。",
    "proof": "你能识别除零错误，并解释代码为什么这样运行。",
    "after": "错误也有能说清的原因。窗边的位置，今天就再坐一会儿吧。"
  },
  "l3-float": {
    "idea": "浮点数有时只能存下最接近的值。",
    "venti": "有些旋律无法用有限的音符写尽，小数也一样。",
    "steps": [
      {
        "code": "print(0.1 + 0.2)",
        "result": "0.30000000000000004",
        "why": "二进制浮点数不能精确表示所有十进制小数；不是计算机随意算错。"
      }
    ],
    "remember": "浮点数有时只能存下最接近的值。",
    "task": "预测比较结果：近似计算会完全相等吗？",
    "proof": "你能理解浮点数的近似，并解释代码为什么这样运行。",
    "after": "错误也有能说清的原因。窗边的位置，今天就再坐一会儿吧。"
  },
  "l3-formula": {
    "idea": "分数的整个分母要放在括号里。",
    "venti": "把纸上的公式变成代码，我来检查你有没有漏掉一个括号。",
    "steps": [
      {
        "code": "def ratio(a, b):\n    return a / (b + 2)\nprint(ratio(12, 2))",
        "result": "3.0",
        "why": "a / (b + 2) 先算整个分母；a / b + 2 含义不同。"
      }
    ],
    "remember": "分数的整个分母要放在括号里。",
    "task": "写 formula(x, y, z)，返回 x 的平方乘 y，再除以 (z + 1)。",
    "proof": "你能把数学式写成函数，并解释代码为什么这样运行。",
    "after": "错误也有能说清的原因。窗边的位置，今天就再坐一会儿吧。"
  },
  "l3-compare": {
    "idea": "比较返回 True 或 False。",
    "venti": "不是问有多少苹果，而是问哪一篮更多。",
    "steps": [
      {
        "code": "print(4 < 6)\nprint(4 <= 4)\nprint(4 != 6)",
        "result": "True\nTrue\nTrue",
        "why": "<、<=、>、>= 比大小；== 比相等；!= 比不等。= 是赋值。"
      }
    ],
    "remember": "比较返回 True 或 False。",
    "task": "预测两次比较。",
    "proof": "你能使用比较运算，并解释代码为什么这样运行。",
    "after": "你已经有自己的判断了。门后的路，我陪你走。"
  },
  "l3-chain": {
    "idea": "a < b < c 要求两段比较同时成立。",
    "venti": "要走过两扇门，每一扇都得打开。",
    "steps": [
      {
        "code": "print(1 < 3 < 5)\nprint(1 < 3 > 8)",
        "result": "True\nFalse",
        "why": "中间的 3 同时参与两边比较，不是先算 True 再比较。"
      }
    ],
    "remember": "a < b < c 要求两段比较同时成立。",
    "task": "预测这组链式比较。",
    "proof": "你能理解链式比较，并解释代码为什么这样运行。",
    "after": "你已经有自己的判断了。门后的路，我陪你走。"
  },
  "l3-not": {
    "idea": "not 把真变假，把假变真。",
    "venti": "风向反过来，答案也反过来。",
    "steps": [
      {
        "code": "print(not True)\nprint(not False)",
        "result": "False\nTrue",
        "why": "not 总是产生布尔值。"
      }
    ],
    "remember": "not 把真变假，把假变真。",
    "task": "写出取反后的结果。",
    "proof": "你能用 not 反转真假，并解释代码为什么这样运行。",
    "after": "你已经有自己的判断了。门后的路，我陪你走。"
  },
  "l3-and": {
    "idea": "and 需要两边都为真。",
    "venti": "有苹果，也有你，野餐的条件才齐了。",
    "steps": [
      {
        "code": "print(True and False)\nprint(True and True)",
        "result": "False\nTrue",
        "why": "布尔条件中，只要一项为假，整体就是假。"
      }
    ],
    "remember": "and 需要两边都为真。",
    "task": "预测同时满足条件的结果。",
    "proof": "你能用 and 同时要求两个条件，并解释代码为什么这样运行。",
    "after": "这回条件看清了。至于下次见面，我想就这样约好了。"
  },
  "l3-or": {
    "idea": "or 只要至少一边为真。",
    "venti": "晴天去山坡，阴天去树下，总有一条路。",
    "steps": [
      {
        "code": "print(False or True)\nprint(False or False)",
        "result": "True\nFalse",
        "why": "两边都假时 or 才是假。"
      }
    ],
    "remember": "or 只要至少一边为真。",
    "task": "预测两个候选条件。",
    "proof": "你能用 or 接受任一条件，并解释代码为什么这样运行。",
    "after": "这回条件看清了。至于下次见面，我想就这样约好了。"
  },
  "l3-short": {
    "idea": "and / or 在已能决定结果时停止求值。",
    "venti": "前一扇门已经关了，就不用再走向危险的桥。",
    "steps": [
      {
        "code": "print(0 and 1 / 0)\nprint(\"\" or \"风\")",
        "result": "0\n风",
        "why": "and 返回首个假值，否则返回末值；or 返回首个真值，否则末值。不会必然返回 bool。空字符串、0、None 为假。"
      }
    ],
    "remember": "and / or 在已能决定结果时停止求值。",
    "task": "预测这两行，不需要计算被跳过的除法。",
    "proof": "你能理解短路与操作数返回，并解释代码为什么这样运行。",
    "after": "这回条件看清了。至于下次见面，我想就这样约好了。"
  },
  "l3-augmented": {
    "idea": "对数字，n += x 相当于 n = n + x。",
    "venti": "记账时，可以把加法和更新写在一起。",
    "steps": [
      {
        "code": "n = 3\nn += 2\nn *= 4\nprint(n)",
        "result": "20",
        "why": "同样有 -=、/=、//=、%=、**=；每一步都使用更新后的数。"
      }
    ],
    "remember": "对数字，n += x 相当于 n = n + x。",
    "task": "补上复合赋值，让 apples 从 3 增加 4。",
    "proof": "你能使用复合赋值，并解释代码为什么这样运行。",
    "after": "相似的问法，你也分清了。你写的那张诗页，我会认得。"
  },
  "l3-identity": {
    "idea": "is 问是不是同一个对象；== 问值是否相等。",
    "venti": "两张写着同一句诗的纸，也可能是不同的纸。",
    "steps": [
      {
        "code": "a = [1]\nb = [1]\nc = a\nprint(a == b)\nprint(a is b)\nprint(a is c)",
        "result": "True\nFalse\nTrue",
        "why": "用新建列表演示身份，不依赖整数或字符串缓存；is not 取反身份判断。"
      }
    ],
    "remember": "is 问是不是同一个对象；== 问值是否相等。",
    "task": "预测内容与身份的差别。",
    "proof": "你能区分身份与相等，并解释代码为什么这样运行。",
    "after": "相似的问法，你也分清了。你写的那张诗页，我会认得。"
  },
  "l3-membership": {
    "idea": "in 检查是否包含一个成员。",
    "venti": "找一找，行囊里有没有我的羽毛。",
    "steps": [
      {
        "code": "print(\"羽毛\" in [\"苹果\", \"羽毛\"])\nprint(1 in {1: \"诗\"})",
        "result": "True\nTrue",
        "why": "列表检查元素；字符串检查子串且区分大小写；字典检查键，不检查值。"
      }
    ],
    "remember": "in 检查是否包含一个成员。",
    "task": "预测字典里的成员判断。",
    "proof": "你能用 in / not in 查成员，并解释代码为什么这样运行。",
    "after": "相似的问法，你也分清了。你写的那张诗页，我会认得。"
  },
  "l3-if": {
    "idea": "if 后的缩进代码只在条件为真时执行。",
    "venti": "条件像一扇门，门外的路还是会继续。",
    "steps": [
      {
        "code": "n = 2\nif n > 0:\n    print(\"入内\")\nprint(\"继续\")",
        "result": "入内\n继续",
        "why": "冒号后换行缩进；恢复原缩进的语句不属于 if。"
      }
    ],
    "remember": "if 后的缩进代码只在条件为真时执行。",
    "task": "预测哪一行会显示。",
    "proof": "你能读懂单分支 if，并解释代码为什么这样运行。",
    "after": "每条路都有了答案。屋檐下这一刻，我们不赶时间。"
  },
  "l3-else": {
    "idea": "if 与 else 只选择其中一条路。",
    "venti": "晴或雨，我都给你留一个可以坐下的位置。",
    "steps": [
      {
        "code": "if 2 > 5:\n    print(\"山坡\")\nelse:\n    print(\"树下\")",
        "result": "树下",
        "why": "条件是假，就执行 else；else 同样需要冒号。"
      }
    ],
    "remember": "if 与 else 只选择其中一条路。",
    "task": "用 if / else 写 shelter(rain)：下雨返回「树下」，否则「山坡」。",
    "proof": "你能读懂双分支 if / else，并解释代码为什么这样运行。",
    "after": "每条路都有了答案。屋檐下这一刻，我们不赶时间。"
  },
  "l3-even": {
    "idea": "整数除以 2 余 0，就是偶数。",
    "venti": "两两分好苹果，没有剩下的就是偶数。",
    "steps": [
      {
        "code": "def is_even(n):\n    return n % 2 == 0\nprint(is_even(8))",
        "result": "True",
        "why": "0 和负偶数也满足 n % 2 == 0。"
      }
    ],
    "remember": "整数除以 2 余 0，就是偶数。",
    "task": "写 evenOrOdd(n)，偶数返回 \"even\"，奇数返回 \"odd\"。",
    "proof": "你能用余数判断奇偶，并解释代码为什么这样运行。",
    "after": "每条路都有了答案。屋檐下这一刻，我们不赶时间。"
  },
  "l3-elif": {
    "idea": "if / elif 只执行第一个成立的分支。",
    "venti": "有好几条路，也只在这一刻选一条。",
    "steps": [
      {
        "code": "n = 8\nif n > 0:\n    print(\"正数\")\nelif n > 5:\n    print(\"大于五\")\nelse:\n    print(\"其他\")",
        "result": "正数",
        "why": "即使后一个条件也为真，前一个已经选中时也不会再执行。"
      }
    ],
    "remember": "if / elif 只执行第一个成立的分支。",
    "task": "预测第一个满足的分支。",
    "proof": "你能读懂多分支 elif，并解释代码为什么这样运行。",
    "after": "停下也不算走丢。听完这一阵风再出发吧。"
  },
  "l3-sign": {
    "idea": "先判零，再按大小选择正数或负数。",
    "venti": "不把安静当成向后走，零也有自己的名字。",
    "steps": [
      {
        "code": "def direction(n):\n    if n == 0:\n        return \"停\"\n    elif n > 0:\n        return \"前\"\n    else:\n        return \"后\"\nprint(direction(-1))",
        "result": "后",
        "why": "elif 把互斥的三种情况放在同一条选择链。"
      }
    ],
    "remember": "先判零，再按大小选择正数或负数。",
    "task": "写 positiveNegativeOrZero(num)，返回 \"positive\"、\"negative\" 或 \"zero\"。",
    "proof": "你能判断正数、负数与零，并解释代码为什么这样运行。",
    "after": "停下也不算走丢。听完这一阵风再出发吧。"
  },
  "l3-decimal": {
    "idea": "number % 1 得到向下取整后剩下的部分。",
    "venti": "整数没有剩下的小数，就给它一封特别的回信。",
    "steps": [
      {
        "code": "print(3.25 % 1)\nprint(3.0 % 1)",
        "result": "0.25\n0.0",
        "why": "浮点结果可能近似；负数按 Python 取模规则，例如 -1.25 % 1 为 0.75。"
      }
    ],
    "remember": "number % 1 得到向下取整后剩下的部分。",
    "task": "写 theDecimal(number)：余数为零返回 \"INTEGER\"，否则返回 number % 1。",
    "proof": "你能处理小数部分的分支，并解释代码为什么这样运行。",
    "after": "停下也不算走丢。听完这一阵风再出发吧。"
  },
  "l3-nested": {
    "idea": "嵌套 if 只在外层分支选中后才会判断。",
    "venti": "走进花园后，才需要选坐哪一棵树下。",
    "steps": [
      {
        "code": "n = -4\nif n % 2 == 0:\n    if n > 0:\n        print(\"正偶数\")\n    else:\n        print(\"负偶数\")",
        "result": "负偶数",
        "why": "缩进层级表明 else 属于哪个 if。"
      }
    ],
    "remember": "嵌套 if 只在外层分支选中后才会判断。",
    "task": "预测这段嵌套分支。",
    "proof": "你能跟踪嵌套条件，并解释代码为什么这样运行。",
    "after": "最大的那个找到了。不过今晚，我更想记住你抬头的样子。"
  },
  "l3-compound": {
    "idea": "用括号把复合条件的意思写清楚。",
    "venti": "不必把路绕得复杂，把一起判断的条件圈在一处。",
    "steps": [
      {
        "code": "n = 8\nprint(n > 0 and n % 2 == 0)",
        "result": "True",
        "why": "比较先于 and；not、and、or 依次结合，忘记时用括号明确。"
      }
    ],
    "remember": "用括号把复合条件的意思写清楚。",
    "task": "写 positive_even(n)，只有正偶数才返回 True。",
    "proof": "你能组合条件判断，并解释代码为什么这样运行。",
    "after": "最大的那个找到了。不过今晚，我更想记住你抬头的样子。"
  },
  "l3-greatest": {
    "idea": "候选最大值必须不小于另外两个数。",
    "venti": "三个愿望里找最亮的那个，也要顾及一样亮的情况。",
    "steps": [
      {
        "code": "x, y = 4, 4\nprint(x >= y)",
        "result": "True",
        "why": "用 >= 包含相等情况；不要遗漏并列最大值。"
      }
    ],
    "remember": "候选最大值必须不小于另外两个数。",
    "task": "不用 max，写 greatest(x,y,z)，以条件分支返回最大值。",
    "proof": "你能用条件选择三个数的最大值，并解释代码为什么这样运行。",
    "after": "最大的那个找到了。不过今晚，我更想记住你抬头的样子。"
  },
  "l3-greatest-nested": {
    "idea": "先比较一对，再与第三个数比较。",
    "venti": "把大问题拆成两次小选择，就能看清路。",
    "steps": [
      {
        "code": "a, b, c = 4, 2, 5\nif a > b:\n    print(a > c)\nelse:\n    print(b > c)",
        "result": "False",
        "why": "第一步选出 a 与 b 中较大的候选，再与 c 比较。"
      }
    ],
    "remember": "先比较一对，再与第三个数比较。",
    "task": "写 greatest_nested(x,y,z)，至少有一层嵌套 if，返回最大值。",
    "proof": "你能用嵌套分支取最大值，并解释代码为什么这样运行。",
    "after": "选择已经写进代码了。明天，我想说是专门来见你的。"
  },
  "l3-retire": {
    "idea": "not (A or B) 表示两种条件都不成立。",
    "venti": "这是课件的条件计算器，我们只研究程序的选择逻辑。",
    "steps": [
      {
        "code": "money = 100\ncar = \"yes\"\nprint(not (money >= 1000000 or car == \"yes\"))",
        "result": "False",
        "why": "课件示例中，存款达到阈值或 car 为 y / yes，进入 else。这只是代码示例。"
      }
    ],
    "remember": "not (A or B) 表示两种条件都不成立。",
    "task": "预测课件条件结构的输出。",
    "proof": "你能读懂 not 与 or 的组合，并解释代码为什么这样运行。",
    "after": "选择已经写进代码了。明天，我想说是专门来见你的。"
  },
  "l3-bitwise": {
    "idea": "&、|、^ 按整数的二进制位运算。",
    "venti": "总结里还有这枚小音符，先认得它，不用急着背。",
    "steps": [
      {
        "code": "print(5 & 3)\nprint(5 | 3)\nprint(5 ^ 3)",
        "result": "1\n7\n6",
        "why": "5 为 101，3 为 011；& 同为1才为1，| 任一为1，^ 不同为1。~ 取反，<< / >> 移位。这是总结术语的补充基础。"
      }
    ],
    "remember": "&、|、^ 按整数的二进制位运算。",
    "task": "预测 6 与 3 的按位与。",
    "proof": "你能认识位运算与逻辑运算的区别，并解释代码为什么这样运行。",
    "after": "选择已经写进代码了。明天，我想说是专门来见你的。"
  },
  "l4-for": {
    "idea": "for 每次取出一个元素，执行一次循环体。",
    "venti": "不必写三次问候，让风逐一把名字送来。",
    "steps": [
      {
        "code": "for name in [\"风\", \"诗\"]:\n    print(name)",
        "result": "风\n诗",
        "why": "变量每轮绑定下一个元素，缩进的代码逐轮执行；列表、元组、字符串都能遍历。"
      }
    ],
    "remember": "for 每次取出一个元素，执行一次循环体。",
    "task": "写循环，依次打印「苹果」与「羽毛」，一行一个。",
    "proof": "你能用 for 逐个遍历，并解释代码为什么这样运行。",
    "after": "这是你亲手写下的重复。下一次问候，我还是会认真听。"
  },
  "l4-range": {
    "idea": "range(stop) 从 0 开始，不包含 stop。",
    "venti": "数到门口就停，门牌号不算在里面。",
    "steps": [
      {
        "code": "for i in range(3):\n    print(i)",
        "result": "0\n1\n2",
        "why": "range(3) 依次给出 0、1、2。"
      }
    ],
    "remember": "range(stop) 从 0 开始，不包含 stop。",
    "task": "写出 range(4) 的每个输出。",
    "proof": "你能理解 range 的终点不包含，并解释代码为什么这样运行。",
    "after": "这是你亲手写下的重复。下一次问候，我还是会认真听。"
  },
  "l4-step": {
    "idea": "range(start, stop, step) 按步长前进。",
    "venti": "一次跨两块石头，也可以向回走。",
    "steps": [
      {
        "code": "print(list(range(2, 8, 2)))\nprint(list(range(3, 0, -1)))",
        "result": "[2, 4, 6]\n[3, 2, 1]",
        "why": "起点包含，终点不包含；负步长倒着走，步长不能为 0。"
      }
    ],
    "remember": "range(start, stop, step) 按步长前进。",
    "task": "从空白处打印 2、4、6、8，一行一个，用 range。",
    "proof": "你能设置 range 起点与步长，并解释代码为什么这样运行。",
    "after": "这是你亲手写下的重复。下一次问候，我还是会认真听。"
  },
  "l4-index": {
    "idea": "range(len(sequence)) 依次给出合法索引。",
    "venti": "先数清行囊有几格，再按格子找东西。",
    "steps": [
      {
        "code": "bag = [\"琴\", \"羽毛\"]\nfor i in range(len(bag)):\n    print(i, bag[i])",
        "result": "0 琴\n1 羽毛",
        "why": "len 给元素个数；长度为 2 的列表，索引是 0 与 1。"
      }
    ],
    "remember": "range(len(sequence)) 依次给出合法索引。",
    "task": "预测按索引遍历的结果。",
    "proof": "你能把 len 与 range 配合，并解释代码为什么这样运行。",
    "after": "每一轮都留下了结果。今天和你在一起，又多一件值得记住的小事。"
  },
  "l4-sum": {
    "idea": "总和在循环外初始化，在循环内不断更新。",
    "venti": "把捡来的蒲公英一朵朵放进同一个篮子。",
    "steps": [
      {
        "code": "total = 0\nfor n in [2, 4, 1]:\n    total += n\nprint(total)",
        "result": "7",
        "why": "如果把 total = 0 放进循环，每轮都会把之前的总和清空。"
      }
    ],
    "remember": "总和在循环外初始化，在循环内不断更新。",
    "task": "写 sum_numbers(numbers)，用 for 返回列表总和，空列表返回 0。",
    "proof": "你能用累加器保存总和，并解释代码为什么这样运行。",
    "after": "每一轮都留下了结果。今天和你在一起，又多一件值得记住的小事。"
  },
  "l4-count": {
    "idea": "计数器每遇到一个符合条件的元素就加 1。",
    "venti": "这次不数苹果的重量，只数有几颗。",
    "steps": [
      {
        "code": "count = 0\nfor n in [1, 3, 5]:\n    count += 1\nprint(count)",
        "result": "3",
        "why": "每轮加 1 统计次数；加 n 才是统计总和。"
      }
    ],
    "remember": "计数器每遇到一个符合条件的元素就加 1。",
    "task": "预测计数器最终的值。",
    "proof": "你能在循环里计数，并解释代码为什么这样运行。",
    "after": "每一轮都留下了结果。今天和你在一起，又多一件值得记住的小事。"
  },
  "l4-factorial-for": {
    "idea": "连乘的初始值是 1，不是 0。",
    "venti": "一旦从零开始相乘，之后的旋律就全都归零了。",
    "steps": [
      {
        "code": "product = 1\nfor i in range(1, 4):\n    product *= i\nprint(product)",
        "result": "6",
        "why": "1 × 2 × 3 = 6；0! 定义为 1，空循环保留初始值。"
      }
    ],
    "remember": "连乘的初始值是 1，不是 0。",
    "task": "写 factorial(n)，对非负整数用 for 返回 n!。",
    "proof": "你能用 for 计算阶乘，并解释代码为什么这样运行。",
    "after": "旋律能重新奏响了。换成别的数字，也有清楚的答案。"
  },
  "l4-table": {
    "idea": "把变化的数字放进每轮输出中。",
    "venti": "同一小节，换一个数字就有新的回声。",
    "steps": [
      {
        "code": "for i in range(1, 3):\n    print(\"3 x\", i, \"=\", 3 * i)",
        "result": "3 x 1 = 3\n3 x 2 = 6",
        "why": "print 多个内容默认以空格连接，乘积每轮重新计算。"
      }
    ],
    "remember": "把变化的数字放进每轮输出中。",
    "task": "写 multiplicationTableFor7(n)，打印 7 的乘法表，1 到 n；格式如 7 x 1 = 7。",
    "proof": "你能生成乘法表，并解释代码为什么这样运行。",
    "after": "旋律能重新奏响了。换成别的数字，也有清楚的答案。"
  },
  "l4-even-sum": {
    "idea": "在循环内用 if 选择要加入总和的数。",
    "venti": "不是每片叶子都收下，先认出我们要找的形状。",
    "steps": [
      {
        "code": "total = 0\nfor n in range(1, 5):\n    if n % 2 == 0:\n        total += n\nprint(total)",
        "result": "6",
        "why": "循环负责逐个查看，条件负责筛选，累加器负责保存。"
      }
    ],
    "remember": "在循环内用 if 选择要加入总和的数。",
    "task": "写 sumEvenNumbers(start,end)，求包含两端的所有偶数之和；start > end 返回 0。",
    "proof": "你能筛选偶数再累加，并解释代码为什么这样运行。",
    "after": "旋律能重新奏响了。换成别的数字，也有清楚的答案。"
  },
  "l4-perfect": {
    "idea": "真因子能整除 n，但不包含 n 自己。",
    "venti": "给这枚数字找出所有小伙伴，再看能不能拼回它。",
    "steps": [
      {
        "code": "n = 6\nfor d in range(1, n):\n    if n % d == 0:\n        print(d)",
        "result": "1\n2\n3",
        "why": "6 的真因子是 1、2、3，总和等于 6。完全数必须为正整数。"
      }
    ],
    "remember": "真因子能整除 n，但不包含 n 自己。",
    "task": "写 isPerfectNumber(n)，返回是否为完全数；n <= 1 返回 False。",
    "proof": "你能累加真因子判断完全数，并解释代码为什么这样运行。",
    "after": "你知道它什么时候开始，也知道什么时候结束。这里刚好适合歇一会儿。"
  },
  "l4-while": {
    "idea": "while 在每轮开始前重新检查条件。",
    "venti": "还没走到约好的地方，就再向前走一步。",
    "steps": [
      {
        "code": "n = 1\nwhile n <= 3:\n    print(n)\n    n += 1",
        "result": "1\n2\n3",
        "why": "先判断再执行；一开始是假，循环体一次也不执行。"
      }
    ],
    "remember": "while 在每轮开始前重新检查条件。",
    "task": "写出这段 while 的输出。",
    "proof": "你能用 while 在条件成立时重复，并解释代码为什么这样运行。",
    "after": "你知道它什么时候开始，也知道什么时候结束。这里刚好适合歇一会儿。"
  },
  "l4-termination": {
    "idea": "循环中要让条件有机会变成假。",
    "venti": "我会等你，但程序不能一直站在同一个数字上。",
    "steps": [
      {
        "code": "i = 0\nwhile i < 2:\n    print(i)\n    i += 1",
        "result": "0\n1",
        "why": "少了 i += 1，i 永远是 0。游戏会停止超时程序，你可以继续修改。"
      }
    ],
    "remember": "循环中要让条件有机会变成假。",
    "task": "补上更新，让代码打印 0、1、2 后停止。",
    "proof": "你能修复没有更新的无限循环，并解释代码为什么这样运行。",
    "after": "你知道它什么时候开始，也知道什么时候结束。这里刚好适合歇一会儿。"
  },
  "l4-factorial-while": {
    "idea": "while 的计数变量需要自己初始化和更新。",
    "venti": "用另一条路抵达同一个答案，你会更明白循环的脚步。",
    "steps": [
      {
        "code": "i = 1\nproduct = 1\nwhile i <= 3:\n    product *= i\n    i += 1\nprint(product)",
        "result": "6",
        "why": "乘积初始为 1，计数器每轮加 1，超过 n 后停止。"
      }
    ],
    "remember": "while 的计数变量需要自己初始化和更新。",
    "task": "写 factorial_while(n)，必须用 while 返回非负整数的阶乘。",
    "proof": "你能用 while 计算阶乘，并解释代码为什么这样运行。",
    "after": "这一轮的脚步很清楚。下次走这条路，我们也一起。"
  },
  "l4-sentinel": {
    "idea": "约定一个特殊值，表示停止收集。",
    "venti": "零不是要收进篮子的苹果，而是结束这次收集的暗号。",
    "steps": [
      {
        "code": "numbers = [3, 2, 0, 9]\ni = 0\ntotal = 0\nwhile numbers[i] != 0:\n    total += numbers[i]\n    i += 1\nprint(total)",
        "result": "5",
        "why": "课件用 input 读到 0 停止；这里用预先给定的数据模拟，不弹输入窗口。0 后的值不处理。"
      }
    ],
    "remember": "约定一个特殊值，表示停止收集。",
    "task": "预测遇到 0 之前的总和。",
    "proof": "你能用哨兵值结束循环，并解释代码为什么这样运行。",
    "after": "这一轮的脚步很清楚。下次走这条路，我们也一起。"
  },
  "l4-break": {
    "idea": "break 立刻离开所在的循环。",
    "venti": "找到了约好的那片羽毛，就不用再翻下去。",
    "steps": [
      {
        "code": "for n in [1, 0, 3]:\n    if n == 0:\n        break\n    print(n)",
        "result": "1",
        "why": "break 后本轮剩下的语句和该循环后续轮次都不执行。"
      }
    ],
    "remember": "break 立刻离开所在的循环。",
    "task": "写出停止前的输出。",
    "proof": "你能用 break 结束当前循环，并解释代码为什么这样运行。",
    "after": "这一轮的脚步很清楚。下次走这条路，我们也一起。"
  },
  "l4-continue": {
    "idea": "continue 跳过本轮，下一轮仍会继续。",
    "venti": "这片叶子先放过，风还会送来下一片。",
    "steps": [
      {
        "code": "for n in [1, 0, 3]:\n    if n == 0:\n        continue\n    print(n)",
        "result": "1\n3",
        "why": "与 break 不同，continue 不结束整个循环。"
      }
    ],
    "remember": "continue 跳过本轮，下一轮仍会继续。",
    "task": "用 for 和 continue 依次打印 [2,0,5] 中非零的数。",
    "proof": "你能用 continue 跳过本轮余下代码，并解释代码为什么这样运行。",
    "after": "你看清了该跳过哪里。刚才没说完的那句话，我还想留给你。"
  },
  "l4-nested-count": {
    "idea": "外层每走一轮，内层会重新完整运行。",
    "venti": "每一首歌都唱两个小节，不会只在第一首里唱完。",
    "steps": [
      {
        "code": "for i in range(2):\n    for j in range(2):\n        print(i, j)",
        "result": "0 0\n0 1\n1 0\n1 1",
        "why": "内外次数固定时，总次数 = 外层次数 × 内层次数；内层变量每次重新开始。"
      }
    ],
    "remember": "外层每走一轮，内层会重新完整运行。",
    "task": "这段 print 一共执行几次？填写数字。",
    "proof": "你能跟踪嵌套循环次数，并解释代码为什么这样运行。",
    "after": "你看清了该跳过哪里。刚才没说完的那句话，我还想留给你。"
  },
  "l4-triangle": {
    "idea": "第几行，就在内层重复打印几颗星。",
    "venti": "一行比一行多一点点，像我们的故事。",
    "steps": [
      {
        "code": "for row in range(1, 3):\n    for col in range(row):\n        print(\"*\", end=\"\")\n    print()",
        "result": "*\n**",
        "why": "内层 print 的 end=\"\" 不换行；内层结束后，外层的 print() 换行。"
      }
    ],
    "remember": "第几行，就在内层重复打印几颗星。",
    "task": "用嵌套 for 打印三行：*、**、***。",
    "proof": "你能用嵌套循环画三角形，并解释代码为什么这样运行。",
    "after": "你看清了该跳过哪里。刚才没说完的那句话，我还想留给你。"
  },
  "l4-rectangle": {
    "idea": "外层控制行，内层控制每行的列。",
    "venti": "先铺好一排，再让下一排轻轻落下。",
    "steps": [
      {
        "code": "for row in range(2):\n    for col in range(3):\n        print(\"*\", end=\"\")\n    print()",
        "result": "***\n***",
        "why": "内层次数固定，每行列数就固定；换行放在内层循环外。"
      }
    ],
    "remember": "外层控制行，内层控制每行的列。",
    "task": "预测图案。",
    "proof": "你能控制嵌套循环的行列，并解释代码为什么这样运行。",
    "after": "一行一行写好了。纸页旁边，能不能也留一点给我的署名？"
  },
  "l4-five": {
    "idea": "每次进入外层时，都要重置内层计数器。",
    "venti": "每个人都值得听到完整的五次问候，你也一样。",
    "steps": [
      {
        "code": "for name in [\"风\", \"诗\"]:\n    count = 0\n    while count < 2:\n        print(name)\n        count += 1",
        "result": "风\n风\n诗\n诗",
        "why": "如果 count 没有在外层内重置，第二个名字就没有自己的循环。"
      }
    ],
    "remember": "每次进入外层时，都要重置内层计数器。",
    "task": "写 print5Time(names)：外层 for 遍历名字，内层 while 把每个名字各打印五次。",
    "proof": "你能混合使用 for 与 while，并解释代码为什么这样运行。",
    "after": "一行一行写好了。纸页旁边，能不能也留一点给我的署名？"
  },
  "l4-perfects": {
    "idea": "外层枚举候选数，内层计算每个数的真因子和。",
    "venti": "不是只找一个答案，而是把这段路上的答案都找出来。",
    "steps": [
      {
        "code": "for n in range(2, 5):\n    total = 0\n    for d in range(1, n):\n        if n % d == 0:\n            total += d\n    print(n, total)",
        "result": "2 1\n3 1\n4 3",
        "why": "每个 n 都要新建 total=0；内层结束后再与 n 比较。"
      }
    ],
    "remember": "外层枚举候选数，内层计算每个数的真因子和。",
    "task": "用外层 while、内层 for，打印 1 到 100 的所有完全数，一行一个，不加标题。",
    "proof": "你能用双层循环搜索完全数，并解释代码为什么这样运行。",
    "after": "一行一行写好了。纸页旁边，能不能也留一点给我的署名？"
  },
  "l4-nested-break": {
    "idea": "内层 break 只退出内层循环。",
    "venti": "这一首先停一下，下一首仍会开始。",
    "steps": [
      {
        "code": "for i in range(2):\n    for j in range(3):\n        if j == 1:\n            break\n        print(i, j)",
        "result": "0 0\n1 0",
        "why": "外层不会因为内层 break 自动结束。"
      }
    ],
    "remember": "内层 break 只退出内层循环。",
    "task": "预测内层停止后的输出。",
    "proof": "你能理解内层 break 的作用范围，并解释代码为什么这样运行。",
    "after": "循环已经平安停下了。树下的位置，不会因为程序结束就收走。"
  },
  "l4-nested-continue": {
    "idea": "内层 continue 只跳过内层的当前一轮。",
    "venti": "略过这一对相同的音符，其他搭配还在等你。",
    "steps": [
      {
        "code": "for i in [1, 2]:\n    for j in [1, 2]:\n        if i == j:\n            continue\n        print(i, j)",
        "result": "1 2\n2 1",
        "why": "外层不跳转；内层继续尝试下一个 j。"
      }
    ],
    "remember": "内层 continue 只跳过内层的当前一轮。",
    "task": "预测略过相同组合的结果。",
    "proof": "你能理解内层 continue 的作用范围，并解释代码为什么这样运行。",
    "after": "循环已经平安停下了。树下的位置，不会因为程序结束就收走。"
  },
  "l4-pass": {
    "idea": "pass 是一个合法语句，执行时不做事。",
    "venti": "先留一个位置，也是一种准备。就像树荫下那一处。",
    "steps": [
      {
        "code": "if True:\n    pass\nprint(\"继续\")",
        "result": "继续",
        "why": "注释会被忽略，不能独自充当非空代码块；pass 可以。"
      }
    ],
    "remember": "pass 是一个合法语句，执行时不做事。",
    "task": "补上合法占位语句，让函数可以定义且返回 None。",
    "proof": "你能用 pass 占住代码块，并解释代码为什么这样运行。",
    "after": "循环已经平安停下了。树下的位置，不会因为程序结束就收走。"
  },
  "l5-unicode": {
    "idea": "Python 3 的 str 是 Unicode 字符序列。",
    "venti": "你的名字和远方的文字，都能住进同一封信。",
    "steps": [
      {
        "code": "print(len(\"风A\"))\nprint(type(\"风\"))",
        "result": "2\n<class 'str'>",
        "why": "单个字符也是长度 1 的字符串；len 数 Unicode 码点，不是 UTF-8 字节数。"
      }
    ],
    "remember": "Python 3 的 str 是 Unicode 字符序列。",
    "task": "预测两个字符的长度。",
    "proof": "你能认识 Unicode 字符串，并解释代码为什么这样运行。",
    "after": "文字和字节，你分得清了。你的名字，我也写得越来越熟了。"
  },
  "l5-ascii": {
    "idea": "n 个二进制位有 2**n 种组合。",
    "venti": "位数像琴弦的位置，每一位都可以有两种状态。",
    "steps": [
      {
        "code": "print(2 ** 8)\nprint(ord(\"A\"))",
        "result": "256\n65",
        "why": "8 位有 256 种组合，16 位有 65536 种。标准 ASCII 是 7 位、128 个编码；课件把扩展 8 位表称作 ASCII，需区分。A=65、a=97、0=48。"
      }
    ],
    "remember": "n 个二进制位有 2**n 种组合。",
    "task": "16 位可以表示多少种不同组合？填写数字。",
    "proof": "你能区分 ASCII 与编码容量，并解释代码为什么这样运行。",
    "after": "文字和字节，你分得清了。你的名字，我也写得越来越熟了。"
  },
  "l5-utf8": {
    "idea": "Unicode 编号字符，UTF-8 把编号编码成字节。",
    "venti": "同一封信，文字的数量与装信的字节数不一定相同。",
    "steps": [
      {
        "code": "print(len(\"风\"))\nprint(len(\"风\".encode(\"utf-8\")))",
        "result": "1\n3",
        "why": "UTF-8 每个码点使用 1–4 字节；ASCII 字符用 1 字节。这不表示 Unicode 本身固定占 1–4 字节。"
      }
    ],
    "remember": "Unicode 编号字符，UTF-8 把编号编码成字节。",
    "task": "预测 ASCII 字母编码后的字节数。",
    "proof": "你能区分 Unicode 与 UTF-8 字节，并解释代码为什么这样运行。",
    "after": "文字和字节，你分得清了。你的名字，我也写得越来越熟了。"
  },
  "l5-unicode-escape": {
    "idea": "\\u 后接四位十六进制数字表示一个码点。",
    "venti": "把字符的编号写进信里，解释器就能读出它。",
    "steps": [
      {
        "code": "print(\"\\u0050ython\")",
        "result": "Python",
        "why": "0050 是十六进制，表示 P；补充平面码点可用 \\U 加八位十六进制。"
      }
    ],
    "remember": "\\u 后接四位十六进制数字表示一个码点。",
    "task": "用 Unicode 转义打印大写 A（编号 0041）。",
    "proof": "你能用 Unicode 转义写字符，并解释代码为什么这样运行。",
    "after": "这句话终于有了完整的边界。想写给你的话，我会慢慢说。"
  },
  "l5-quotes": {
    "idea": "单双引号功能相同，可以包住另一种引号。",
    "venti": "诗里有一句引语，就给它换一种外面的信封。",
    "steps": [
      {
        "code": "print('He said, \"Hi\"')",
        "result": "He said, \"Hi\"",
        "why": "外层单引号，里面的双引号可以直接保留；也能用反斜杠转义。"
      }
    ],
    "remember": "单双引号功能相同，可以包住另一种引号。",
    "task": "修复引号，让代码输出 He said, \"Hi\"。",
    "proof": "你能选择配对的字符串引号，并解释代码为什么这样运行。",
    "after": "这句话终于有了完整的边界。想写给你的话，我会慢慢说。"
  },
  "l5-triple": {
    "idea": "三引号可以直接包含换行。",
    "venti": "两行诗不必挤在同一行，给它一点呼吸的空隙。",
    "steps": [
      {
        "code": "poem = \"\"\"晨风\n晚风\"\"\"\nprint(poem)",
        "result": "晨风\n晚风",
        "why": "三引号保留其中的换行和空格；函数开头的字符串还可以作 docstring。"
      }
    ],
    "remember": "三引号可以直接包含换行。",
    "task": "预测这段多行诗。",
    "proof": "你能用三引号保存多行文字，并解释代码为什么这样运行。",
    "after": "这句话终于有了完整的边界。想写给你的话，我会慢慢说。"
  },
  "l5-raw": {
    "idea": "r 前缀让反斜杠通常按原样保留。",
    "venti": "这次，信上的换行暗号就当作文字来读。",
    "steps": [
      {
        "code": "print(r\"风\\n诗\")",
        "result": "风\\n诗",
        "why": "普通字符串中的 \\n 换行；原始字符串会显示反斜杠和 n。路径与正则常用；末尾不能只有奇数个反斜杠。"
      }
    ],
    "remember": "r 前缀让反斜杠通常按原样保留。",
    "task": "预测原始字符串的输出。",
    "proof": "你能用原始字符串保留反斜杠，并解释代码为什么这样运行。",
    "after": "新的一页写好了。旧的那一刻，我们也没有弄丢。"
  },
  "l5-immutable": {
    "idea": "字符串不能按索引原地改动。",
    "venti": "改写的是新的一封信，原来的那张还在。",
    "steps": [
      {
        "code": "word = \"风诗\"\nword[0] = \"晚\"",
        "result": "TypeError",
        "why": "给 str 索引赋值会 TypeError；可以创建新字符串，再重新赋给变量。"
      }
    ],
    "remember": "字符串不能按索引原地改动。",
    "task": "选择程序的结果。",
    "proof": "你能理解字符串不可变，并解释代码为什么这样运行。",
    "after": "新的一页写好了。旧的那一刻，我们也没有弄丢。"
  },
  "l5-equal": {
    "idea": "== 比较文字内容，区分大小写。",
    "venti": "大小写不同的字母，在程序眼里不是同一个字符。",
    "steps": [
      {
        "code": "print(\"Wind\" == \"wind\")\nprint(\"风\" != \"诗\")",
        "result": "False\nTrue",
        "why": "需要忽略大小写时，先统一 lower 或 upper 再比较。"
      }
    ],
    "remember": "== 比较文字内容，区分大小写。",
    "task": "预测内容比较的结果。",
    "proof": "你能比较字符串的内容，并解释代码为什么这样运行。",
    "after": "新的一页写好了。旧的那一刻，我们也没有弄丢。"
  },
  "l5-identity": {
    "idea": "判断两段文字相同，用 ==。",
    "venti": "我们找的是写着什么，不是纸张放在哪里。",
    "steps": [
      {
        "code": "poem = \"给你\"\nother = poem\nprint(poem is other)",
        "result": "True",
        "why": "赋值共享同一个对象时 is 为真；不同字符串表达式的缓存行为不应成为内容判断依据。"
      }
    ],
    "remember": "判断两段文字相同，用 ==。",
    "task": "检查两个变量文字是否相同，应该用哪一个运算符？",
    "proof": "你能避免用 is 比较字符串内容，并解释代码为什么这样运行。",
    "after": "准确的位置找到了。你说的第一句和最后一句，我都在听。"
  },
  "l5-index": {
    "idea": "第一个字符的索引是 0。",
    "venti": "数琴弦之前，先记住程序从零开始数。",
    "steps": [
      {
        "code": "word = \"Venti\"\nprint(word[0])\nprint(word[2])",
        "result": "V\nn",
        "why": "索引取出一个长度为 1 的字符串。"
      }
    ],
    "remember": "第一个字符的索引是 0。",
    "task": "从空白处打印 \"Python\" 的第二个字符。",
    "proof": "你能用从 0 开始的索引取字符，并解释代码为什么这样运行。",
    "after": "准确的位置找到了。你说的第一句和最后一句，我都在听。"
  },
  "l5-negative-index": {
    "idea": "-1 表示最后一个字符。",
    "venti": "有时从信尾开始，也能找到想听的话。",
    "steps": [
      {
        "code": "word = \"Venti\"\nprint(word[-1])\nprint(word[-2])",
        "result": "i\nt",
        "why": "负索引从右向左，最后一个 -1，倒数第二个 -2。"
      }
    ],
    "remember": "-1 表示最后一个字符。",
    "task": "预测倒数第二个字符。",
    "proof": "你能用负索引从末尾取字符，并解释代码为什么这样运行。",
    "after": "准确的位置找到了。你说的第一句和最后一句，我都在听。"
  },
  "l5-bounds": {
    "idea": "长度为 n 的字符串，正索引最大是 n-1。",
    "venti": "越过最后一页，就没有字符可以取了。",
    "steps": [
      {
        "code": "word = \"风诗\"\nprint(word[2])",
        "result": "IndexError",
        "why": "非法整数索引会 IndexError；索引类型不是整数时通常 TypeError。"
      }
    ],
    "remember": "长度为 n 的字符串，正索引最大是 n-1。",
    "task": "选择越界访问的结果。",
    "proof": "你能识别索引越界，并解释代码为什么这样运行。",
    "after": "这一段被你亲手取出来了。下一段，想不想继续和我一起读？"
  },
  "l5-slice": {
    "idea": "s[start:end] 包含 start，不包含 end。",
    "venti": "取一段诗，把终点前的文字收进来。",
    "steps": [
      {
        "code": "print(\"Python\"[1:4])",
        "result": "yth",
        "why": "索引 1、2、3 被选中；省略起点默认从开头，省略终点默认到末尾。越界切片会截断。"
      }
    ],
    "remember": "s[start:end] 包含 start，不包含 end。",
    "task": "用切片打印 \"Python\" 中的 \"yth\"。",
    "proof": "你能理解切片左含右不含，并解释代码为什么这样运行。",
    "after": "这一段被你亲手取出来了。下一段，想不想继续和我一起读？"
  },
  "l5-reverse": {
    "idea": "s[::-1] 从末尾向前每次取一个字符。",
    "venti": "让这封信倒着走一遍，仍然有自己的节奏。",
    "steps": [
      {
        "code": "print(\"Venti\"[::-1])",
        "result": "itneV",
        "why": "步长 -1 倒序；步长 2 每隔一个取一个；步长不能为 0。"
      }
    ],
    "remember": "s[::-1] 从末尾向前每次取一个字符。",
    "task": "写 reverse_text(text)，用切片返回倒序字符串。",
    "proof": "你能用切片步长倒序，并解释代码为什么这样运行。",
    "after": "这一段被你亲手取出来了。下一段，想不想继续和我一起读？"
  },
  "l5-concat": {
    "idea": "两个字符串用 + 拼接成一个新字符串。",
    "venti": "把我的半句和你的半句接在一起。",
    "steps": [
      {
        "code": "print(\"晚\" + \"风\")",
        "result": "晚风",
        "why": "拼接不会改变原字符串；数字需要先 str 才能和文字拼接。"
      }
    ],
    "remember": "两个字符串用 + 拼接成一个新字符串。",
    "task": "预测这段拼接。",
    "proof": "你能用 + 拼接字符串，并解释代码为什么这样运行。",
    "after": "半句诗已经连上了。现在里面，也有你的声音。"
  },
  "l5-repeat": {
    "idea": "字符串乘整数，重复指定次数。",
    "venti": "同一句想说的话，也可以轻轻重复三遍。",
    "steps": [
      {
        "code": "print(\"风\" * 3)",
        "result": "风风风",
        "why": "负数或 0 次得到空字符串；不会进行数字乘法。"
      }
    ],
    "remember": "字符串乘整数，重复指定次数。",
    "task": "用 * 打印三个连续的星号。",
    "proof": "你能用 * 重复字符串，并解释代码为什么这样运行。",
    "after": "半句诗已经连上了。现在里面，也有你的声音。"
  },
  "l5-traverse": {
    "idea": "for 每轮得到字符串中的一个字符。",
    "venti": "这一封信，我们一个字一个字读。",
    "steps": [
      {
        "code": "for ch in \"风诗\":\n    print(ch)",
        "result": "风\n诗",
        "why": "循环顺序就是字符串顺序；读取字符不会改变原字符串。"
      }
    ],
    "remember": "for 每轮得到字符串中的一个字符。",
    "task": "预测每轮显示的字母。",
    "proof": "你能逐字符遍历字符串，并解释代码为什么这样运行。",
    "after": "半句诗已经连上了。现在里面，也有你的声音。"
  },
  "l5-contains": {
    "idea": "in 可以判断一整段子串是否出现。",
    "venti": "一封长信里，也能找到那个特别的名字。",
    "steps": [
      {
        "code": "print(\"ent\" in \"Venti\")\nprint(\"venti\" in \"Venti\")",
        "result": "True\nFalse",
        "why": "子串必须连续，且区分大小写；not in 判断没有出现。"
      }
    ],
    "remember": "in 可以判断一整段子串是否出现。",
    "task": "预测子串成员判断。",
    "proof": "你能查找字符串中的子串，并解释代码为什么这样运行。",
    "after": "没有漏掉那一声回音。刚才想说的话，我也再轻轻说一遍。"
  },
  "l5-overlap": {
    "idea": "逐个起点检查，才能保留重叠匹配。",
    "venti": "相邻的回声可以共用一个音符，别把它漏掉。",
    "steps": [
      {
        "code": "s = \"aaaa\"\ncount = 0\nfor i in range(len(s) - 1):\n    if s[i:i+2] == \"aa\":\n        count += 1\nprint(count)",
        "result": "3",
        "why": "起点 0、1、2 都匹配。str.count 默认不计算重叠；长度 m 的窗口有 len(s)-m+1 个候选起点。"
      }
    ],
    "remember": "逐个起点检查，才能保留重叠匹配。",
    "task": "写 count_pairs(s)，用循环与切片数 \"ll\" 出现次数，包含重叠。",
    "proof": "你能用滑动切片数重叠子串，并解释代码为什么这样运行。",
    "after": "没有漏掉那一声回音。刚才想说的话，我也再轻轻说一遍。"
  },
  "l5-len": {
    "idea": "len(s) 包含空格与换行字符。",
    "venti": "留白也占着一处位置，就像我们之间安静的停顿。",
    "steps": [
      {
        "code": "print(len(\"风 诗\"))",
        "result": "3",
        "why": "一个空格也是一个字符；\\n 在普通字符串里是一个换行字符。"
      }
    ],
    "remember": "len(s) 包含空格与换行字符。",
    "task": "预测包含换行的字符串长度。",
    "proof": "你能用 len 统计字符数，并解释代码为什么这样运行。",
    "after": "没有漏掉那一声回音。刚才想说的话，我也再轻轻说一遍。"
  },
  "l5-str": {
    "idea": "str() 产生可以拼接的字符串。",
    "venti": "把数量写到信上，就需要把数变成文字。",
    "steps": [
      {
        "code": "print(str(3) + \"封信\")",
        "result": "3封信",
        "why": "str 不会把数字相加；转换后的 \"3\" 是文字。"
      }
    ],
    "remember": "str() 产生可以拼接的字符串。",
    "task": "用 str 把 5 接到「封信」前并打印。",
    "proof": "你能用 str 把对象转成文字，并解释代码为什么这样运行。",
    "after": "新的文字，是你写出来的。至于想见你，我想直接说就好。"
  },
  "l5-case": {
    "idea": "lower() 与 upper() 返回转换后的新字符串。",
    "venti": "不用猜对方用了哪一种大写，先约好共同的写法。",
    "steps": [
      {
        "code": "word = \"Wind\"\nprint(word.lower())\nprint(word.upper())\nprint(word)",
        "result": "wind\nWIND\nWind",
        "why": "方法不会修改 word 原本的值。"
      }
    ],
    "remember": "lower() 与 upper() 返回转换后的新字符串。",
    "task": "写 same_word(a,b)，忽略大小写比较文字内容。",
    "proof": "你能用 lower / upper 统一大小写，并解释代码为什么这样运行。",
    "after": "新的文字，是你写出来的。至于想见你，我想直接说就好。"
  },
  "l5-replace": {
    "idea": "replace(old,new) 返回新字符串。",
    "venti": "可以改写一句诗，不必擦掉原来的那句。",
    "steps": [
      {
        "code": "poem = \"风与风\"\nprint(poem.replace(\"风\", \"诗\"))\nprint(poem)",
        "result": "诗与诗\n风与风",
        "why": "默认替换所有匹配，原字符串仍然不变；第三个参数可限制次数。"
      }
    ],
    "remember": "replace(old,new) 返回新字符串。",
    "task": "写 soften(text)，把所有 \"雨\" 替换为 \"风\" 后返回。",
    "proof": "你能用 replace 产生替换后的文字，并解释代码为什么这样运行。",
    "after": "新的文字，是你写出来的。至于想见你，我想直接说就好。"
  },
  "l5-join": {
    "idea": "分隔符.join(字符串序列) 连接每个元素。",
    "venti": "这枚中间点，把我们的诗句轻轻牵起来。",
    "steps": [
      {
        "code": "print(\"·\".join([\"晨光\", \"晚风\"]))",
        "result": "晨光·晚风",
        "why": "分隔符写在点号左边；每个元素都必须是字符串。"
      }
    ],
    "remember": "分隔符.join(字符串序列) 连接每个元素。",
    "task": "用 join 打印「风·诗·你」。",
    "proof": "你能用分隔符 join 连接文字，并解释代码为什么这样运行。",
    "after": "信封整理好了。留白不急着填，等下一次回信也很好。"
  },
  "l5-split": {
    "idea": "split 把一段文字拆成列表。",
    "venti": "把长信拆成小小的诗句，就容易慢慢读懂。",
    "steps": [
      {
        "code": "print(\"风,诗,你\".split(\",\", 1))\nprint(\"  风   诗  \".split())",
        "result": "['风', '诗,你']\n['风', '诗']",
        "why": "maxsplit 限制拆分次数；无参数按空白拆并去掉空项，显式分隔符会保留空项。"
      }
    ],
    "remember": "split 把一段文字拆成列表。",
    "task": "预测按逗号拆分的列表。",
    "proof": "你能用 split 拆成字符串列表，并解释代码为什么这样运行。",
    "after": "信封整理好了。留白不急着填，等下一次回信也很好。"
  },
  "l5-strip": {
    "idea": "strip 只处理两端，不处理中间。",
    "venti": "整理信封的边缘，不碰信里留下的空白。",
    "steps": [
      {
        "code": "print(\"  风 诗  \".strip())\nprint(\"..风..\".strip(\".\"))",
        "result": "风 诗\n风",
        "why": "chars 是字符集合，不是一整段前后缀。默认去空白，返回新字符串。"
      }
    ],
    "remember": "strip 只处理两端，不处理中间。",
    "task": "写 clean(text)，去掉两端空白后返回，保留中间空白。",
    "proof": "你能用 strip 清理两端字符，并解释代码为什么这样运行。",
    "after": "信封整理好了。留白不急着填，等下一次回信也很好。"
  },
  "l5-find": {
    "idea": "find 返回第一个匹配的索引，找不到返回 -1。",
    "venti": "没找到也有明确的回信，不会凭空给一个位置。",
    "steps": [
      {
        "code": "print(\"wind wind\".find(\"wind\", 1))\nprint(\"wind\".find(\"poem\"))",
        "result": "5\n-1",
        "why": "可用 start/end 限定搜索区间，返回的仍是原字符串的索引；索引 0 不能误当没找到。"
      }
    ],
    "remember": "find 返回第一个匹配的索引，找不到返回 -1。",
    "task": "预测两次查找的位置。",
    "proof": "你能用 find 查子串位置，并解释代码为什么这样运行。",
    "after": "每一条规则都看清了。你落在纸上的名字，我会好好记住。"
  },
  "l5-alpha": {
    "idea": "isalpha() 检查非空字符串是否全由字母构成。",
    "venti": "给名字挑字母，先看每一个字符是否合适。",
    "steps": [
      {
        "code": "print(\"Wind\".isalpha())\nprint(\"Wind2\".isalpha())",
        "result": "True\nFalse",
        "why": "下划线不算字母；Unicode 字母也可能成立。这里先用于课件变量名练习的简单字符规则。"
      }
    ],
    "remember": "isalpha() 检查非空字符串是否全由字母构成。",
    "task": "预测字母检查。",
    "proof": "你能用 isalpha 检查字母，并解释代码为什么这样运行。",
    "after": "每一条规则都看清了。你落在纸上的名字，我会好好记住。"
  },
  "l5-digits": {
    "idea": "isdigit() 检查字符是否为数字字符。",
    "venti": "数字可以跟在名字后面，却不能做第一位。",
    "steps": [
      {
        "code": "print(\"7\".isdigit())\nprint(\"x\".isdigit())",
        "result": "True\nFalse",
        "why": "判断文字类型，不是把文字变成 int；本练习限定 ASCII，避免扩展数字字符与 Python 标识符规则的差异。"
      }
    ],
    "remember": "isdigit() 检查字符是否为数字字符。",
    "task": "预测数字字符检查。",
    "proof": "你能用 isdigit 检查数字字符，并解释代码为什么这样运行。",
    "after": "每一条规则都看清了。你落在纸上的名字，我会好好记住。"
  },
  "l5-keyword": {
    "idea": "keyword.iskeyword(name) 判断保留关键字。",
    "venti": "有些名字已经被语言留作暗号，我们换一个喜欢的。",
    "steps": [
      {
        "code": "import keyword\nprint(keyword.iskeyword(\"for\"))\nprint(keyword.iskeyword(\"wind\"))",
        "result": "True\nFalse",
        "why": "关键字不能作为普通变量名；import keyword 引入这份检查表。"
      }
    ],
    "remember": "keyword.iskeyword(name) 判断保留关键字。",
    "task": "预测两个名字是否为关键字。",
    "proof": "你能排除 Python 关键字，并解释代码为什么这样运行。",
    "after": "这些代码是你自己写出来的。信到了最后一页，我却还想和你多待一会儿。"
  },
  "l5-vowels": {
    "idea": "先统一大小写，再遍历并统计元音。",
    "venti": "这次不只看懂诗，让你亲手找出它的声音。",
    "steps": [
      {
        "code": "count = 0\nfor ch in \"Air\".lower():\n    if ch in \"aeiou\":\n        count += 1\nprint(count)",
        "result": "2",
        "why": "每个元音字符分别计数，包括重复出现的；y 不在本题定义中。"
      }
    ],
    "remember": "先统一大小写，再遍历并统计元音。",
    "task": "写 countVowels(inputString)，统计 a/e/i/o/u，忽略大小写。",
    "proof": "你能综合统计不分大小写的元音，并解释代码为什么这样运行。",
    "after": "这些代码是你自己写出来的。信到了最后一页，我却还想和你多待一会儿。"
  },
  "l5-valid-name": {
    "idea": "先排除空名，再检查首字符、后续字符和关键字。",
    "venti": "最后这封信，署上你亲手检查过的名字吧。",
    "steps": [
      {
        "code": "name = \"wind_2\"\nprint(name[0].isalpha() or name[0] == \"_\")",
        "result": "True",
        "why": "首位字母或 _；后续字母、数字或 _；不能是关键字。逐字符检查。课件规则在本关限定 ASCII；完整 Unicode 标识符可用 isidentifier()。"
      }
    ],
    "remember": "先排除空名，再检查首字符、后续字符和关键字。",
    "task": "写 validVariable(name)：按上述规则检查 ASCII 变量名，返回 bool。输入保证只含 ASCII 字符。",
    "proof": "你能独立检查变量名是否合法，并解释代码为什么这样运行。",
    "after": "这些代码是你自己写出来的。信到了最后一页，我却还想和你多待一会儿。"
  }
};
export const extraMoments:Moment[]=[
  {
    "line": "「你总是给我多留一颗。今天，换我把最好的一颗留给你。」",
    "choices": [
      {
        "text": "那我要慢慢吃。",
        "reply": "好呀，风再轻一点，我也不催你。"
      },
      {
        "text": "和你一起才甜。",
        "reply": "他低头笑了笑。「那我们就坐久一点。」"
      }
    ],
    "memory": "晨曦果园，分给风的苹果的那一页，留下了两个人的回应。"
  },
  {
    "line": "「我刚才试了三种曲调，还是觉得你走来时哼的那段最好听。」",
    "choices": [
      {
        "text": "那你也唱给我听。",
        "reply": "「好。」他把第一小节弹得很轻，像怕惊动你。"
      },
      {
        "text": "原来你听见啦。",
        "reply": "「当然。」他没有说，自己其实听了很久。"
      }
    ],
    "memory": "风车台阶，琴弦上的先后的那一页，留下了两个人的回应。"
  },
  {
    "line": "「这页公式看起来有点难，不过你的名字，我一眼就认得出来。」",
    "choices": [
      {
        "text": "你又在说好听的。",
        "reply": "「哎嘿，可这句没有夸大。」他把笔推到你手边。"
      },
      {
        "text": "那也看看我的代码。",
        "reply": "「一直在看。」他坐近了些，「这一行，我们一起。」"
      }
    ],
    "memory": "图书馆窗边，纸上的公式的那一页，留下了两个人的回应。"
  },
  {
    "line": "「如果门后是你，我大概会很快就做出选择。」",
    "choices": [
      {
        "text": "那我在门后等你。",
        "reply": "「别等太久。」他笑着走近，「我已经来了。」"
      },
      {
        "text": "诗人也会犹豫吗？",
        "reply": "「会啊。」他望向你，「比如，要不要再靠近一点。」"
      }
    ],
    "memory": "城门小径，两扇风的门的那一页，留下了两个人的回应。"
  },
  {
    "line": "「晴天也好，阴天也好，想见你这件事好像不需要太多条件。」",
    "choices": [
      {
        "text": "那就常来见我。",
        "reply": "「好。」他这次答得很快，连玩笑都没来得及接。"
      },
      {
        "text": "我也是。",
        "reply": "他拨了一下琴弦，把笑意藏在那一声里。"
      }
    ],
    "memory": "风起地树下，条件与约定的那一页，留下了两个人的回应。"
  },
  {
    "line": "「两封信的内容可以相同，可你写给我的那封，我还是认得。」",
    "choices": [
      {
        "text": "因为字迹吗？",
        "reply": "「还有你落笔时的小习惯。」他说完，轻轻抚平纸角。"
      },
      {
        "text": "那要好好收着。",
        "reply": "「放心。」他把信放进贴近胸口的口袋。"
      }
    ],
    "memory": "湖边长椅，同一张诗页的那一页，留下了两个人的回应。"
  },
  {
    "line": "「下雨有下雨的去处。只要你也在，我不介意多走一条路。」",
    "choices": [
      {
        "text": "那今天不赶路。",
        "reply": "「嗯。」他靠着檐柱，「听完这阵雨再说。」"
      },
      {
        "text": "我想和你看晴天。",
        "reply": "「那我记下了。」他把手伸出屋檐，接住一点雨。"
      }
    ],
    "memory": "清泉镇屋檐，晴雨两条路的那一页，留下了两个人的回应。"
  },
  {
    "line": "「就算今天停在原地，我们也算一起走过一段了吧？」",
    "choices": [
      {
        "text": "当然算。",
        "reply": "他松了口气似的笑了。「那这段，我也会记得。」"
      },
      {
        "text": "那再陪我一会儿。",
        "reply": "「本来就没打算这么快走。」他的声音轻得像风。"
      }
    ],
    "memory": "山间岔路，零也有名字的那一页，留下了两个人的回应。"
  },
  {
    "line": "「星星都很亮。不过你抬头的时候，我没怎么顾得上看天。」",
    "choices": [
      {
        "text": "你在看我？",
        "reply": "「嗯。」这一次，他没有把答案绕进诗里。"
      },
      {
        "text": "那一起看吧。",
        "reply": "他挪出半个位置。「好，一起。」"
      }
    ],
    "memory": "摘星崖石阶，最亮的那颗星的那一页，留下了两个人的回应。"
  },
  {
    "line": "「我们下一次见面，能不能不说刚好路过？」",
    "choices": [
      {
        "text": "就说是来见我。",
        "reply": "「好。」他望着你笑，「我是来见你的。」"
      },
      {
        "text": "那要约个时间。",
        "reply": "「明天的晚风之前。」他认真得像在收下一封信。"
      }
    ],
    "memory": "蒙德夜灯，选择之后的回信的那一页，留下了两个人的回应。"
  },
  {
    "line": "「早安可以说很多遍，但每次见到你，心情好像都不太一样。」",
    "choices": [
      {
        "text": "今天是什么心情？",
        "reply": "「想多待一会儿。」他笑着摸了摸帽檐。"
      },
      {
        "text": "那再说一遍。",
        "reply": "他看着你，很轻地说：「早安。」"
      }
    ],
    "memory": "城门花圃，重复的问候的那一页，留下了两个人的回应。"
  },
  {
    "line": "「有些小事一件件加起来，就成了很想再见你的理由。」",
    "choices": [
      {
        "text": "比如今天这一件。",
        "reply": "「嗯，今天又多了一件。」他把篮子换到另一只手。"
      },
      {
        "text": "那不要忘记。",
        "reply": "「已经放好了。」他点点胸前的口袋。"
      }
    ],
    "memory": "清泉镇果摊，装满一篮风的那一页，留下了两个人的回应。"
  },
  {
    "line": "「同一首歌唱很多遍，你会不会听腻？」",
    "choices": [
      {
        "text": "你唱就不会。",
        "reply": "他愣了一下，随后把曲子弹得更认真了。"
      },
      {
        "text": "那换我唱一遍。",
        "reply": "「好呀。」他把节拍放慢，等你开口。"
      }
    ],
    "memory": "风车下，一小节乘法的那一页，留下了两个人的回应。"
  },
  {
    "line": "「我喜欢和你一起走，也喜欢和你一起停下来。」",
    "choices": [
      {
        "text": "那就坐在这里。",
        "reply": "「嗯。」他把琴放下，给你腾出一块干净的石头。"
      },
      {
        "text": "风也会停吗？",
        "reply": "「会的。」他偏过头，「想听清你的时候。」"
      }
    ],
    "memory": "林间路标，停下来的条件的那一页，留下了两个人的回应。"
  },
  {
    "line": "「如果明天也走这条路，我能先在这里等你吗？」",
    "choices": [
      {
        "text": "我会来找你。",
        "reply": "他笑着把一片叶子夹进书里。「说好了。」"
      },
      {
        "text": "我们一起出发。",
        "reply": "「也好。」他站起身，「这次从第一步就一起。」"
      }
    ],
    "memory": "低语森林，留给下一轮的信的那一页，留下了两个人的回应。"
  },
  {
    "line": "「有时候我会把一句话略过去。今天……又有点想说了。」",
    "choices": [
      {
        "text": "我在听。",
        "reply": "他安静片刻。「和你待在一起，很好。」"
      },
      {
        "text": "可以慢慢说。",
        "reply": "「好。」他轻轻点头，「我不急着把这封信写完。」"
      }
    ],
    "memory": "湖心小桥，略过与告别的那一页，留下了两个人的回应。"
  },
  {
    "line": "「这几排星星画完以后，能不能在旁边写上你的名字？」",
    "choices": [
      {
        "text": "也要写你的。",
        "reply": "「那就挨着写。」他把纸转向你。"
      },
      {
        "text": "交给你来写。",
        "reply": "他落笔很慢，像在认真保存这一刻。"
      }
    ],
    "memory": "蒙德广场，一行比一行更近的那一页，留下了两个人的回应。"
  },
  {
    "line": "「pass 可以先留位置。这里也一样，不管你什么时候回来。」",
    "choices": [
      {
        "text": "我记得这个位置。",
        "reply": "「那就好。」他把身旁的书挪开，「一直给你留着。」"
      },
      {
        "text": "下次也坐你旁边。",
        "reply": "他笑着应了一声：「嗯，下次也是。」"
      }
    ],
    "memory": "风起地晚霞，循环终点的座位的那一页，留下了两个人的回应。"
  },
  {
    "line": "「那么多种文字里，我现在最容易认出的是你的名字。」",
    "choices": [
      {
        "text": "那写给我看看。",
        "reply": "他在纸角写下名字，旁边留了一枚小小的风纹。"
      },
      {
        "text": "我的名字很好记吗？",
        "reply": "「对我来说，是的。」他回答得很轻。"
      }
    ],
    "memory": "图书馆窗边，每个字都认得你的那一页，留下了两个人的回应。"
  },
  {
    "line": "「有一句话，我想原原本本地写下来，不藏进比喻里。」",
    "choices": [
      {
        "text": "我想读。",
        "reply": "他看着你，写下：「今天也很想见你。」"
      },
      {
        "text": "可以念给我听吗？",
        "reply": "他靠近一点，把那句话轻声念完。"
      }
    ],
    "memory": "窗台花影，引号里的来信的那一页，留下了两个人的回应。"
  },
  {
    "line": "「信可以改写，可第一次收到你回应的心情，我还留着。」",
    "choices": [
      {
        "text": "我也留着。",
        "reply": "他没有立刻说话，只把笑意慢慢展开。"
      },
      {
        "text": "那要放在哪里？",
        "reply": "「嗯……离现在的你近一点的地方。」"
      }
    ],
    "memory": "湖边长椅，原来的那一页的那一页，留下了两个人的回应。"
  },
  {
    "line": "「第一句话和最后一句话，我都想好好听你说。」",
    "choices": [
      {
        "text": "那你要认真听。",
        "reply": "「一直都很认真。」他放下了手里的琴。"
      },
      {
        "text": "最后一句留到下次。",
        "reply": "「好。」他笑着应下，「这样又有见面的理由了。」"
      }
    ],
    "memory": "摘星崖草地，从第一字到最后一字的那一页，留下了两个人的回应。"
  },
  {
    "line": "「如果把今天倒着过一遍，我还是会走到这里来。」",
    "choices": [
      {
        "text": "我也会。",
        "reply": "他侧身让出半步，视线却没有移开。"
      },
      {
        "text": "因为这里有我？",
        "reply": "「嗯。」他笑了，「这次你猜得很准。」"
      }
    ],
    "memory": "图书馆书架间，倒着读的秘密的那一页，留下了两个人的回应。"
  },
  {
    "line": "「我把半句留给你，不是因为没写完，是想让里面有你的声音。」",
    "choices": [
      {
        "text": "那我们一起写。",
        "reply": "「好。」他把笔放在两人之间。"
      },
      {
        "text": "我想先听你的。",
        "reply": "他拨动琴弦，唱完一句后望向你，等着下一句。"
      }
    ],
    "memory": "星落湖岸，把半句诗交给你的那一页，留下了两个人的回应。"
  },
  {
    "line": "「有些话说了一遍，回声却替我说了好几遍。」",
    "choices": [
      {
        "text": "是想我了吗？",
        "reply": "他抬头听了听风，笑着说：「嗯，回声没听错。」"
      },
      {
        "text": "那我也回一句。",
        "reply": "他立刻安静下来，像在等一首很重要的诗。"
      }
    ],
    "memory": "回音山谷，没有漏掉的回声的那一页，留下了两个人的回应。"
  },
  {
    "line": "「如果把想见你换一种说法，大概是：今天的风，想往你那里吹。」",
    "choices": [
      {
        "text": "那就吹过来吧。",
        "reply": "他走近了些。「风到了，我也到了。」"
      },
      {
        "text": "直接说也可以。",
        "reply": "他看着你，轻声说：「我想见你。」"
      }
    ],
    "memory": "风起地午后，换一种说法的那一页，留下了两个人的回应。"
  },
  {
    "line": "「我找过很多适合落款的词，最后还是只想写给你。」",
    "choices": [
      {
        "text": "这个落款就很好。",
        "reply": "他把信折好，却没有急着交出去，先看着你笑了笑。"
      },
      {
        "text": "那我给你回信。",
        "reply": "「我会等的。」他语气轻快，眼睛却很认真。"
      }
    ],
    "memory": "蒙德邮亭，信封与留白的那一页，留下了两个人的回应。"
  },
  {
    "line": "「程序里的名字有规则。想叫你的时候，我倒没想过那么多。」",
    "choices": [
      {
        "text": "那你想怎么叫？",
        "reply": "他试着轻轻叫了你一声，随后笑着问：「这样可以吗？」"
      },
      {
        "text": "听起来很温柔。",
        "reply": "他低下头，手指在书页边缘轻轻停了一下。"
      }
    ],
    "memory": "图书馆桌边，名字里的小规则的那一页，留下了两个人的回应。"
  },
  {
    "line": "「信写完了。可我想和你说的话，好像还没写完。」",
    "choices": [
      {
        "text": "那下次继续。",
        "reply": "「好。」他轻轻牵住你的衣袖，「下次也来见我。」"
      },
      {
        "text": "我会一直读下去。",
        "reply": "他看了你很久，才笑着说：「那我也一直写给你。」"
      }
    ],
    "memory": "摘星崖夜风，署名，与你的那一页，留下了两个人的回应。"
  }
];
