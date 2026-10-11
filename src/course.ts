import {lessons} from './learning';
export type Challenge = {id:string;topic:string;kind:'choice'|'output'|'code';title:string;explain:string;code:string;options?:string[];answer?:string;hint:string;visual:string[];success:string;test?:string;source:string;revision?:number};
export type Letter={id:string;title:string;subtitle:string;place:string;description:string;dialogue:string[];challenges:Challenge[]};
const c=(id:string,topic:string,kind:Challenge['kind'],title:string,explain:string,code:string,answer:string,options:string[],hint:string,visual:string[],success:string,source:string,test?:string):Challenge=>({id,topic,kind,title,explain,code,answer,options:options.length?options:undefined,hint,visual,success,source,test});
export const letters:Letter[]=[
{id:'first',title:'让风听见你',subtitle:'第一封 · 初遇 Python',place:'低语森林',description:'从第一句问候开始，认识代码的语言。',dialogue:['嘘——听见了吗？蒲公英带来了一封没有署名的信。','它说，想让风听懂你的话，只需要学会一种新的语言。嗯……Python，名字还挺有节奏的。','不必急着记住所有规则。先和我一起，让这片森林听见你的第一句问候吧。'],challenges:[
c('language','编程语言与解释器','choice','谁来读懂这首诗？','代码是一封写给计算机的信。语法决定写法，语义决定含义。Python 的解释器负责执行代码。机器指令最终用二进制表示；汇编语言需要汇编器，高级语言让表达更接近人类。','# 一封写给计算机的信\nprint("你好，蒙德！")','Python 解释器',['Python 解释器','蒲公英自己','只需要文字编辑器'],'谁负责执行 Python 代码，而不只是保存文字？',['你写的 Python','解释器执行','计算机完成指令'],'风也需要一位翻译。Python 跨平台，1991 年由 Guido van Rossum 发布，支持过程式、面向对象与函数式写法。','L2 · p3–9'),
c('hello','输出与语句','output','第一声，向风问好','print() 是把内容送到屏幕上的内置函数。引号把文字围成一个字符串，显示时引号本身不会出现。一个语句是一条指令，通常以换行结束，末尾不必加分号。','print("你好，蒙德！")','你好，蒙德！',[],'只写屏幕上的文字，不要带引号。',['print(文字)','送到屏幕','你好，蒙德！'],'听到了！你的第一句话已经顺着风飞出去了。','L2 · p10,19–20'),
c('comments','注释与运行方式','choice','哪一句会被风读出？','以 # 开头的内容是注释，解释器不执行它。你可以在交互式环境输入代码、保存 .py 脚本后运行，或在 Jupyter 单元格中按 Ctrl+Enter。','# 这是一首秘密的诗\nprint("风起了")','只有：风起了',['只有：风起了','两行都会输出','什么也不输出'],'# 后的文字只留给阅读代码的人。',['# 注释 → 跳过','print → 执行','屏幕：风起了'],'秘密还藏在纸上，只有你想说的话被读出来了。三引号包围的是字符串；函数开头的三引号字符串可以作为文档字符串。','L2 · p11–15')
]},
{id:'names',title:'给风一个名字',subtitle:'第二封 · 变量与引用',place:'风起地',description:'名字可以改变，风仍然自由。',dialogue:['这片树荫下，连风都有自己的名字。','变量就像系在礼物上的标签。标签能换个地方，礼物却不因此变成另一个。','来吧，给我们的旅途留一个名字。'],challenges:[
c('binding','赋值与重新绑定','output','苹果的标签，飘向哪里？','变量是指向对象的名字。= 把右边的值绑定到左边的名字；重新赋值会改变引用。','apples = 3\napples = 5\nprint(apples)','5',[],'从上到下执行，看看最后一次赋值。',['apples → 3','重新绑定','apples → 5'],'对啦。是标签移向了 5，整数 3 没有被修改。','L2 · p21–23'),
c('naming','变量命名与关键字','choice','为我们的诗集起个名字','名字以字母或下划线开头，之后可以有数字；不能用关键字，且大小写敏感。推荐 snake_case，常量常写成 UPPER_CASE。','___ = "风与诗"','wind_poem',['wind_poem','2poems','for','wind-poem'],'数字不能开头，for 是关键字，连字符会被当成减号。',['开头：字母 / _','之后：字母 / 数字 / _','不能使用关键字'],'wind_poem，听起来就像一本值得带在身边的诗集。Name 和 name 是两个不同的名字。','L2 · p25,47'),
c('objects','对象与可变性','choice','标签相同，礼物也相同吗？','对象有身份 identity、类型 type 和值 value。id() 查看身份，type() 查看类型。整数、浮点数、字符串、元组和 frozenset 不可变；列表、字典和集合可变。','a = 3\nb = a\na = 8\nprint(b)','3',['3','8','None'],'b 也指向 3。后来 a 换了引用，b 没有跟着换。',['a → 3 ← b','a → 8','b → 3'],'你抓住了标签的秘密。改变 a 的绑定，不会重新绑定 b。','L2 · p22–24')
]},
{id:'types',title:'旅行者的行囊',subtitle:'第三封 · 数据类型',place:'清泉镇',description:'数字、文字与真假，各有自己的位置。',dialogue:['苹果、乐谱、还有……一瓶苹果酿？每样东西都得放在合适的位置。','数据也是。先认出它的类型，才知道能和它一起做什么。'],challenges:[
c('types','数字与数据类型','choice','三颗苹果，还是一句话？','int 是整数，float 是浮点数，complex 是复数；str 是文字，bool 是 True 或 False。数字放进引号，就成了文字。type() 可以告诉你对象的类型。','print(type("3"))',"<class 'str'>",["<class 'int'>","<class 'str'>","<class 'float'>"],'注意 3 外面的引号。',['3 → int','3.0 → float','"3" → str'],'引号就像信封，把数字变成了写在纸上的文字。sys.getsizeof() 返回对象占用的字节数，具体大小取决于运行环境。','L2 · p37–38'),
c('inventory','内置类型概览','choice','哪一个行囊装着一列物品？','list、tuple、range 是序列；dict 保存键与值；set、frozenset 保存集合。bytes、bytearray、memoryview 表示二进制数据，None 表示没有值。','bag = ["苹果", "羽毛", "乐谱"]','list',['list','dict','bool','None'],'方括号里的有序物品，是列表。',['[物品, 物品] → list','{键: 值} → dict','True / False → bool'],'行囊整理好了！这些类型以后会慢慢熟悉，今天先认个脸。','L2 · p37'),
c('boolean','布尔值','output','空空的信封，也有回答','bool() 把值转换成真假。空字符串、0 和 None 为 False；非空字符串通常为 True。布尔值的首字母要大写。','print(bool(""))\nprint(bool("风"))','False\nTrue',[],'第一行是空字符串；第二行真的装着一个字。',['空字符串 → False','非空字符串 → True','一行一个结果'],'空信封和装着风的信封，你已经分得清啦。','L2 · p44')
]},
{id:'poem',title:'装进瓶中的诗',subtitle:'第四封 · 字符串与输出',place:'星落湖',description:'让文字换行，让诗句相逢。',dialogue:['湖水把天空分成了一行又一行。诗也需要呼吸的空隙。','今天，我们用引号盛住文字，再让它们轻轻流出来。'],challenges:[
c('strings','引号与转义','output','两行诗，藏在一行代码里','字符串是字符序列，可以用单引号、双引号或三引号。三引号支持多行。\\n 是换行，\\t 是制表符，\\\' 可以表示单引号。','print("风\\n与诗")','风\n与诗',[],'\\n 不会作为两个普通字符显示，它让输出换到下一行。',['风','↓ 换行','与诗'],'两行小诗，刚好够写在一片羽毛上。','L2 · p39–40'),
c('separator','print 的分隔符','choice','让诗句牵起手','print() 默认用空格分隔多个对象，并在末尾换行。sep 参数可以改变对象之间的分隔符。','print("风", "诗", sep="·")','风·诗',['风·诗','风 诗','风诗','"风"·"诗"'],'sep="·" 会把默认的空格换成中间点。',['"风"','sep="·"','"诗" → 风·诗'],'这个小小的中间点，像是琴弦上的停顿。','L2 · p27'),
c('fix-poem','修改代码','code','修好这封破损的信','把代码改成输出一行「风与诗」。让字符串的左右引号配对，文字才能被完整包住。','print("风与诗\')','',[],'检查左右两边的引号，改成相同的单引号或双引号。',['左引号 "','风与诗','右引号 "'],'信修好啦。现在，诗句可以平安抵达了。','L2 · p39–42','assert __output.strip() == "风与诗", "请输出一行：风与诗"')
]},
{id:'melody',title:'可以重奏的旋律',subtitle:'第五封 · 函数',place:'蒙德城',description:'把一段旋律，变成随时能唱的歌。',dialogue:['同一首歌，不必每次都重新写。给它一个名字，想听的时候再轻轻呼唤。','函数就是这样一小段可以重用的旋律。参数是空着的音符，调用时再填入你的故事。'],challenges:[
c('indent','函数、参数与缩进','code','补上旋律里的音符','def 定义函数。形参 name 接收调用时的实参。函数体统一缩进 4 个空格；函数只有被调用时才执行。补上 return 后面的 name。','def greet(name):\n    return "你好，" + ___\n\nprint(greet("温迪"))','',[],'把 ___ 换成接收名字的参数 name，保留缩进。',['定义 greet(name)','调用 greet("温迪")','name → "温迪"'],'同一段旋律换个名字，也能唱给另一个人听。','L2 · p17–18,28–29','assert greet("温迪") == "你好，温迪"\nassert greet("旅行者") == "你好，旅行者"'),
c('return','print 与 return','choice','送给屏幕，还是送回手里？','print 把值显示在屏幕，调用的返回值是 None。return 把值交回调用者，并立刻结束当前函数。没有 return 的函数也返回 None。','def song():\n    print("风")\n\nresult = song()\nprint(result)','风，然后 None',['风，然后 None','只有风','风，然后风','只有 None'],'第一次 print 来自函数体，第二次打印函数的返回值。',['print("风") → 屏幕','函数没有 return → None','result → None'],'唱出来的歌和交回来的乐谱，原来是两回事。','L2 · p29–33'),
c('doc-test','文档字符串与断言','choice','给未来的自己留一张纸条','函数体开头的字符串叫 docstring，可用函数名.__doc__ 读取。assert 检查条件：True 时继续，False 时抛出 AssertionError，帮助我们检查代码。','def double(n):\n    """把数字加倍。"""\n    return n * 2\n\nassert double(3) == 6','断言通过，无输出',['断言通过，无输出','输出 6','输出文档字符串','抛出 AssertionError'],'assert 自己不会打印结果，只负责检查。',['double(3) → 6','6 == 6 → True','检查通过，继续执行'],'测试通过，没有声音也是一种好消息。','L2 · p34–36')
]},
{id:'letter',title:'寄往明天的风',subtitle:'第六封 · 输入与转换',place:'摘星崖',description:'接住你的回答，写成自己的第一封信。',dialogue:['走到这里，风已经记住你的声音了。现在，轮到代码听一听你的回答。','input() 接住的总是文字。要让文字参与计算，就得帮它换一件合适的衣服。'],challenges:[
c('casting','类型转换','output','把写着数字的纸，换成数字','int()、float()、str() 是显式类型转换。整数和浮点数一起计算时，Python 通常会自动转换成浮点数；无法解析的文字转换成数字会报错。','print(int("3") + 2)\nprint(str(5) + "封信")','5\n5封信',[],'int("3") 变成数字 3；str(5) 变成文字 "5"。',['"3" → int → 3','3 + 2 → 5','5 → str → "5"'],'你已经能在数字和文字之间传递消息了。int(3.9) 会截去小数部分，得到 3。','L2 · p43'),
c('input','input 返回字符串','choice','旅人递来了数字 4','input(prompt) 显示可选的提示文字，再读取用户输入。即使输入看起来像数字，返回值也是字符串。','apples = input("有几颗苹果？")\n# 旅人输入了 4\nprint(apples + "1")','41',['5','41','4.1','TypeError'],'两个字符串用 + 连接，不会做数字加法。',['输入 4 → "4"','"4" + "1"','"41"'],'纸上的 4 和 1 连在一起了。想得到 5，就先用 int 转换。','L2 · p48'),
c('final','综合修改与测试','code','写下属于你的风之书简','完成函数：把传来的数字文字转换为整数，再加上 1。函数应该返回数字，而不仅仅是打印。下方的断言会帮你检查。','def tomorrow(count):\n    # count 来自 input，是字符串\n    return count + 1\n\nprint(tomorrow("4"))','',[],'在加 1 前，用 int(count) 把文字变成整数。',['"4" → int → 4','4 + 1 → 5','return → 交回数字'],'第一章的信，已经寄出了。你学会的不只是几个词，而是让想法被计算机理解的方法。下一阵风来时，我们再出发。','L2 · p43,45–48','assert tomorrow("4") == 5\nassert tomorrow("0") == 1\nassert tomorrow("12") == 13')
]}
];
// Keep stable IDs for existing saves. New writing tasks replace passive answers.
const writing:Record<string,Partial<Challenge>>={
 hello:{kind:'code',code:'',revision:2,test:'assert __output.strip() == "你好，蒙德！", "请输出一行：你好，蒙德！"'},
 naming:{kind:'code',code:'',revision:2,test:'assert wind_poem == "风与诗", "请创建 wind_poem，值为字符串 风与诗"'},
 inventory:{kind:'code',code:'',revision:2,test:'assert bag == ["苹果", "羽毛", "乐谱"], "bag 应按顺序装入 苹果、羽毛、乐谱"'},
 separator:{kind:'code',code:'',revision:2,test:'import ast\n_tree = ast.parse(__source)\nassert any(isinstance(n, ast.Call) and isinstance(n.func, ast.Name) and n.func.id == "print" and len(n.args) >= 2 and any(k.arg == "sep" for k in n.keywords) for n in ast.walk(_tree)), "请给 print 传入多个内容，并设置 sep 参数"\nassert __output.strip() == "风·诗", "请输出：风·诗"'},
 return:{kind:'code',code:'',revision:2,test:'assert song() == "风", "song() 应 return 字符串 风，而不只是 print"'},
 casting:{kind:'code',code:'',revision:2,test:'import ast\n_tree = ast.parse(__source)\nassert any(isinstance(n, ast.Call) and isinstance(n.func, ast.Name) and n.func.id == "int" for n in ast.walk(_tree)), "请用 int 将数字字符串转成整数"\nassert __output.strip() == "5", "转换后加 2，打印结果 5"'},
 final:{kind:'code',code:'',revision:2,test:'assert tomorrow("4") == 5, "输入字符串 4，应返回整数 5"\nassert tomorrow("0") == 1, "输入字符串 0，应返回整数 1"\nassert tomorrow("12") == 13, "输入字符串 12，应返回整数 13"\nassert __output.strip() == "5", "最后打印 tomorrow 的调用结果"'}
};
const openings=[
 ['你来啦。树荫里还空着一个位置，刚好能听清琴声。','今天不用赶路。先和我一起，弄懂一件小事。'],
 ['那本诗集我带来了。扉页还空着，想等你亲手落笔。','先学会给东西命名吧。我们的故事，也从一个名字开始。'],
 ['出发前，把行囊打开让我看看？苹果、乐谱，还有一点点风。','今天只认一样东西。装得太满，走起来反而不轻松。'],
 ['湖边的风很轻。我留了半句诗，想听你接下去。','先看懂这一小处停顿，再把你的诗写出来。'],
 ['你走过来的时候，我刚好在试一段新旋律。嗯，真的只是刚好。','有些旋律想唱很多遍。今天，我们让代码也学会这件事。'],
 ['摘星崖的风，和第一天很像。不过现在，我认得你的脚步声了。','最后一封信，换你亲手写。我就在旁边。']
];
letters.forEach((letter,i)=>{letter.dialogue=openings[i];});
const writingHints:Record<string,string>={
 hello:'写 print(...)，把要输出的文字放在配对的引号里。输出中不会显示这些引号。',
 naming:'用 = 把字符串绑定给 wind_poem。文字要加引号；这里不用 print。',
 inventory:'写 bag = [...]，三个带引号的物品之间用逗号分开，注意顺序。',
 separator:'给 print 传入两个字符串，再用 sep 参数指定中间的 ·。不要把整个结果写死成一个字符串。',
 return:'用 def 定义无参数的 song()，冒号后换行并缩进；用 return 交回字符串，不是 print。',
 casting:'先用 int 处理带引号的数字 3，再加 2，把计算结果交给 print。',
 final:'def tomorrow(count): 后换行缩进；先 int(count)，再加 1，用 return 交回结果。最后另起一行打印调用结果。'
};
const focusedTopics:Record<string,string>={language:'解释器',hello:'print 输出',comments:'注释',objects:'共享引用与重新绑定',types:'数字与字符串',inventory:'列表',strings:'换行符', 'fix-poem':'引号配对',indent:'带参数的函数',return:'返回值','doc-test':'assert 检查',casting:'int 转换',final:'独立写函数'};
for(const letter of letters)for(const challenge of letter.challenges){if(focusedTopics[challenge.id])challenge.topic=focusedTopics[challenge.id];Object.assign(challenge,writing[challenge.id]||{});if(writingHints[challenge.id])challenge.hint=writingHints[challenge.id];challenge.success=lessons[challenge.id].proof;}
letters[4].challenges[2].code='def double(n):\n    return n * 2\n\nassert double(3) == 6';

export const curriculum=[
{level:'L0–L1',title:'启程之前',icon:'✧',status:'待补充课件',topics:['尚未收到 L0、L1 课件，不推测课程内容。']},
{level:'L2',title:'风的初次来信',icon:'⌁',status:'可游玩 · 6 封书简',topics:letters.map(l=>l.title)},
{level:'L3',title:'风向的选择',icon:'◇',status:'后续章节',topics:['算术运算：+ − * / // % **、除零与浮点数','关系运算与链式比较','逻辑运算、真值、短路与优先级','赋值与复合赋值','身份与成员运算','if / else / elif 与嵌套条件','奇偶、正负、取最值与综合练习','位运算：课件总结列出，待补充具体教学材料']},
{level:'L4',title:'不息的风之歌',icon:'↻',status:'后续章节',topics:['for 与序列遍历','range(start, stop, step) 与 len','计数、累加与阶乘练习','while 与终止条件、无限循环','break / continue','嵌套循环与图案练习','嵌套中的 break / continue','pass 与注释的区别']},
{level:'L5',title:'诗句的秘密',icon:'❀',status:'后续章节',topics:['Unicode、ASCII、UTF-8 与转义','字符串创建、原始字符串、不可变性','== 与 is','正负索引与切片','拼接、重复、遍历与成员判断','重叠子串计数','len / str / lower / upper / replace / join','split / strip / find','元音计数与合法变量名综合练习']}
];
