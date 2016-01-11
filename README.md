# Webpage-Filter

BBS/论坛智能过滤程序 某课程设计
(teamates: Chen Yu, Wei Wang, and Jiali Huang)

【目的及要求】
将BBS/论坛过滤程序实现成为一个chrome插件，对BBS/论坛的特定页面实现如下功能：
1）对特定网页中的内容根据关键字字典进行关键字词频统计，并生成关键字排行；
2）根据“敏感词很可能用同音词代替（比如“和谐”用“河蟹”代替）”的假设，对网页内容进行语义分析并预警；
3）根据敏感词词典对敏感词进行识别，并以单词“MARK”代替。

【程序框架】
manifest.json: 控制整个插件行为的配置文件。</br>
background.js: 后台文件。调用ChromeAPI，与浏览器进行交互。</br>
icon.png, icon_128.png: 插件的图标，在manifest.json里声明过。</br>
main.js: 自定义文件，实现过滤功能。包含的函数如下：</br>
  	Rank(): 实现关键字排行。调用：</br>
    		countKW(): 统计每个关键字出现的次数。</br>
    		mysortKW(): 实现关键字的key-val排序。</br>
	SemanticAna(): 实现简单的语义分析及预警。调用：</br>
    countALLPinyin(): 统计每个敏感词和关键字出现的次数。</br>
    sortALLPinyin(): 对每个敏感词和关键字出现的次数进行排序。</br>
  WordFilter(): 实现敏感词过滤。调用：</br>
    WF(): 用“MARK”替换敏感词。</br>
  FiltWordDic.js: 敏感词词典，由main.js使用。</br>
  KeyWordDic.js: 关键字字典，由main.js使用。</br>
  FrequencyDic.js: 敏感词和关键字的拼音字典，由main.js使用。</br>
  FiltWordDic.js: 敏感词的拼音字典，由main.js使用。</br>
    注：由于某些敏感词和关键字的拼音可能相同，所以此处敏感词的拼音字典+关键字的拼音字典≠敏感词和关键字的拼音字典。</br>
  ChToPinyinDic.js: 将汉字转换成拼音的字典，由main.js使用。</br>
  
【使用方法】
chorome浏览器->更多工具->扩展程序->开发者模式，整个文件夹拖进浏览器即可安装，点击即可运行
