﻿
//以下全是敏感词
var SIZEFW=545;
var FiltWord= new Array(SIZEFW);
FiltWord[0]=/﻿毛泽东/g;  FiltWord[1]=/周恩来/g;  FiltWord[2]=/马英九/g;  FiltWord[3]=/习近平/g;  FiltWord[4]=/李克强/g;  FiltWord[5]=/吴帮国/g;  FiltWord[6]=/无帮国/g;  FiltWord[7]=/无邦国/g;  FiltWord[8]=/无帮过/g;  FiltWord[9]=/瘟家宝/g;  FiltWord[10]=/假庆林/g;  FiltWord[11]=/甲庆林/g;  FiltWord[12]=/假青林/g;  FiltWord[13]=/离长春/g;  FiltWord[14]=/习远平/g;  FiltWord[15]=/袭近平/g;  FiltWord[16]=/李磕墙/g;  FiltWord[17]=/贺过墙/g;  FiltWord[18]=/和锅枪/g;  FiltWord[19]=/粥永康/g;  FiltWord[20]=/轴永康/g;  FiltWord[21]=/肘永康/g;  FiltWord[22]=/周健康/g;  FiltWord[23]=/粥健康/g;  FiltWord[24]=/周小康/g;  FiltWord[25]=/李肇星务/g;  FiltWord[26]=/国务委员/g;  FiltWord[27]=/国务院/g;  FiltWord[28]=/中央委员/g;  FiltWord[29]=/发改委/g;  FiltWord[30]=/国家发展和改革委员会/g;  FiltWord[31]=/发展和改革委员会/g;  FiltWord[32]=/国家发展与改革委员会/g;  FiltWord[33]=/发展与改革委员会达赖喇嘛/g;  FiltWord[34]=/江青/g;  FiltWord[35]=/希特勒/g;  FiltWord[36]=/墨索里尼/g;  FiltWord[37]=/班禅茉莉花/g;  FiltWord[38]=/突尼斯/g;  FiltWord[39]=/共产党/g;  FiltWord[40]=/gongchandang/g;  FiltWord[41]=/新闻出版总署/g;  FiltWord[42]=/新闻出版署/g;  FiltWord[43]=/处女/g;  FiltWord[44]=/房事/g;  FiltWord[45]=/押大/g;  FiltWord[46]=/押小/g;  FiltWord[47]=/坐台/g;  FiltWord[48]=/猥亵/g;  FiltWord[49]=/猥琐/g;  FiltWord[50]=/肉欲/g;  FiltWord[51]=/肉体/g;  FiltWord[52]=/排泄/g;  FiltWord[53]=/卵子/g;  FiltWord[54]=/西藏314事件/g;  FiltWord[55]=/新疆7/g;  FiltWord[56]=/5事件/g;  FiltWord[57]=/新疆国/g;  FiltWord[58]=/党中央/g;  FiltWord[59]=/新闻管制/g;  FiltWord[60]=/一边一国/g;  FiltWord[61]=/两国论/g;  FiltWord[62]=/分裂中国/g;  FiltWord[63]=/革命/g;  FiltWord[64]=/茉莉花/g;  FiltWord[65]=/突尼斯/g;  FiltWord[66]=/国内动态详情/g;  FiltWord[67]=/回回/g;  FiltWord[68]=/六四/g;  FiltWord[69]=/六四运动/g;  FiltWord[70]=/美国之音/g;  FiltWord[71]=/密宗/g;  FiltWord[72]=/民国/g;  FiltWord[73]=/民进党/g;  FiltWord[74]=/民运/g;  FiltWord[75]=/民主/g;  FiltWord[76]=/民主潮/g;  FiltWord[77]=/摩门教/g;  FiltWord[78]=/纳粹/g;  FiltWord[79]=/南华早报/g;  FiltWord[80]=/南蛮/g;  FiltWord[81]=/明慧网/g;  FiltWord[82]=/起义/g;  FiltWord[83]=/亲民党/g;  FiltWord[84]=/瘸腿帮/g;  FiltWord[85]=/人民报/g;  FiltWord[86]=/法轮功/g;  FiltWord[87]=/法轮大法/g;  FiltWord[88]=/打倒共产党/g;  FiltWord[89]=/台独万岁/g;  FiltWord[90]=/圣战/g;  FiltWord[91]=/示威/g;  FiltWord[92]=/台独/g;  FiltWord[93]=/台独分子/g;  FiltWord[94]=/台联/g;  FiltWord[95]=/台湾民国/g;  FiltWord[96]=/台湾岛国/g;  FiltWord[97]=/台湾国/g;  FiltWord[98]=/台湾独立/g;  FiltWord[99]=/太子党/g;  FiltWord[100]=/天安门事件/g;  FiltWord[101]=/屠杀/g;  FiltWord[102]=/小泉/g;  FiltWord[103]=/新党/g;  FiltWord[104]=/新疆独立/g;  FiltWord[105]=/新疆分裂/g;  FiltWord[106]=/新疆国/g;  FiltWord[107]=/疆独/g;  FiltWord[108]=/西藏独立/g;  FiltWord[109]=/西藏分裂/g;  FiltWord[110]=/西藏国/g;  FiltWord[111]=/藏独/g;  FiltWord[112]=/藏青会/g;  FiltWord[113]=/藏妇会/g;  FiltWord[114]=/学潮/g;  FiltWord[115]=/学运/g;  FiltWord[116]=/一党专政/g;  FiltWord[117]=/一中一台/g;  FiltWord[118]=/两个中国/g;  FiltWord[119]=/一贯道/g;  FiltWord[120]=/游行/g;  FiltWord[121]=/造反/g;  FiltWord[122]=/真善忍/g;  FiltWord[123]=/镇压/g;  FiltWord[124]=/政变/g;  FiltWord[125]=/政治/g;  FiltWord[126]=/政治反对派/g;  FiltWord[127]=/政治犯/g;  FiltWord[128]=/中共/g;  FiltWord[129]=/共产党/g;  FiltWord[130]=/反党/g;  FiltWord[131]=/反共/g;  FiltWord[132]=/政府/g;  FiltWord[133]=/民主党/g;  FiltWord[134]=/中国之春/g;  FiltWord[135]=/转法轮/g;  FiltWord[136]=/自焚/g;  FiltWord[137]=/共党/g;  FiltWord[138]=/共匪/g;  FiltWord[139]=/苏家屯/g;  FiltWord[140]=/基地组织/g;  FiltWord[141]=/塔利班/g;  FiltWord[142]=/东亚病夫/g;  FiltWord[143]=/支那/g;  FiltWord[144]=/高治联/g;  FiltWord[145]=/高自联/g;  FiltWord[146]=/专政/g;  FiltWord[147]=/专制/g;  FiltWord[148]=/世界维吾尔大会/g;  FiltWord[149]=/核工业基地/g;  FiltWord[150]=/核武器/g;  FiltWord[151]=/铀/g;  FiltWord[152]=/原子弹/g;  FiltWord[153]=/氢弹/g;  FiltWord[154]=/导弹/g;  FiltWord[155]=/核潜艇/g;  FiltWord[156]=/大参考/g;  FiltWord[157]=/小参考/g;  FiltWord[158]=/国内动态清样释迦牟尼/g;  FiltWord[159]=/阿弥陀佛/g;  FiltWord[160]=/多维/g;  FiltWord[161]=/河殇/g;  FiltWord[162]=/摩门教/g;  FiltWord[163]=/穆罕默德/g;  FiltWord[164]=/圣战/g;  FiltWord[165]=/耶和华/g;  FiltWord[166]=/耶稣/g;  FiltWord[167]=/伊斯兰/g;  FiltWord[168]=/真主安拉/g;  FiltWord[169]=/白莲教/g;  FiltWord[170]=/天主教/g;  FiltWord[171]=/基督教/g;  FiltWord[172]=/东正教/g;  FiltWord[173]=/大法/g;  FiltWord[174]=/法轮/g;  FiltWord[175]=/法轮功/g;  FiltWord[176]=/瘸腿帮/g;  FiltWord[177]=/真理教/g;  FiltWord[178]=/真善忍/g;  FiltWord[179]=/转法轮/g;  FiltWord[180]=/自焚/g;  FiltWord[181]=/走向圆满/g;  FiltWord[182]=/黄大仙/g;  FiltWord[183]=/跳大神/g;  FiltWord[184]=/神汉/g;  FiltWord[185]=/神婆/g;  FiltWord[186]=/真理教/g;  FiltWord[187]=/大卫教/g;  FiltWord[188]=/阎王/g;  FiltWord[189]=/黑白无常/g;  FiltWord[190]=/牛头马面/g;  FiltWord[191]=/藏独/g;  FiltWord[192]=/高丽棒子/g;  FiltWord[193]=/疆独/g;  FiltWord[194]=/蒙古鞑子/g;  FiltWord[195]=/台独/g;  FiltWord[196]=/台独分子/g;  FiltWord[197]=/台联/g;  FiltWord[198]=/台湾民国/g;  FiltWord[199]=/西藏独立/g;  FiltWord[200]=/新疆独立/g;  FiltWord[201]=/南蛮/g;  FiltWord[202]=/老毛子/g;  FiltWord[203]=/回民吃猪肉牛B/g;  FiltWord[204]=/牛比/g;  FiltWord[205]=/J8/g;  FiltWord[206]=/小姐兼职/g;  FiltWord[207]=/交媾/g;  FiltWord[208]=/毛片/g;  FiltWord[209]=/黄片/g;  FiltWord[210]=/交配/g;  FiltWord[211]=/房事/g;  FiltWord[212]=/性事/g;  FiltWord[213]=/偷窥/g;  FiltWord[214]=/马拉戈壁/g;  FiltWord[215]=/AIDS/g;  FiltWord[216]=/aids/g;  FiltWord[217]=/Aids/g;  FiltWord[218]=/DICK/g;  FiltWord[219]=/dick/g;  FiltWord[220]=/Dick/g;  FiltWord[221]=/penis/g;  FiltWord[222]=/sex/g;  FiltWord[223]=/SM/g;  FiltWord[224]=/屙/g;  FiltWord[225]=/爱滋/g;  FiltWord[226]=/淋病/g;  FiltWord[227]=/梅毒/g;  FiltWord[228]=/爱液/g;  FiltWord[229]=/屄/g;  FiltWord[230]=/逼/g;  FiltWord[231]=/臭机八/g;  FiltWord[232]=/臭鸡巴/g;  FiltWord[233]=/吹喇叭/g;  FiltWord[234]=/吹箫/g;  FiltWord[235]=/催情药/g;  FiltWord[236]=/屌/g;  FiltWord[237]=/肛交/g;  FiltWord[238]=/肛门/g;  FiltWord[239]=/龟头/g;  FiltWord[240]=/黄色/g;  FiltWord[241]=/机八/g;  FiltWord[242]=/机巴/g;  FiltWord[243]=/鸡八/g;  FiltWord[244]=/鸡巴/g;  FiltWord[245]=/机掰/g;  FiltWord[246]=/机巴/g;  FiltWord[247]=/鸡叭/g;  FiltWord[248]=/鸡鸡/g;  FiltWord[249]=/鸡掰/g;  FiltWord[250]=/鸡奸/g;  FiltWord[251]=/妓女/g;  FiltWord[252]=/奸/g;  FiltWord[253]=/茎/g;  FiltWord[254]=/精液/g;  FiltWord[255]=/精子/g;  FiltWord[256]=/尻/g;  FiltWord[257]=/口交/g;  FiltWord[258]=/滥交/g;  FiltWord[259]=/乱交/g;  FiltWord[260]=/轮奸/g;  FiltWord[261]=/卖淫/g;  FiltWord[262]=/屁眼/g;  FiltWord[263]=/嫖娼/g;  FiltWord[264]=/强奸/g;  FiltWord[265]=/强奸犯/g;  FiltWord[266]=/情色/g;  FiltWord[267]=/肉棒/g;  FiltWord[268]=/乳房/g;  FiltWord[269]=/乳峰/g;  FiltWord[270]=/乳交/g;  FiltWord[271]=/乳头/g;  FiltWord[272]=/乳晕/g;  FiltWord[273]=/三陪/g;  FiltWord[274]=/色情/g;  FiltWord[275]=/射精/g;  FiltWord[276]=/手淫/g;  FiltWord[277]=/威而钢/g;  FiltWord[278]=/威而柔/g;  FiltWord[279]=/伟哥/g;  FiltWord[280]=/性高潮/g;  FiltWord[281]=/性交/g;  FiltWord[282]=/性虐/g;  FiltWord[283]=/性欲/g;  FiltWord[284]=/穴/g;  FiltWord[285]=/颜射/g;  FiltWord[286]=/阳物/g;  FiltWord[287]=/一夜情/g;  FiltWord[288]=/阴部/g;  FiltWord[289]=/阴唇/g;  FiltWord[290]=/阴道/g;  FiltWord[291]=/阴蒂/g;  FiltWord[292]=/阴核/g;  FiltWord[293]=/阴户/g;  FiltWord[294]=/阴茎/g;  FiltWord[295]=/阴门/g;  FiltWord[296]=/淫/g;  FiltWord[297]=/淫秽/g;  FiltWord[298]=/淫乱/g;  FiltWord[299]=/淫水/g;  FiltWord[300]=/淫娃/g;  FiltWord[301]=/淫液/g;  FiltWord[302]=/淫汁/g;  FiltWord[303]=/淫穴/g;  FiltWord[304]=/淫洞/g;  FiltWord[305]=/援交妹/g;  FiltWord[306]=/做爱/g;  FiltWord[307]=/梦遗/g;  FiltWord[308]=/阳痿/g;  FiltWord[309]=/早泄/g;  FiltWord[310]=/奸淫/g;  FiltWord[311]=/性欲/g;  FiltWord[312]=/性交/g;  FiltWord[313]=/Bitch/g;  FiltWord[314]=/bt/g;  FiltWord[315]=/cao/g;  FiltWord[316]=/FUCK/g;  FiltWord[317]=/Fuck/g;  FiltWord[318]=/fuck/g;  FiltWord[319]=/kao/g;  FiltWord[320]=/NMD/g;  FiltWord[321]=/NND/g;  FiltWord[322]=/sb/g;  FiltWord[323]=/shit/g;  FiltWord[324]=/SHIT/g;  FiltWord[325]=/SUCK/g;  FiltWord[326]=/Suck/g;  FiltWord[327]=/tmd/g;  FiltWord[328]=/TMD/g;  FiltWord[329]=/tnnd/g;  FiltWord[330]=/K他命/g;  FiltWord[331]=/白痴/g;  FiltWord[332]=/笨蛋/g;  FiltWord[333]=/屄/g;  FiltWord[334]=/变态/g;  FiltWord[335]=/婊子/g;  FiltWord[336]=/操她妈/g;  FiltWord[337]=/操妳妈/g;  FiltWord[338]=/操你/g;  FiltWord[339]=/操你妈/g;  FiltWord[340]=/操他妈/g;  FiltWord[341]=/草你/g;  FiltWord[342]=/肏/g;  FiltWord[343]=/册那/g;  FiltWord[344]=/侧那/g;  FiltWord[345]=/测拿/g;  FiltWord[346]=/插/g;  FiltWord[347]=/蠢猪/g;  FiltWord[348]=/荡妇/g;  FiltWord[349]=/发骚/g;  FiltWord[350]=/废物/g;  FiltWord[351]=/干她妈/g;  FiltWord[352]=/干妳/g;  FiltWord[353]=/干妳娘/g;  FiltWord[354]=/干你/g;  FiltWord[355]=/干你妈/g;  FiltWord[356]=/干你妈B/g;  FiltWord[357]=/干你妈b/g;  FiltWord[358]=/干你妈逼/g;  FiltWord[359]=/干你娘/g;  FiltWord[360]=/干他妈/g;  FiltWord[361]=/狗娘养的/g;  FiltWord[362]=/滚/g;  FiltWord[363]=/鸡奸/g;  FiltWord[364]=/贱货/g;  FiltWord[365]=/贱人/g;  FiltWord[366]=/烂人/g;  FiltWord[367]=/老母/g;  FiltWord[368]=/老土/g;  FiltWord[369]=/妈比/g;  FiltWord[370]=/妈的/g;  FiltWord[371]=/马的/g;  FiltWord[372]=/妳老母的/g;  FiltWord[373]=/妳娘的/g;  FiltWord[374]=/你妈逼/g;  FiltWord[375]=/破鞋/g;  FiltWord[376]=/仆街/g;  FiltWord[377]=/去她妈/g;  FiltWord[378]=/去妳的/g;  FiltWord[379]=/去妳妈/g;  FiltWord[380]=/去你的/g;  FiltWord[381]=/去你妈/g;  FiltWord[382]=/去死/g;  FiltWord[383]=/去他妈/g;  FiltWord[384]=/日你/g;  FiltWord[385]=/赛她娘/g;  FiltWord[386]=/赛妳娘/g;  FiltWord[387]=/赛你娘/g;  FiltWord[388]=/赛他娘/g;  FiltWord[389]=/骚货/g;  FiltWord[390]=/傻B/g;  FiltWord[391]=/傻比/g;  FiltWord[392]=/傻子/g;  FiltWord[393]=/上妳/g;  FiltWord[394]=/上你/g;  FiltWord[395]=/神经病/g;  FiltWord[396]=/屎/g;  FiltWord[397]=/屎妳娘/g;  FiltWord[398]=/屎你娘/g;  FiltWord[399]=/他妈的/g;  FiltWord[400]=/王八蛋/g;  FiltWord[401]=/我操/g;  FiltWord[402]=/我日/g;  FiltWord[403]=/乡巴佬/g;  FiltWord[404]=/猪猡/g;  FiltWord[405]=/屙/g;  FiltWord[406]=/干/g;  FiltWord[407]=/尿/g;  FiltWord[408]=/掯/g;  FiltWord[409]=/屌/g;  FiltWord[410]=/操/g;  FiltWord[411]=/骑你/g;  FiltWord[412]=/湿了/g;  FiltWord[413]=/操你/g;  FiltWord[414]=/操他/g;  FiltWord[415]=/操她/g;  FiltWord[416]=/骑你/g;  FiltWord[417]=/骑他/g;  FiltWord[418]=/骑她/g;  FiltWord[419]=/欠骑/g;  FiltWord[420]=/欠人骑/g;  FiltWord[421]=/来爽我/g;  FiltWord[422]=/来插我/g;  FiltWord[423]=/干你/g;  FiltWord[424]=/干他/g;  FiltWord[425]=/干她/g;  FiltWord[426]=/干死/g;  FiltWord[427]=/干爆/g;  FiltWord[428]=/干机/g;  FiltWord[429]=/FUCK/g;  FiltWord[430]=/机叭/g;  FiltWord[431]=/臭鸡/g;  FiltWord[432]=/臭机/g;  FiltWord[433]=/烂鸟/g;  FiltWord[434]=/览叫/g;  FiltWord[435]=/阳具/g;  FiltWord[436]=/肉棒/g;  FiltWord[437]=/肉壶/g;  FiltWord[438]=/奶子/g;  FiltWord[439]=/摸咪咪/g;  FiltWord[440]=/干鸡/g;  FiltWord[441]=/干入/g;  FiltWord[442]=/小穴/g;  FiltWord[443]=/强奸/g;  FiltWord[444]=/插你/g;  FiltWord[445]=/插你/g;  FiltWord[446]=/爽你/g;  FiltWord[447]=/爽你/g;  FiltWord[448]=/干干/g;  FiltWord[449]=/干X/g;  FiltWord[450]=/我操/g;  FiltWord[451]=/他干/g;  FiltWord[452]=/干它/g;  FiltWord[453]=/干牠/g;  FiltWord[454]=/干您/g;  FiltWord[455]=/干汝/g;  FiltWord[456]=/干林/g;  FiltWord[457]=/操林/g;  FiltWord[458]=/干尼/g;  FiltWord[459]=/操尼/g;  FiltWord[460]=/我咧干/g;  FiltWord[461]=/干勒/g;  FiltWord[462]=/干我/g;  FiltWord[463]=/干到/g;  FiltWord[464]=/干啦/g;  FiltWord[465]=/干爽/g;  FiltWord[466]=/欠干/g;  FiltWord[467]=/狗干/g;  FiltWord[468]=/我干/g;  FiltWord[469]=/来干/g;  FiltWord[470]=/轮干/g;  FiltWord[471]=/轮流干/g;  FiltWord[472]=/干一干/g;  FiltWord[473]=/援交/g;  FiltWord[474]=/骑你/g;  FiltWord[475]=/我操/g;  FiltWord[476]=/轮奸/g;  FiltWord[477]=/鸡奸/g;  FiltWord[478]=/奸暴/g;  FiltWord[479]=/再奸/g;  FiltWord[480]=/我奸/g;  FiltWord[481]=/奸你/g;  FiltWord[482]=/奸你/g;  FiltWord[483]=/奸他/g;  FiltWord[484]=/奸她/g;  FiltWord[485]=/奸一奸/g;  FiltWord[486]=/淫水/g;  FiltWord[487]=/淫湿/g;  FiltWord[488]=/鸡歪/g;  FiltWord[489]=/仆街/g;  FiltWord[490]=/臭西/g;  FiltWord[491]=/尻/g;  FiltWord[492]=/遗精/g;  FiltWord[493]=/烂逼/g;  FiltWord[494]=/大血比/g;  FiltWord[495]=/叼你妈/g;  FiltWord[496]=/靠你妈/g;  FiltWord[497]=/草你/g;  FiltWord[498]=/干你/g;  FiltWord[499]=/日你/g;  FiltWord[500]=/插你/g;  FiltWord[501]=/奸你/g;  FiltWord[502]=/戳你/g;  FiltWord[503]=/逼你老母/g;  FiltWord[504]=/挨球/g;  FiltWord[505]=/我日你/g;  FiltWord[506]=/草拟妈/g;  FiltWord[507]=/卖逼/g;  FiltWord[508]=/狗操卖逼/g;  FiltWord[509]=/奸淫/g;  FiltWord[510]=/日死/g;  FiltWord[511]=/奶子/g;  FiltWord[512]=/阴茎/g;  FiltWord[513]=/奶娘/g;  FiltWord[514]=/他娘/g;  FiltWord[515]=/她娘/g;  FiltWord[516]=/骚B/g;  FiltWord[517]=/你妈了妹/g;  FiltWord[518]=/逼毛/g;  FiltWord[519]=/插你妈/g;  FiltWord[520]=/叼你/g;  FiltWord[521]=/渣波波/g;  FiltWord[522]=/嫩b/g;  FiltWord[523]=/weelaa/g;  FiltWord[524]=/缔顺/g;  FiltWord[525]=/帝顺/g;  FiltWord[526]=/蒂顺/g;  FiltWord[527]=/系统消息/g;  FiltWord[528]=/午夜/g;  FiltWord[529]=/看下/g;  FiltWord[530]=/草泥马/g;  FiltWord[531]=/法克鱿/g;  FiltWord[532]=/雅蠛蝶/g;  FiltWord[533]=/潜烈蟹/g;  FiltWord[534]=/菊花蚕/g;  FiltWord[535]=/尾申鲸/g;  FiltWord[536]=/吉跋猫/g;  FiltWord[537]=/搞栗棒/g;  FiltWord[538]=/吟稻雁/g;  FiltWord[539]=/达菲鸡/g;  FiltWord[540]=/SM/g;  FiltWord[541]=/ML/g;  FiltWord[542]=/3P/g;  FiltWord[543]=/群P/g;  FiltWord[544]=/马勒戈壁/g;  
//以上全是敏感词