// バウンティ大学 タグ効果データベース

const tagGroups = {

  skill1_cooldown: {
    two: "スキル1のクールタイム短縮速度が14%増加する",
    three: "スキル1のクールタイム短縮速度が20%増加する"
  },

  skill2_cooldown: {
  two: "スキル2のクールタイム短縮速度が14%増加する",
  three: "スキル2のクールタイム短縮速度が20%増加する"
},

  capture_speed: {
    two: "奪取速度が14%増加する",
    three: "奪取速度が20%増加する"
  },

  dodge_cooldown: {
    two: "回避のクールタイム短縮速度が7%増加する",
    three: "回避のクールタイム短縮速度が10%増加する"
  },

  treasure_with_ally_damage: {
    two: "自分がいるお宝エリアに味方がいるとき、与えるダメージが7%増加する",
    three: "自分がいるお宝エリアに味方がいるとき、与えるダメージが10%増加する"
  },

  spawn_move_speed: {
    two: "出撃時に、移動速度が14秒間10%増加する(重複不可)",
    three: "出撃時に、移動速度が20秒間10%増加する(重複不可)"
  },

  losing_treasure_damage_reduction: {
    two: "自チームのお宝確保数が敵チームより少ないとき、受けるダメージが7%減少する",
    three: "自チームのお宝確保数が敵チームより少ないとき、受けるダメージが10%減少する"
  },

  losing_treasure_damage_increase: {
    two: "自チームのお宝確保数が敵チームより少ないとき、与えるダメージが7%増加する",
    three: "自チームのお宝確保数が敵チームより少ないとき、与えるダメージが10%増加する"
  },

  treasure_alone_damage_reduction: {
    two: "自分がいるお宝エリアに味方がいないとき、受けるダメージが7%減少する",
    three: "自分がいるお宝エリアに味方がいないとき、受けるダメージが10%減少する"
  }

};
const tags = {
  "東の海": "skill1_cooldown",
  "グランドライン突入": "skill1_cooldown",
  "アラバスタ": "skill1_cooldown",
  "空島・LRLL": "skill1_cooldown",
  "W7・エニエスロビー": "skill1_cooldown",
  "スリラーバーク": "skill1_cooldown",
  "シャボンディ諸島・女ヶ島": "skill1_cooldown",
  "インペルダウン": "skill1_cooldown",
  "マリンフォード頂上戦争": "skill1_cooldown",
  "2年後": "skill1_cooldown",
  "魚人島": "skill1_cooldown",
  "パンクハザード": "skill1_cooldown",
  "ドレスローザ": "skill1_cooldown",
  "世界会議": "skill1_cooldown",
  "ゾウ・ホールケーキアイランド": "skill1_cooldown",
  "ワノ国": "skill1_cooldown",
  "エッグヘッド": "skill1_cooldown",
  "FILM STRONG WORLD": "skill1_cooldown",
  "FILM GOLD": "skill1_cooldown",
  "FILM Z": "skill1_cooldown",
  "STAMPEDE": "skill1_cooldown",
  "FILM RED": "skill1_cooldown",
  "ODYSSEY": "skill1_cooldown",
  "水着": "skill1_cooldown",
  "聖夜": "skill1_cooldown"
};
