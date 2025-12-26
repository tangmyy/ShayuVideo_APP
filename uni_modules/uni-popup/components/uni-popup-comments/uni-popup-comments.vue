<style lang="scss" scoped>
.uni-popup-share {
  background-color: #181717;
  border-top-left-radius: 16rpx;
  border-top-right-radius: 16rpx;
}
.uni-share-title {
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 40px;
}
.uni-share-title-text {
  font-size: 12px;
  color: #ffffff;
  font-weight: 500;
}
.uni-share-content {
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */
  // flex-direction: row;
  flex-direction: column;
  // justify-content: center;
  // padding-top: 10px;
}

.uni-share-content-box {
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */
  flex-direction: row;
  flex-wrap: wrap;
  width: 360px;
}

.uni-share-content-item {
  width: 90px;
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */
  flex-direction: column;
  justify-content: center;
  padding: 10px 0;
  align-items: center;
}

.uni-share-content-item:active {
  background-color: #f5f5f5;
}

.uni-share-image {
  width: 30px;
  height: 30px;
}

.uni-share-text {
  margin-top: 10px;
  font-size: 14px;
  color: #3b4144;
}

.uni-share-button-box {
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */
  flex-direction: row;
  padding: 10px 15px;
}

.uni-share-button {
  flex: 1;
  border-radius: 50px;
  color: #666;
  font-size: 16px;
}

.uni-share-button::after {
  border-radius: 50px;
}

.icon-close-left {
  width: 20rpx;
  height: 20rpx;
  margin-left: 30rpx;
  opacity: 0;
}
.icon-close-right {
  width: 22rpx;
  height: 22rpx;
  margin-right: 30rpx;
}

.comment-wrapper {
  // height: 40px;
  padding: 10px 10px 10px 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.commentWrapperBlack {
  background-color: #0e0d0d;
}
.commentWrapperWhite {
  background-color: #ffffff;
}
.comment-box {
  font-size: 15px;
  height: 40px;
  border-radius: 20px;
  padding: 0 18px 0 18px;
}
.commentBoxBlack {
  color: #ffffff;
  background-color: #151515;
}
.commentBoxWhite {
  color: #000000;
  background-color: #f2f2f5;
}
.comment-box-placeholder {
  font-size: 15px;
}
.icon-comment {
  width: 30px;
  height: 30px;
}

.all-comments {
  height: 800rpx;
  // padding: 16rpx 30rpx;
}
.img-face {
  width: 80rpx;
  height: 80rpx;
  border-radius: 100rpx;
}
.like-or-not {
  margin-top: 16px;
  width: 50rpx;
  height: 50rpx;
}
.comments-wrapper {
  display: flex;
  flex-direction: column;
}
.comments-wrapper-sub-up {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.comments-wrapper-sub-down {
  display: flex;
  flex-direction: row;
  margin-top: 2px;
}
.vlogger-wrapper {
  display: flex;
  flex-direction: row;
}
.tag-writer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #f02a50;
  border-radius: 3px;
  width: 30px;
  height: 16px;
  margin-left: 2px;
}
.writer-words {
  font-size: 26rpx;
  color: #ffffff;
  text-align: center;
}

.single-comment-box {
  background-color: #181717;
}
.single-comment-box-touched {
  background-color: #202020;
}
.active {
  background-color: #202020;
}

/* 举报弹窗样式 */
.report-dialog {
  width: 680rpx;
  background-color: #1a1a1a;
  border-radius: 20rpx;
  padding: 40rpx;
}

.report-title {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40rpx;
}

.report-title-text {
  font-size: 36rpx;
  color: #ffffff;
  font-weight: 600;
}

.report-close-icon {
  width: 40rpx;
  height: 40rpx;
  opacity: 0.8;
}

.report-content {
  display: flex;
  flex-direction: column;
}

.report-item {
  display: flex;
  flex-direction: column;
  margin-bottom: 30rpx;
}

.report-label {
  font-size: 28rpx;
  color: #ffffff;
  margin-bottom: 20rpx;
}

.report-picker {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #2a2a2a;
  border-radius: 10rpx;
  padding: 20rpx;
  min-height: 80rpx;
}

.report-picker-text {
  font-size: 28rpx;
  color: #ffffff;
}

.report-picker-placeholder {
  font-size: 28rpx;
  color: #999999;
}

.report-picker-arrow {
  font-size: 24rpx;
  color: #999999;
}

.report-textarea {
  width: 100%;
  min-height: 250rpx;
  background-color: #2a2a2a;
  border-radius: 10rpx;
  padding: 20rpx;
  font-size: 28rpx;
  color: #ffffff;
  margin-bottom: 10rpx;
  box-sizing: border-box;
}

.report-char-count {
  font-size: 24rpx;
  color: #999999;
  text-align: right;
}

.report-buttons {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 40rpx;
}

.report-btn {
  flex: 1;
  height: 80rpx;
  border-radius: 10rpx;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 10rpx;
}

.report-btn-cancel {
  background-color: #3a3a3a;
}

.report-btn-submit {
  background-color: #ef274d;
}

.report-btn-text {
  font-size: 32rpx;
  color: #ffffff;
}
</style>

<!-- 举报弹窗样式 - 不使用scoped以确保样式能应用到uni-popup插槽内容 -->
<style>
.report-dialog {
  width: 680rpx !important;
  background-color: #1a1a1a;
  border-radius: 20rpx;
  padding: 40rpx;
}

.report-textarea {
  width: 100% !important;
  min-height: 250rpx !important;
  background-color: #2a2a2a;
  border-radius: 10rpx;
  padding: 20rpx;
  font-size: 28rpx;
  color: #ffffff;
  margin-bottom: 10rpx;
  box-sizing: border-box;
}
</style>

<template>
  <view class="uni-popup-share">
    <view class="uni-share-title">
      <image
        src="/static/images/icon-close.png"
        class="icon-close-left"
      ></image>
      <text class="uni-share-title-text"
        >{{ getGraceNumber(thisVlogTotalComentCounts) }}条评论</text
      >
      <image
        src="/static/images/icon-close.png"
        class="icon-close-right"
        @click="close"
      ></image>
    </view>
    <view class="uni-share-content">
      <!-- <view class="uni-share-content-box"> -->
      <view class="" style="height: 800rpx"
        ><!-- background-color: #0077AA; -->
        <scroll-view
          class="all-comments"
          :style="{ width: screenWidth + 'px' }"
          scroll-y="true"
          lower-threshold="150"
          @scrolltolower="loadMore"
          :scroll-top="scrollTop"
        >
          <view
            v-for="(commentContent, index) in commentList"
            :key="index"
            :data-index="index"
            :class="{ active: index == activeIndex }"
            @touchstart="touchstartComment(index)"
            @touchend="touchendComment()"
            @longpress="
              deleteComment(
                commentContent.commentUserId,
                commentContent.commentId
              )
            "
          >
            <view
              class="comments-wrapper"
              style="margin-left: 16rpx; margin-top: 16rpx; margin-right: 16rpx"
            >
              <view class="comments-wrapper-sub-up">
                <view class="vlogger-wrapper">
                  <image
                    :src="commentContent.commentUserFace"
                    class="img-face"
                  ></image>
                  <view style="margin-left: 10px; width: 456rpx">
                    <view style="display: flex; flex-direction: row">
                      <text
                        style="
                          font-size: 30rpx;
                          color: #878585;
                          align-self: center;
                        "
                        >{{ commentContent.commentUserNickname }}</text
                      >
                      <view
                        v-if="commentContent.vlogerId == thisVlogerId"
                        class="tag-writer"
                        style="align-self: center"
                      >
                        <text class="writer-words" style="align-self: center"
                          >作者</text
                        >
                      </view>

                      <image
                        v-if="
                          commentContent.replyedUserNickname != null &&
                          commentContent.replyedUserNickname != ''
                        "
                        src="/static/images/icon-right-arrow3.png"
                        class=""
                        style="
                          opacity: 0.8;
                          width: 40rpx;
                          height: 40rpx;
                          margin-left: 16rpx;
                          margin-right: 10rpx;
                          align-self: center;
                        "
                      ></image>
                      <text
                        v-if="
                          commentContent.replyedUserNickname != null &&
                          commentContent.replyedUserNickname != ''
                        "
                        style="
                          font-size: 30rpx;
                          color: #878585;
                          align-self: center;
                        "
                        >{{ commentContent.replyedUserNickname }}</text
                      >
                    </view>
                    <text
                      style="font-size: 32rpx; color: #ffffff; margin-top: 2px"
                      >{{ commentContent.content }}</text
                    >
                  </view>
                </view>
                <view
                  style="display: flex; flex-direction: column; width: 26px"
                >
                  <image
                    v-if="commentContent.isLike == 1"
                    src="/static/images/icon-comment-like.png"
                    class="like-or-not"
                    style="align-self: center"
                    @click="
                      unlike(
                        commentContent.commentUserId,
                        commentContent.commentId,
                        index
                      )
                    "
                  ></image>
                  <image
                    v-if="commentContent.isLike == 0"
                    src="/static/images/icon-comment-unlike.png"
                    class="like-or-not"
                    style="align-self: center"
                    @click="
                      like(
                        commentContent.commentUserId,
                        commentContent.commentId,
                        index
                      )
                    "
                  ></image>
                  <text
                    style="font-size: 22rpx; color: #878585; align-self: center"
                    >{{ getGraceNumber(commentContent.likeCounts) }}</text
                  >
                </view>
              </view>
              <view class="comments-wrapper-sub-down">
                <image
                  src="/static/face/face-arrow-1.png"
                  class="img-face"
                  style="opacity: 0"
                ></image>
                <text
                  style="font-size: 30rpx; color: #878585; margin-left: 10px"
                  >{{ getGraceDateBeforeNow(commentContent.createTime) }}</text
                >
                <text
                  style="font-size: 30rpx; color: #878585; margin-left: 20px"
                  @click="
                    replyComment(
                      commentContent.commentId,
                      commentContent.commentUserNickname
                    )
                  "
                  >回复</text
                >
                <text
                  style="font-size: 30rpx; color: #878585; margin-left: 20px"
                  @click="showReportDialog(commentContent.commentId)"
                  >举报</text
                >
              </view>
            </view>
          </view>

          <!-- TODO: 判断总评论数和当前list中数量是否一致，如果一致，则显然到底了 -->
          <view
            style="
              display: flex;
              flex-direction: row;
              justify-content: center;
              margin-top: 50rpx;
              height: 100rpx;
            "
          >
            <text style="color: #444446; font-size: 13px">{{ bottomTxt }}</text>
          </view>
        </scroll-view>
      </view>

      <!-- 评论输入框 -->
      <view
        class="comment-wrapper"
        :class="{
          commentWrapperBlack: commentWrapperBlack,
          commentWrapperWhite: commentWrapperWhite,
        }"
      >
        <input
          class="comment-box"
          :class="{
            commentBoxBlack: commentBoxBlack,
            commentBoxWhite: commentBoxWhite,
          }"
          placeholder-class="comment-box-placeholder"
          :style="{ width: screenWidth - 70 + 'px' }"
          :placeholder="placeholder"
          cursor-spacing="10px"
          v-model="currentComment"
          confirm-type="done"
          :focus="commentFocus"
          @focus="typingComment"
          @blur="noTypingComment"
        />
        <!-- @confirm="doCommentPublish" -->
        <view
          style="display: flex; flex-direction: column; justify-content: center"
        >
          <image
            src="/static/images/icon-comment.png"
            class="icon-comment"
            @click="doCommentPublish()"
          ></image>
        </view>
      </view>
    </view>

    <!-- 举报弹窗 -->
    <uni-popup ref="reportPopup" type="center" :mask-click="false">
      <view
        class="report-dialog"
        style="
          width: 680rpx;
          background-color: #1a1a1a;
          border-radius: 20rpx;
          padding: 40rpx;
        "
        @click.stop
      >
        <view class="report-title">
          <text class="report-title-text">举报评论</text>
          <image
            src="/static/images/icon-close.png"
            class="report-close-icon"
            @click="closeReportDialog"
          ></image>
        </view>
        <view class="report-content">
          <view class="report-item">
            <text class="report-label">举报原因：</text>
            <picker
              mode="selector"
              :range="reportReasons"
              :value="selectedReasonIndex"
              @change="onReasonChange"
            >
              <view class="report-picker" @click.stop>
                <text
                  :class="
                    selectedReasonIndex >= 0
                      ? 'report-picker-text'
                      : 'report-picker-placeholder'
                  "
                >
                  {{
                    selectedReasonIndex >= 0
                      ? reportReasons[selectedReasonIndex]
                      : "请选择举报原因"
                  }}
                </text>
                <text class="report-picker-arrow">▼</text>
              </view>
            </picker>
          </view>
          <view class="report-item">
            <text class="report-label">详细描述：</text>
            <textarea
              class="report-textarea"
              style="
                width: 100%;
                min-height: 250rpx;
                background-color: #2a2a2a;
                border-radius: 10rpx;
                padding: 20rpx;
                font-size: 28rpx;
                color: #ffffff;
                margin-bottom: 10rpx;
                box-sizing: border-box;
              "
              placeholder="请详细描述举报原因（选填，最多500字）"
              placeholder-style="color: #999999"
              v-model="reportDescription"
              maxlength="500"
            ></textarea>
            <text class="report-char-count"
              >{{ reportDescription.length }}/500</text
            >
          </view>
        </view>
        <view class="report-buttons">
          <view class="report-btn report-btn-cancel" @click="closeReportDialog">
            <text class="report-btn-text">取消</text>
          </view>
          <view class="report-btn report-btn-submit" @click="submitReport">
            <text class="report-btn-text">提交</text>
          </view>
        </view>
      </view>
    </uni-popup>
  </view>
</template>

<script>
var app = getApp();
import popup from "../uni-popup/popup.js";
export default {
  name: "UniPopupShare",
  mixins: [popup],
  emits: ["select"],
  props: {
    title: {
      type: String,
      default: "分享到",
    },
    beforeClose: {
      type: Boolean,
      default: false,
    },
    thisVlogerId: {
      type: String,
      default: "",
    },
    thisVlogId: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      commentWrapperBlack: true,
      commentWrapperWhite: false,
      commentBoxBlack: true,
      commentBoxWhite: false,
      // commentWrapperBlack: false,
      // commentWrapperWhite: true,
      // commentBoxBlack: false,
      // commentBoxWhite: true,
      screenWidth: uni.getSystemInfoSync().screenWidth,
      currentComment: "",
      scrollTop: 0,
      old: {
        scrollTop: 0,
      },

      // commentTouched: false,
      activeIndex: -1,

      bottomTxt: "暂时没有更多了",
      placeholder: "善语结良缘,恶语伤人心~",
      commentFocus: false,
      thisFatherCommentId: "0", // 用于标识当前的回复是否有父id，还是仅仅只是普通评论

      thisVlogTotalComentCounts: 0,
      loginUserId: "",
      page: 0,
      totalPage: 0,
      commentCounts: 88,
      commentList: [],

      // 举报相关
      currentReportCommentId: "", // 当前要举报的评论ID
      reportReasons: ["垃圾信息", "色情低俗", "违法违规", "人身攻击", "其他"],
      selectedReasonIndex: -1, // 选中的举报原因索引
      reportDescription: "", // 举报详细描述
    };
  },
  created() {
    console.log("comment...created...thisVlogId = " + this.thisVlogId);

    var me = this;
    var myUserInfo = getApp().getUserInfoSession();
    var userId = "";
    if (myUserInfo != null) {
      userId = myUserInfo.id;
    }
    me.loginUserId = userId;

    this.freshCommentCounts();
    this.doCommentPagingList(this.page + 1, true);
  },
  methods: {
    freshCommentCounts() {
      var me = this;
      var vlogId = me.thisVlogId;

      var serverUrl = app.globalData.serverUrl;
      uni.request({
        method: "GET",
        url: serverUrl + "/comment/counts?vlogId=" + vlogId,
        success(result) {
          console.log(result);

          if (result.data.status == 200) {
            me.thisVlogTotalComentCounts = result.data.data;
          } else {
            me.thisVlogTotalComentCounts = 0;
          }

          if (me.thisVlogTotalComentCounts == 0) {
            me.bottomTxt = "抢一个沙发吧~";
          } else {
            me.bottomTxt = "暂时没有更多啦";
          }
        },
      });
    },

    unlike(commentUserId, commentId, index) {
      var me = this;

      var serverUrl = app.globalData.serverUrl;
      uni.request({
        method: "POST",
        header: {
          headerUserId: me.loginUserId,
          headerUserToken: app.getUserSessionToken(),
        },
        url:
          serverUrl +
          "/comment/unlike?userId=" +
          me.loginUserId +
          "&commentId=" +
          commentId,
        success(result) {
          console.log(result);

          if (result.data.status == 200) {
            me.reLikeCommentList(index, 0);
            me.reCountsCommentList(index, -1);
          } else {
            uni.showToast({
              title: result.data.msg,
              icon: "none",
              duration: 3000,
            });
          }
        },
      });
    },

    like(commentUserId, commentId, index) {
      var me = this;

      var myUserInfo = getApp().getUserInfoSession();
      if (myUserInfo == null) {
        uni.showTabBar({
          animation: false,
        });
        uni.showToast({
          duration: 3000,
          title: "请登录~",
          icon: "none",
        });
        uni.navigateTo({
          url: "../loginRegist/loginRegist",
          animationType: "slide-in-bottom",
        });
        return;
      }

      var serverUrl = app.globalData.serverUrl;
      uni.request({
        method: "POST",
        header: {
          headerUserId: me.loginUserId,
          headerUserToken: app.getUserSessionToken(),
        },
        url:
          serverUrl +
          "/comment/like?userId=" +
          me.loginUserId +
          "&commentId=" +
          commentId,
        success(result) {
          console.log(result);

          if (result.data.status == 200) {
            me.reLikeCommentList(index, 1);
            me.reCountsCommentList(index, 1);
          } else {
            uni.showToast({
              title: result.data.msg,
              icon: "none",
              duration: 3000,
            });
          }
        },
      });
    },

    reCountsCommentList(index, number) {
      var me = this;
      var commentList = me.commentList;

      commentList[index].likeCounts = commentList[index].likeCounts + number;
      commentList.splice(index, 1, commentList[index]);

      me.commentList = commentList;
    },

    reLikeCommentList(index, isLike) {
      var me = this;
      var commentList = me.commentList;

      commentList[index].isLike = isLike;
      commentList.splice(index, 1, commentList[index]);

      me.commentList = commentList;
    },

    deleteComment(commentUserId, commentId) {
      var me = this;
      var vlogId = me.thisVlogId;
      // console.log("deleteComment...deleteComment=" + commentId);
      // 判断如果当前登陆者userId和评论的留言者id不同，不能删除
      if (commentUserId != me.loginUserId) {
        return;
      }

      uni.showModal({
        title: "提示",
        content: "确认删除评论吗？",
        success: function (res) {
          if (res.confirm) {
            // console.log('用户点击确定');
            var serverUrl = app.globalData.serverUrl;
            uni.request({
              method: "DELETE",
              header: {
                headerUserId: commentUserId,
                headerUserToken: app.getUserSessionToken(),
              },
              url:
                serverUrl +
                "/comment/delete?commentUserId=" +
                commentUserId +
                "&commentId=" +
                commentId +
                "&vlogId=" +
                vlogId,
              success(result) {
                console.log(result);

                if (result.data.status == 200) {
                  me.doCommentPagingList(1, true);
                } else {
                  uni.showToast({
                    title: result.data.msg,
                    icon: "none",
                    duration: 3000,
                  });
                }
                me.freshCommentCounts();
              },
            });
          } else if (res.cancel) {
            // console.log('用户点击取消');
          }
        },
      });
    },
    loadMore() {
      if (this.page == this.totalPage) {
        return;
      }
      this.doCommentPagingList(this.page + 1, false);
    },
    // 分页查询评论列表
    doCommentPagingList(page, needClearList) {
      // 查询首页短视频列表
      var me = this;
      me.page = page;
      var vlogId = me.thisVlogId;
      // console.log(vlogId);
      var serverUrl = app.globalData.serverUrl;
      uni.request({
        method: "GET",
        url:
          serverUrl +
          "/comment/list?vlogId=" +
          vlogId +
          "&userId=" +
          me.loginUserId +
          "&page=" +
          page +
          "&pageSize=10",
        success(result) {
          console.log(result);

          if (result.data.status == 200) {
            var commentList = result.data.data.rows;
            var totalPage = result.data.data.total;
            // console.log(commentList);

            if (needClearList) {
              me.commentList = [];
            }
            me.commentList = me.commentList.concat(commentList);
            me.totalPage = totalPage;
          } else {
            uni.showToast({
              title: result.data.msg,
              icon: "none",
              duration: 3000,
            });
          }
        },
      });
    },

    // 获得焦点，改变底部文本框颜色
    typingComment() {
      this.commentWrapperBlack = false;
      this.commentWrapperWhite = true;
      this.commentBoxBlack = false;
      this.commentBoxWhite = true;

      // console.log(this.thisFatherCommentId);
    },
    // 失去焦点，改变底部文本框颜色
    noTypingComment() {
      this.commentWrapperBlack = true;
      this.commentWrapperWhite = false;
      this.commentBoxBlack = true;
      this.commentBoxWhite = false;

      this.thisFatherCommentId = "0"; // 恢复默认的回复fatherId为“0”
      this.commentFocus = false;
      this.placeholder = "爱评论的人都是天使~";
    },

    // 回复他人的评论
    replyComment(commentId, commentUserNickname) {
      this.thisFatherCommentId = commentId;
      this.commentFocus = true;
      this.placeholder = "回复 @" + commentUserNickname;
      // this.typingComment();
    },

    // 发布留言
    doCommentPublish() {
      var me = this;

      var myUserInfo = getApp().getUserInfoSession();
      if (myUserInfo == null) {
        uni.showTabBar({
          animation: false,
        });
        uni.showToast({
          duration: 3000,
          title: "请登录~",
          icon: "none",
        });
        uni.navigateTo({
          url: "../loginRegist/loginRegist",
          animationType: "slide-in-bottom",
        });
        return;
      }

      if (
        me.currentComment == null ||
        me.currentComment == "" ||
        me.currentComment == undefined
      ) {
        uni.showToast({
          title: "请填入您的评论~",
          mask: true,
          position: "bottom",
        });
        return;
      }

      if (me.currentComment.length > 50) {
        uni.showToast({
          title: "评论字数限制50以内噢~",
          mask: true,
          position: "bottom",
        });
        return;
      }

      var userId = myUserInfo.id;
      var serverUrl = app.globalData.serverUrl;

      var pendingCommentObject = {
        vlogId: me.thisVlogId,
        vlogerId: me.thisVlogerId,
        fatherCommentId: me.thisFatherCommentId,
        commentUserId: userId,
        content: me.currentComment,
      };

      uni.request({
        method: "POST",
        header: {
          headerUserId: userId,
          headerUserToken: app.getUserSessionToken(),
        },
        url: serverUrl + "/comment/create",
        data: pendingCommentObject,
        success(result) {
          console.log(result);

          if (result.data.status == 200) {
            var newCommentObject = result.data.data;
            newCommentObject.commentId = newCommentObject.id;
            newCommentObject.commentUserNickname = myUserInfo.nickname;
            newCommentObject.commentUserFace = myUserInfo.face;
            newCommentObject.isLike = 0;
            // newCommentObject.isOwner = 0;
            // if (me.thisVlogerId == userId) {
            // 	newCommentObject.isOwner = 1;
            // }

            me.doCommentPagingList(1, true);

            // 评论/回复完毕后，回复thisFatherCommentId为“0”
            me.thisFatherCommentId = "0";

            // 把新评论添加到第一个位置，弱一致性，不需要从数据库里再去取
            me.commentList.unshift(newCommentObject);
            // 清空文本框
            me.currentComment = "";
            // 隐藏键盘
            uni.hideKeyboard();
            // 底部变色
            me.noTypingComment();

            // 把滚动list到第一个位置
            me.scrollTop = me.scrollTop + 1;
            me.$nextTick(() => {
              me.scrollTop = 0; //赋值为0即代表返回顶部
            });
          } else {
            uni.showToast({
              title: result.data.msg,
              icon: "none",
              duration: 3000,
            });
          }

          me.freshCommentCounts();
        },
      });
    },
    // 把超过1000或10000的数字调整，比如1.3k/6.8w
    getGraceNumber(num) {
      return getApp().graceNumber(num);
    },
    // 时间显示 刚刚/xx小时前/...
    getGraceDateBeforeNow(dateTimeStr) {
      var date = app.dateFormat("YYYY-mm-dd", new Date(dateTimeStr));
      // console.log(date);
      return getApp().getDateBeforeNow(date);
    },

    /**
     * 选择内容
     */
    select(item, index) {
      this.$emit("select", {
        item,
        index,
      });
      this.close();
    },
    /**
     * 关闭窗口
     */
    close() {
      if (this.beforeClose) return;
      this.popup.close();
      uni.showTabBar({
        animation: true,
      });
    },

    touchstartComment(index) {
      // this.commentTouched = true;
      this.activeIndex = index;
    },
    touchendComment() {
      // this.commentTouched = false;
      this.activeIndex = -1;
    },

    // 显示举报弹窗
    showReportDialog(commentId) {
      var me = this;

      // 检查是否登录
      var myUserInfo = getApp().getUserInfoSession();
      if (myUserInfo == null) {
        uni.showTabBar({
          animation: false,
        });
        uni.showToast({
          duration: 3000,
          title: "请登录~",
          icon: "none",
        });
        uni.navigateTo({
          url: "../loginRegist/loginRegist",
          animationType: "slide-in-bottom",
        });
        return;
      }

      me.currentReportCommentId = commentId;
      me.selectedReasonIndex = -1;
      me.reportDescription = "";
      me.$refs.reportPopup.open();
    },

    // 关闭举报弹窗
    closeReportDialog() {
      this.$refs.reportPopup.close();
      this.currentReportCommentId = "";
      this.selectedReasonIndex = -1;
      this.reportDescription = "";
    },

    // 选择举报原因
    onReasonChange(e) {
      this.selectedReasonIndex = e.detail.value;
    },

    // 提交举报
    submitReport() {
      var me = this;

      // 验证举报原因
      if (me.selectedReasonIndex < 0) {
        uni.showToast({
          title: "请选择举报原因",
          icon: "none",
          duration: 2000,
        });
        return;
      }

      var myUserInfo = getApp().getUserInfoSession();
      if (myUserInfo == null) {
        uni.showToast({
          title: "请登录~",
          icon: "none",
          duration: 3000,
        });
        return;
      }

      var reporterId = myUserInfo.id;
      var reason = me.reportReasons[me.selectedReasonIndex];
      var description = me.reportDescription || "";

      // 构建举报数据
      var reportData = {
        reportType: "2", // 2表示评论
        targetId: me.currentReportCommentId,
        reason: reason,
        description: description,
        reporterId: reporterId,
      };

      console.log("提交举报数据：", reportData);

      var serverUrl = app.globalData.serverUrl;
      uni.request({
        method: "POST",
        header: {
          "Content-Type": "application/json",
          headerUserId: reporterId,
          headerUserToken: app.getUserSessionToken(),
        },
        url: serverUrl + "/report/comment",
        data: reportData,
        success(result) {
          console.log("举报响应：", result);

          if (result.data.status == 200) {
            uni.showToast({
              title: "举报成功，我们会尽快处理",
              icon: "success",
              duration: 2000,
            });
            me.closeReportDialog();
          } else {
            uni.showToast({
              title: result.data.msg || "举报失败，请重试",
              icon: "none",
              duration: 3000,
            });
          }
        },
        fail(err) {
          console.error("举报请求失败：", err);
          uni.showToast({
            title: "网络错误，请重试",
            icon: "none",
            duration: 3000,
          });
        },
      });
    },
  },
};
</script>
