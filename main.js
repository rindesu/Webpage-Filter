//可能出现文本信息的HTML标签
var TagNameArray = new Array(20);
TagNameArray[0] = "a";
TagNameArray[1] = "address";
TagNameArray[2] = "blockquote";
TagNameArray[3] = "caption";
TagNameArray[4] = "cite";
TagNameArray[5] = "title";
TagNameArray[6] = "h1";
TagNameArray[7] = "h2";
TagNameArray[8] = "h3";
TagNameArray[9] = "h4";
TagNameArray[10] = "h5";
TagNameArray[11] = "h6";
TagNameArray[12] = "label";
TagNameArray[13] = "p";
TagNameArray[14] = "q";
TagNameArray[15] = "td";
TagNameArray[16] = "th";


//*********************************调用函数部分***********************************//		
var r=confirm("你想生成当前页面的热点词排行吗?");	 //弹出确认窗口，询问用户
if (r==true)
{
	Rank();		//若用户希望生成热点词排行，则调用关键字排行函数。
}
var r=confirm("你想了解当前页面内容是否积极吗?");	 //弹出确认窗口，询问用户
if (r==true)
{
	SemanticAna() ;		//调用语义分析函数
}
WordFilter();				//调用敏感词过滤函数
//*********************************************************************************//

//************************************关键字排行**********************************//
function countKW(txt) //统计每个关键词汇出现的个数，由Rank调用
{
        for (var i=0; i < SIZEKW; i++)
        {
                var num = txt.match(KeyWord[i].val);  //num: match函数返回的数组
                if (num)
                        KeyWord[i].key= KeyWord[i].key + num.length; //num.length: 数组中元素的个数
        }
}
function mysortKW() //key-val排序，由Rank调用
{
        while (true)
        {
                swapped=0;
                for (i=1; i<SIZEKW;i++)
                {
                        if (KeyWord[i-1].key<KeyWord[i].key)
                        {//swap
                                 var temp=new Object();
                                 temp.key=KeyWord[i-1].key;
                                 temp.val=KeyWord[i-1].val;
                                 KeyWord[i-1].key=KeyWord[i].key;
                                 KeyWord[i-1].val=KeyWord[i].val;
                                 KeyWord[i].key=temp.key;
                                 KeyWord[i].val=temp.val;
                                 swapped=1;
                        }
                 }
                 if (swapped==0)
                         break;
        }
}
function Rank()//关键字排行
{
	//默认title是关键字
    alert("本网页主题： "+document.title);
    //统计关键词
	var i = 0;
	var j = 0;
	for (i = 0; i < 17; i++)//对每个可能出现文本信息的HTML标签进行遍历
	{
		var tmp = document.getElementsByTagName(TagNameArray[i]);
		var len = tmp.length;//len表示标签为TagNameArray[i]的结点个数
		for (j = 0; j < len; j++)
		{
			countKW(tmp[j].innerHTML);
		}
	}
	var tmp = document.getElementsByTagName("frame");//处理动态网页
	var tmpLen = tmp.length;//tmpLen表示动态网页个数
	var k = 0;
	for (i = 0; i < tmpLen; i++)//对动态网页进行遍历
	{
		var x = tmp[i].contentDocument;
		for (j = 0; j < 17; j++)
		{	
			var y = x.documentElement.getElementsByTagName(TagNameArray[j]);//访问动态网页里的结点
			var len = y.length;
			for (k = 0; k < len; k++)
			{
			    countKW(y[k].innerHTML);
			}
		}
	}                
    mysortKW();
	alert("当前页面的关键字排行如下：" + (KeyWord[0].val).source + " " +(KeyWord[1].val).source + " " +(KeyWord[2].val).source + " " +(KeyWord[3].val).source + " "+(KeyWord[4].val).source);  //输出关键字排行   
	//alert(KeyWord[0].key + " " + KeyWord[1].key + " " + KeyWord[2].key + " " + KeyWord[3].key + " "+KeyWord[4].key + " ");     
}
//*********************************************************************************//


//********************************语义分析及预警***********************************//
function countALLPinyin(txt) //统计每个词出现的次数，由SemanticAna调用
{
		for(var i = 0; i < SIZEALL; i++)
		{
			var n = txt.match(ALLPinyin[i].val);//n是match返回的数组
			if(n)
				ALLPinyin[i].key = ALLPinyin[i].key + n.length;
		}
}
function sortALLPinyin()     //对每个词出现的次数进行排序，由SemanticAna调用
{
	while(true)
	{
		swapped = 0;
        for(i = 1; i < SIZEALL; i++)
		{
			if(ALLPinyin[i-1].key < ALLPinyin[i].key)
			{//swap
				var temp = new Object();
				temp.key = ALLPinyin[i-1].key;
				temp.val = ALLPinyin[i-1].val;
				ALLPinyin[i-1].key = ALLPinyin[i].key;
				ALLPinyin[i-1].val = ALLPinyin[i].val;
				ALLPinyin[i].key = temp.key;
				ALLPinyin[i].val = temp.val;
				swapped = 1;
			}
		}
		if (swapped == 0)
			break;
    }
	//alert("sortfin");
}
function SemanticAna()       //语义分析及预警函数
{
	var i = 0;
	var j = 0;
	for (i = 0; i < 17; i++)//对每个可能出现文本信息的HTML标签进行遍历
	{
		var tmp = document.getElementsByTagName(TagNameArray[i]);
		var len = tmp.length;//len表示标签为TagNameArray[i]的结点个数
		for (j = 0; j < len; j++)
		{
			//将网页此部分内容转化为拼音并进行拼音的词频统计
			countALLPinyin(pinyin.go(tmp[j].innerHTML));
		}
	}
	
	var tmp = document.getElementsByTagName("frame");//处理动态网页
	var tmpLen = tmp.length;//tmpLen表示动态网页个数。
	var k = 0;
	for (i = 0; i < tmpLen; i++)//对动态网页进行遍历
	{
		var x = tmp[i].contentDocument;
		for (j = 0; j < 17; j++)
		{	
			var y = x.documentElement.getElementsByTagName(TagNameArray[j]);//访问动态网页里的结点
			var len = y.length;
			for (k = 0; k < len; k++)
			{
				//将网页此部分内容转化为拼音并进行拼音的词频统计
			    countALLPinyin(pinyin.go(y[k].innerHTML));
			}
		}
	}                
    //对网页的所有转化成拼音的词进行词频排序
	sortALLPinyin();

	//输出词频前10大的拼音词汇
    alert("当前页面拼音出现频率的排行如下：" + (ALLPinyin[0].val).source + " " +(ALLPinyin[1].val).source + " " +(ALLPinyin[2].val).source + " " +(ALLPinyin[3].val).source + " "+(ALLPinyin[4].val).source + " " +(ALLPinyin[5].val).source + " " +(ALLPinyin[6].val).source + " "+(ALLPinyin[7].val).source + " " +(ALLPinyin[8].val).source + " " +(ALLPinyin[9].val).source);  
	
		max = 0;   //记录出现较多的词中敏感词的个数
		var i = 0;
		while(i < 10)
		{
			for (j = 0; j < SIZEPY; j++)
			{
				if((ALLPinyin[i].val).source == (FiltPinyin[j]).source)
				{
					max ++;
					break;	
				}
			}
			i ++;
		}
		//alert(max);
		//由于敏感词库中的词较普遍，如果排名前十的词汇出现敏感词个数超过6个时，则粗略地判定当前页面的内容不健康,对用户进行预警
		if(max >= 6)    
			alert("当前网页的内容包含不健康因素，不建议未成年人浏览");
		else
			alert("当前网页的内容健康");
}
//*********************************************************************************//

//*************************************敏感词过滤***********************************//
function WF(txt)//替换敏感词，由WordFilter（）调用
{
	var newtxt = new Array(SIZEFW);
                var i=0;
                newtxt[0] = txt;
                for (i=1; i<SIZEFW;i++)
                {       
                        newtxt[i] = newtxt[i-1].replace(FiltWord[i-1], "MARK");
                 }
	return newtxt[i-1];
}
function WordFilter()
{
	var i = 0;
	var j = 0;
	for (i = 0; i < 17; i++)//对每个可能出现文本信息的HTML标签进行遍历
	{
		var tmp = document.getElementsByTagName(TagNameArray[i]);
		var len = tmp.length;//len表示标签为TagNameArray[i]的结点个数
		for (j = 0; j < len; j++)
		{
			str = tmp[j].innerHTML;
			newStr = WF(str);
			tmp[j].innerHTML = newStr;//修改网页内容
		}
	}
	var tmp = document.getElementsByTagName("frame");//处理动态网页
	var tmpLen = tmp.length;//tmpLen表示动态网页个数
	var k = 0;
	for (i = 0; i < tmpLen; i++)//对动态网页进行遍历
	{
		var x = tmp[i].contentDocument;
		for (j = 0; j < 17; j++)
		{	
			var y = x.documentElement.getElementsByTagName(TagNameArray[j]);//访问动态网页结点
			var len = y.length;
			for (k = 0; k < len; k++)
			{
				str = y[k].innerHTML;
				newStr = WF(str);
				y[k].innerHTML = newStr;
			}
		}
	}
}
//*********************************************************************************//


