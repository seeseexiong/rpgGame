$(document).ready(function() {
    // Global scope variables -----------------------------------------------------------
    let myCharacterDiv = $('#myCharacter')
    let enemiesDiv     = $('#enemies')
    let defenderDiv    = $('#defender')

    let neutralStat    = $('[status = "neutralStat"]')


    // an array of objects ---------------------------------------
    let characterInfo = [{
        name    : 'Goku',
        photo   : 'assets/images/goku.png',
        hp      : 100,
        hit     : function() {
            let hit = [20, 25, 30];
            let strength = hit[ Math.floor(Math.random() *hit.length)];
            return strength; 
            console.log(strength)
            }    
        }, {
        name    : 'Vegeta',
        photo   : 'assets/images/vegeta.png',
        hp      : 100,
        hit     : function() {
            let hit = [20, 25, 30];
            let strength = hit[ Math.floor(Math.random() *hit.length)];
            return strength; 
            console.log(strength) 
        }  
    }, {
        name    : 'Piccolo',
        photo   : 'assets/images/piccolo.png',
        hp      : 100,
        hit     : function() {
            let hit = [20, 25, 30];
            let strength = hit[ Math.floor(Math.random() *hit.length)];
            return strength; 
            console.log(strength) 
        }
    }, {
        name    : 'Gohan',
        photo   : 'assets/images/gohan.png',
        hp      : 100,
        hit     : function() {
            let hit = [20, 25, 30];
            let strength = hit[ Math.floor(Math.random() *hit.length)];
            return strength; 
            console.log(strength) 
        }
    }]; //ends characterInfo array 

    //Create 4 boxes and display the objects image, name, hp
    
    for ( let i = 0; i < characterInfo.length; i++ ) {
        // create a box and place it in myCharacter Div
        let characterDiv = $('<div>')
        let image = $('<img>')
        let charName = $('<h5>')
        let charHp= $('<h5>')
        
        //add class - this class makes the border
        characterDiv.addClass('individualBox freeCharacter') // ---* * * * * * * * CLASS
        characterDiv.attr('value', characterInfo[i].name) 
            //on default, all character have a value called neutralStat
        characterDiv.attr('status', 'neutralStat')

        //add image inside characterDiv
        image.addClass('imgSize')
        image.attr('src', characterInfo[i].photo) 

        //add character info inside characterDiv
        charName.text(characterInfo[i].name)
        charName.addClass('fontSize')
        charHp.text('hp:' + characterInfo[i].hp)
        charHp.addClass('fontSize')

        //float character's name to top right corner
        charName.addClass('floatName')
        
        //append it on DOM
        characterDiv.append(image, charName)
        charName.append(charHp)
        myCharacterDiv.append(characterDiv)
    };


    // P I C K   Y O U R   C H A R A C T E R - - - - - - - - - - - - -
    $('.freeCharacter').on('click', function() {

        // if clicked on, change that character's value to 'theChosenCharacter' to mark it as your chosen
        $(this).attr('status', 'theChosenCharacter')
        
        //change the class: 'neutralStat' to 'theEnemies'
        $('[status = "neutralStat"]').addClass('enemyBox').removeClass('freeCharacter')
        

        //all class of 'enemyBox' move down to the enemiesDiv
        enemiesDiv.append( $('.enemyBox') );
        //change the value: 'neutralStat' to 'theEnemies'
        $('.enemyBox').attr('status', 'theEnemies')


        // P I C K   Y O U R   D E F E N D E R - - - - - - - - - - - (this click event handler is inside of .freeCharacter click handler because .enemyBox is child scope of .freeCharacter click handler)
        //when I click on the enemyBox class.. 
        $('.enemyBox').on('click', function() {
            
            //change that character's value to 'theDefender'
            $(this).attr('status', 'theDefender')  

            //change class
            $('[status = "theDefender"]').addClass('defenderBox').removeClass('enemyBox')

            //move class defenderBox to the defenderDiv
            defenderDiv.append( $('.defenderBox'))

        });

    });


    // ------------------------ G O O D --------------------- * * * * * * * * * 





    
}); 
