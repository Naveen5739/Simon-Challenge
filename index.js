const buttonColors=["red","blue","green","yellow"];
 
var number=0,temp=0;




nextSequnce=function(){
    
    $('body').unbind();  //STOP THE KEYUP EVENT OF 'A'

    var randomNumber=Math.floor(Math.random()*4);
   bool=false
    
    var randomChosenColor=buttonColors[randomNumber]
   

   console.log($('#'+randomChosenColor).attr("id"));

   
    $('.btn').click( (e)=>{
    
    
    if(e.target.id !== $('#'+randomChosenColor).attr("id"))///matching or not
    {
        var audio=new Audio('sounds/wrong.mp3');
        audio.play();

        $('.btn').unbind();// stop th click event

        
        $('h1').text('Game Over, your score is '+number*20);
            
        $('body').addClass('game-over')
        
        
        

        // set time out is used for after the h1 and body execute
        // for late purpose after the game over is exists
        setTimeout(() => {
            
            $('h1').text('Press A key to start');
            
            $('body').removeClass('game-over'); 
            
            $('#level').text(0);
           
            
        },2300);//2.3 s after exists
        

        bool=false;  //bool=false because we selected the wrong one

        

        number=0; //initialise the number equal to 0 because new game is started soon
        
        main();  /// why I use main function,,,, the keyup event is stoped,,,
                    /// so I called whenever I need to call keyup event
       
    }
    else{
        var audio=new Audio('sounds/'+randomChosenColor+'.mp3')
        audio.play();
        
        $('#level').text(number=number+1);//increment the no
        
        $('.btn').unbind();// stop the event 

        bool=true;  // for checking purpose we initialise true
        
    }
    if(bool===true)
    {
        nextSequnce();
    }
    
    
    
    
    
})

   
  

   
}

main=function(){
    $('body').keyup((e)=>{
     if(e.key==='a' || e.key==='A')
        {
           $('h1').text("let's play")
             nextSequnce();
        }
        
    })
    
}


main()  // first function we called
















































// jQuery('h1').css('color','royalblue');
// $('h1').css('font-size');
// $('h1').attr('title','hello')
// console.log($('h1').attr('title'))
// console.log($('h1').css('font-size'));


// $('h1').dblclick(function(){
//     $('h1').css('font-size',"10rem")
// })

// $('input').on('mouseover',(e)=>{
//     console.log(e.target.value)
// })

// $('h1').before('<button>Hello</button>');
// $('h1').after('<button>World</button>')


// $('h1').prepend('hai');
// $('h1').append('guys')

// $('input').remove();
// $('h1').remove();

// $('button').click((e)=>{
//     $('h1').animate({
//         // opacity:0.2,
//         fontSize:"100px",opacity:0.2

//     });
// })