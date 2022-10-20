try {
  let res = $response.body;
  let obj = JSON.parse(res);
          // 622 为会员购中心, 425 开始为概念版id
          /*
            国际版
            494 离线缓存
            495 历史记录
            496 我的收藏
            497 稍后再看
            500 联系客服
            501 设置
            741 我的钱包
            742 稿件管理
           */
          const itemList = new Set([
            396, 397, 398, 399, 171, 172, 534, 8, 4, 428, 352, 1, 405, 402, 404, 544, 407, 410, 425, 426, 427, 428, 171, 430, 431, 432, 494, 495, 496, 497, 500, 501, 741, 742,
          ]);
          obj["data"]["sections_v2"].forEach((element, index) => {
            let items = element["items"].filter((e) => {
              return itemList.has(e.id);
            });
            obj["data"]["sections_v2"][index].button = {};
            delete obj["data"]["sections_v2"][index].be_up_title;
            delete obj["data"]["sections_v2"][index].tip_icon;
            delete obj["data"]["sections_v2"][index].tip_title;
            obj["data"]["sections_v2"][index]["items"] = items;

            if (element.title === "更多服务" && enableMall) {
              element.items.unshift({
                id: 999,
                title: "会员购",
                icon: "http://i0.hdslb.com/bfs/archive/19c794f01def1a267b894be84427d6a8f67081a9.png",
                common_op_item: {},
                uri: "bilibili://mall/home",
              });
            }
          });
          body = JSON.stringify(obj);
        } catch (err) {
          console.log(`bilibili_mine.js 出现异常：${err}`);
        }
