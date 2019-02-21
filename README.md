# 项目脚手架
---
- 代码pull完毕后执行命令`mvn clean install`
- 执行完毕后会在本地私服库`.m2/repository`生成文件`archetype-catalog.xml`
- 注意：本地私服库为编译器配置maven的路径(如没有修改，则走默认路径)

##### 脚手架模版相关说明
- archetype-demo-service - service服务端项目
- archetype-demo-web - web服务项目
- archetype-demo-single - 单独服务项目

##### 项目骨架module分层说明
- common ： 公共模块，公共变量、工具类等放入此模块
- entity ： 对象层，依赖common模块
    - po : 持久化对象，一般直接对应数据库表结构
    - bo : 业务对象
    - dto: 经过处理后的po对象
- dao : 数据库操作对象，依赖entity模块
    - java.dao : Mapper接口定义
    - resources.dao : Mapper.xml,sql数据
- rpc ： 外部依赖模块，用于请求外部服务
- business ： 业务模块，依赖dao模块和rpc模块
- web : web模块，依赖business模块
    - resources.props : 属性文件目录，多环境文件配置
    - resources.spring : spring相关配置
    - spring-config.xml : spring初始化入口
    - webapp : 放置前端相关文件以及web.xml配置

##### IntelliJ IDEA使用教程
###### 安装插件
- `Maven Archetype Catalogs` 该插件安装完毕后重启IDE
###### 配置XML
    Preferences ==> Build,Execution,Deployment ==> Build Tools ==> Maven Archetype Catalogs
    点击'+'，选择生成的archetype-catalog.xml文件，保存即可
###### 创建项目
    New ==> Project
    选择Maven
    勾选`Create from archetype`
    选择需要使用的脚手架模版即可

##### Eclipse使用教程
- 敬请期待
