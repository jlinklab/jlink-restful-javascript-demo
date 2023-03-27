<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
    #app{
        width: 500px;
    }
    .content {
        padding: 20px;
    }
    h3{
        text-align: center;
        padding: 10px 0;
    }
    label{
        display: flex;
        align-items: center;
        padding: 4px 20px;
    }
    label span{
        flex: 1;
        padding-right:10px;
        text-align: right;
    }
    label input{
        flex: 3;
        padding: 8px;
        border: 1px solid #EEE;
    }
    label button{
        width: 100%;
    }
    .item{
        display: inline-block;
        float: left;
        width: 40%;
        margin: 2%;
        background:#cededf;
        padding:2%;
    }
    .popup {
        position: fixed;
        top: calc(50% - 50px);
        left: calc(50% - 50px);
        width: 100px;
        height: 100px;
        background: rgba(0, 0, 0, 0.75);
        text-align: center;
        line-height: 100px;
        color: white;
    }
    view button {
        margin: 10px 0;
    }
</style>
