<template>
	<div class="reg-page">
		<mu-text-field label="用户名" hintText="用户名为必填项" type="text" labelFloat v-model="username"/><br/>
		<mu-text-field label="密码" hintText="请输入密码" type="password" labelFloat v-model="password"/><br/>
		<p class="err-msg">{{msg}}</p>
		<mu-raised-button label="REGISTER" class="demo-raised-button reg-btn" primary @click="register"/>
	</div>
</template>

<script type="text/javascript">
	import axios from 'axios';
	export default{
		name:"register",
		data(){
			return {
				username:'',
				password:'',
				apiUrl:'http://127.0.0.1:5000/reg',
				msg:''
			}
		},
		methods:{
			register(){
				if(this.username=='' || this.password ==''){
					this.msg = '请填写正确的用户名和密码';
					return false;
				}
				var info = {
					"username": this.username,
					"password": this.password
				}
				// this.$http.post(this.apiUrl, info, {
				// 	headers:{
				// 		'Content-Type': 'application/json; charset=UTF-8'
				// 	}
				// }).then((res)=>{
				// 	if(res.body.errcode){
				// 		_that.msg = res.body.msg
				// 	}else{
				// 		_that.$router.push({ path: 'login', query: { users: this.username }})
				// 	}
				// },(err)=>{
				// 	console.warn(err.code)
				// })
				axios.post(this.apiUrl,info,{
					headers:{
						'Content-Type': 'application/json; charset=UTF-8'
					}
				})
				.then((res)=>{
					if(res.data.errcode){
						this.msg = res.data.msg
						return false;
					}
					this.$router.push({path:'Login', query:{users:this.username}})
				})
				.catch((err)=>{
					console.log(err.code)
				})
			},
		}
	}
</script>
<style lang="scss">
@import "../assets/common.scss";
.reg-page{
	@include add-padding(30px, 0px,30px,0px)

	.reg-btn{
		@include add-margin(30px,0px,30px,0px)
	}
	.err-msg{
		color:$red;
	}
}
</style>