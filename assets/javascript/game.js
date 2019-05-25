$(document).ready(function() {
    // Global scope variables -----------------------------------------------------------
    let myCharacterDiv = $('#myCharacter')
    let enemiesDiv     = $('#enemies')
    let defenderDiv    = $('#defender')
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
        characterDiv.addClass('individualBox') // ---* * * * * * * * CLASS
        characterDiv.attr('value', characterInfo[i].name) 
        characterDiv.attr('chosen', 'false')
        //add image inside characterDiv
        image.addClass('imgSize')
        image.attr('src', characterInfo[i].photo) 

        //add character info inside characterDiv
        charName.text(characterInfo[i].name)
        charHp.text('hp:' + characterInfo[i].hp)

        //float character's name to top right corner
        charName.addClass('floatName')
        
        //append it on DOM
        characterDiv.append(image, charName)
        charName.append(charHp)
        myCharacterDiv.append(characterDiv)
    };


    // P I C K   Y O U R   C H A R A C T E R - - - - - - - - - - - - -
    $('.individualBox').on('click', function() {
        playerName = $(this).attr('value'); 
        console.log('You clicked on ' + playerName);

        // if clicked on, change that character's chosen object to true
        // log all the false on console
        $(this).attr('chosen', 'true')
        
        //all the chosen attribute with 'false' values moves to the enemiesDiv
        enemiesDiv.append( $('[chosen = "false"]') );
    })

    // P I C K   Y O U R   D E F E N D E R - - - - - - - - - - -

}); 
