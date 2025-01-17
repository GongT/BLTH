import { h } from 'vue'
import { IhelpInfo } from '../../types'

const help_info: IhelpInfo = {
  DailyTasks: {
    MainSiteTasks: {
      login: {
        title: '每日登录',
        message: '完成主站的每日登录任务。'
      },
      watch: {
        title: '每日观看视频',
        message: h('p', [
          h('div', '完成主站的每日观看视频任务。'),
          h('div', '从动态中选取视频观看，会产生观看历史记录。')
        ])
      },
      coin: {
        title: '每日投币',
        message: h('p', [
          h('div', '完成主站的每日投币任务。'),
          h('div', '从动态中选取视频投币，会根据你今天已经投过的币的数量计算还要投几个币。')
        ])
      },
      share: {
        title: '每日分享视频',
        message: h('p', [
          h('div', '完成主站的每日分享视频任务。'),
          h('div', '不会真的分享到某处。')
        ])
      }
    },
    LiveTasks: {
      sign: {
        title: '直播签到',
        message: h('p', [
          h('div', '完成直播签到任务。'),
          h('div', '完成后会移除当前直播间右上角签到窗口中的签到按钮。')
        ])
      },
      appUser: {
        title: 'APP用户任务',
        message: h('p', [
          h('div', '完成APP用户任务并领取奖励。'),
          h('div', [
            h(
              'strong',
              '由于曾经的APP用户任务下架已久，目前的新任务（观看新主播直播并发弹幕）又没有对全部用户开放，故该功能暂时被禁用。'
            ),
            h('div', [
              h(
                'span',
                '在APP中观看直播时右下角可能会有个电池图标，点击即可查看APP用户任务内容。并非所有账号都可以参加该任务。\
  如果开启了发送弹幕功能，该功能会在发送弹幕功能运行完毕后再运行。如果之前发送的弹幕数量不够，会先在直播间'
              ),
              h(
                'a',
                {
                  class: 'el-link el-link--primary is-underline el-link-va-baseline',
                  href: 'https://live.bilibili.com/22474988',
                  rel: 'noreferrer',
                  target: '_blank'
                },
                '22474988'
              ),
              h('span', '发送弹幕再领取奖励。')
            ])
          ])
        ])
      },
      medalTasks: {
        list: {
          title: '黑白名单',
          message: h('p', [
            h('div', '为更精细地控制为哪些粉丝勋章执行任务，你可以使用黑名单或白名单模式。'),
            h('div', [
              h('li', [
                h('span', '黑名单：仅为'),
                h('strong', '不在'),
                h('span', '名单中的粉丝勋章执行任务。')
              ]),
              h('li', [
                h('span', '白名单：仅为'),
                h('strong', '在'),
                h('span', '名单中的粉丝勋章执行任务。')
              ])
            ]),
            h('div', '点击编辑名单按钮，然后使用第一列的多选框即可编辑名单中的粉丝勋章。')
          ])
        },
        like: {
          title: '给主播点赞',
          message: h('p', [
            h('div', '在你的每个粉丝勋章对应的直播间给主播点赞。'),
            h('div', [
              h('span', '如果你不希望等级≥20的粉丝勋章熄灭，可以勾选下面的“包含等级≥20的粉丝勋章”'),
              h(
                'strong',
                '（虽然B站的帮助中心说点赞可以点亮粉丝勋章但现在似乎不行了，所以该选项以后可能会被删除）'
              ),
              h('span', '。')
            ]),
            h('div', '部分直播间无法完成该任务，原因未知。')
          ])
        },
        danmu: {
          title: '发送弹幕',
          message: h('p', [
            h('div', '在你的每个粉丝勋章对应的直播间发送一条弹幕。'),
            h('div', [
              h('span', '点击编辑弹幕按钮编辑发送的弹幕，脚本会从中按顺序循环抽取弹幕发送。'),
              h('span', '部分直播间无法完成该任务，可能的原因有:，'),
              h('li', '你被禁言了'),
              h('li', '发言有粉丝勋章等级要求'),
              h('li', [
                h('span', '特殊直播间（比如'),
                h(
                  'a',
                  { href: 'https://live.bilibili.com/54', rel: 'noreferrer', target: '_blank' },
                  '54'
                ),
                h('span', '）')
              ])
            ])
          ])
        },
        watch: {
          title: '观看直播',
          message: h('p', [
            h('div', '完成观看持有粉丝勋章对应主播直播的任务。'),
            h(
              'div',
              '部分直播间因为没有设置直播分区导致任务无法完成。主播当前是否开播不会影响该任务的完成。'
            )
          ])
        }
      }
    },
    OtherTasks: {
      groupSign: {
        title: '应援团签到',
        message: '完成应援团签到任务。'
      },
      silverToCoin: {
        title: '银瓜子换硬币',
        message: h('p', [
          h('div', '把银瓜子兑换为硬币。'),
          h('div', '具体兑换规则请点击直播间页面的“立即充值→银瓜子商店”查看。')
        ])
      },
      coinToSilver: {
        title: '硬币换银瓜子',
        message: h('p', [
          h('div', '把硬币兑换为银瓜子。'),
          h('div', '具体兑换规则请点击直播间页面的“立即充值→银瓜子商店”查看。')
        ])
      },
      getYearVipPrivilege: {
        title: '领取年度大会员权益',
        message: h('p', [
          h('div', '自动领取年度大会员权益。'),
          h('div', [
            h('span', '具体权益请前往'),
            h(
              'a',
              {
                href: 'https://account.bilibili.com/account/big/myPackage',
                rel: 'noreferrer',
                target: '_blank'
              },
              '卡券包'
            ),
            h('span', '查看。')
          ])
        ])
      }
    }
  },
  EnhanceExperience: {
    switchLiveStreamQuality: {
      title: '自动切换画质',
      message: h('p', [
        h('div', '打开直播间后自动把播放器切换到指定画质。'),
        h('div', '如果指定画质不存在，则还是使用B站的默认画质。')
      ])
    },
    banp2p: {
      title: '禁用P2P',
      message: h('p', [
        h('div', '禁用直播流的P2P上传/下载'),
        h(
          'div',
          'B站使用WebRTC技术把许多浏览器点对点（P2P）地连接起来，实现视频流和音频流的传输。这样做是为了减轻B站服务器的压力，但是会占用你一定的上行带宽（大约几百kb每秒）。如果你不想被占用上行带宽，可以开启该功能。若开启后发现观看直播时有明显卡顿，请关闭。'
        )
      ])
    },
    noReport: {
      title: '拦截日志数据上报',
      message: h('p', [
        h('div', '禁止B站上报日志数据。'),
        h('div', [
          h(
            'span',
            'B站会实时地上报大量日志信息，比如直播观看情况、代码报错等等。开启本功能后绝大多数日志上报都会被拦截并返回一个成功的响应。如果追求更好的效果和性能表现建议使用带有广告拦截功能的浏览器拓展，比如'
          ),
          h(
            'a',
            {
              href: 'https://github.com/gorhill/uBlock',
              rel: 'noreferrer',
              target: '_blank'
            },
            'uBlock Origin'
          ),
          h('span', '。')
        ])
      ])
    },
    removePKBox: {
      title: '移除大乱斗元素',
      message: '移除直播间的大乱斗元素（进度条，弹出的提示等）。'
    },
    removeLiveWaterMark: {
      title: '移除直播间水印',
      message: '移除直播画面左上角的水印。'
    }
  }
}

export default help_info
