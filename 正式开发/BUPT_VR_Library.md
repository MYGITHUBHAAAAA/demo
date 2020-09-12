
##### 简要描述

- 后端VR项目接口

##### 请求URL
- ` 后端提供一个基础url 建议先鉴权再提供数据`
##### 请求方式
- POST 

##### 请求参数
|   参数名|  必选 | 类型|说明  |
|:----    |:---|:----- |-----   |
|id |是  |string| hashValue,指向我想要的数据  |


##### 返回示例 

``` 
  {
    floor:0,
	pic:"index",
	to:[{
		position:{
			x:-3,
			y:2,
			z:-3
		},
		url:"http://www.YourUrl.com/anotherJson1?",
		data:"The hashCode with MD5"
	},{
		position:{
			x:3,
			y:2,
			z:-3
		},
		url:"http://www.YourUrl.com/anotherJson2",
		data:"The hashCode with MD5"
	}]
  }
```

##### 返回参数说明 

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|floor |是  |string |当前所在的层数   |
|pic |是  |string | 当前的背景图片    |
|to     |是  |Array |  小飞机对象数组   |

##### to对象说明
|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|position |是  |object |包含x,y,z三个key,值表示小飞机在图中的位置,请把它写死   |
|url |是  |string | this.小飞机 指向请求下一个位置的url地址    |
|data |是  |string | 下一次请求所需携带的参数    |





