var huab=document.getElementsByClassName("huab")[0];
		var box=document.getElementsByClassName("box")[0];
		var zhi=huab.getContext("2d");
		var img=new Image();
		img.src="image/lunb0.png";
		img.onload=function(){
			zhi.drawImage(img,0,0,800,500);//纸张插图
			var imgData=zhi.getImageData(0,20,1,1);//获取
			var red=imgData.data[0];
			var green=imgData.data[1];
			var blue=imgData.data[2];
			var alpha=imgData.data[3];
			var imgData1=zhi.getImageData(0,480,1,1);//获取
			var red1=imgData.data[0];
			var green1=imgData.data[1];
			var blue1=imgData.data[2];
			var alpha1=imgData.data[3];
	
		var topColor="rgba("+red+","+green+","+blue+","+alpha+")";
		var bottomColor="rgba("+red1+","+green1+","+blue1+","+alpha1+")";
		box.style.background="linear-gradient("+topColor+","+bottomColor+")";
		console.log("topColor")
		// getImageData获取
		// putImageData复制	
		}