<style>
.page {
  background-color: #000000;
  opacity: 0.9;
}

.btn-cancel {
  background-color: #1d1d1e;
  border-color: #3a3a3d;
}
.btn-cancel-touched {
  background-color: #515156;
  border-color: #2b2b2f;
}
.all-box {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 280rpx;
}
.share-item {
  display: flex;
  flex-direction: column;
  margin-top: 60rpx;
}
.icon-wrapper {
  width: 120rpx;
  height: 120rpx;
  background-color: #343437;
  border-radius: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  opacity: 0.8;
}
.icon-image {
  width: 60rpx;
  height: 60rpx;
}
.icon-tag-text {
  color: #ffffff;
  font-size: 14px;
  margin-top: 10rpx;
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
  /* #ifndef APP-PLUS-NVUE */
  min-height: 80rpx;
  /* #endif */
  /* #ifdef APP-PLUS-NVUE */
  height: 80rpx;
  /* #endif */
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
  /* #ifndef APP-PLUS-NVUE */
  min-height: 250rpx;
  box-sizing: border-box;
  /* #endif */
  /* #ifdef APP-PLUS-NVUE */
  height: 250rpx;
  /* #endif */
  background-color: #2a2a2a;
  border-radius: 10rpx;
  padding: 20rpx;
  font-size: 28rpx;
  color: #ffffff;
  margin-bottom: 10rpx;
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

<template>
  <view class="page">
    <view class="all-box">
      <view class="share-item" @click="downloadVlog()">
        <view class="icon-wrapper" style="align-self: center">
          <image
            class="icon-image"
            src="/static/images/icon-download.png"
            style="align-self: center"
          ></image>
        </view>
        <text class="icon-tag-text" style="align-self: center">保存到相册</text>
      </view>

      <view class="share-item" @click="copyLink()">
        <view class="icon-wrapper" style="align-self: center">
          <image
            class="icon-image"
            src="/static/images/icon-copy.png"
            style="align-self: center"
          ></image>
        </view>
        <text class="icon-tag-text" style="align-self: center">复制链接</text>
      </view>

      <view class="share-item" @click="gotoQRCode()">
        <view class="icon-wrapper" style="align-self: center">
          <image
            class="icon-image"
            src="/static/images/icon-qrcode.png"
            style="align-self: center"
          ></image>
        </view>
        <text class="icon-tag-text" style="align-self: center">二维码</text>
      </view>

      <!-- 判断我自己的视频不显示这个按钮 -->
      <view
        v-if="thisVlogerId != userId && isPrivate == 0"
        class="share-item"
        @click="showReportDialog()"
      >
        <view class="icon-wrapper" style="align-self: center">
          <image
            class="icon-image"
            src="/static/images/icon-delete.png"
            style="align-self: center"
          ></image>
        </view>
        <text class="icon-tag-text" style="align-self: center">举报</text>
      </view>

      <!-- 判断只有我自己才能显示这个按钮 -->
      <view
        v-if="thisVlogerId == userId && isPrivate == 0"
        class="share-item"
        @click="changeVlogToPrivate()"
      >
        <view class="icon-wrapper" style="align-self: center">
          <image
            class="icon-image"
            src="/static/images/icon-private.png"
            style="align-self: center"
          ></image>
        </view>
        <text class="icon-tag-text" style="align-self: center">转为私密</text>
      </view>
      <view
        v-if="thisVlogerId == userId && isPrivate == 1"
        class="share-item"
        @click="changeVlogToPublic()"
      >
        <view class="icon-wrapper" style="align-self: center">
          <image
            class="icon-image"
            src="/static/images/icon-private.png"
            style="align-self: center"
          ></image>
        </view>
        <text class="icon-tag-text" style="align-self: center">转为公开</text>
      </view>

      <!-- 编辑视频按钮，只有自己的视频才显示 -->
      <view
        v-if="thisVlogerId == userId"
        class="share-item"
        @click="editVlog()"
      >
        <view class="icon-wrapper" style="align-self: center">
          <image
            class="icon-image"
            src="/static/images/icon-settings.png"
            style="align-self: center"
          ></image>
        </view>
        <text class="icon-tag-text" style="align-self: center">编辑视频</text>
      </view>
    </view>

    <view class="" style="padding: 0 20rpx">
      <!-- :class="{'btn-preplay':!preplayTouched, 'btn-preplay-touched': preplayTouched}"
			@click="preview"
			@touchstart="touchstartPreplay" 
			@touchend="touchendPreplay" -->

      <view
        :class="{
          'btn-cancel': !cancelTouched,
          'btn-cancel-touched': cancelTouched,
        }"
        @click="close"
        @touchstart="touchstartCancel"
        @touchend="touchendCancel"
        style="
          height: 50px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          border-width: 1rpx;
          border-radius: 10px;
        "
      >
        <text
          class=""
          style="
            color: #ffffff;
            font-size: 16px;
            align-self: center;
            align-self: center;
          "
          >取消</text
        >
      </view>
    </view>

    <!-- 举报视频弹窗 -->
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
          <text class="report-title-text">举报视频</text>
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
                background-color: #2a2a2a;
                border-radius: 10rpx;
                padding: 20rpx;
                font-size: 28rpx;
                color: #ffffff;
                margin-bottom: 10rpx;
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
      default: "",
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
    vlogUrl: {
      type: String,
      default: "",
    },
    isPrivate: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      userId: "",
      cancelTouched: false,

      // 举报相关
      reportReasons: ["垃圾信息", "色情低俗", "违法违规", "人身攻击", "其他"],
      selectedReasonIndex: -1, // 选中的举报原因索引
      reportDescription: "", // 举报详细描述
    };
  },
  created() {
    var userId = getApp().getUserInfoSession().id;
    this.userId = userId;
  },
  methods: {
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

    touchstartCancel() {
      this.cancelTouched = true;
    },

    touchendCancel() {
      this.cancelTouched = false;
    },

    downloadVlog() {
      console.log("downloadVlog...thisVlogId = " + this.vlogUrl);
      uni.showLoading();
      uni.downloadFile({
        url: this.vlogUrl,
        success: (res) => {
          if (res.statusCode === 200) {
            console.log("下载成功");
            uni.saveVideoToPhotosAlbum({
              filePath: res.tempFilePath,
              success: function () {
                console.log("save success");
                uni.hideLoading();
                uni.showToast({
                  title: "保存成功~！",
                  duration: 5000,
                });
              },
            });
          }
        },
      });
    },

    copyLink() {
      uni.setClipboardData({
        data: this.vlogUrl,
        success: () => {
          uni.showToast({
            //提示
            title: "复制成功",
          });
        },
      });
    },

    gotoQRCode() {
      uni.navigateTo({
        url: "/pages/qrcode/qrcode?vlogId=" + this.thisVlogId,
      });
    },

    changeVlogToPublic() {
      var vlogId = this.thisVlogId;
      var me = this;
      var userId = getApp().getUserInfoSession().id;
      var serverUrl = app.globalData.serverUrl;
      uni.request({
        method: "POST",
        header: {
          headerUserId: userId,
          headerUserToken: app.getUserSessionToken(),
        },
        url:
          serverUrl +
          "/vlog/changeToPublic?userId=" +
          userId +
          "&vlogId=" +
          vlogId,
        success(result) {
          console.log(result);

          if (result.data.status == 200) {
            uni.showToast({
              title: "设置完毕~",
            });
          } else {
            // 处理错误情况
            var errorMsg = result.data.msg || "操作失败，请重试";
            var status = result.data.status;
            // 根据错误状态码显示特定提示
            // 注意：这里需要根据实际后端返回的状态码值来匹配
            // 通常这些错误码可能是字符串标识或数字码
            if (
              errorMsg.indexOf("视频不存在") !== -1 ||
              errorMsg.indexOf("VLOG_NOT_EXIST") !== -1 ||
              status === 5001
            ) {
              errorMsg = "视频不存在或已被删除";
            } else if (
              errorMsg.indexOf("无权限") !== -1 ||
              errorMsg.indexOf("NO_AUTH") !== -1 ||
              status === 5002
            ) {
              errorMsg = "您没有权限修改此视频";
            } else if (
              errorMsg.indexOf("封禁") !== -1 ||
              errorMsg.indexOf("BANNED") !== -1 ||
              status === 5003
            ) {
              errorMsg = "视频已被封禁，无法修改私密状态";
            }

            uni.showToast({
              title: errorMsg,
              icon: "none",
              duration: 3000,
            });
          }
        },
        fail(err) {
          console.error("修改视频状态失败：", err);
          uni.showToast({
            title: "网络错误，请重试",
            icon: "none",
            duration: 3000,
          });
        },
      });
    },

    changeVlogToPrivate() {
      var vlogId = this.thisVlogId;
      var me = this;
      var userId = getApp().getUserInfoSession().id;
      var serverUrl = app.globalData.serverUrl;
      uni.request({
        method: "POST",
        header: {
          headerUserId: userId,
          headerUserToken: app.getUserSessionToken(),
        },
        url:
          serverUrl +
          "/vlog/changeToPrivate?userId=" +
          userId +
          "&vlogId=" +
          vlogId,
        success(result) {
          console.log(result);

          if (result.data.status == 200) {
            uni.showToast({
              title: "设置完毕~",
            });
          } else {
            // 处理错误情况
            var errorMsg = result.data.msg || "操作失败，请重试";
            var status = result.data.status;
            // 根据错误状态码显示特定提示
            // 注意：这里需要根据实际后端返回的状态码值来匹配
            // 通常这些错误码可能是字符串标识或数字码
            if (
              errorMsg.indexOf("视频不存在") !== -1 ||
              errorMsg.indexOf("VLOG_NOT_EXIST") !== -1 ||
              status === 5001
            ) {
              errorMsg = "视频不存在或已被删除";
            } else if (
              errorMsg.indexOf("无权限") !== -1 ||
              errorMsg.indexOf("NO_AUTH") !== -1 ||
              status === 5002
            ) {
              errorMsg = "您没有权限修改此视频";
            } else if (
              errorMsg.indexOf("封禁") !== -1 ||
              errorMsg.indexOf("BANNED") !== -1 ||
              status === 5003
            ) {
              errorMsg = "视频已被封禁，无法修改私密状态";
            }

            uni.showToast({
              title: errorMsg,
              icon: "none",
              duration: 3000,
            });
          }
        },
        fail(err) {
          console.error("修改视频状态失败：", err);
          uni.showToast({
            title: "网络错误，请重试",
            icon: "none",
            duration: 3000,
          });
        },
      });
    },

    // 显示举报弹窗
    showReportDialog() {
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

      me.selectedReasonIndex = -1;
      me.reportDescription = "";
      me.$refs.reportPopup.open();
    },

    // 关闭举报弹窗
    closeReportDialog() {
      this.$refs.reportPopup.close();
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
        reportType: "1", // 1表示视频
        targetId: me.thisVlogId,
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
        url: serverUrl + "/report/vlog",
        data: reportData,
        success(result) {
          console.log("举报响应：", result);

          if (result.data.status == 200) {
            uni.showToast({
              title: "举报成功!",
              icon: "success",
              duration: 2000,
            });
            me.closeReportDialog();
            // 关闭分享弹窗
            me.close();
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

    // 编辑视频
    editVlog() {
      var me = this;

      // 检查是否登录
      var myUserInfo = getApp().getUserInfoSession();
      if (myUserInfo == null) {
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

      // 关闭分享弹窗
      me.close();

      // 跳转到编辑页面，传递 mode=edit 和 vlogId
      uni.navigateTo({
        url: "/pages/publish/publish?mode=edit&vlogId=" + me.thisVlogId,
        animationType: "slide-in-bottom",
      });
    },
  },
};
</script>
