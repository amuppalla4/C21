function isTouching(jeff,bob){
    if (jeff.x - bob.x < bob.width/2 + jeff.width/2
      && bob.x - jeff.x < bob.width/2 + jeff.width/2
      && jeff.y - bob.y < bob.height/2 + jeff.height/2
      && bob.y - jeff.y < bob.height/2 + jeff.height/2) {
      return true;
  }
     else {
      return false;
     }
  }