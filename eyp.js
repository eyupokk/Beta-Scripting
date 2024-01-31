function(setTrayOnMinimize)setTrayOnMinimize()
     createTrayNotification( "Dikkat:Oyunu Alt Tab'a Attınız", "warning" )
end
addEventHandler( "onClientMinimize", getRootElement( ), setTrayOnMinimize ) 
