var lineUp = function(danceArray) {
  for(var i = 0; i < danceArray.length; i++){
    danceArray[i].setPosition(window.$('body').height() * 3.37/4, window.$('body').width() * (i/ danceArray.length))
  }
}

