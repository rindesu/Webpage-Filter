﻿
//将汉字转化为拼音
var pinyin={ 
mfkdb:[ 
['a','阿吖嗄腌锕'], 
['ai','埃挨哎唉哀皑癌蔼矮艾碍爱隘捱嗳嗌嫒瑷暧砹锿霭'], 
['an','鞍氨安俺按暗岸胺案谙埯揞庵桉铵鹌黯'], 
['ang','肮昂盎'], 
['ao','凹敖熬翱袄傲奥懊澳坳嗷岙廒遨媪骜獒聱螯鏊鳌鏖'], 
['ba','芭捌扒叭吧笆八疤巴拔跋靶把耙坝霸罢爸茇菝岜灞钯粑鲅魃'], 
['bai','白柏百摆佰败拜稗捭掰'], 
['ban','斑班搬扳般颁板版扮拌伴瓣半办绊阪坂钣瘢癍舨'], 
['bang','邦帮梆榜膀绑棒磅镑傍谤蒡浜'], 
['beng','蚌崩绷甭泵蹦迸嘣甏'], 
['bao','苞胞包褒薄雹保堡饱宝抱报暴豹鲍爆曝勹葆孢煲鸨褓趵龅'], 
['bo','剥玻菠播拨钵波博勃搏铂箔伯帛舶脖膊渤泊驳亳啵饽檗擘礴钹鹁簸跛踣'], 
['bei','杯碑悲卑北辈背贝钡倍狈备惫焙被孛陂邶蓓呗悖碚鹎褙鐾鞴'], 
['ben','奔苯本笨畚坌锛'], 
['bi','逼鼻比鄙笔彼碧蓖蔽毕毙毖币庇痹闭敝弊必壁臂避陛匕俾荜荸萆薜吡哔狴庳愎滗濞弼妣婢嬖璧贲睥畀铋秕裨筚箅篦舭襞跸髀'], 
['pi','辟坯砒霹批披劈琵毗啤脾疲皮匹痞僻屁譬丕仳陴邳郫圮埤鼙芘擗噼庀淠媲纰枇甓罴铍癖疋蚍蜱貔'], 
['bian','鞭边编贬扁便变卞辨辩辫遍匾弁苄忭汴缏煸砭碥窆褊蝙笾鳊'], 
['biao','标彪膘表婊骠飑飙飚镖镳瘭裱鳔'], 
['bie','鳖憋别瘪蹩'], 
['bin','彬斌濒滨宾摈傧豳缤玢槟殡膑镔髌鬓'], 
['bing','兵冰柄丙秉饼炳病并禀邴摒'], 
['bu','捕卜哺补埠不布步簿部怖卟逋瓿晡钚钸醭'], 
['ca','擦嚓礤'], 
['cai','猜裁材才财睬踩采彩菜蔡'], 
['can','餐参蚕残惭惨灿骖璨粲黪'], 
['cang','苍舱仓沧藏伧'], 
['cao','操糙槽曹草嘈漕螬艚'], 
['ce','厕策侧册测恻'], 
['ceng','层蹭曾噌'], 
['cha','插叉茬茶查碴搽察岔诧猹馇汊姹杈槎檫锸镲衩'], 
['chai','差拆柴豺侪钗瘥虿'], 
['chan','搀掺蝉馋谗缠铲产阐颤冁谄蒇廛忏潺澶孱羼婵骣觇禅蟾躔'], 
['chang','昌猖场尝常长偿肠厂敞畅唱倡伥鬯苌菖徜怅惝阊娼嫦昶氅鲳'], 
['chao','超抄钞朝嘲潮巢吵炒怊晁焯耖'], 
['che','车扯撤掣彻澈坼砗'], 
['chen','郴臣辰尘晨忱沉陈趁衬谌谶抻嗔宸琛榇碜龀'], 
['cheng','撑称城橙成呈乘程惩澄诚承逞骋秤丞埕枨柽塍瞠铖铛裎蛏酲'], 
['chi','吃痴持池迟弛驰耻齿侈尺赤翅斥炽傺墀茌叱哧啻嗤彳饬媸敕眵鸱瘛褫蚩螭笞篪豉踟魑'], 
['shi','匙师失狮施湿诗尸虱十石拾时食蚀实识史矢使屎驶始式示士世柿事拭誓逝势是嗜噬适仕侍释饰氏市恃室视试谥埘莳蓍弑轼贳炻礻铈舐筮豕鲥鲺'], 
['chong','充冲虫崇宠重茺忡憧铳舂艟'], 
['chou','抽酬畴踌稠愁筹仇绸瞅丑臭俦帱惆瘳雠'], 
['chu','初出橱厨躇锄雏滁除楚础储矗搐触处亍刍怵憷绌杵楮樗褚蜍蹰黜'], 
['chuai','揣搋嘬膪踹'], 
['chuan','川穿椽传船喘串舛遄氚钏舡'], 
['chuang','疮窗床闯创怆'], 
['zhuang','幢桩庄装妆撞壮状僮'], 
['chui','吹炊捶锤垂陲棰槌'], 
['chun','春椿醇唇淳纯蠢莼鹑蝽'], 
['chuo','戳绰啜辍踔龊'], 
['ci','疵茨磁雌辞慈瓷词此刺赐次茈祠鹚糍'], 
['cong','聪葱囱匆从丛苁淙骢琮璁枞'], 
['cou','凑楱辏腠'], 
['cu','粗醋簇促卒蔟徂猝殂酢蹙蹴'], 
['cuan','蹿篡窜汆撺爨镩'], 
['cui','摧崔催脆瘁粹淬翠萃啐悴璀榱毳'], 
['cun','村存寸忖皴'], 
['cuo','磋撮搓措挫错厝嵯脞锉矬痤鹾蹉'], 
['da','搭达答瘩打大耷哒怛妲褡笪靼鞑'], 
['dai','呆歹傣戴带殆代贷袋待逮怠埭甙呔岱迨绐玳黛'], 
['dan','耽担丹单郸掸胆旦氮但惮淡诞蛋儋凼萏菪啖澹宕殚赕眈疸瘅聃箪'], 
['tan','弹坍摊贪瘫滩坛檀痰潭谭谈坦毯袒碳探叹炭郯昙忐钽锬覃'], 
['dang','当挡党荡档谠砀裆'], 
['dao','刀捣蹈倒岛祷导到稻悼道盗叨氘焘纛'], 
['de','德得的锝'], 
['deng','蹬灯登等瞪凳邓噔嶝戥磴镫簦'], 
['di','堤低滴迪敌笛狄涤嫡抵底地蒂第帝弟递缔氐籴诋谛邸坻荻嘀娣柢棣觌祗砥碲睇镝羝骶締'], 
['zhai','翟摘斋宅窄债寨砦瘵'], 
['dian','颠掂滇碘点典靛垫电佃甸店惦奠淀殿丶阽坫巅玷钿癜癫簟踮'], 
['diao','碉叼雕凋刁掉吊钓铞貂鲷'], 
['tiao','调挑条迢眺跳佻苕祧窕蜩笤粜龆鲦髫'], 
['die','跌爹碟蝶迭谍叠垤堞喋牒瓞耋鲽'], 
['ding','丁盯叮钉顶鼎锭定订仃啶玎腚碇町疔耵酊'], 
['diu','丢铥'], 
['dong','东冬董懂动栋侗恫冻洞垌咚岽峒氡胨胴硐鸫'], 
['dou','兜抖斗陡豆逗痘蔸钭窦蚪篼'], 
['du','都督毒犊独读堵睹赌杜镀肚度渡妒芏嘟渎椟牍蠹笃髑黩'], 
['duan','端短锻段断缎椴煅簖'], 
['dui','堆兑队对怼憝碓镦'], 
['dun','墩吨蹲敦顿钝盾遁沌炖砘礅盹趸'], 
['tun','囤吞屯臀氽饨暾豚'], 
['duo','掇哆多夺垛躲朵跺舵剁惰堕咄哚沲缍铎裰踱'], 
['e','蛾峨鹅俄额讹娥恶厄扼遏鄂饿噩谔垩苊莪萼呃愕屙婀轭腭锇锷鹗颚鳄'], 
['en','恩蒽摁嗯'], 
['er','而儿耳尔饵洱二贰迩珥铒鸸鲕'], 
['fa','发罚筏伐乏阀法珐垡砝'], 
['fan','藩帆番翻樊矾钒繁凡烦反返范贩犯饭泛蕃蘩幡夂梵燔畈蹯'], 
['fang','坊芳方肪房防妨仿访纺放邡枋钫舫鲂'], 
['fei','菲非啡飞肥匪诽吠肺废沸费狒悱淝妃绯榧腓斐扉砩镄痱蜚篚翡霏鲱'], 
['fen','芬酚吩氛分纷坟焚汾粉奋份忿愤粪偾瀵棼鲼鼢'], 
['feng','丰封枫蜂峰锋风疯烽逢冯缝讽奉凤俸酆葑唪沣砜豐'], 
['fo','佛'], 
['fou','否缶'], 
['fu','夫敷肤孵扶拂辐幅氟符伏俘服浮涪福袱弗甫抚辅俯釜斧脯腑府腐赴副覆赋复傅付阜父腹负富讣附妇缚咐匐凫郛芙芾苻茯莩菔拊呋呒幞怫滏艴孚驸绂绋桴赙祓黻黼罘稃馥蚨蜉蝠蝮麸趺跗鲋鳆'], 
['ga','噶嘎垓尬尕尜旮钆'], 
['gai','该改概钙盖溉丐陔戤赅'], 
['gan','干甘杆柑竿肝赶感秆敢赣坩苷尴擀泔淦澉绀橄旰矸疳酐'], 
['gang','冈刚钢缸肛纲岗港杠戆罡筻'], 
['gao','篙皋高膏羔糕搞镐稿告睾诰郜藁缟槔槁杲锆'], 
['ge','哥歌搁戈鸽胳疙割革葛格阁隔铬个各鬲仡哿圪塥嗝纥搿膈硌镉袼虼舸骼'], 
['ha','蛤哈铪'], 
['gei','给'], 
['gen','根跟亘茛哏艮'], 
['geng','耕更庚羹埂耿梗哽赓绠鲠'], 
['gong','工攻功恭龚供躬公宫弓巩汞拱贡共珙肱蚣觥'], 
['gou','钩勾沟苟狗垢构购够佝诟岣遘媾缑枸觏彀笱篝鞲'], 
['gu','辜菇咕箍估沽孤姑鼓古蛊骨谷股故顾固雇嘏诂菰崮汩梏轱牯牿臌毂瞽罟钴锢鸪痼蛄酤觚鲴'], 
['gua','刮瓜剐寡挂褂卦诖呱栝胍鸹'], 
['guai','乖拐怪掴'], 
['guan','棺关官冠观管馆罐惯灌贯倌莞掼涫盥鹳鳏'], 
['guang','光广逛咣犷桄胱'], 
['gui','瑰规圭硅归龟闺轨鬼诡癸桂柜跪贵刽匦刿庋宄妫桧炅晷皈簋鲑鳜'], 
['gun','辊滚棍衮绲磙鲧'], 
['guo','锅郭国果裹过馘埚呙帼崞猓椁虢聒蜾蝈'], 
['hai','骸孩海氦亥害骇嗨胲醢'], 
['han','酣憨邯韩含涵寒函喊罕翰撼捍旱憾悍焊汗汉邗菡撖犴瀚晗焓顸颔蚶鼾'], 
['hang','夯杭航行沆绗颃'], 
['hao','壕嚎豪毫郝好耗号浩貉蒿薅嗥嚆濠灏昊皓颢蚝'], 
['he','呵喝荷菏核禾和何合盒阂河涸赫褐鹤贺诃劾壑嗬阖曷盍颌蚵翮'], 
['hei','嘿黑'], 
['hen','痕很狠恨'], 
['heng','哼亨横衡恒蘅珩桁'], 
['hong','轰哄烘虹鸿洪宏弘红黉訇讧荭蕻薨闳泓'], 
['hou','喉侯猴吼厚候后堠後逅瘊篌糇鲎骺'], 
['hu','呼乎忽瑚壶葫胡蝴狐糊湖弧虎唬护互沪户冱唿囫岵猢怙惚浒滹琥槲轷觳烀煳戽扈祜瓠鹄鹕鹱笏醐斛鹘'], 
['hua','花哗华猾滑画划化话骅桦砉铧'], 
['huai','槐徊怀淮坏踝'], 
['huan','欢环桓还缓换患唤痪豢焕涣宦幻奂擐圜獾洹浣漶寰逭缳锾鲩鬟'], 
['huang','荒慌黄磺蝗簧皇凰惶煌晃幌恍谎隍徨湟潢遑璜肓癀蟥篁鳇'], 
['hui','灰挥辉徽恢蛔回毁悔慧卉惠晦贿秽会烩汇讳诲绘诙茴荟蕙咴喙隳洄彗缋珲晖恚虺蟪麾'], 
['hun','荤昏婚魂浑混诨馄阍溷'], 
['huo','豁活伙火获或惑霍货祸劐藿攉嚯夥钬锪镬耠蠖'], 
['ji','計機击圾基机畸稽积箕肌饥迹激讥鸡姬绩缉吉极棘辑籍集及急疾汲即嫉级挤几脊己蓟技冀季伎祭剂悸济寄寂计记既忌际妓继纪藉亟乩剞佶偈墼芨芰荠蒺蕺掎叽咭哜唧岌嵴洎屐骥畿玑楫殛戟戢赍觊犄齑矶羁嵇稷瘠虮笈笄暨跻跽霁鲚鲫髻'], 
['jia','嘉枷夹佳家加荚颊贾甲钾假稼价架驾嫁伽郏葭岬浃迦珈戛胛恝铗镓痂瘕蛱笳袈跏'], 
['jian','歼监坚尖笺间煎兼肩艰奸缄茧检柬碱硷拣捡简俭剪减荐槛鉴践贱见键箭件健舰剑饯渐溅涧建僭谏谫菅蒹搛湔蹇謇缣枧楗戋戬牮犍毽腱睑锏鹣裥笕翦踺鲣鞯'], 
['jiang','僵姜将浆江疆蒋桨奖讲匠酱降茳洚绛缰犟礓耩糨豇'], 
['jiao','蕉椒礁焦胶交郊浇骄娇搅铰矫侥脚狡角饺缴绞剿教酵轿较叫窖佼僬艽茭挢噍峤徼姣敫皎鹪蛟醮跤鲛'], 
['jue','嚼撅攫抉掘倔爵觉决诀绝厥劂谲矍蕨噘崛獗孓珏桷橛爝镢蹶觖'], 
['jie','揭接皆秸街阶截劫节桔杰捷睫竭洁结解姐戒芥界借介疥诫届讦诘拮喈嗟婕孑桀碣疖颉蚧羯鲒骱'], 
['jin','巾筋斤金今津襟紧锦仅谨进靳晋禁近烬浸尽劲卺荩堇噤馑廑妗缙瑾槿赆觐衿矜'], 
['jing','荆兢茎睛晶鲸京惊精粳经井警景颈静境敬镜径痉靖竟竞净刭儆阱菁獍憬泾迳弪婧肼胫腈旌箐'], 
['jiong','炯窘迥扃'], 
['jiu','揪究纠玖韭久灸九酒厩救旧臼舅咎就疚僦啾阄柩桕鸠鹫赳鬏'], 
['ju','鞠拘狙疽居驹菊局咀矩举沮聚拒据巨具距踞锯俱句惧炬剧倨讵苣苴莒掬遽屦琚椐榘榉橘犋飓钜锔窭裾醵踽龃雎鞫'], 
['juan','捐鹃娟倦眷卷绢鄄狷涓桊蠲锩镌隽'], 
['jun','均菌钧军君峻俊竣浚郡骏捃皲筠麇'], 
['ka','喀咖卡佧咔胩'], 
['luo','咯萝螺罗逻锣箩骡裸落洛骆络倮蠃荦摞猡泺漯珞椤脶镙瘰雒'], 
['kai','开揩楷凯慨剀垲蒈忾恺铠锎锴'], 
['kan','刊堪勘坎砍看侃莰阚戡龛瞰'], 
['kang','康慷糠扛抗亢炕伉闶钪'], 
['kao','考拷烤靠尻栲犒铐'], 
['ke','坷苛柯棵磕颗科壳咳可渴克刻客课嗑岢恪溘骒缂珂轲氪瞌钶锞稞疴窠颏蝌髁'], 
['ken','肯啃垦恳裉'], 
['keng','坑吭铿'], 
['kong','空恐孔控倥崆箜'], 
['kou','抠口扣寇芤蔻叩囗眍筘'], 
['ku','枯哭窟苦酷库裤刳堀喾绔骷'], 
['kua','夸垮挎跨胯侉'], 
['kuai','块筷侩快蒯郐哙狯浍脍'], 
['kuan','宽款髋'], 
['kuang','匡筐狂框矿眶旷况诓诳邝圹夼哐纩贶'], 
['kui','亏盔岿窥葵奎魁傀馈愧溃馗匮夔隗蒉揆喹喟悝愦逵暌睽聩蝰篑跬'], 
['kun','坤昆捆困悃阃琨锟醌鲲髡'], 
['kuo','括扩廓阔蛞'], 
['la','垃拉喇蜡腊辣啦剌邋旯砬瘌'], 
['lai','莱来赖崃徕涞濑赉睐铼癞籁'], 
['lan','蓝婪栏拦篮阑兰澜谰揽览懒缆烂滥岚漤榄斓罱镧褴'], 
['lang','琅榔狼廊郎朗浪蒗啷阆稂螂'], 
['lao','捞劳牢老佬姥酪烙涝唠崂忉栳铑铹痨耢醪'], 
['le','勒了仂叻泐鳓'], 
['yue','乐曰约越跃岳粤月悦阅龠哕瀹樾刖钺'], 
['lei','雷镭蕾磊累儡垒擂肋类泪羸诔嘞嫘缧檑耒酹'], 
['leng','棱楞冷塄愣'], 
['li','厘梨犁黎篱狸离漓理李里鲤礼莉荔吏栗丽厉励砾历利傈例俐痢立粒沥隶力璃哩俪俚郦坜苈莅蓠藜呖唳喱猁溧澧逦娌嫠骊缡枥栎轹膦戾砺詈罹锂鹂疠疬蛎蜊蠡笠篥粝醴跞雳鲡鳢黧'], 
['lia','俩'], 
['lian','联莲连镰廉怜涟帘敛脸链恋炼练蔹奁潋濂琏楝殓臁裢裣蠊鲢'], 
['liang','粮凉梁粱良两辆量晾亮谅墚莨椋锒踉靓魉'], 
['liao','撩聊僚疗燎寥辽潦撂镣廖料蓼尥嘹獠寮缭钌鹩'], 
['lie','列裂烈劣猎冽埒捩咧洌趔躐鬣'], 
['lin','琳林磷霖临邻鳞淋凛赁吝拎蔺啉嶙廪懔遴檩辚瞵粼躏麟'], 
['ling','玲菱零龄铃伶羚凌灵陵岭领另令酃苓呤囹泠绫柃棂瓴聆蛉翎鲮'], 
['liu','溜琉榴硫馏留刘瘤流柳六浏遛骝绺旒熘锍镏鹨鎏'], 
['long','龙聋咙笼窿隆垄拢陇垅茏珑栊胧砻癃'], 
['lou','楼娄搂篓漏陋偻蒌喽嵝镂瘘耧蝼髅'], 
['lu','芦卢颅庐炉掳卤虏鲁麓碌露路赂鹿潞禄录陆戮垆撸噜泸渌漉逯璐栌橹轳辂辘氇胪镥鸬鹭簏舻鲈'], 
['lv','驴吕铝侣旅履屡缕虑氯律率滤绿捋闾榈膂稆褛'], 
['luan','峦挛孪滦卵乱脔娈栾鸾銮'], 
['lue','掠略锊'], 
['lun','抡轮伦仑沦纶论囵'], 
['ma','妈麻玛码蚂马骂嘛吗唛犸杩蟆'], 
['mai','埋买麦卖迈脉劢荬霾'], 
['man','瞒馒蛮满蔓曼慢漫谩墁幔缦熳镘颟螨鳗鞔'], 
['mang','芒茫盲氓忙莽邙漭硭蟒'], 
['mao','猫茅锚毛矛铆卯茂冒帽貌贸袤茆峁泖瑁昴牦耄旄懋瞀蝥蟊髦'], 
['me','么麽'], 
['mei','玫枚梅酶霉煤眉媒镁每美昧寐妹媚莓嵋猸浼湄楣镅鹛袂魅'], 
['mo','没摸摹蘑模膜磨摩魔抹末莫墨默沫漠寞陌谟茉蓦馍嫫嬷殁镆秣瘼耱貊貘'], 
['men','门闷们扪焖懑钔'], 
['meng','萌蒙檬盟锰猛梦孟勐甍瞢懵朦礞虻蜢蠓艋艨'], 
['mi','眯醚靡糜迷谜弥米秘觅泌蜜密幂芈谧咪嘧猕汨宓弭脒祢敉縻麋'], 
['mian','棉眠绵冕免勉娩缅面沔渑湎腼眄'], 
['miao','苗描瞄藐秒渺庙妙喵邈缈杪淼眇鹋'], 
['mie','蔑灭乜咩蠛篾'], 
['min','民抿皿敏悯闽苠岷闵泯缗玟珉愍黾鳘'], 
['ming','明螟鸣铭名命冥茗溟暝瞑酩'], 
['miu','谬缪'], 
['mou','谋牟某侔哞眸蛑鍪'], 
['mu','拇牡亩姆母墓暮幕募慕木目睦牧穆仫坶苜沐毪钼'], 
['na','拿哪呐钠那娜纳讷捺肭镎衲'], 
['nai','氖乃奶耐奈鼐佴艿萘柰'], 
['nan','南男难喃囝囡楠腩蝻赧'], 
['nang','囊攮囔馕曩'], 
['nao','挠脑恼闹淖孬垴呶猱瑙硇铙蛲'], 
['ne','呢'], 
['nei','馁内'], 
['nen','嫩恁'], 
['neng','能'], 
['ni','妮霓倪泥尼拟你匿腻逆溺伲坭蘼猊怩昵旎睨铌鲵'], 
['nian','蔫拈年碾撵捻念廿埝辇黏鲇鲶'], 
['niang','娘酿'], 
['niao','鸟尿茑嬲脲袅'], 
['nie','捏聂孽啮镊镍涅陧蘖嗫颞臬蹑'], 
['nin','您'], 
['ning','柠狞凝宁拧泞佞咛甯聍'], 
['niu','牛扭钮纽拗狃忸妞'], 
['nong','脓浓农弄侬哝'], 
['nu','奴努怒弩胬孥驽'], 
['nv','女恧钕衄'], 
['nuan','暖'], 
['nue','虐疟挪'], 
['nuo','懦糯诺傩搦喏锘'], 
['o','哦噢'], 
['ou','欧鸥殴藕呕偶沤讴怄瓯耦'], 
['pa','啪趴爬帕怕琶葩杷筢'], 
['pai','拍排牌徘湃派俳蒎哌'], 
['pan','攀潘盘磐盼畔判叛拚爿泮袢襻蟠蹒'], 
['pang','乓庞旁耪胖彷滂逄螃'], 
['pao','抛咆刨炮袍跑泡匏狍庖脬疱'], 
['pei','呸胚培裴赔陪配佩沛辔帔旆锫醅霈'], 
['pen','喷盆湓'], 
['peng','砰抨烹澎彭蓬棚硼篷膨朋鹏捧碰堋嘭怦蟛'], 
['pian','篇偏片骗谝骈犏胼翩蹁'], 
['piao','飘漂瓢票剽嘌嫖缥殍瞟螵'], 
['pie','撇瞥丿苤氕'], 
['pin','拼频贫品聘姘嫔榀牝颦'], 
['ping','乒坪苹萍平凭瓶评屏俜娉枰鲆'], 
['po','坡泼颇婆破魄迫粕叵鄱珀钋钷皤笸'], 
['pou','剖裒掊'], 
['pu','扑铺仆莆葡菩蒲埔朴圃普浦谱瀑匍噗溥濮璞氆镤镨蹼'], 
['qi','期欺栖戚妻七凄漆柒沏其棋奇歧畦崎脐齐旗祈祁骑起岂乞企启契砌器气迄弃汽泣讫亓圻芑芪萁萋葺蕲嘁屺岐汔淇骐绮琪琦杞桤槭耆祺憩碛颀蛴蜞綦鳍麒'], 
['qia','掐恰洽葜袷髂'], 
['qian','牵扦钎铅千迁签仟谦乾黔钱钳前潜遣浅谴堑嵌欠歉倩佥阡芊芡茜掮岍悭慊骞搴褰缱椠肷愆钤虔箝'], 
['qiang','枪呛腔羌墙蔷强抢戕嫱樯戗炝锖锵镪襁蜣羟跄'], 
['qiao','橇锹敲悄桥瞧乔侨巧鞘撬翘峭俏窍劁诮谯荞愀憔缲樵硗跷鞒'], 
['qie','切茄且怯窃郄惬妾挈锲箧趄'], 
['qin','钦侵亲秦琴勤芹擒禽寝沁芩揿吣嗪噙溱檎锓螓衾'], 
['qing','青轻氢倾卿清擎晴氰情顷请庆苘圊檠磬蜻罄綮謦鲭黥'], 
['qiong','琼穷邛茕穹蛩筇跫銎'], 
['qiu','秋丘邱球求囚酋泅俅巯犰湫逑遒楸赇虬蚯蝤裘糗鳅鼽'], 
['qu','趋区蛆曲躯屈驱渠取娶龋趣去诎劬蕖蘧岖衢阒璩觑氍朐祛磲鸲癯蛐蠼麴瞿黢'], 
['quan','圈颧权醛泉全痊拳犬券劝诠荃犭悛绻辁畎铨蜷筌鬈'], 
['que','缺炔瘸却鹊榷确雀阕阙悫'], 
['qun','裙群逡'], 
['ran','然燃冉染苒蚺髯'], 
['rang','瓤壤攘嚷让禳穰'], 
['rao','饶扰绕荛娆桡'], 
['re','惹热'], 
['ren','壬仁人忍韧任认刃妊纫仞荏饪轫稔衽'], 
['reng','扔仍'], 
['ri','日'], 
['rong','戎茸蓉荣融熔溶容绒冗嵘狨榕肜蝾'], 
['rou','揉柔肉糅蹂鞣'], 
['ru','茹蠕儒孺如辱乳汝入褥蓐薷嚅洳溽濡缛铷襦颥'], 
['ruan','软阮朊'], 
['rui','蕊瑞锐芮蕤枘睿蚋'], 
['run','闰润'], 
['ruo','若弱偌箬'], 
['sa','撒洒萨卅脎飒'], 
['sai','腮鳃塞赛噻'], 
['san','三叁伞散仨彡馓毵'], 
['sang','桑嗓丧搡磉颡'], 
['sao','搔骚扫嫂埽缫臊瘙鳋'], 
['se','瑟色涩啬铯穑'], 
['sen','森'], 
['seng','僧'], 
['sha','莎砂杀刹沙纱傻啥煞唼歃铩痧裟霎鲨'], 
['shai','筛晒酾'], 
['shan','珊苫杉山删煽衫闪陕擅赡膳善汕扇缮讪鄯芟潸姗嬗骟膻钐疝蟮舢跚鳝'], 
['shang','墒伤商赏晌上尚裳垧泷绱殇熵觞'], 
['shao','梢捎稍烧芍勺韶少哨邵绍劭潲杓筲艄'], 
['she','奢赊蛇舌舍赦摄射慑涉社设厍佘揲猞滠麝'], 
['shen','砷申呻伸身深娠绅神沈审婶甚肾慎渗什诜谂莘葚哂渖椹胂矧蜃糁'], 
['sheng','声生甥牲升绳省盛剩胜圣嵊晟眚笙'], 
['shou','收手首守寿授售受瘦兽狩绶艏'], 
['shu','蔬枢梳殊抒输叔舒淑疏书赎孰熟薯暑曙署蜀黍鼠属术述树束戍竖墅庶数漱恕丨倏塾菽摅沭澍姝纾毹腧殳秫'], 
['shua','刷耍唰'], 
['shuai','摔衰甩帅蟀'], 
['shuan','栓拴闩涮'], 
['shuang','霜双爽孀'], 
['shui','谁水睡税'], 
['shun','吮瞬顺舜'], 
['shuo','说硕朔烁蒴搠妁槊铄'], 
['si','斯撕嘶思私司丝死肆寺嗣四伺似饲巳厮俟兕厶咝汜泗澌姒驷缌祀锶鸶耜蛳笥'], 
['song','松耸怂颂送宋讼诵凇菘崧嵩忪悚淞竦'], 
['sou','搜艘擞嗽叟薮嗖嗾馊溲飕瞍锼螋'], 
['su','苏酥俗素速粟僳塑溯宿诉肃夙谡蔌嗉愫涑簌觫稣術'], 
['suan','酸蒜算狻'], 
['sui','虽隋随绥髓碎岁穗遂隧祟谇荽濉邃燧眭睢'], 
['sun','孙损笋荪狲飧榫隼'], 
['suo','蓑梭唆缩琐索锁所唢嗦嗍娑桫挲睃羧'], 
['ta','塌他它她塔獭挞蹋踏嗒闼溻遢榻沓铊趿鳎'], 
['tai','胎苔抬台泰酞太态汰邰薹骀肽炱钛跆鲐'], 
['tang','汤塘搪堂棠膛唐糖倘躺淌趟烫傥帑溏瑭樘铴镗耥螗螳羰醣'], 
['tao','掏涛滔绦萄桃逃淘陶讨套鼗啕洮韬饕'], 
['te','特忑慝铽'], 
['teng','藤腾疼誊滕'], 
['ti','梯剔踢锑提题蹄啼体替嚏惕涕剃屉倜悌逖绨缇鹈裼醍'], 
['tian','天添填田甜恬舔腆掭忝阗殄畋'], 
['tie','贴铁帖萜餮'], 
['ting','厅听烃汀廷停亭庭挺艇莛葶婷梃铤蜓霆'], 
['tong','通桐酮瞳同铜彤童桶捅筒统痛佟仝茼嗵恸潼砼'], 
['tou','偷投头透骰'], 
['tu','凸秃突图徒途涂屠土吐兔堍荼菟钍酴塗'], 
['tuan','湍团抟彖疃'], 
['tui','推颓腿蜕褪退忒煺'], 
['tuo','拖托脱鸵陀驮驼椭妥拓唾佗坨庹沱柝柁橐砣箨酡跎鼍'], 
['wa','挖哇蛙洼娃瓦袜佤娲腽'], 
['wai','歪外崴'], 
['wan','豌弯湾玩顽丸烷完碗挽晚皖惋宛婉万腕剜芄菀纨绾琬脘畹蜿'], 
['wang','汪王亡枉网往旺望忘妄罔惘辋魍'], 
['wei','威巍微危韦违桅围唯惟为潍维苇萎委伟伪尾纬未蔚味畏胃喂魏位渭谓尉慰卫偎诿隈葳薇帏帷嵬猥猬闱沩洧涠逶娓玮韪軎炜煨痿艉鲔為'], 
['wen','瘟温蚊文闻纹吻稳紊问刎阌汶璺攵雯'], 
['weng','嗡翁瓮蓊蕹'], 
['wo','挝蜗涡窝我斡卧握沃倭莴喔幄渥肟硪龌'], 
['wu','巫呜钨乌污诬屋无芜梧吾吴毋武五捂午舞伍侮坞戊雾晤物勿务悟误兀仵阢邬圬芴唔庑怃忤寤迕妩婺骛杌牾焐鹉鹜痦蜈鋈鼯'], 
['xi','昔熙析西硒矽晰嘻吸锡牺稀息希悉膝夕惜熄烯溪汐犀檄袭席习媳喜铣洗系隙戏细僖兮隰郗菥葸蓰奚唏徙饩阋浠淅屣嬉玺樨曦觋欷歙熹禊禧皙穸蜥螅蟋舄舾羲粞翕醯蹊鼷'], 
['xia','瞎虾匣霞辖暇峡侠狭下厦夏吓呷狎遐瑕柙硖罅黠'], 
['xian','掀锨先仙鲜纤咸贤衔舷闲涎弦嫌显险现献县腺馅羡宪陷限线冼苋莶藓岘猃暹娴氙燹祆鹇痫蚬筅籼酰跣跹霰縣'], 
['xiang','相厢镶香箱襄湘乡翔祥详想响享项巷橡像向象芗葙饷庠骧缃蟓鲞飨'], 
['xiao','萧硝霄削哮嚣销消宵淆晓小孝校肖啸笑效哓崤潇逍骁绡枭枵蛸筱箫魈'], 
['xie','楔些歇蝎鞋协挟携邪斜胁谐写械卸蟹懈泄泻谢屑偕亵勰燮薤撷獬廨渫瀣邂绁缬榭榍蹀躞'], 
['xin','薪芯锌欣辛新忻心信衅囟馨昕歆镡鑫'], 
['xing','星腥猩惺兴刑型形邢醒幸杏性姓陉荇荥擤饧悻硎'], 
['xiong','兄凶胸匈汹雄熊芎'], 
['xiu','休修羞朽嗅锈秀袖绣咻岫馐庥溴鸺貅髹'], 
['xu','墟戌需虚嘘须徐许蓄酗叙旭序畜恤絮婿绪续诩勖圩蓿洫溆顼栩煦盱胥糈醑'], 
['xuan','轩喧宣悬旋玄选癣眩绚儇谖萱揎泫渲漩璇楦暄炫煊碹铉镟痃'], 
['xue','靴薛学穴雪血谑噱泶踅鳕'], 
['xun','勋熏循旬询寻驯巡殉汛训讯逊迅巽郇埙荀荨蕈薰峋徇獯恂洵浔曛醺鲟'], 
['ya','压押鸦鸭呀丫芽牙蚜崖衙涯雅哑亚讶伢垭揠岈迓娅琊桠氩砑睚痖'], 
['yan','焉咽阉烟淹盐严研蜒岩延言颜阎炎沿奄掩眼衍演艳堰燕厌砚雁唁彦焰宴谚验厣赝剡俨偃兖谳郾鄢埏菸崦恹闫阏湮滟妍嫣琰檐晏胭焱罨筵酽趼魇餍鼹'], 
['yang','殃央鸯秧杨扬佯疡羊洋阳氧仰痒养样漾徉怏泱炀烊恙蛘鞅'], 
['yao','邀腰妖瑶摇尧遥窑谣姚咬舀药要耀钥夭爻吆崾徭幺珧杳轺曜肴铫鹞窈鳐'], 
['ye','椰噎耶爷野冶也页掖业叶曳腋夜液靥谒邺揶晔烨铘'], 
['yi','一壹医揖铱依伊衣颐夷遗移仪胰疑沂宜姨彝椅蚁倚已乙矣以艺抑易邑屹亿役臆逸肄疫亦裔意毅忆义益溢诣议谊译异翼翌绎刈劓佚佾诒圯埸懿苡荑薏弈奕挹弋呓咦咿噫峄嶷猗饴怿怡悒漪迤驿缢殪轶贻欹旖熠眙钇镒镱痍瘗癔翊蜴舣羿'], 
['yin','茵荫因殷音阴姻吟银淫寅饮尹引隐印胤鄞垠堙茚吲喑狺夤洇氤铟瘾窨蚓霪龈'], 
['ying','英樱婴鹰应缨莹萤营荧蝇迎赢盈影颖硬映嬴郢茔莺萦蓥撄嘤膺滢潆瀛瑛璎楹媵鹦瘿颍罂'], 
['yo','哟唷'], 
['yong','拥佣臃痈庸雍踊蛹咏泳涌永恿勇用俑壅墉喁慵邕镛甬鳙饔'], 
['you','幽优悠忧尤由邮铀犹油游酉有友右佑釉诱又幼卣攸侑莠莜莸尢呦囿宥柚猷牖铕疣蚰蚴蝣繇鱿黝鼬'], 
['yu','迂淤于盂榆虞愚舆余俞逾鱼愉渝渔隅予娱雨与屿禹宇语羽玉域芋郁吁遇喻峪御愈欲狱育誉浴寓裕预豫驭禺毓伛俣谀谕萸蓣揄圄圉嵛狳饫馀庾阈鬻妪妤纡瑜昱觎腴欤於煜燠聿畲钰鹆鹬瘐瘀窬窳蜮蝓竽臾舁雩龉'], 
['yuan','鸳渊冤元垣袁原援辕园员圆猿源缘远苑愿怨院垸塬芫掾沅媛瑗橼爰眢鸢螈箢鼋'], 
['yun','耘云郧匀陨允运蕴酝晕韵孕郓芸狁恽愠纭韫殒昀氲熨'], 
['za','匝砸杂咋拶咂'], 
['zai','栽哉灾宰载再在崽甾'], 
['zan','咱攒暂赞瓒昝簪糌趱錾'], 
['zang','赃脏葬奘驵臧'], 
['zao','遭糟凿藻枣早澡蚤躁噪造皂灶燥唣'], 
['ze','责择则泽仄赜啧帻迮昃箦舴'], 
['zei','贼'], 
['zen','怎谮'], 
['zeng','增憎赠缯甑罾锃'], 
['zha','扎喳渣札轧铡闸眨栅榨乍炸诈柞揸吒咤哳楂砟痄蚱齄'], 
['zhan','瞻毡詹粘沾盏斩辗崭展蘸栈占战站湛绽谵搌旃'], 
['zhang','樟章彰漳张掌涨杖丈帐账仗胀瘴障仉鄣幛嶂獐嫜璋蟑'], 
['zhao','招昭找沼赵照罩兆肇召着诏棹钊笊'], 
['zhe','遮折哲蛰辙者锗蔗这浙乇谪摺柘辄磔鹧褶蜇螫赭'], 
['zhen','珍斟真甄砧臻贞针侦枕疹诊震振镇阵帧圳蓁浈缜桢榛轸赈胗朕祯畛稹鸩箴'], 
['zheng','蒸挣睁征狰争怔整拯正政症郑证诤峥徵钲铮筝'], 
['zhi','芝枝支吱蜘知肢脂汁之织职直植殖执值侄址指止趾只旨纸志挚掷至致置帜峙制智秩稚质炙痔滞治窒卮陟郅埴芷摭帙忮彘咫骘栉枳栀桎轵轾贽胝膣祉黹雉鸷痣蛭絷酯跖踬踯豸觯'], 
['zhong','中盅忠钟衷终种肿仲众冢锺螽舯踵'], 
['zhou','舟周州洲诌粥轴肘帚咒皱宙昼骤荮啁妯纣绉胄碡籀酎'], 
['zhu','珠株蛛朱猪诸诛逐竹烛煮拄瞩嘱主著柱助蛀贮铸筑住注祝驻伫侏邾苎茱洙渚潴杼槠橥炷铢疰瘃竺箸舳翥躅麈'], 
['zhua','抓爪'], 
['zhuai','拽'], 
['zhuan','专砖转撰赚篆啭馔颛'], 
['zhui','椎锥追赘坠缀萑惴骓缒隹'], 
['zhun','谆准肫窀'], 
['zhuo','捉拙卓桌琢茁酌啄灼浊倬诼擢浞涿濯禚斫镯'], 
['zi','兹咨资姿滋淄孜紫仔籽滓子自渍字谘呲嵫姊孳缁梓辎赀恣眦锱秭耔笫粢趑訾龇鲻髭'], 
['zong','鬃棕踪宗综总纵偬腙粽'], 
['zou','邹走奏揍诹陬鄹驺鲰'], 
['zu','租足族祖诅阻组俎菹镞'], 
['zuan','钻纂攥缵躜'], 
['zui','嘴醉最罪蕞觜'], 
['zun','尊遵撙樽鳟'], 
['zuo','昨左佐做作坐座阼唑怍胙祚笮'], 
['ei','诶'], 
['dia','嗲'], 
['cen','岑涔'], 
['nou','耨'] 
], 
	go:function()
	{ 
		var str=arguments[0].replace(/(^\s*)|(\s*$)/g,''); 
		var e=''; 
		var c,l1,l2; 
		for(var i=0;i<str.length;i++){ 
			l1=str.charAt(i); 
			c=l1.charCodeAt(); 
			if(c>1 && c<128){//数字、字母 

				if(/^[A-Za-z0-9]+$/.test(l1)){ 
					e+=l1; 
				}else{ 
					e+=' '; 
				} 
			}
			else{//汉字 

				var pp=pinyin.mfkdb; 
				var ii=0; 
				while(ii<pp.length){ 
					if(pp[ii][1].indexOf(l1)>-1){ 
						e+=pp[ii][0]+" "; 
						break; 
					} 
					ii++; 
				} 
			} 
		} 
		e=e.replace(/\s/g,''); 
		while(e.indexOf('__')>-1){ 
			e=e.replace(/__/g,'_'); 
		} 
		if(arguments[1]==1){ 
			return e.toLowerCase(); 
		}
		else{ 
			return e; 
		} 
	} 
} 