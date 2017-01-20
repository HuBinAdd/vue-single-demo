//切换城市
var 
lyBtn={
	initialize:function(){//用于存放标签对象以及调用基础函数
		this.btn=$('.ly-btn'); 
		this.layer=$('.layer');
		this.content=$('.layer-ly',this.layer);
		this.time=$('.red',this.content);
		this.startTime=3;//开始时间
		this.initEvent();//为标签绑定事件函数 
	}, 
	initEvent:function(){ 
		this.btn.on('click',this.bodyScroll.bind(this)); 
	},
	bodyScroll:function(e){
		this.setStartT();//初始化开始时间
	    this.layer.show();
	    this.interval();
	},
	setStartT:function(){
		this.time.html(this.startTime);
	},
	interval:function(){
		this.setStartT();
		if(!this.startTime){
			alert("要跳转了");
			return ;
		}
		this.clearIn = setTimeout(function(){
			this.startTime--;
	    	this.interval();
		}.bind(this),1000);
	}
},
banner={
	initialize:function(){//用于存放标签对象以及调用基础函数		
        var swiper = new Swiper('.banner-box', {
            pagination: '.banner-dian',
            paginationClickable: true
        });
	}
},
xheNav={
	initialize:function(){//用于存放标签对象以及调用基础函数
		this.navs=$('.xc-baod-tabs'); 
		this.nav=$('li',this.navs);
		this.startTime=3;//开始时间
		this.initEvent();//为标签绑定事件函数 
	}, 
	initEvent:function(){
		this.navs.width(this.nav.length * 1.87 + "rem");
		if(this.nav.length > 4){
			this.navs.addClass('animate');
		}
	}

},
rotJiaxiao={
	initialize:function(){
		this.btn = $('#get-jiax-n10');
		this.box = this.btn.prev('.jxlb-lists');
		this.list = $('.jxlb-list',this.box);
		this.dbClickHtml='查看更多驾校';
		this.isFClick = false;
		this.initEvent();//为标签绑定事件函数 
	}, 
	initEvent:function(){
		var that = this;
		this.btn.click(function(event) {
			if(!that.isFClick){
				that.box.height( 1.49 * that.list.length + 'rem');
				that.btn.html(that.dbClickHtml);
				that.isFClick = true;
			}else{
				alert('我跳转');
			}
		});
	}
},
jxRadio={
	initialize:function(){
		this.box = $('.jxxp-baom-list');
		this.input = $('input',this.box);
		this.form  = $('#jxxp-form1');
		this.dbClickHtml='查看更多驾校';
		this.isFClick = false;
		this.initEvent();//为标签绑定事件函数 
	}, 
	initEvent:function(){
		var bool = false;
		this.input.forEach(function(that){
			if($(that).prop('checked')){
				bool = true;
				$(that).parents('.jxxp-baom-list').addClass('active');
			}
		});
		this.setHeight(bool);
		this.input.on('change',this.clickBox.bind(this));
	},
	clickBox:function(e){
		var $that=$(e.currentTarget);
		this.box.removeClass('active');
		if($that.prop('checked')){
			$that.parents('.jxxp-baom-list').addClass('active');
		}
		this.setHeight(true);
	},
	setHeight:function(bool){		
		if(bool){
			this.form.show();
		};
	}
},
lockMorejj={
	initialize:function(){
		this.more = $('#lock_more');
		this.box = $('.jxxp-jiax-jj');
		this.showHtml='收起简介';
		this.hideHtml='查看全部';
		this.initEvent();//为标签绑定事件函数 
	}, 
	initEvent:function(){
		var that = this;
		this.more.click(function(event) {
			if(that.more.html() == that.showHtml){
				that.box.removeClass('active');
				that.more.html(that.hideHtml);
			}else{
				that.box.addClass('active');
				that.more.html(that.showHtml);
			}
		});
	}
},
jiaoxXQPhone={
	initialize:function(){
		this.open = $('.jxxp-footer .phone');
		this.layer = $('.xq-phone');
		this.close = $('.close',this.layer);
		this.initEvent();
	}, 
	initEvent:function(){
		var that = this;
		this.open.click(function(event) {
			that.layer.show();
		});
		this.close.click(function(event) {
			that.layer.hide();
		});
	}
},
jiaoxList={
	initialize:function(){
		this.form = $('#form')[0];
		this.headerList=$('.jxld-header li');
		this.box=$('.jxld-sx-box');
		this.footer=$('.jxld-sx-footer',this.box);
		this.reset=$('.close',this.footer);
		this.search=$('.sx-search',this.footer);

		this.content=$('.jxlb-lists');
		this.more=$('.jiaox-list-more');
		this.page = 1;//默认页码
		this.PAGE_NUMBER=5;//默认每页数据条数
		this.initEvent();

	}, 
	initEvent:function(){
		this.more.on('click',this.clickMore.bind(this));
		this.headerList.on('click',this.listClick.bind(this));
		this.search.on('click',this.searchClick.bind(this));
		this.reset.on('click',this.resetClick.bind(this));

	},
	clickMore:function(){
		this.page++;
		var params = $.extend({page: this.page,pageNumber:this.PAGE_NUMBER},this.params);
		// $.ajax({
		// 	url: '/path/to/file',
		// 	type: 'POST',
		// 	dataType: 'json',
		// 	data: params,
		// 	success:function(data, status, xhr){
		// 		this.setHtml(data);
		// 	},
		// 	error:function(data, status, xhr){

		// 	},
		// 	complete:function(data, status, xhr){

		// 	}
		// });
		
		this.setHtml([1,2,3,4,5]);
	},
	listClick:function(e){
		var $this=$(e.currentTarget),index = $this.index();
		this.headerList.removeClass('active');
		$this.addClass('active');
		switch (index){
			case 0:
				this.box.hide();
				this.searchAjax('推荐');
			break;
			case 1:
				this.box.hide();
				this.searchAjax('练车近');
			break;
			case 2:
				this.box.hide();
				this.searchAjax('学费低');
			break;
			case 3:
				this.box.hide();
				this.searchAjax('评价好');
			break;
			case 4:
				this.setSearchBox();
			break;
		}
	},
	searchClick:function(){
		this.getSearchData();		
		this.box.hide();
	},
	resetClick:function(){
		this.form.reset();
	},
	setSearchBox:function(){
		this.box.show();
	},
	getSearchData:function(){
		console.log('我要获得筛选条件');
		this.searchAjax('我是筛选数据');
	},
	searchAjax:function(data){
		console.log(data);
		this.content.html('');
		this.page = 0;
		this.params = data;//存放全局搜索条件
		this.clickMore();
	},
	setHtml:function(datas){
		var html = [];
		datas.forEach(function(data){
			html.push('<li class="jxlb-list">');
				html.push('<div class="jxlb-list-img">');
					html.push('<img src="images/jl-list-1.jpg">');
				html.push('</div>');
				html.push('<div class="jxlb-list-header">');
					html.push('<span class="jxlb-header-span">1217学车</span>');
					html.push('<div class="jxlb-xx-lists">');
						html.push('<span class="jxlb-xx-list">');
							html.push('<i class="icon-jll-xx-bg" style="width: 100%;"></i>');
							html.push('<i class="icon-jll-xx-1 iconfont"></i>');
						html.push('</span>');
						html.push('<span class="jxlb-xx-list">');
							html.push('<i class="icon-jll-xx-bg" style="width: 100%;"></i>');
							html.push('<i class="icon-jll-xx-1 iconfont"></i>');
						html.push('</span>');
						html.push('<span class="jxlb-xx-list">');
							html.push('<i class="icon-jll-xx-bg" style="width: 100%;"></i>');
							html.push('<i class="icon-jll-xx-1 iconfont"></i>');
						html.push('</span>');
						html.push('<span class="jxlb-xx-list">');
							html.push('<i class="icon-jll-xx-bg" style="width: 100%;"></i>');
							html.push('<i class="icon-jll-xx-1 iconfont"></i>');
						html.push('</span>');
						html.push('<span class="jxlb-xx-list">');
							html.push('<i class="icon-jll-xx-bg"></i>');
							html.push('<i class="icon-jll-xx-1 iconfont"></i>');
						html.push('</span>');
						html.push('<span class="jxlb-xx-fs">4.0</span>');
					html.push('</div>');
				html.push('</div>');
				html.push('<p class="confines">招生范围：东方高新科技园、文三路、城西</p>');
				html.push('<div class="money"><strong>4580</strong>元起（暑期大促中）</div>');
			html.push('</li>');			
		});
		this.content.append(html.join(''));
	}	
},
jiaoLList={
	initialize:function(){
		this.content=$('.jxlb-lists');
		this.more=$('.jiaox-list-more');
		this.page = 1;//默认页码
		this.PAGE_NUMBER=5;//默认每页数据条数
		this.initEvent();

	}, 
	initEvent:function(){
		this.more.on('click',this.clickMore.bind(this));

	},
	clickMore:function(){
		this.page++;
		var params = $.extend({page: this.page,pageNumber:this.PAGE_NUMBER},this.params);
		// $.ajax({
		// 	url: '/path/to/file',
		// 	type: 'POST',
		// 	dataType: 'json',
		// 	data: params,
		// 	success:function(data, status, xhr){
		// 		this.setHtml(data);
		// 	},
		// 	error:function(data, status, xhr){

		// 	},
		// 	complete:function(data, status, xhr){

		// 	}
		// });
		
		this.setHtml([1,2,3,4,5]);
	},
	setHtml:function(datas){
		var html = [];
		datas.forEach(function(data){
			html.push('<li class="jxlb-list">');
				html.push('<div class="jxlb-list-img">');
					html.push('<img src="images/jl-list-1.jpg">');
				html.push('</div>');
				html.push('<div class="jxlb-list-header">');
					html.push('<span class="jxlb-header-span">1217学车</span>');
					html.push('<div class="money"><strong>4580</strong>元起</div>');
				html.push('</div>');
				html.push('<div class="jxlb-xx-lists">');
						html.push('<span class="jxlb-xx-list">');
							html.push('<i class="icon-jll-xx-bg" style="width: 100%;"></i>');
							html.push('<i class="icon-jll-xx-1 iconfont"></i>');
						html.push('</span>');
						html.push('<span class="jxlb-xx-list">');
							html.push('<i class="icon-jll-xx-bg" style="width: 100%;"></i>');
							html.push('<i class="icon-jll-xx-1 iconfont"></i>');
						html.push('</span>');
						html.push('<span class="jxlb-xx-list">');
							html.push('<i class="icon-jll-xx-bg" style="width: 100%;"></i>');
							html.push('<i class="icon-jll-xx-1 iconfont"></i>');
						html.push('</span>');
						html.push('<span class="jxlb-xx-list">');
							html.push('<i class="icon-jll-xx-bg" style="width: 100%;"></i>');
							html.push('<i class="icon-jll-xx-1 iconfont"></i>');
						html.push('</span>');
						html.push('<span class="jxlb-xx-list">');
							html.push('<i class="icon-jll-xx-bg"></i>');
							html.push('<i class="icon-jll-xx-1 iconfont"></i>');
						html.push('</span>');
						html.push('<span class="jxlb-xx-fs">4.0</span>');
					html.push('</div>');
				html.push('<p class="confines">招生范围：东方高新科技园、文三路、城西</p>');
			html.push('</li>');			
		});
		this.content.append(html.join(''));
	}	
},
jangcShow={
	initialize:function(){
		this.box=$('.cjwt-lists');
		this.list=$('li',this.box);
		this.initEvent();

	}, 
	initEvent:function(){
		this.list.on('click',this.listClick.bind(this));
	},
	listClick:function(e){
		var $that=$(e.currentTarget);
		this.list.removeClass('active');
		$that.addClass('active');

	}
},
pinjiaXX={
	initialize:function(){
		this.box=$('.piJiao-xx-list');
		this.list=$('li',this.box);
		this.initEvent();

	}, 
	initEvent:function(){
		this.list.on('singleTap',this.listClick.bind(this));
	},
	listClick:function(e){
		var $that=$(e.currentTarget),bool=false;
		$that.parent().children().each(function(index, el) {
			if(bool){
				$(this).removeClass('active');
			}else{
				$(this).addClass('active');
			}
			if($(this)[0] == $that[0]){
				bool=true;	
			}
		});


	}
},
weixFxiang={
	initialize:function(){
		this.btn=$('.weix-fengx');
		this.layer=$('.weix-layer');
		this.initEvent();
	}, 
	initEvent:function(){
		this.btn.on('click',this.btnClick.bind(this));
		this.layer.on('click',this.layerClick.bind(this));
	},
	btnClick:function(e){
		this.layer.show();

	},
	layerClick:function(e){
		this.layer.hide();
	}
},
// 练题模式弹出层
answerLayer={
	initialize:function(){
		this.btn = $('.col-hg-4','.answer-footer');
		this.layer = $('.layer');
		this.list = $('.layer-answer-lists li',this.layer);
		this.initEvent();
	},
	initEvent:function(){
		this.btn.on('click',this.btnClick.bind(this));
		this.layer.on('click',this.hideLayer.bind(this));
	},
	btnClick:function(e){
		var $that = $(e.currentTarget),index = $that.index();
		if(index != 1){
			$that.toggleClass('active');
		}else{
			this.layer.show();
		}
	},
	hideLayer:function(){
		this.layer.hide();
	}
},
// 练题模式弹出层
simulationLayer={
	initialize:function(){
		this.btn = $('.col-hg-3','.answer-footer');
		this.layer = $('.layer');
		this.content = this.layer.children();
		this.close = $('.go',this.layer);
		this.list = $('.layer-answer-lists li',this.layer);
		this.initEvent();
	},
	initEvent:function(){
		this.btn.on('click',this.btnClick.bind(this));
		this.layer.on('click',this.hideLayer.bind(this));
		this.close.on('click',this.hideLayer.bind(this));
		this.content.on('click',this.contentClick.bind(this));
	},
	btnClick:function(e){
		var $that = $(e.currentTarget),index = $that.index();
		if(index == 2){
			this.layer.show();
		}
	},
	hideLayer:function(){
		this.layer.hide();
	},
	contentClick:function(e){
		e.stopPropagation();
	}
},
//改变时间
simulationTime={
	initialize:function(){
		this.box = $('.time','.answer-footer');
		this.DURATION = 1;//单位：分钟
		this.DURATION = this.DURATION * 60;//转化为秒
		this.ENDTIME = Math.floor((new Date().getTime() + this.DURATION*1000)/1000);//单位：秒
		this.initEvent();
	},
	initEvent:function(){
		var that = this,
			time = that.ENDTIME - Math.floor(new Date().getTime()/1000),//单位：秒
			minutes = Math.floor(time/60),
			seconds = time%60;
			seconds = seconds > 9?seconds:('0' + seconds);//解决0问题
		this.box.html(minutes + ':' + seconds);
		if(!minutes && !(seconds-0)){
			alert('时间到');
			return;
		}
		setTimeout(function(){
			that.initEvent();
		},1000);
	}
},
// 全真模拟弹出层
examinationLayer={
	initialize:function(){
		this.btn = $('.examination-btn');
		this.layer = $('.layer');
		this.initEvent();
	},
	initEvent:function(){
		this.btn.on('click',this.btnClick.bind(this));
		this.layer.on('click',this.closeLayer.bind(this));
	},
	btnClick:function(e){
		this.layer.show();
	},
	closeLayer:function(){
		this.layer.hide();
	}
},
subjectsMore={
	initialize:function(){
		this.win = $(window);
		this.moreTip = $('.subjects-more-tip');
		this.defaultScrollTop = 0;
		this.isMore = true;
		this.isUp = false;
		this.WIN_HEIGHT = $(document).height();
		this.WIN_HEIGHT = this.WIN_HEIGHT - $(window).height();
		this.initEvent();
	},
	initEvent:function(){
		this.win.on('scroll',this.winScroll.bind(this));
	},
	winScroll:function(e){
		if(this.win.scrollTop() > this.defaultScrollTop){
			this.isUp = true;
		}else{
			this.isUp = false;			
		}
		this.defaultScrollTop = this.win.scrollTop();

		if(this.WIN_HEIGHT - this.win.scrollTop() < 135 && this.isMore && this.isUp){
			this.moreTip.show();
			this.isMore = false;
			alert('加载AJAX');
		}
	}
},
analysisShow={
	initialize:function(){
		this.btn = $('.analysis-btn');
		this.content = $('.answer-content');
		this.initEvent();
	},
	initEvent:function(){
		this.btn.on('click', this.btnClick.bind(this));
	},
	btnClick:function(e){
		var next = $(e.currentTarget).parent().next()[0];
		this.content.forEach(function(a){
			if(a == next){
				$(a).toggle();
			}else{
				$(a).hide();
			}
		})
	}
},
verifyCode = {
	initialize:function(){
		this.btn = $('.btn-code');
		this.TIME = 60;
		this.END_HTML = '重新发送';
		this.initEvent();
	},
	initEvent:function(){
		var that = this;
		this.btn.on('click',function(e){
			if(that.TIME == 60){
				that.btnClick.bind(that)(e);
			}
		});
	},
	btnClick:function(e){
		var that = this;
		this.TIME--;

		if(this.TIME > 0){
			this.btn.html((that.TIME > 9?that.TIME:'0'+that.TIME) +'后重新发送');
		}else{
			this.btn.html('重新发送');
			this.TIME = 60;
			return false;
		}

		setTimeout(function(){
			that.btnClick.bind(that)(e);
		},1000);
	}
},
likedsmall={
	initialize:function(){
		this.btn=$('.col-hg-6:nth-child(2)','.card-operate');
		this.initEvent();
	}, 
	initEvent:function(){
		this.btn.on('singleTap',this.btnClick.bind(this));
	},
	btnClick:function(e){
		var $that=$(e.currentTarget);
		if($that.hasClass('active')){
			$that.removeClass('active');
			$that.removeClass('pulse');
		}else{
			$that.addClass('active');
			$that.addClass('pulse');
		}
	}
};