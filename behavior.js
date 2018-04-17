var startButton = ['1']; // one-dimensional array. music variable is a two-dimensional array
var playButton = ['1']; // one-dimensional array. music variable is a two-dimensional array
var buttonNames = ['1','2']; // one-dimensional array. music variable is a two-dimensional array
var pickGenre = ['1','2','3'];
var xPos;
var yPos;
var songTitle;

//var audio;
var selectedSong;
    d3.select('#container')
    .append('audio')
    .attr('id','audioElement')
    .attr('src',selectedSong);
var selectedDuration;
var pauseBar;
var playBar;
var remainingTime;
var elapsedWidth;
var elapsedPercent;

// SVG Text written in d3
d3.select('#svg')                      
	.append('text')
 	.text('James Music')
    .attr('id','title')
	.attr('x',450)
    .attr('y',50)
    .style('font-family','myriad-pro-semi-condensed-1','myriad-pro-semi-condensed-2')
    .style('font-family','MyriadPro-SemiboldCond')
    .style('font-weight','regular')
    .style('font-style','normal')
    .style('text-anchor','start')
	.style('font-size','24px')
    .style('letter-spacing',1)
    .style('stroke-width',0)
    .style('fill','rgb(0,0,0)');

// Start button homepage

function drawStart() {
		
	//attributes
		d3.select('#svg')
		.selectAll('start')
		.data(startButton)
		.enter()
		.append('rect')
		.attr('id',function(d,i) { return 'start_' + i; })
		.attr('class','start')
		.attr('x',400)
		.attr('y',250)
		.attr('rx',10)
		.attr('ry',10)
		.attr('width',250)
		.attr('height',250)
		.style('fill','rgb(79,79,79)')
		.style('fill-opacity',.50)
		.style('stroke' , 'rgb(242,242,242)') 
		.style('stroke-width' , 2)
		.style('cursor','pointer')
		
	//interaction
        .on('mouseover',function() {
			d3.select(this).style('fill','rgb(96,96,96)')
			d3.select('#redNote').transition().duration(800).style('opacity' , .60).transition().duration(800).style('opacity' , 0)
			d3.select('#orangeNote').transition().delay(1600).duration(800).style('opacity', .65).transition().duration(800).style('opacity' , 0)
			d3.select('#pinkNote').transition().delay(3200).duration(800).style('opacity' , .70).transition().duration(800).style('opacity' , 0)
			;
			})
		.on('mouseout',function() {
			d3.select(this).style('fill','rgb(79,79,79)');
			})
		.on('click',function(d,i) {
			if(d == 1) { 
				d3.selectAll('.start').remove()
				d3.selectAll('#title').remove()
				d3.selectAll('#whiteNote').remove()
				d3.selectAll('#redNote').remove()
				d3.selectAll('#orangeNote').remove()
				d3.selectAll('#pinkNote').remove()
				drawPickGenre()
                drawHipTitleText()
                drawSwingTitleText()
                drawVaporTitleText();
				}
			})
			.style('stroke' , 'rgb(242,242,242)').transition().duration(1000).style('stroke' , 'rgb(204,0,0)').transition().duration(1000).style('stroke' , 'rgb(242,242,242)')
			.style('stroke' , 'rgb(242,242,242)').transition().duration(1000).style('stroke' , 'rgb(204,120,0)').transition().duration(1000).style('stroke' , 'rgb(242,242,242)')
			.style('stroke' , 'rgb(242,242,242)').transition().duration(1000).style('stroke' , 'rgb(255,153,255)').transition().duration(1000).style('stroke' , 'rgb(242,242,242)')
			;
		
}


//Pick Genre | Second page | Home | Menu

function drawPickGenre() {
	
	//attributes
		d3.select('#svg')
		.selectAll('pickGenre')
		.data(pickGenre)
		.enter()
		.append('rect')
		.attr('id',function(d,i) { return 'pickGenre_' + i; })
		.attr('class','pickGenre')
		.attr('y',225)
		.attr('x',function(d,i) { return 35 + i * 325; })
		.attr('rx',10)
		.attr('ry',10)
		.attr('width',300)
		.attr('height',300)
		.style('fill','rgb(79,79,79)')
		.style('cursor','pointer') 
		
		//interaction
        .on('mouseover',function(d,i) {
			if(d == 1) { 
				d3.select(this).style('fill','rgb(204,0,0)')
				drawHipImage()
                d3.select('#genreHipText').transition().duration(200).style('opacity',1);
				}
			if(d == 2) { 
				d3.select(this).style('fill','rgb(204,120,0)')
				drawSwingImage()
                d3.select('#genreSwingText').transition().duration(200).style('opacity',1);
				}
			if(d == 3) { 
				d3.select(this).style('fill','rgb(255,153,255)')
				drawVaporImage()
                d3.select('#genreVaporText').transition().duration(200).style('opacity',1);
				}
			})
		.on('mouseout',function(d,i) {
			d3.select(this).style('fill','rgb(79,79,79)')
            d3.selectAll('#hip').remove()
			d3.selectAll('#vapor').remove()
			d3.selectAll('#swing').remove()
            if(d == 1){
                d3.select('#genreHipText').transition().duration(200).style('opacity',.3)
                }
            if(d == 2){
                d3.select('#genreSwingText').transition().duration(200).style('opacity',.3)
                }
            if(d == 3){
                d3.select('#genreVaporText').transition().duration(200).style('opacity',.3)
            }
			})
			
		.on('click',function(d,i) {
			
			if(d == 1) { 
				d3.select('#pickGenre_0').transition().duration(200).attr('y', 50).attr('x', 53).attr('width', 70).attr('height', 70).remove()
				d3.select('#pickGenre_1').transition().duration(200).attr('y', 612).attr('x',52).attr('width', 930).attr('height', 70).remove()
				d3.select('#pickGenre_2').transition().duration(200).attr('y', 50).attr('x', 892).attr('width', 70).attr('height', 70).remove()
				d3.selectAll('#hip').remove()
				d3.selectAll('#genreHipText').remove()
                d3.selectAll('#genreSwingText').remove()
                d3.selectAll('#genreVaporText').remove()
				d3.selectAll('#startBG').transition().duration(400).style('opacity',0).remove()
				drawHipBGImage()
				drawButtons()
				drawSongs1()
                drawGrid()
                renderChart()
                drawMenuImage()
                drawPauseImage();
				}
				
			if(d == 2) { 
				d3.select('#pickGenre_0').transition().duration(200).attr('y', 50).attr('x', 53).attr('width', 70).attr('height', 70).remove()
				d3.select('#pickGenre_1').transition().duration(200).attr('y', 612).attr('x',52).attr('width', 930).attr('height', 70).remove()
				d3.select('#pickGenre_2').transition().duration(200).attr('y', 50).attr('x', 892).attr('width', 70).attr('height', 70).remove()
				d3.selectAll('#swing').remove()
				d3.selectAll('#genreHipText').remove()
                d3.selectAll('#genreSwingText').remove()
                d3.selectAll('#genreVaporText').remove()
				d3.selectAll('#startBG').transition().duration(400).style('opacity',0).remove()
				drawSwingBGImage()
				drawButtons()
				drawSongs2()
                drawGrid()
                renderChart()
                drawMenuImage()
                drawPauseImage();
				}
				
			if(d == 3) { 
				d3.select('#pickGenre_0').transition().duration(200).attr('y', 50).attr('x', 53).attr('width', 70).attr('height', 70).remove()
				d3.select('#pickGenre_1').transition().duration(200).attr('y', 612).attr('x',52).attr('width', 930).attr('height', 70).remove()
				d3.select('#pickGenre_2').transition().duration(200).attr('y', 50).attr('x', 892).attr('width', 70).attr('height', 70).remove()
				d3.selectAll('#vapor').remove()
				d3.selectAll('#genreHipText').remove()
                d3.selectAll('#genreSwingText').remove()
                d3.selectAll('#genreVaporText').remove()
				d3.selectAll('#startBG').transition().duration(400).style('opacity',0).remove()
				drawVaporBGImage()
				drawButtons()
				drawSongs3()
                drawGrid()
                renderChart()
                drawMenuImage()
                drawPauseImage();
				}
			
			})
	//intro transtiion
			.style('fill-opacity', 0 ).transition().duration(310).style('fill-opacity', .50);
			
			
		
		
}


//Top Navigation Buttons

function drawButtons() {
	
	//attributes
		d3.select('#svg')
		.selectAll('buttons')
		.data(buttonNames)
		.enter()
		.append('rect')
		.attr('id',function(d,i) { return 'button_' + i; })
		.attr('class','buttons')
		.attr('y',55)
		.attr('x',function(d,i) { return 53 + i * 839; })
		.attr('rx',10)
		.attr('ry',10)
		.attr('width',70)
		.attr('height',70)
		.style('fill','rgb(79,79,79)')
		.style('stroke' , 'rgb(242,242,242)') 
		.style('stroke-width' , 2)
		.style('cursor','pointer')
	//interaction
        .on('mouseover',function(d,i) {
			d3.select(this).style('fill','rgb(96,96,96)');
			if(d == 1) { 
				//buttonText = 'Home'
				//drawButtonText()
				d3.select('#menuIcon').transition().duration(200).style('opacity',1);
				}
			if(d == 2) { 
				//buttonText = 'Pause'
				//drawButtonText()
				d3.select('#pauseIcon').transition().duration(200).style('opacity',1);
				}
			})
		.on('mouseout',function(d,i) {
            if(d == 1) {
			d3.select(this).style('fill','rgb(79,79,79)')
			d3.selectAll('#buttonText').remove()
			d3.selectAll('#homeIcon').remove()
            d3.selectAll('#menuIcon').transition().duration(200).style('opacity',.5);
			
            }
            if(d == 2) {
            d3.selectAll('#pauseIcon').transition().duration(200).style('opacity',.5)
            }
			})
		.on('click',function(d,i) {
			if(d == 1) { 
				d3.select('#songTextPlaying').remove()
				d3.select('#artistTextPlaying').remove()
				d3.selectAll('#progressBar').remove()
				d3.selectAll('#progressSubBar').remove()
				d3.select('#button_0').transition().duration(200).attr('y', 225).attr('x', 35).attr('width', 300).attr('height', 300).attr('width' , 300).remove()
				d3.select('#button_1').transition().duration(200).attr('y', 225).attr('x', 700).attr('width', 300).attr('height', 300).remove() 
				d3.selectAll('.songs').transition().duration(75).style('opacity',.16).style('stroke-width',0).attr('x', 358).attr('y', 375).attr('width', 300).attr('height', 300)
				d3.selectAll('.songs').transition().delay(75).duration(130).attr('y', 225).remove()
                audioElement.pause()
                d3.selectAll('.playButton').remove()
                d3.selectAll('#pauseIcon').remove()
                d3.selectAll('#menuIcon').remove()
				d3.selectAll('#buttonText').remove()
				d3.selectAll('#homeIcon').remove()
				d3.selectAll('#redHomeIcon').remove()
				d3.selectAll('#orangeHomeIcon').remove()
				d3.selectAll('#pinkHomeIcon').remove()
				d3.selectAll('#hipBG').transition().duration(400).style('opacity',0).remove()
				d3.selectAll('#swingBG').transition().duration(400).style('opacity',0).remove()
				d3.selectAll('#vaporBG').transition().duration(400).style('opacity',0).remove()
                d3.selectAll('.vizGrid').remove();
				drawStartBGImage()
				drawPickGenre()
                drawHipTitleText()
                drawSwingTitleText()
                drawVaporTitleText();
				}
				if(d == 2) {
                audioElement.pause()
				pauseBar = d3.selectAll('#progressBar');
				pauseBar.transition().duration(0);
				elapsedWidth = d3.select('#progressBar').attr('width');
				elapsedPercent = elapsedWidth / 905;
				remainingTime = selectedDuration - (elapsedPercent * selectedDuration);
				d3.selectAll('#button_1').transition().style('opacity',0)
                d3.selectAll('#pauseIcon').remove()
                d3.selectAll('#buttonText').remove()
                d3.selectAll('.vizGrid').transition().duration(200).style('fill-opacity',0)
                drawPlayButton()
                drawPlayImage();
				}
			})
	//intro transition
			.style('fill-opacity', 0 ).style('stroke-opacity',0).transition().delay(100).duration(120).style('fill-opacity', .50).style('stroke-opacity',1)
		
}

//play music button
function drawPlayButton() {
	
	//attributes
		d3.select('#svg')
		.selectAll('start')
		.data(playButton)
		.enter()
		.append('rect')
		.attr('id',function(d,i) { return 'start_' + i; })
		.attr('class','playButton')
		.attr('x',892)
		.attr('y',55)
		.attr('rx',10)
		.attr('ry',10)
		.attr('width',70)
		.attr('height',70)
		.style('fill','rgb(79,79,79)')
		.style('fill-opacity',.50)
		.style('stroke' , 'rgb(242,242,242)') 
		.style('stroke-width' , 2)
		.style('cursor','pointer')
	//interaction
        .on('mouseover',function() {
			d3.select(this).style('fill','rgb(96,96,96)')
            //buttonText = 'Play'
            //drawButtonText()
            d3.selectAll('#playIcon').transition().duration(200).style('opacity',1);
			})
		.on('mouseout',function() {
			d3.select(this).style('fill','rgb(79,79,79)')
            d3.selectAll('#buttonText').remove()
            d3.selectAll('#playIcon').transition().duration(200).style('opacity',.3);
			})
		.on('click',function(d,i) {
			pauseBar = d3.selectAll('#progressBar');
			pauseBar.transition().duration(selectedDuration);
                audioElement.play()
				d3.selectAll('#progressBar').transition().ease('linear').duration(remainingTime).attr('width',905)
				d3.selectAll('.playButton').transition().duration(400).style('opacity',0).remove()
                d3.selectAll('#button_1').transition().duration(400).style('opacity',1)
                d3.selectAll('#buttonText').remove()
                d3.selectAll('#playIcon').remove()
                d3.selectAll('.vizGrid').transition().duration(200).style('fill-opacity',1)
                drawPauseImage();
            
               })
		
}
 
 //Hip Hop Genre
function drawSongs1() {
	
	//attributes
		d3.select('#svg')
		.selectAll('songs')
		.data(genreHip) 
		.enter()
		.append('rect')
		.attr('id',function(d,i) { return 'song_' + i; })
		.attr('class','songs')
		.attr('y',610) 
		.attr('x',function(d,i) { return 43 + i * 93; })
		.attr('rx',10)
		.attr('ry',10)
		.attr('width',95)
		.attr('height',70)
		.style('fill','rgb(79,79,79)')
		.style('stroke' , 'rgb(242,242,242)') 
		.style('stroke-width' , 2)
		.style('cursor','pointer')
		
	//interaction
        .on('mouseover',function(d,i) {
			d3.select(this).style('fill','rgb(204,0,0)')
			songTitle = d[0]
			drawSongText()
			artistTitle = d[1]
			drawArtistText()
			if(i == 0) { 
				drawAuditoriumImage();
				}
			if(i == 1) { 
				drawNeverFallinImage();
				}
			if(i == 2) { 
				drawLoveImage();
				}
			if(i == 3) { 
				drawDysfunctionalImage();
				}
			if(i == 4) { 
				drawDesignImage();
				}
			if(i == 5) { 
				drawSorryImage();
				}
			if(i == 6) { 
				drawHypnotiseImage();
				}
			if(i == 7) { 
				drawBalanceImage();
				}
			if(i == 8) { 
				drawRainImage();
				}
			if(i == 9) { 
				drawCapsImage();
				}
			})
		.on('mouseout',function(d,i) {
			d3.select('#songText').remove()
			d3.select('#artistText').remove()
			d3.select(this).style('fill','rgb(79,79,79)');
			if(i == 0) { 
				d3.selectAll('#auditoriumIcon').remove();
				}
			if(i == 1) { 
				d3.selectAll('#neverFallinIcon').remove();
				}
			if(i == 2) { 
				d3.selectAll('#loveIcon').remove();
				}
			if(i == 3) { 
				d3.selectAll('#dysfunctionalIcon').remove();
				}
			if(i == 4) { 
				d3.selectAll('#designIcon').remove();
				}
			if(i == 5) { 
				d3.selectAll('#sorryIcon').remove();
				}
			if(i == 6) { 
				d3.selectAll('#hypnotiseIcon').remove();
				}
			if(i == 7) { 
				d3.selectAll('#balanceIcon').remove();
				}
			if(i == 8) { 
				d3.selectAll('#rainIcon').remove();
				}
			if(i == 9) { 
				d3.selectAll('#capsIcon').remove();
				}
			})
    .on('click',function(d,i) {
			d3.select('#songTextPlaying').remove()
			d3.select('#artistTextPlaying').remove()
			d3.select('#songText').remove()
			d3.select('#artistText').remove()
            d3.selectAll('.songs').transition().duration(400).attr('height','515').attr('y','165')
			drawSongTextPlaying()
			drawArtistTextPlaying()
			d3.selectAll('#progressBar').remove()
			d3.selectAll('#progressSubBar').remove()
            d3.selectAll('.playButton').remove()
            d3.selectAll('#button_1').style('opacity',1)
            d3.selectAll('.vizGrid').transition().duration(200).style('fill-opacity',1)
            selectedSong = d[5];
			selectedDuration = d[4] * 1000;
			console.log(selectedSong);
			d3.select('#audioElement').attr('src',selectedSong);
			audioElement.play();
			drawHipProgressBar();
        })
		
	//intro transtition
		.style('fill-opacity', 0 ).style('stroke-opacity',0).transition().delay(150).duration(100).style('fill-opacity', .50).style('stroke-opacity',1)
		.attr('width',92).attr('x',function(d,i) { return 43 + i * 92.2; }).transition().duration(200).attr('width',70).attr('x',function(d,i) { return 53 + i * 93; })
        .attr('y',610).attr('height',70).transition().duration(200).attr('y',function(d,i) { return 680 - d[4]; }).attr('height',function(d,i) { return d[4]; });
}

//Electroswing Genre
function drawSongs2() {
	
	//attributes
		d3.select('#svg')
		.selectAll('songs')
		.data(genreSwing) 
		.enter()
		.append('rect')
		.attr('id',function(d,i) { return 'song_' + i; })
		.attr('class','songs')
		.attr('y',610)
		.attr('x',function(d,i) { return 53 + i * 93; })
		.attr('rx',10)
		.attr('ry',10)
		.attr('width',95)
		.attr('height',70)
		.style('fill','rgb(79,79,79)')
		.style('stroke' , 'rgb(242,242,242)') 
		.style('stroke-width' , 2)
		.style('cursor','pointer')
		
	//interaction
        .on('mouseover',function(d,i) {
			d3.select(this).style('fill','rgb(204,120,0)')
			songTitle = d[0]
			drawSongText()
			artistTitle = d[1]
			drawArtistText()
			if(i == 0) { 
				drawLoneImage();
				}
			if(i == 1) { 
				drawMayImage();
				}
			if(i == 2) { 
				drawMamaImage();
				}
			if(i == 3) { 
				drawSnakeImage();
				}
			if(i == 4) { 
				drawAllImage();
				}
			if(i == 5) { 
				drawBelleImage();
				}
			if(i == 6) { 
				drawIstanbulImage();
				}
			if(i == 7) { 
				drawLunchImage();
				}
			if(i == 8) { 
				drawBirdImage();
				}
			if(i == 9) { 
				draw1940Image();
				}
			})
		.on('mouseout',function(d,i) {
			d3.select('#songText').remove()
			d3.select('#artistText').remove()
			d3.select(this).style('fill','rgb(79,79,79)')
			if(i == 0) { 
				d3.selectAll('#loneIcon').remove();
				}
			if(i == 1) { 
				d3.selectAll('#mayIcon').remove();
				}
			if(i == 2) { 
				d3.selectAll('#mamaIcon').remove();
				}
			if(i == 3) { 
				d3.selectAll('#snakeIcon').remove();
				}
			if(i == 4) { 
				d3.selectAll('#allIcon').remove();
				}
			if(i == 5) { 
				d3.selectAll('#belleIcon').remove();
				}
			if(i == 6) { 
				d3.selectAll('#istanbulIcon').remove();
				}
			if(i == 7) { 
				d3.selectAll('#lunchIcon').remove();
				}
			if(i == 8) { 
				d3.selectAll('#birdIcon').remove();
				}
			if(i == 9) { 
				d3.selectAll('#nineFourIcon').remove();
				}
			})
    .on('click',function(d,i) {
			d3.select('#songTextPlaying').remove()
			d3.select('#artistTextPlaying').remove()
			d3.select('#songText').remove()
			d3.select('#artistText').remove()
            d3.selectAll('.songs').transition().duration(400).attr('height','515').attr('y','165')
			drawSongTextPlaying()
			drawArtistTextPlaying()
			d3.selectAll('#progressBar').remove()
			d3.selectAll('#progressSubBar').remove()
            d3.selectAll('.playButton').remove()
            d3.selectAll('#button_1').style('opacity',1)
            d3.selectAll('.vizGrid').transition().duration(200).style('fill-opacity',1)
            selectedSong = d[5];
			selectedDuration = d[4] * 1000;
			console.log(selectedSong);
			d3.select('#audioElement').attr('src',selectedSong);
			audioElement.play();
			drawSwingProgressBar();
        })
		
	//intro transtition
		.style('fill-opacity', 0 ).style('stroke-opacity',0).transition().delay(150).duration(100).style('fill-opacity', .50).style('stroke-opacity',1)
		.attr('width',92).attr('x',function(d,i) { return 43 + i * 92.2; }).transition().duration(200).attr('width',70).attr('x',function(d,i) { return 53 + i * 93; })
        .attr('y',610).attr('height',70).transition().duration(200).attr('y',function(d,i) { return 680 - d[4]; }).attr('height',function(d,i) { return d[4]; });
}

//Vapor Wave Genre
function drawSongs3() {
	
	//attributes
		d3.select('#svg')
		.selectAll('songs')
		.data(genreVapor) 
		.enter()
		.append('rect')
		.attr('id',function(d,i) { return 'song_' + i; })
		.attr('class','songs')
		.attr('y',610)
		.attr('x',function(d,i) { return 53 + i * 93; })
		.attr('rx',10)
		.attr('ry',10)
		.attr('width',95)
		.attr('height',70)
		.style('fill','rgb(79,79,79)')
		.style('stroke' , 'rgb(242,242,242)') 
		.style('stroke-width' , 2)
		.style('cursor','pointer')
		
	//interaction
        .on('mouseover',function(d,i) {
			d3.select(this).style('fill','rgb(255,153,255)')
			songTitle = d[0]
			drawSongText()
			artistTitle = d[1]
			drawArtistText()
			if(i == 0) { 
				drawHome2Image();
				}
			if(i == 1) { 
				drawFourTwoImage();
				}
			if(i == 2) { 
				drawMemoryImage();
				}
			if(i == 3) { 
				drawTuxImage();
				}
			if(i == 4) { 
				drawHoneyImage();
				}
			if(i == 5) { 
				drawWeImage();
				}
			if(i == 6) { 
				drawTwoFourImage();
				}
			if(i == 7) { 
				drawPartyImage();
				}
			if(i == 8) { 
				drawCruiserImage();
				}
			if(i == 9) { 
				drawWeatherImage();
				}
			})
		.on('mouseout',function(d,i) {
			d3.select('#songText').remove()
			d3.select('#artistText').remove()
			d3.select(this).style('fill','rgb(79,79,79)')
			if(i == 0) { 
				d3.selectAll('#home2Icon').remove();
				}
			if(i == 1) { 
				d3.selectAll('#fourTwoIcon').remove();
				}
			if(i == 2) { 
				d3.selectAll('#memoryIcon').remove();
				}
			if(i == 3) { 
				d3.selectAll('#tuxIcon').remove();
				}
			if(i == 4) { 
				d3.selectAll('#honeyIcon').remove();
				}
			if(i == 5) { 
				d3.selectAll('#weIcon').remove();
				}
			if(i == 6) { 
				d3.selectAll('#twoFourIcon').remove();
				}
			if(i == 7) { 
				d3.selectAll('#partyIcon').remove();
				}
			if(i == 8) { 
				d3.selectAll('#cruiserIcon').remove();
				}
			if(i == 9) { 
				d3.selectAll('#weatherIcon').remove();
				}
			})
        .on('click',function(d,i) {
			d3.select('#songTextPlaying').remove()
			d3.select('#artistTextPlaying').remove()
			d3.select('#songText').remove()
			d3.select('#artistText').remove()
            d3.selectAll('.songs').transition().duration(400).attr('height','515').attr('y','165')
			drawSongTextPlaying()
			drawArtistTextPlaying()
			songTitle = d[0]
			artistTitle = d[1]
			d3.selectAll('#progressBar').remove()
			d3.selectAll('#progressSubBar').remove()
            d3.selectAll('.playButton').remove()
            d3.selectAll('#button_1').style('opacity',1)
            d3.selectAll('.vizGrid').transition().duration(200).style('fill-opacity',1)
            selectedSong = d[5];
			selectedDuration = d[4] * 1000;
			console.log(selectedSong);
			d3.select('#audioElement').attr('src',selectedSong);
			audioElement.play();
			drawVaporProgressBar();
        })
		
	//intro transition
        .style('fill-opacity', 0 ).style('stroke-opacity',0).transition().delay(150).duration(100).style('fill-opacity', .50).style('stroke-opacity',1)
		.attr('width',92).attr('x',function(d,i) { return 43 + i * 92.2; }).transition().duration(200).attr('width',70).attr('x',function(d,i) { return 53 + i * 93; })
        .attr('y',610).attr('height',70).transition().duration(200).attr('y',function(d,i) { return 680 - d[4]; }).attr('height',function(d,i) { return d[4]; });
            
}


var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
var audioElement = document.getElementById('audioElement');
var audioSrc = audioCtx.createMediaElementSource(audioElement);
var analyser = audioCtx.createAnalyser();
audioElement.crossOrigin = 'anonymous';
audioSrc.connect(analyser);
audioSrc.connect(audioCtx.destination);
var frequencyData = new Uint8Array(10); // generates 10 data points

function drawGrid() {
	var row = 0;
	d3.select('#svg').selectAll('circle.music')
        .data(frequencyData)
        .enter()
		.append('rect')
        .attr('class','vizGrid')
		.attr('x',function(d,i) {
			var leftover = i % 30;
            return 53 + leftover * 93;
            })
		.attr('width',70)
		.attr('height',2)
    	.attr('y','165')
		//.attr('r',10)
        .style('fill','white')
        .style('fill-opacity',0)
        .style('pointer-events', 'none');
}

function renderChart() {
    requestAnimationFrame(renderChart);
    analyser.getByteFrequencyData(frequencyData);
	//console.log(frequencyData); // see data stream in javascript console
    d3.selectAll('.vizGrid')
        .data(frequencyData)
        //.attr('height', 200)
        .attr('y',function(d,i) {
            return 565 - d*1.1;
            })
        //.style('fill-opacity',0);
}  


//White music note Start Icon
function drawWhiteMusicNoteImage() {
	d3.select('#svg')
		.append('image')
		.attr('id','whiteNote')
		.attr('xlink:href','images/musicNote1.png')
		.attr('x', 440)
		.attr('y', 300)
		.attr('height','150px')
		.attr('width','150px')
		.style('pointer-events', 'none')
		.style('opacity',0).transition().duration(400).style('opacity',.75);
}

// red note Start Icon
function drawRedNoteImage() {
	d3.select('#svg')
		.append('image')
		.attr('id','redNote')
		.attr('xlink:href','images/musicNote2.png')
		.attr('x', 440)
		.attr('y', 300)
		.attr('height','150px')
		.attr('width','150px')
		.style('opacity' , 0)
		.style('pointer-events', 'none');
}

// orange note Start Icon
function drawOrangeNoteImage() {
	d3.select('#svg')
		.append('image')
		.attr('id','orangeNote')
		.attr('xlink:href','images/musicNote3.png')
		.attr('x', 440)
		.attr('y', 300)
		.attr('height','150px')
		.attr('width','150px')
		.style('opacity' , 0)
		.style('pointer-events', 'none');
}

//pink note Start Icon
function drawPinkNoteImage() {
	d3.select('#svg')
		.append('image')
		.attr('id','pinkNote')
		.attr('xlink:href','images/musicNote4.png')
		.attr('x', 440)
		.attr('y', 300)
		.attr('height','150px')
		.attr('width','150px')
		.style('opacity' , 0)
		.style('pointer-events', 'none');
}


//backgrgroundImage Start Icon
function drawStartBGImage() {
	d3.select('#svg')
		.append('image')
		.attr('id','startBG')
		.attr('xlink:href','images/backgroundStart.png')
		.attr('x', 0)
		.attr('y', 0)
		.attr('height','724px')
		.attr('width','1024px')
		.style('pointer-events', 'none')
		.style('opacity',0).transition().duration(300).style('opacity',1);
}


//backgrgroundImage Hip Hop Icon
function drawHipBGImage() {
	d3.select('#svg')
		.append('image')
		.attr('id','hipBG')
		.attr('xlink:href','images/backgroundHip.png')
		.attr('x', 0)
		.attr('y', 0)
		.attr('height','724px')
		.attr('width','1024px')
		.style('pointer-events', 'none')
		.style('opacity',0).transition().duration(300).style('opacity',1);
}

//backgrgroundImage Swing Icon
function drawSwingBGImage() {
	d3.select('#svg')
		.append('image')
		.attr('id','swingBG')
		.attr('xlink:href','images/backgroundSwing.png')
		.attr('x', 0)
		.attr('y', 0)
		.attr('height','724px')
		.attr('width','1024px')
		.style('pointer-events', 'none')
		.style('opacity',0).transition().duration(300).style('opacity',1);
}
//backgrgroundImage Vapor Icon
function drawVaporBGImage() {
	d3.select('#svg')
		.append('image')
		.attr('id','vaporBG')
		.attr('xlink:href','images/backgroundVapor.png')
		.attr('x', 0)
		.attr('y', 0)
		.attr('height','724px')
		.attr('width','1024px')
		.style('pointer-events', 'none')
		.style('opacity',0).transition().duration(300).style('opacity',1);
}

//Hip Hop Genre Icon
function drawHipImage() {
	d3.select('#svg')
		.append('image')
		.attr('id','hip')
		.attr('xlink:href','images/hipGenre.png')
		.attr('x', 74)
		.attr('y', 260)
		.attr('height','225px')
		.attr('width','220px')
		.style('pointer-events', 'none')
		.style('opacity',0).transition().duration(400).style('opacity',1);
}

//Hip Hop Title text
function drawHipTitleText() {
	d3.select('#svg')
		.append('image')
		.attr('id','genreHipText')
		.attr('xlink:href','images/hipTitleText.png')
		.attr('x', 73)
		.attr('y', 425)
		.attr('height','100px')
		.attr('width','220px')
		.style('pointer-events', 'none')
		.style('opacity',0).transition().duration(400).style('opacity',.3);
}

//Electroswing Genre Icon
function drawSwingImage() {
	d3.select('#svg')
		.append('image')
		.attr('id','swing')
		.attr('xlink:href','images/swingGenre.png')
		.attr('x', 415)
		.attr('y', 260)
		.attr('height','200px')
		.attr('width','200px')
		.style('pointer-events', 'none')
		.style('opacity',0).transition().duration(400).style('opacity',1);
}

//Swing Title text
function drawSwingTitleText() {
	d3.select('#svg')
		.append('image')
		.attr('id','genreSwingText')
		.attr('xlink:href','images/swingTitleText.png')
		.attr('x', 400)
		.attr('y', 425)
		.attr('height','100px')
		.attr('width','220px')
		.style('pointer-events', 'none')
		.style('opacity',0).transition().duration(400).style('opacity',.3);
} 

//Vaporwave Genre Icon
function drawVaporImage() {
	d3.select('#svg')
		.append('image')
		.attr('id','vapor')
		.attr('xlink:href','images/vaporGenre.png')
		.attr('x', 730)
		.attr('y', 255)
		.attr('height','200px')
		.attr('width','200px')
		.style('pointer-events', 'none')
		.style('opacity',0).transition().duration(400).style('opacity',1);
}

//Vapor Title text
function drawVaporTitleText() {
	d3.select('#svg')
		.append('image')
		.attr('id','genreVaporText')
		.attr('xlink:href','images/vaporTitleText.png')
		.attr('x', 725)
		.attr('y', 425)
		.attr('height','100px')
		.attr('width','220px')
		.style('pointer-events', 'none')
		.style('opacity',0).transition().duration(400).style('opacity',.3);
} 

//Home Button Icon
function drawMenuImage() {
	d3.select('#svg')
		.append('image')
		.attr('id','menuIcon')
		.attr('xlink:href','images/menuIcon.png')
		.attr('x', 66)
		.attr('y', 70)
		.attr('height','43px')
		.attr('width','43px')
		.style('pointer-events', 'none')
        .style('opacity',0).transition().duration(500).style('opacity',.3);
}


//Pause Icon
function drawPauseImage() {
	d3.select('#svg')
		.append('image')
		.attr('id','pauseIcon')
		.attr('xlink:href','images/pauseIcon.png')
		.attr('x', 907)
		.attr('y', 73)
		.attr('height','35px')
		.attr('width','40px')
		.style('pointer-events', 'none')
        .style('opacity',0).transition().duration(500).style('opacity',.3);
}


//Play Icon
function drawPlayImage() {
	d3.select('#svg')
		.append('image')
		.attr('id','playIcon')
		.attr('xlink:href','images/playIcon.png')
		.attr('x', 907)
		.attr('y', 70)
		.attr('height','42px')
		.attr('width','42px')
		.style('pointer-events', 'none')
        .style('opacity',0).transition().duration(500).style('opacity',.3);
}

//Auditorum image
function drawAuditoriumImage() {
	d3.select('#svg')
		.append('image')
		.attr('id','auditoriumIcon')
		.attr('xlink:href','images/auditorium.png')
		.attr('x', 62)
		.attr('y', 620)
		.attr('height','50px')
		.attr('width','50px')
		.style('pointer-events', 'none');
}

//Never Fallin image
function drawNeverFallinImage() {
	d3.select('#svg')
		.append('image')
		.attr('id','neverFallinIcon')
		.attr('xlink:href','images/neverFallin.png')
		.attr('x', 155)
		.attr('y', 619)
		.attr('height','50px')
		.attr('width','50px')
		.style('pointer-events', 'none');
}

//Never Fallin image
function drawLoveImage() {
	d3.select('#svg')
		.append('image')
		.attr('id','loveIcon')
		.attr('xlink:href','images/love.png')
		.attr('x', 249)
		.attr('y', 620)
		.attr('height','50px')
		.attr('width','50px')
		.style('pointer-events', 'none');
}

//dysfunctional image
function drawDysfunctionalImage() {
	d3.select('#svg')
		.append('image')
		.attr('id','dysfunctionalIcon')
		.attr('xlink:href','images/dysfunctional.png')
		.attr('x', 343)
		.attr('y', 620)
		.attr('height','50px')
		.attr('width','50px')
		.style('pointer-events', 'none');
}

//Design image
function drawDesignImage() {
	d3.select('#svg')
		.append('image')
		.attr('id','designIcon')
		.attr('xlink:href','images/design.png')
		.attr('x', 436)
		.attr('y', 614)
		.attr('height','52px')
		.attr('width','52px')
		.style('pointer-events', 'none');
}

//Sorry image
function drawSorryImage() {
	d3.select('#svg')
		.append('image')
		.attr('id','sorryIcon')
		.attr('xlink:href','images/sorry.png')
		.attr('x', 529)
		.attr('y', 620)
		.attr('height','50px')
		.attr('width','50px')
		.style('pointer-events', 'none');
}

//Hypnotise image
function drawHypnotiseImage() {
	d3.select('#svg')
		.append('image')
		.attr('id','hypnotiseIcon')
		.attr('xlink:href','images/hypnotise.png')
		.attr('x', 621)
		.attr('y', 620)
		.attr('height','50px')
		.attr('width','50px')
		.style('pointer-events', 'none');
}

//Balance image
function drawBalanceImage() {
	d3.select('#svg')
		.append('image')
		.attr('id','balanceIcon')
		.attr('xlink:href','images/balance.png')
		.attr('x', 715)
		.attr('y', 620)
		.attr('height','50px')
		.attr('width','50px')
		.style('pointer-events', 'none');
}

//Rain image
function drawRainImage() {
	d3.select('#svg')
		.append('image')
		.attr('id','rainIcon')
		.attr('xlink:href','images/rain.png')
		.attr('x', 808)
		.attr('y', 620)
		.attr('height','50px')
		.attr('width','50px')
		.style('pointer-events', 'none');
}

//Caps image
function drawCapsImage() {
	d3.select('#svg')
		.append('image')
		.attr('id','capsIcon')
		.attr('xlink:href','images/caps.png')
		.attr('x', 900)
		.attr('y', 620)
		.attr('height','65px')
		.attr('width','50px')
		.style('pointer-events', 'none');
}



//Lone Digger image
function drawLoneImage() {
	d3.select('#svg')
		.append('image')
		.attr('id','loneIcon')
		.attr('xlink:href','images/lone.png')
		.attr('x', 62)
		.attr('y', 620)
		.attr('height','50px')
		.attr('width','50px')
		.style('pointer-events', 'none');
}

//May Flowers image
function drawMayImage() {
	d3.select('#svg')
		.append('image')
		.attr('id','mayIcon')
		.attr('xlink:href','images/may.png')
		.attr('x', 155)
		.attr('y', 605)
		.attr('height','65px')
		.attr('width','50px')
		.style('pointer-events', 'none');
}

//MAMA YO image
function drawMamaImage() {
	d3.select('#svg')
		.append('image')
		.attr('id','mamaIcon')
		.attr('xlink:href','images/mama.png')
		.attr('x', 249)
		.attr('y', 620)
		.attr('height','50px')
		.attr('width','50px')
		.style('pointer-events', 'none');
}

//Snake Charmer image
function drawSnakeImage() {
	d3.select('#svg')
		.append('image')
		.attr('id','snakeIcon')
		.attr('xlink:href','images/snake.png')
		.attr('x', 343)
		.attr('y', 620)
		.attr('height','50px')
		.attr('width','50px')
		.style('pointer-events', 'none');
}

//All night image
function drawAllImage() {
	d3.select('#svg')
		.append('image')
		.attr('id','allIcon')
		.attr('xlink:href','images/all.png')
		.attr('x', 436)
		.attr('y', 614)
		.attr('height','50px')
		.attr('width','50px')
		.style('pointer-events', 'none');
}

//Belle image
function drawBelleImage() {
	d3.select('#svg')
		.append('image')
		.attr('id','belleIcon')
		.attr('xlink:href','images/belle.png')
		.attr('x', 529)
		.attr('y', 620)
		.attr('height','50px')
		.attr('width','50px')
		.style('pointer-events', 'none');
}

//Istanbul image
function drawIstanbulImage() {
	d3.select('#svg')
		.append('image')
		.attr('id','istanbulIcon')
		.attr('xlink:href','images/istanbul.png')
		.attr('x', 620)
		.attr('y', 619)
		.attr('height','52px')
		.attr('width','52px')
		.style('pointer-events', 'none');
}

//Lunch image
function drawLunchImage() {
	d3.select('#svg')
		.append('image')
		.attr('id','lunchIcon')
		.attr('xlink:href','images/lunch.png')
		.attr('x', 715)
		.attr('y', 622)
		.attr('height','50px')
		.attr('width','50px')
		.style('pointer-events', 'none');
}

//Bird's image
function drawBirdImage() {
	d3.select('#svg')
		.append('image')
		.attr('id','birdIcon')
		.attr('xlink:href','images/bird.png')
		.attr('x', 808)
		.attr('y', 620)
		.attr('height','50px')
		.attr('width','50px')
		.style('pointer-events', 'none');
}

//1940 image
function draw1940Image() {
	d3.select('#svg')
		.append('image')
		.attr('id','nineFourIcon')
		.attr('xlink:href','images/1940.png')
		.attr('x', 900)
		.attr('y', 620)
		.attr('height','50px')
		.attr('width','50px')
		.style('pointer-events', 'none');
}

//Home image
function drawHome2Image() {
	d3.select('#svg')
		.append('image')
		.attr('id','home2Icon')
		.attr('xlink:href','images/homeIcon.png')
		.attr('x', 62)
		.attr('y', 619)
		.attr('height','50px')
		.attr('width','50px')
		.style('pointer-events', 'none');
}

//420 image
function drawFourTwoImage() {
	d3.select('#svg')
		.append('image')
		.attr('id','fourTwoIcon')
		.attr('xlink:href','images/fourTwo.png')
		.attr('x', 157)
		.attr('y', 613)
		.attr('height','65px')
		.attr('width','50px')
		.style('pointer-events', 'none');
}

//Memory image
function drawMemoryImage() {
	d3.select('#svg')
		.append('image')
		.attr('id','memoryIcon')
		.attr('xlink:href','images/memory.png')
		.attr('x', 249)
		.attr('y', 620)
		.attr('height','50px')
		.attr('width','50px')
		.style('pointer-events', 'none');
}

//tuxedo image
function drawTuxImage() {
	d3.select('#svg')
		.append('image')
		.attr('id','tuxIcon')
		.attr('xlink:href','images/tux.png')
		.attr('x', 343)
		.attr('y', 620)
		.attr('height','50px')
		.attr('width','50px')
		.style('pointer-events', 'none');
}

//Honey image
function drawHoneyImage() {
	d3.select('#svg')
		.append('image')
		.attr('id','honeyIcon')
		.attr('xlink:href','images/honey.png')
		.attr('x', 434)
		.attr('y', 614)
		.attr('height','50px')
		.attr('width','50px')
		.style('pointer-events', 'none');
}

//We Bad image
function drawWeImage() {
	d3.select('#svg')
		.append('image')
		.attr('id','weIcon')
		.attr('xlink:href','images/we.png')
		.attr('x', 529)
		.attr('y', 623)
		.attr('height','50px')
		.attr('width','50px')
		.style('pointer-events', 'none');
}

//Twenty Four Hour image
function drawTwoFourImage() {
	d3.select('#svg')
		.append('image')
		.attr('id','twoFourIcon')
		.attr('xlink:href','images/twoFour.png')
		.attr('x', 622)
		.attr('y', 620)
		.attr('height','47px')
		.attr('width','47px')
		.style('pointer-events', 'none');
}

//Party image
function drawPartyImage() {
	d3.select('#svg')
		.append('image')
		.attr('id','partyIcon')
		.attr('xlink:href','images/party.png')
		.attr('x', 715)
		.attr('y', 619)
		.attr('height','50px')
		.attr('width','50px')
		.style('pointer-events', 'none');
}

//Cruiser image
function drawCruiserImage() {
	d3.select('#svg')
		.append('image')
		.attr('id','cruiserIcon')
		.attr('xlink:href','images/cruiser.png')
		.attr('x', 808)
		.attr('y', 620)
		.attr('height','50px')
		.attr('width','50px')
		.style('pointer-events', 'none');
}

//Weather Scanning image
function drawWeatherImage() {
	d3.select('#svg')
		.append('image')
		.attr('id','weatherIcon')
		.attr('xlink:href','images/weather.png')
		.attr('x', 901)
		.attr('y', 620)
		.attr('height','48px')
		.attr('width','48px')
		.style('pointer-events', 'none');
}


//text for the song name while hovering songs
function drawSongText() {
   	d3.select('#svg')                      
		.append("text")
 		.text(songTitle)
        .attr("id","songText")
        .attr("x",53) 
        .attr("y",710) 
        .style("font-family","myriad-pro-semi-condensed-1","myriad-pro-semi-condensed-2")
        .style("font-size","25px")
        .style("text-anchor","left")
        .style("fill",'rgb(58, 58, 58)');
}

//text for the artist while hovering songs
function drawArtistText() {
   	d3.select('#svg')                      
		.append("text")
 		.text(artistTitle)
        .attr("id","artistText")
        .attr("x",958) 
        .attr("y",710) 
        .style("font-family","myriad-pro-semi-condensed-1","myriad-pro-semi-condensed-2")
        .style("font-size","25px")
        .style("text-anchor","end")
        .style("fill",'rgb(58, 58, 58)');
}


//text for the current artist playing
function drawArtistTextPlaying() {
   	d3.select('#svg')                      
		.append("text")
 		.text(artistTitle)
        .attr("id","artistTextPlaying")
        .attr("x",510) 
        .attr("y",115) 
        .style("font-family","myriad-pro-semi-condensed-1","myriad-pro-semi-condensed-2")
        .style("font-size","20px")
        .style("text-anchor","middle")
        .style("fill",'rgb(85,85,85)');
}

//text for the current song playing
function drawSongTextPlaying() {
   	d3.select('#svg')                      
		.append("text")
 		.text(songTitle)
        .attr("id","songTextPlaying")
        .attr("x",510) 
        .attr("y",85) 
        .style("font-family","myriad-pro-semi-condensed-1","myriad-pro-semi-condensed-2")
        .style("font-size","30px")
        .style("text-anchor","middle")
        .style("fill",'rgb(79,79,79)');
}

//genre text no longer used
function drawGenreText() {
   	d3.select('#svg')                      
		.append("text")
 		.text(GenreTitle)
        .attr("id","genreText")
        .attr("x",510) 
        .attr("y",50) 
        .style("font-family","myriad-pro-semi-condensed-1","myriad-pro-semi-condensed-2")
        .style("font-size","20px")
        .style("text-anchor","middle")
        .style("fill",'rgb(0,0,0)');
}

// button text for somewhere not found yet
function drawButtonText() {
   	d3.select('#svg')                      
		.append("text")
 		.text(buttonText)
        .attr("id","buttonText")
        .attr("x",510) 
        .attr("y",75) 
        .style("font-family","myriad-pro-semi-condensed-1","myriad-pro-semi-condensed-2")
        .style("font-size","20px")
        .style("text-anchor","middle")
        .style("fill",'rgb(0,0,0)');
}

//hip hop progress bar
function drawHipProgressBar() {
     d3.select('#svg')
        .append('rect')
		.attr('id','progressSubBar')
        .attr('x',53)
    	.attr('y',20)
		.attr('rx',3)
		.attr('ry',3)
		.attr('width',905)
		.attr('height',15)
		.style('fill','rgb(79,79,79)')
		.style('fill-opacity',0).transition().duration(200).style('fill-opacity',.5)
		.style('stroke-width' , 0).transition().duration(200).style('stroke-width' , 2)
		.style('stroke' , 'rgb(242,242,242)')
		
     d3.select('#svg')
        .append('rect')
		.attr('id','progressBar')
        .attr('x',54)
    	.attr('y',21)
		.attr('rx',1.7)
		.attr('ry',1.7)
		.attr('width',0)
		.attr('height',13)
		.style('fill','rgb(219, 76, 76)')
		.style('fill-opacity',0).transition().duration(250).style('fill-opacity',.8)		
		.transition().ease('linear').duration(selectedDuration).attr('width',903);
}

//swing progress bar
function drawSwingProgressBar() {
     d3.select('#svg')
        .append('rect')
		.attr('id','progressSubBar')
        .attr('x',53)
    	.attr('y',20)
		.attr('rx',3)
		.attr('ry',3)
		.attr('width',905)
		.attr('height',15)
		.style('fill','rgb(79,79,79)')
		.style('fill-opacity',0).transition().duration(200).style('fill-opacity',.5)
		.style('stroke-width' , 0).transition().duration(200).style('stroke-width' , 2)
		.style('stroke' , 'rgb(242,242,242)')
		
     d3.select('#svg')
        .append('rect')
		.attr('id','progressBar')
        .attr('x',54)
    	.attr('y',21)
		.attr('rx',1.7)
		.attr('ry',1.7)
		.attr('width',0)
		.attr('height',13)
		.style('fill','rgb(242, 166, 58)')
		.style('fill-opacity',0).transition().duration(250).style('fill-opacity',.8)		
		.transition().ease('linear').duration(selectedDuration).attr('width',903);
}

//vapor progress bar
function drawVaporProgressBar() {
     d3.select('#svg')
        .append('rect')
		.attr('id','progressSubBar')
        .attr('x',53)
    	.attr('y',20)
		.attr('rx',3)
		.attr('ry',3)
		.attr('width',905)
		.attr('height',15)
		.style('fill','rgb(79,79,79)')
		.style('fill-opacity',0).transition().duration(200).style('fill-opacity',.5)
		.style('stroke-width' , 0).transition().duration(200).style('stroke-width' , 2)
		.style('stroke' , 'rgb(242,242,242)')
		
     d3.select('#svg')
        .append('rect')
		.attr('id','progressBar')
        .attr('x',54)
    	.attr('y',21)
		.attr('rx',1.7)
		.attr('ry',1.7)
		.attr('width',0)
		.attr('height',13)
		.style('fill','rgb(252, 181, 252)')
		.style('fill-opacity',0).transition().duration(250).style('fill-opacity',.8)		
		.transition().ease('linear').duration(selectedDuration).attr('width',903);
}


var genreArray = [10,10,10,];
var colorArray = ['rgb(120,150,130)','rgb(224,179,20)','rgb(200,80,20)'];
var	genreScale = d3.scale.linear().domain([0,30]).range([0,360]);



// Controls what code is executed on window load. MUST BE LAST CODE IN BEHAVIOR.JS
window.onload = function() {
	
	drawStartBGImage()
	drawStart()
	drawWhiteMusicNoteImage()
	drawRedNoteImage()
	drawOrangeNoteImage()
	drawPinkNoteImage();
    //drawPlayButton();
	//drawPickGenre();
	//drawButtons();
	//drawSongs1();
	//drawSongs2();
	//drawSongs3();
    
 }