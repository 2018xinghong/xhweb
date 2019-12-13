/**
 * Created with IntelliJ IDEA.
 * User: qiaoshuyi
 * Date: 14-12-18
 * Time: 下午8:01
 * To change this template use File | Settings | File Templates.
 */

//判断值是否为空
function isEmpty(val){
    if(val.length == 0){
        return true;
    }else{
        return false;
    }
}

//验证输入字符长度
function gtLength(val, maxlength){
    var curlength = val.realLength();
    if(curlength > maxlength){
        return true;
    }else{
        return false;
    }
}

//扩展length方法，非ASCII码为两个字符
String.prototype.realLength = function(){
    return this.replace(/[^\x00-\xff]/g, "**").length;
}

//去掉首尾空格回车换行
function trimUtil(val){
//    val = val.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
//    val = val.replace(/(^\s*)|(\s*$)/g,'');
//    val = val.replace(/(^\r*)|(\r*$)|(^\n*)|(\n*$)/g,'');
//    val = val.replace(/\n/g,'<br>');
    val = val.replace(/(^\s*)|(\s*$)/g,'');
    val = val.replace(/(^\r*)|(\r*$)|(^\n*)|(\n*$)/g,'');
    return val;
}

function replaceUtil(val){
    return val.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/\n/g,'<br>');
}

function replaceReUtil(val){
    return val.replace(/<br>/g,'\n').replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&amp;/g,'&');
}
//获取url参数
function getUrlParam(name){
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r != null) return unescape(r[2]); return null; //返回参数值
}

function formatDate2String(time){
    var date = "";
    date = date + time.getFullYear() +"-";
    if(time.getMonth()<9){
        date = date + "0"+(time.getMonth()+1)+"-";
    }else{
        date = date + (time.getMonth()+1)+"-";
    }
    if(time.getDate()<10){
        date = date + "0"+time.getDate();
    }else{
        date = date + time.getDate();
    }
    return date;
}

function formatDate2StringNextDay(time,day){
    var date = "";
    time.setDate(time.getDate()+day);
    date = date + time.getFullYear() +"-";
    if(time.getMonth()<9){
        date = date + "0"+(time.getMonth()+1)+"-";
    }else{
        date = date + (time.getMonth()+1)+"-";
    }
    if(time.getDate()<10){
        date = date + "0"+time.getDate();
    }else{
        date = date + time.getDate();
    }
    return date;
}
function attention(title,content,btntxt){
    jqm.alert({
        w:430,
        title:title,
        type:'alert',
        content:content,
        retrieveTop:function(h){
            var modalHeight = h.find('.tl').height()+h.find('.moadalCon').height()+h.find('.modalFooter').height();
            return (window.screen.height - modalHeight)*0.5-150;
        }
    })
    $('#jqmAlertBtn span').text(btntxt);
}

function jqmConfirm(content,confirmFun,cancelFun,btntxt1,btntxt2){
    var self = this;
    jqm.confirm({
        w:400,
        title:'提示',
        content:content,
        self:self,
        onConfirm:function(){
            if(confirmFun){
                confirmFun();
            }
        },
        onClose:function(){
            if(cancelFun){
                cancelFun();
            }
        }
    });
    $('.modal .fakeMsg').css('text-align','center');
    $(".btn-m").html(btntxt1?btntxt1:'确定');
    $(".btn-s").html(btntxt2?btntxt2:'取消');
}
function secondToDate(result) {
    var h = Math.floor(result / 3600);
    var m = Math.floor((result / 60 % 60));
    var s = Math.floor((result % 60));
    if(h == 0){
        h = '';
    }else if(h > 0){
        h = h + ":";
    }
    return result = h + m + ":" + s;
}
