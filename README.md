jQuery-pintro
=============

A jQuery plugin for image info box slider 


[demo](http://jsbin.com/aVOGIbA/30)
## Usage

1. You have some images in a div which class is 'albums', and each image has parent which class ='thumb ...' and has a .info div to contain infomation about image.
```
  <div class="albums">
    <div class="thumb img-thumbnail">
      <img title='yooo' src="http://i.imgur.com/xgSNUo2.jpg">
      <div class='info'>
    </div>

    <div class="thumb img-thumbnail">
      <img title='2' src="http://i.imgur.com/ry8JYhCs.jpg">
      <div class='info'>455</div>
    </div>
    
    <div class="thumb img-thumbnail">
      <img title='3' src="http://i.imgur.com/ztm9G37s.jpg">
      <div class='info'>789</div>
    </div>
      ...
  </div>
```

2. all done
![dog0](http://i.imgur.com/ChwaG8Rl.png)
```
    $('albums').pintro({});
```

3.  If you want to custom the class, ex: change .album to .log, and .thumb to .photo
```
<div class="log">
    <div class="photo">
      <img title='3' src="http://i.imgur.com/ztm9G37s.jpg">
      <div class='meta'>789</div>
    </div>
    ...
    ...
```
just set the selector , imgClass and imgInfoClass options
```
    $('log').pintro({
        imgClass: '.photo',
        imgInfoClass: '.meta'
    });
```

##Let's look some examples
![dog1] (http://i.imgur.com/1EJFMdtl.png)
```
$('.albums').pintro({
  duration: 1000,
  infocss:{
   'background-color': 'orange',
   color: 'black'
  }
}); 
```
---

![dog2] (http://i.imgur.com/OrYdCV0l.png)
```
  $('.albums').pintro({
    infocss:   {
        width: '30%',
        height: '100%',
        color: 'yellow',
        left: null,
        right: '0',
        opacity:0.8
       }
  }); 
```



##Optinos
### default main settings:
    imgGroup: $(this),          //main selector ex: $('selector').pintro({});
    imgClass: '.thumb',         //el.class that contain image. default: '.thumb'
    imgInfoClass: '.info',      //el.class that contain image info. default: '.info'
    duration : 'fast'           //slide speed , it can use number ex: 1000. default: 'fast'

### custom main selector and class
```
    $('memo').pintro({
        imgClass: '.pic',               //<div class='.pic'> ...
        imgInfoClass: '.description',   //<div class='.description'><img src='xxx'>... ... </div>
        duration : '3000'               //take 3 seconds  to finish slide animation
    });
```    
### default '.thumb' css:
	float: left;
  	margin: 10px 5px;
  	position: relative; 
### custom '.thumb' css
```
	$('albums').pintro({
		...
		thumbcss: {
			float: 'left',
  			margin: 10px 10px,
  			position: relative; 
		}
		...
	});
```

### '.info' default css:    
	position: absolute;
	bottom: 0px;
	left: 0px;
	width: 100%;
	padding: 10px 10px;
	line-height: 1.2;
	background-color: #007AB3;
	text-align: left;
	color: #91BBD0;
	font-size: 12px;
	display: none;
  
### custom '.info' css
```
    $('albums').pintro({
        ...
        infocss: {  // put your css settings inside infocss object
            'background-color': orange,
            'color': black,
            'opaticy': 0.8
            ...
        }
    });
``` 






