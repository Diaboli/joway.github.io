function uptoken(e,i){var n=new qiniu.rs.PutPolicy(e+":"+i);return n.token()}function uploadFile(e,i,n){var t=new qiniu.io.PutExtra;qiniu.io.putFile(e,i,n,t,function(e,i){e?console.log(e):console.log("upload success : ",i.hash,i.key)})}function getFilenameSuffix(e){if(".DS_Store"==e)return".DS_Store";if(null==e||0==e.length)return null;var i=/\.[^\.]+/.exec(e);return null==i?null:(i+"").toLowerCase()}const fs=require("fs"),path="../../dist/images";var qiniu=require("qiniu");qiniu.conf.ACCESS_KEY="zeDw8a27RIDTr9PLkYZeqDZuB0Ruw4WqJ5uiAsz8",qiniu.conf.SECRET_KEY="WpqSk-iE5gVh_nwxrEzJW0EGqY2n9r67774KXRwH",bucket="hexo",fs.readdir(path,function(e,i){if(!e){var n=[];!function t(e){return e==i.length?void fs.writeFile("./output.json",JSON.stringify(n,null,"	")):void fs.stat(path+"/"+i[e],function(u,o){if(!u){if(o.isFile()){var r=getFilenameSuffix(i[e]);".js"!=r&&".DS_Store"!=r&&(filePath=path+"/"+i[e],console.log("抓取到文件: "+i[e]),key=i[e],token=uptoken(bucket,key),uploadFile(token,key,filePath),n.push(i[e]))}t(e+1)}})}(0)}});