### 1、双击安装，默认安装路径

### 2、配置环境变量

系统配置

* 新建    JAVA_HOME     jdk目录   C:\Pro...\jdk1.8

* Path 编辑  最后加上

```
;%JAVA_HOME%\bin;%JAVA_HOME%\jre\bin
```

* 新建 CLASSPATH变量

  ```
  .;%JAVA_HOME%\lib\dt.jar;%JAVA_HOME%\lib\tools.jar;
  ```

### 3、检验

​	打开cmd窗口  输入java -version 看版本信息