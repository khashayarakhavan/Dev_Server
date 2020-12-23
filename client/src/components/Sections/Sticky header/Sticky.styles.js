#root{ height: 200vh; }

// spacer
section{ 
  margin:0; 
  height: 100px; 
  background: green; repeating-linear-gradient( 45deg, #Ecc, #abc 5px, #Faa 5px, #eab 10px ); 
  display: flex;
  align-items: center;
  justify-content: center;
}

// smart sticky header 
header{
  position: sticky;
  top: 50px;
  font-size: 3em;
  transition: .2s ease-out;
  
  &.isSticky{
    font-size: 2em;
    &::after{
      content:" is sticky";
      color: salmon;
    }
  }
}