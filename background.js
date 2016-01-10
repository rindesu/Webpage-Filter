chrome.browserAction.onClicked.addListener( //调用chrome API，实现“点击插件图标则运行插件”
    function(tab){ 	
		tabId = tab.id,
		
		//调用chrome API，执行所有.js文件
		chrome.tabs.executeScript(tabId,{file : "FiltWordDic.js"});
		chrome.tabs.executeScript(tabId,{file : "KeyWordDic.js"});
		chrome.tabs.executeScript(tabId,{file : "FrequencyDic.js"});
		chrome.tabs.executeScript(tabId,{file : "FiltWordPinyinDic.js"});
		chrome.tabs.executeScript(tabId,{file : "ChToPinyinDic.js"});
		//以上.js文件中无函数，变量由main.js调用。
		chrome.tabs.executeScript(tabId,{file : "main.js"});//main.js为主要的功能文件
	} 
) 
       