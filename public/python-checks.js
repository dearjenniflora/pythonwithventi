// Shared by the browser runtime and curriculum verification scripts.
export const PYTHON_CHECKS = String.raw`
def require_concepts(requirements):
    import ast
    tree = ast.parse(__source)
    nodes = list(ast.walk(tree))
    for requirement in requirements:
        if requirement.startswith('call:'):
            name = requirement[5:]
            ok = any(isinstance(n, ast.Call) and isinstance(n.func, ast.Name) and n.func.id == name for n in nodes)
        elif requirement.startswith('method:'):
            name = requirement[7:]
            ok = any(isinstance(n, ast.Call) and isinstance(n.func, ast.Attribute) and n.func.attr == name for n in nodes)
        elif requirement in ('NestedIf', 'NestedFor'):
            cls = ast.If if requirement == 'NestedIf' else ast.For
            ok = any(isinstance(n, cls) and any(isinstance(child, cls) for statement in n.body for child in ast.walk(statement)) for n in nodes)
        else:
            cls = getattr(ast, requirement)
            ok = any(isinstance(n, cls) for n in nodes)
        labels = {'For':'for 循环','While':'while 循环','If':'if 分支','NestedIf':'嵌套 if','NestedFor':'嵌套 for','AugAssign':'复合赋值','Mod':'% 求余','Pow':'** 乘方','Div':'/ 除法','And':'and 条件','In':'in 成员判断','Subscript':'索引','Slice':'切片','Mult':'* 重复','Pass':'pass','Continue':'continue'}
        assert ok, '请在代码里实际使用刚学过的：' + labels.get(requirement, requirement.split(':')[-1])
`;
