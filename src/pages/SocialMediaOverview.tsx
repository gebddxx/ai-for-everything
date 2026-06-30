import { useT } from '../contexts/LanguageContext'
import LinkNav, { type ToolLink } from '../components/LinkNav'
import styles from './Page.module.css'

export default function SocialMediaOverview() {
  const { lang } = useT()
  const L = (e: string, z: string, t: string) => lang === 'zh-CN' ? z : lang === 'zh-TW' ? t : e
  return (
    <div className={styles.page}>
      <div className={styles.head}><h2 className={styles.title}>📱 {L('Social & Community','社区媒体','社群媒體')}</h2><p className={styles.subtitle}>{L('Q&A communities, forums, content platforms, short & long video sites','问答社区、论坛、内容平台、短视频和长视频网站','問答社群、論壇、內容平台、短影片和長影片網站')}</p></div>
      <LinkNav links={links} lang={lang as 'en'|'zh-CN'|'zh-TW'} color="#ec4899" />
    </div>
  )
}

const links: ToolLink[] = [
  // 问答社区
  {name:'知乎',url:'https://www.zhihu.com/',desc:{en:'Q&A: professional discussions, expert insights',zh:'问答社区:专业领域深度讨论'},cat:'问答',icon:'🤔'},
  {name:'百度贴吧',url:'https://tieba.baidu.com/',desc:{en:'Forum: interest-based communities, topic threads',zh:'兴趣论坛:各类话题主题讨论区'},cat:'问答',icon:'💬'},
  {name:'Quora',url:'https://www.quora.com/',desc:{en:'Q&A: global platform, expert-verified answers',zh:'问答:全球平台,专家验证回答'},cat:'问答',icon:'❓'},
  {name:'Reddit',url:'https://www.reddit.com/',desc:{en:'Forum: massive subreddit communities, AMAs',zh:'论坛:海量subreddit社区,万物皆可讨论'},cat:'问答',icon:'🤖'},
  // 内容创作社区
  {name:'豆瓣',url:'https://www.douban.com/',desc:{en:'Content: book/movie/music reviews, urban culture',zh:'内容社区:图书/电影/音乐评论,城市文化'},cat:'内容社区',icon:'📚'},
  {name:'小红书',url:'https://www.xiaohongshu.com/',desc:{en:'Content: lifestyle sharing, product reviews, notes',zh:'内容社区:生活经验分享,好物种草笔记'},cat:'内容社区',icon:'📕'},
  {name:'简书',url:'https://www.jianshu.com/',desc:{en:'Content: creative writing, personal essays, reading',zh:'内容社区:创作+阅读+个人文章分享'},cat:'内容社区',icon:'✍️'},
  {name:'Medium',url:'https://medium.com/',desc:{en:'Content: long-form essays, thoughtful journalism',zh:'内容社区:长篇深度文章,独立写作'},cat:'内容社区',icon:'📝'},
  // 资讯信息流
  {name:'微博',url:'https://weibo.com/',desc:{en:'News: microblogging, trending topics, celebrity news',zh:'资讯:微博热搜,实时话题,明星动态'},cat:'资讯',icon:'🐦'},
  {name:'今日头条',url:'https://www.toutiao.com/',desc:{en:'News: AI-powered feed, personalized news',zh:'资讯:AI推荐信息流,个性化新闻'},cat:'资讯',icon:'📰'},
  {name:'Twitter / X',url:'https://x.com/',desc:{en:'News: global microblogging, real-time discussions',zh:'资讯:全球微博,实时新闻讨论'},cat:'资讯',icon:'❌'},
  {name:'雪球',url:'https://xueqiu.com/',desc:{en:'Forum: investor community, stock analysis, finance',zh:'投资论坛:股票讨论,投资分析,财报解读'},cat:'资讯',icon:'⛄'},
  // 社区论坛
  {name:'虎扑',url:'https://www.hupu.com/',desc:{en:'Forum: sports community, NBA, football, esports',zh:'体育论坛:NBA/足球/电竞/步行街'},cat:'论坛',icon:'🏀'},
  {name:'NGA玩家社区',url:'https://bbs.nga.cn/',desc:{en:'Forum: gaming community, WOW, tech, lifestyle',zh:'游戏论坛:魔兽/手游/科技/生活'},cat:'论坛',icon:'🎮'},
  // 短视频
  {name:'抖音',url:'https://www.douyin.com/',desc:{en:'Short video: trending content, creative expression',zh:'短视频:潮流内容,创意表达,直播'},cat:'短视频',icon:'🎵'},
  {name:'快手',url:'https://www.kuaishou.com/',desc:{en:'Short video: grassroots content, authentic life',zh:'短视频:接地气段子,真实生活记录'},cat:'短视频',icon:'⚡'},
  {name:'TikTok',url:'https://www.tiktok.com/',desc:{en:'Short video: global viral trends, creative tools',zh:'短视频:全球病毒趋势,创意工具'},cat:'短视频',icon:'🎬'},
  {name:'Instagram',url:'https://www.instagram.com/',desc:{en:'Short video: Reels, photo sharing, visual social',zh:'短视频+图片:Reels/照片/快拍分享'},cat:'短视频',icon:'📸'},
  // 长视频平台
  {name:'哔哩哔哩',url:'https://www.bilibili.com/',desc:{en:'Video: danmaku, anime, tech tutorials, ACG',zh:'视频平台:弹幕/动画/科技/学习/ACG'},cat:'视频平台',icon:'📺'},
  {name:'YouTube',url:'https://www.youtube.com/',desc:{en:'Video: world largest, tutorials + entertainment',zh:'视频平台:全球最大,教程+娱乐+直播'},cat:'视频平台',icon:'▶️'},
  {name:'腾讯视频',url:'https://v.qq.com/',desc:{en:'Video: Tencent, dramas, variety shows, movies',zh:'视频平台:腾讯出品,剧集/综艺/电影'},cat:'视频平台',icon:'🎬'},
  {name:'爱奇艺',url:'https://www.iqiyi.com/',desc:{en:'Video: iQIYI, original dramas, movies',zh:'视频平台:原创剧集,电影,综艺'},cat:'视频平台',icon:'🎥'},
  {name:'优酷',url:'https://www.youku.com/',desc:{en:'Video: Alibaba, classic dramas + movies',zh:'视频平台:阿里旗下,经典剧集+电影'},cat:'视频平台',icon:'🎞️'},
  {name:'西瓜视频',url:'https://www.ixigua.com/',desc:{en:'Video: ByteDance, mid-length, fewer ads',zh:'视频平台:字节出品,中长视频,广告少'},cat:'视频平台',icon:'🍉'},
]
