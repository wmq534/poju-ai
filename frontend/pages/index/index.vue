<template>
	<view class="container">
		<view class="header">
			<image class="logo" src="/static/logo.png"></image>
			<view class="search-box">
				<input type="text" v-model="keyword" placeholder="搜索活动" @confirm="searchActivities" />
				<text class="search-icon" @click="searchActivities">🔍</text>
			</view>
		</view>
		
		<view class="banner">
			<image src="/static/logo.png" mode="aspectFill"></image>
			<view class="banner-text">
				<text class="banner-title">AI破局俱乐部</text>
				<text class="banner-desc">连接AI领域的创新者和实践者</text>
			</view>
		</view>
		
		<view class="section">
			<view class="section-header">
				<text class="section-title">热门活动</text>
				<text class="more" @click="navigateTo('/pages/activity/list')">查看更多 ></text>
			</view>
			<view class="activity-list">
				<view class="activity-card" v-for="(item, index) in hotActivities" :key="index" @click="navigateToDetail(item.id)">
					<image class="activity-image" :src="item.coverImage || '/static/logo.png'" mode="aspectFill"></image>
					<view class="activity-info">
						<text class="activity-title">{{item.title}}</text>
						<view class="activity-meta">
							<text class="activity-time">{{formatDate(item.startTime)}}</text>
							<text class="activity-location">{{item.location}}</text>
						</view>
						<view class="activity-status">
							<text class="price">{{item.price > 0 ? '¥' + item.price : '免费'}}</text>
							<text class="enrolled">已报名 {{item.enrolledCount}}/{{item.capacity}}</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		
		<view class="section">
			<view class="section-header">
				<text class="section-title">最新活动</text>
				<text class="more" @click="navigateTo('/pages/activity/list')">查看更多 ></text>
			</view>
			<view class="activity-list">
				<view class="activity-card" v-for="(item, index) in latestActivities" :key="index" @click="navigateToDetail(item.id)">
					<image class="activity-image" :src="item.coverImage || '/static/logo.png'" mode="aspectFill"></image>
					<view class="activity-info">
						<text class="activity-title">{{item.title}}</text>
						<view class="activity-meta">
							<text class="activity-time">{{formatDate(item.startTime)}}</text>
							<text class="activity-location">{{item.location}}</text>
						</view>
						<view class="activity-status">
							<text class="price">{{item.price > 0 ? '¥' + item.price : '免费'}}</text>
							<text class="enrolled">已报名 {{item.enrolledCount}}/{{item.capacity}}</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		
		<view class="tab-bar">
			<view class="tab-item active">
				<text class="tab-icon">🏠</text>
				<text class="tab-text">首页</text>
			</view>
			<view class="tab-item" @click="navigateTo('/pages/activity/list')">
				<text class="tab-icon">📅</text>
				<text class="tab-text">活动</text>
			</view>
			<view class="tab-item" @click="navigateTo('/pages/user/index')">
				<text class="tab-icon">👤</text>
				<text class="tab-text">我的</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				keyword: '',
				hotActivities: [],
				latestActivities: []
			}
		},
		onLoad() {
			this.loadHotActivities();
			this.loadLatestActivities();
		},
		methods: {
			loadHotActivities() {
				// 模拟数据，实际项目中应该从API获取
				this.hotActivities = [
					{
						id: 1,
						title: 'AI大模型应用实战工作坊',
						coverImage: '/static/logo.png',
						startTime: '2023-12-15T14:00:00',
						location: '北京市海淀区中关村创业大厦',
						price: 199,
						capacity: 30,
						enrolledCount: 25
					},
					{
						id: 2,
						title: 'ChatGPT商业应用分享会',
						coverImage: '/static/logo.png',
						startTime: '2023-12-20T19:00:00',
						location: '线上直播',
						price: 0,
						capacity: 100,
						enrolledCount: 78
					}
				];
				
				// 实际API调用示例
				/*
				uni.request({
					url: 'http://localhost:8080/api/activities/hot',
					method: 'GET',
					success: (res) => {
						if (res.statusCode === 200) {
							this.hotActivities = res.data;
						}
					},
					fail: (err) => {
						console.error('获取热门活动失败', err);
						uni.showToast({
							title: '获取热门活动失败',
							icon: 'none'
						});
					}
				});
				*/
			},
			loadLatestActivities() {
				// 模拟数据，实际项目中应该从API获取
				this.latestActivities = [
					{
						id: 3,
						title: 'AI产品经理训练营',
						coverImage: '/static/logo.png',
						startTime: '2023-12-25T09:30:00',
						location: '上海市浦东新区张江高科技园区',
						price: 2999,
						capacity: 20,
						enrolledCount: 8
					},
					{
						id: 4,
						title: 'AI创业者交流会',
						coverImage: '/static/logo.png',
						startTime: '2023-12-30T14:00:00',
						location: '深圳市南山区科技园',
						price: 99,
						capacity: 50,
						enrolledCount: 12
					}
				];
			},
			formatDate(dateString) {
				if (!dateString) return '';
				const date = new Date(dateString);
				return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
			},
			navigateToDetail(id) {
				uni.navigateTo({
					url: `/pages/activity/detail?id=${id}`
				});
			},
			navigateTo(url) {
				uni.navigateTo({
					url
				});
			},
			searchActivities() {
				if (!this.keyword.trim()) return;
				uni.navigateTo({
					url: `/pages/activity/list?keyword=${encodeURIComponent(this.keyword)}`
				});
			}
		}
	}
</script>

<style>
.container {
	padding-bottom: 100rpx; /* 为底部导航栏留出空间 */
}

.header {
	display: flex;
	align-items: center;
	padding: 20rpx 30rpx;
	background-color: #FFFFFF;
}

.logo {
	width: 60rpx;
	height: 60rpx;
	margin-right: 20rpx;
}

.search-box {
	flex: 1;
	display: flex;
	align-items: center;
	background-color: #F5F5F5;
	border-radius: 30rpx;
	padding: 10rpx 20rpx;
}

.search-box input {
	flex: 1;
	height: 60rpx;
	font-size: 28rpx;
}

.search-icon {
	font-size: 40rpx;
	margin-left: 10rpx;
}

.banner {
	position: relative;
	width: 100%;
	height: 300rpx;
}

.banner image {
	width: 100%;
	height: 100%;
}

.banner-text {
	position: absolute;
	bottom: 30rpx;
	left: 30rpx;
	color: #FFFFFF;
	text-shadow: 0 2rpx 4rpx rgba(0,0,0,0.5);
}

.banner-title {
	font-size: 40rpx;
	font-weight: bold;
	display: block;
	margin-bottom: 10rpx;
}

.banner-desc {
	font-size: 28rpx;
}

.section {
	padding: 30rpx;
	background-color: #FFFFFF;
	margin-bottom: 20rpx;
}

.section-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 20rpx;
}

.section-title {
	font-size: 32rpx;
	font-weight: bold;
}

.more {
	font-size: 24rpx;
	color: #999999;
}

.activity-list {
	display: flex;
	flex-direction: column;
}

.activity-card {
	display: flex;
	margin-bottom: 30rpx;
	background-color: #FFFFFF;
	border-radius: 10rpx;
	overflow: hidden;
	box-shadow: 0 2rpx 10rpx rgba(0,0,0,0.05);
}

.activity-image {
	width: 200rpx;
	height: 200rpx;
	object-fit: cover;
}

.activity-info {
	flex: 1;
	padding: 20rpx;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}

.activity-title {
	font-size: 28rpx;
	font-weight: bold;
	line-height: 1.4;
	margin-bottom: 10rpx;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
	overflow: hidden;
}

.activity-meta {
	display: flex;
	flex-direction: column;
	margin-bottom: 10rpx;
}

.activity-time, .activity-location {
	font-size: 24rpx;
	color: #666666;
	margin-bottom: 6rpx;
}

.activity-status {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.price {
	font-size: 28rpx;
	color: #FF6600;
	font-weight: bold;
}

.enrolled {
	font-size: 24rpx;
	color: #999999;
}

.tab-bar {
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	height: 100rpx;
	background-color: #FFFFFF;
	display: flex;
	border-top: 1rpx solid #EEEEEE;
}

.tab-item {
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.tab-icon {
	font-size: 40rpx;
	margin-bottom: 6rpx;
}

.tab-text {
	font-size: 24rpx;
	color: #999999;
}

.tab-item.active .tab-text {
	color: #007AFF;
}
</style>
