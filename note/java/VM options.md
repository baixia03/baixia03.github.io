# 把标准输出中的汇编输出打印到控制台

```
-XX:+UnlockDiagnosticVMOptions -XX:+PrintAssembly
```

> 需要加载 hsdis-amd64.dll 库。

# 把标准输出中的汇编输出打印到控制台和指定文件

```
-XX:+UnlockDiagnosticVMOptions -XX:+TraceClassLoading -XX:+LogCompilation -XX:+PrintAssembly > assembly.log
```

> 需要加载 hsdis-amd64.dll 库。