$(document).ready(function() {
    
    // -----------------------------------------------------------

    // an array of objects
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

    //Create 4 boxes
        //-------- Reference to myCharacter Div
    let myCharacterDiv = $('#myCharacter')

    for ( let i = 0; i < characterInfo.length; i++ ) {
        // create a box and place it in myCharacter Div
        let characterDiv = $('<div>')
        let image = $('<img>')
        let charName = $('<h5>')
        let charHp= $('<h5>')

        //add class - this class makes the border
        characterDiv.addClass('characterBox')

        //add image inside characterDiv
        image.addClass('imgSize')
        image.attr('src', characterInfo[i].photo) 

        //add character info inside characterDiv
        charName.text(characterInfo[i].name)
        charHp.text('hp:' + characterInfo[i].hp)

        //float character's name to top right corner
        charName.addClass('floatName')
        
        //append it on DOM
        charName.append(charHp)
        characterDiv.append(image, charName)
        myCharacterDiv.append(characterDiv)
        

        //if click on it then it moves to defender Div
            //it should move the: characterDiv and img
        // $('.characterBox').on('click', function() {
        //     characterDiv.empty()
        //     let defenderDiv = $('#defender')
        //     defenderDiv.append(characterDiv)
        //     characterDiv.append(image)
        // })
    }

}); 
