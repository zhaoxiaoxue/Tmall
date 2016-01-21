window.onload=function(){
	$('.shabi').hover(function(){
		$(this).find('.xia').css({display:'block'})},
		function(){
		$(this).find('.xia').css({display:'none'})
	});

	$('.cao').hover(function(){
		$(this).find('.heik').show('fast','swing')},
		function(){
		$(this).find('.heik').hide('fast','swing')
	});

	$('.gdd').hover(function(){
		$(this).find('.sile').css({display:'block'})},
		function(){
		$(this).find('.sile').css({display:'none'})
	});

	$('.cheping').hover(function(){
		$('.cheping').stop().animate({marginRight: '20px'}, 'slow');
	},
	function(){
		$('.cheping').stop().animate({marginRight: '0px'}, 'slow')}
	)

	$('.zuo').hover(function(){
		$(this).stop().animate({marginRight: '2px'}, 100);
	},
	function(){
		$(this).animate({marginRight: '0px'}, 100)}
	)

	$('.sb img').hover(function(){
		$(this).animate({marginLeft: '5px'}, 100);
	},
	function(){
		$(this).animate({marginLeft: '0px'}, 100)}
	)

	$('.sp img').hover(function(){
		$(this).animate({marginLeft: '5px'}, 100);
	},
	function(){
		$(this).animate({marginLeft: '0px'}, 100)}
	)


  $('.youcee').each(function(i){
    $(this).data('index',i);
  });
  $('.youcee').click(function(){
    var i = $(this).data('index');
    var newtop = $( $('.content.zhutibf')[i] ).offset().top - 50;
    $({top: $(window).scrollTop()}).animate(
        {top: newtop},
        {
          duration: 700,
          step: function() {
            $(window).scrollTop(this.top);
          }        
        }
    );
  });

  $('.content.zhutibf').each(function(i){
    $(this).data('index',i);
  });
  $(window).scroll(function(){
    $('.content.zhutibf').hover(function(){
      var i=$(this).data('index');
      $($('.youcee')[i]).addClass(function(){
        return 'p'+i;
      });
      },
      function(){
        var i=$(this).data('index');
        $($('.youcee')[i]).removeClass(function(){
          return 'p'+i;
        });
      }
    );   
  });
  // $('.content.zhutibf').each(function(i){   
  //   if(i<10 $$ $(window).scrollTop()>=$($('.content.zhutibf')[i]).offset().top-150
  //     $$ $(window).scrollTop()<=$($('.content.zhutibf')[i+1]).offset().top-150){
  //     $($('.youcee')[i]).addClass('p'+i);
  //   }else{
  //     $($('.youcee')[i]).removeClass('p'+i);
  //   }
  //   if(i>=10 $$ $(window).scrollTop()>=$($('.content.zhutibf')[i]).offset().top-150){
  //     $($('.youcee')[10]).addClass(function(){
  //       return 'p'+10;
  //     });
  //     return;
  //   }else{
  //     $($('.youcee')[i]).removeClass('p'+i);
  //   }
  // });

  var arr1=['#ffe1f1','#ffe1f1','#FA412D','#dfdfdf','#ffc0d3','#3288df','#ffa800',
  '#d7ac82','#dd2726','#24a6da','#ffc5d4','#29a6ff','#e4e3e2','#4a8cfc',
  '#30c4ff','#d58668'];
  $('.gdd').each(function(i){
    $(this).data('index',i);
  });
  $('.fenlei-q').hover(function(){
    clearInterval(timerId);
    $('.gdd').hover(function(){
      $('.dak').hide();
      $('.biao').hide();    
      var i=$(this).data('index');            
      $('.xiaos').hide();
      $('.wanbiao.yingc').show();
      $($('.xiaos')[i]).show();
      $('.fenlei').css({background:arr1[i]});
      $('.yingcaa').hide();
      $('.yingcaa1').hide();
      $($('.yingcaa1')[i]).show();
    },function(){
      var i=$(this).data('index');
      $($('.xiaos')[i]).show();
      $($('.yingcaa1')[i]).show();
      $('.fenlei').css({background:arr1[i]});
    })
      
    },function(){
      var i=$(this).data('index');
      $($('.xiaos')[i]).show();
      $($('.yingcaa1')[i]).show();
      $('.fenlei').css({background:arr1[i]});
      $('.dak').show();
      $('.biao').show();
      $('.xiaos').hide();
      // $('.yingcaa1').hide();
      lunbo();
      timerId=setInterval(lunbo,1000);
    }
  );


		$(".shi").click(function(){
   			$({top: $(window).scrollTop()}).animate(
     	 	{top: 0},
     	 	{
        		duration: 700,
				step: function() {
	  		$(window).scrollTop(this.top);
				}
     		 }
   	 		);
  		});

		var timerId=setInterval(function(){
			if(document.body.scrollTop>=538&&document.body.scrollTop<=6967){
				$('.youce').show('slow','swing');
			}else{
				$('.youce').hide('slow','swing')
			}
		},500)
    var j=0;
		$('.uang').click(function(){
			j=$('.uang').index(this);
			$('.uang').removeClass('dapai');
			$(this).addClass('dapai');
			$('.remen-tu3').hide();
			$($('.remen-tu3')[j]).show();
		});

    
		$('#huang').click(function(){
      var dict={};
      var arr3=[];
      var b=0;
      var a=$($('.remen-tu3')[j]).find('li a img');
      for(var i=0;i<a.length;i++){
        arr3.push(a[i].src);
      };
      while(b<a.length){
        var c=Math.floor(Math.random()*24);
        if(dict[arr3[c]]){
          c=Math.floor(Math.random()*24);
        }else{
          dict[arr3[c]]=true;
          b++;
        }        
      }

      var d=0;
      for(var name in dict){
        a[d].src=name;
        d++;
      }
    });


		// $('.dak').find('.xiaok:first').show();
		// var aa=$('.xiaok:first');
		// var m=0;
		// var timed=setInterval(function(){
		// 	m++;
		// 	aa.hide();
		// 	$($('.xiaok')[m]).show();
		// 	aa=$($('.xiaok')[m]);
		// 	if(m>4){m=-1};
		// 	console.log(m)
		// },2000)
		

	var index = 0;
	var arr=['#fb4463','#fcf3f8','#ff7E0f','#1271b3','rgb(252, 94, 49)','rgb(217, 217, 217)'];
 	var lunbo  =  function(){
    $('.xiaok').hide();
    var el = $('.xiaok')[index];
    $(el).show();

    $('.yingcaa').hide();
    var el2=$('.yingcaa')[index];
    $(el2).show();

    $('.fenlei').css({background:arr[index]});
    
    $('.biaodian').removeClass('redd');
    $($('.biaodian')[index]).addClass('redd');

    index += 1;
    if( index === $('.xiaok').length ){
      index = 0;
    }
  }
  $('.biaodian').each(function(i){
    $(this).data('index',i)
  });

  $('.biaodian').hover(function(){
    clearInterval(timerId);
    $('.biaodian').removeClass('redd');
    $(this).addClass('redd');

    var i = $(this).data('index');
    $('.fenlei').css({background:arr[i]});
    $('.xiaok').hide();
    $( $('.xiaok')[i] ).show();

    $('.yingcaa').hide();
    $( $('.yingcaa')[i] ).show();

    index = i;
  },function(){
    clearInterval(timerId);
    timerId = setInterval(lunbo,1000);
  });
  var timerId = setInterval(lunbo,1000);



// -----------------------------小轮播------------------------
	var index_one = 0;
 	var lunbo_one  =  function(){
    $('.one').hide();
    var el = $('.one')[index_one];
    $(el).show();
    index_one += 1;
    if( index_one == $('.one').length ){
      index_one = 0;
    }
  }
// ----------------------箭头-------------------------------------
  $('.one').each(function(i){
    $(this).data('index',i)
  });
  var i = $('.one').data('index');
  $('.jiantou_one').click(function(){
    clearInterval(timerId_one);
    $('.one').hide();
    $( $('.one')[i] ).show();
    i++;
    if(i>2){i=0}
  })

  $('.jiantou_onel').click(function(){
    clearInterval(timerId_one);
    $('.one').hide();
    $( $('.one')[i] ).show();
    i--;
    if(i<0){i=2}
  })

  $('.jiantou').mouseout(function(){
    clearInterval(timerId_one);
    timerId_one = setInterval(lunbo_one,1000);
  })
    var timerId_one = setInterval(lunbo_one,1000);

// -----------------------------二---------------------------
  var index_two = 0;
 	var lunbo_two  =  function(){
    $('.two').hide();
    var el = $('.two')[index_two];
     $(el).show();
    index_two += 1;
    if( index_two == $('.two').length ){
      index_two = 0;
    }
  }

  $('.two').each(function(i){
    $(this).data('index',i)
  });
  var i = $('.two').data('index');
  $('.jiantou_two').click(function(){
    clearInterval(timerId_two);
    $('.two').hide();
    $( $('.two')[i] ).show();
    i++;
    if(i>2){i=0}
  })

  $('.jiantou_twol').click(function(){
    clearInterval(timerId_two);
    $('.two').hide();
    $( $('.two')[i] ).show();
    i--;
    if(i<0){i=2}
  })

  $('.jiantou').mouseout(function(){
    clearInterval(timerId_two);
    timerId_two = setInterval(lunbo_two,1000);
  })
    var timerId_two = setInterval(lunbo_two,1000);
// -----------三--------------------------------------------------

  var index_three = 0;
 	var lunbo_three  =  function(){
    $('.three').hide();
    var el = $('.three')[index_three];
     $(el).show();
    index_three += 1;
    if( index_three == $('.three').length ){
      index_three = 0;
    }
  }

  $('.three').each(function(i){
    $(this).data('index',i)
  });
  var i = $('.three').data('index');
  $('.jiantou_three').click(function(){
    clearInterval(timerId_three);
    $('.three').hide();
    $( $('.three')[i] ).show();
    i++;
    if(i>2){i=0}
  })

  $('.jiantou_threel').click(function(){
    clearInterval(timerId_three);
    $('.three').hide();
    $( $('.three')[i] ).show();
    i--;
    if(i<0){i=2}
  })

  $('.jiantou').mouseout(function(){
    clearInterval(timerId_three);
    timerId_three = setInterval(lunbo_three,1000);
  })
    var timerId_three = setInterval(lunbo_three,1000);

// ----------------四-----------------------------------
  var index_four = 0;
 	var lunbo_four  =  function(){
    $('.four').hide();
    var el = $('.four')[index_four];
     $(el).show();
    index_four += 1;
    if( index_four == $('.four').length ){
      index_four = 0;
    }
  }

  $('.four').each(function(i){
    $(this).data('index',i)
  });
  var i = $('.four').data('index');
  $('.jiantou_four').click(function(){
    clearInterval(timerId_four);
    $('.four').hide();
    $( $('.four')[i] ).show();
    i++;
    if(i>2){i=0}
  })

  $('.jiantou_fourl').click(function(){
    clearInterval(timerId_four);
    $('.four').hide();
    $( $('.four')[i] ).show();
    i--;
    if(i<0){i=2}
  })

  $('.jiantou').mouseout(function(){
    clearInterval(timerId_four);
    timerId_four = setInterval(lunbo_four,1000);
  })
    var timerId_four = setInterval(lunbo_four,1000);


// ---------------------------------五-------------------------------
  var index_five = 0;
 	var lunbo_five  =  function(){
    $('.five').hide();
    var el = $('.five')[index_five];
     $(el).show();
    index_five += 1;
    if( index_five == $('.five').length ){
      index_five = 0;
    }
  }

  $('.five').each(function(i){
    $(this).data('index',i)
  });
  var i = $('.five').data('index');
  $('.jiantou_five').click(function(){
    clearInterval(timerId_five);
    $('.five').hide();
    $( $('.five')[i] ).show();
    i++;
    if(i>2){i=0}
  })

  $('.jiantou_fivel').click(function(){
    clearInterval(timerId_five);
    $('.five').hide();
    $( $('.five')[i] ).show();
    i--;
    if(i<0){i=2}
  })

  $('.jiantou').mouseout(function(){
    clearInterval(timerId_five);
    timerId_five = setInterval(lunbo_five,1000);
  })
    var timerId_five = setInterval(lunbo_five,1000);

// -------------------------------六-------------------------------------
  var index_six = 0;
 	var lunbo_six  =  function(){
    $('.six').hide();
    var el = $('.six')[index_six];
     $(el).show();
    index_six += 1;
    if( index_six == $('.six').length ){
      index_six = 0;
    }
  }
  $('.six').each(function(i){
    $(this).data('index',i)
  });
  var i = $('.six').data('index');
  $('.jiantou_six').click(function(){
    clearInterval(timerId_six);
    $('.six').hide();
    $( $('.six')[i] ).show();
    i++;
    if(i>2){i=0}
  })

  $('.jiantou_sixl').click(function(){
    clearInterval(timerId_six);
    $('.six').hide();
    $( $('.six')[i] ).show();
    i--;
    if(i<0){i=2}
  })

  $('.jiantou').mouseout(function(){
    clearInterval(timerId_six);
    timerId_six = setInterval(lunbo_six,1000);
  })
    var timerId_six = setInterval(lunbo_six,1000);
 

var ti;
  $(window).scroll(function(){
    if($(window).scrollTop() > 300){
      clearTimeout(ti);
      ti = setTimeout(function(){
	$('.fixtop').show();
      },500);
    }else{
      clearTimeout(ti);
      $('.fixtop').hide();
    };
  });
 
  $('.sousuo-k').click(function(){
    if($(this).val()!=''){
      $(this).focus(function(){
        $(this).css({boxShadow:'none'});
      });
      $(this).val('');
    }else{
      $(this).blur();
      $(this).val('天猫！搜你想要');
    }
       
  });   

document.onmousedown=function(e){
	e.preventDefault();
}
}
