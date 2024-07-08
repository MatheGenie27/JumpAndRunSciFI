let level1 = new Level();

level1.ground_y= 380;
level1.ceiling_y=220;

level1.backgroundset = 'bulkead-walls';
bgws_height=224;
bgws_width=144;
bgw_height=224;
bgw_width=48;
floor_height=19;
floor_width=48;
fg_height=98;
fg_width=240;
level1.backgroundSizingFactor = 1.2;
level_end_x = 10000;
level_begin_x = -2000;
level1.floorObjects = [];
level1.backgroundObjects = [];
level1.foregroundObjects=[];


function createFloor(){

    let actual_x;
    actual_x = level_begin_x;
    let count = 0;

    while (actual_x < level_end_x) {
        level1.floorObjects.push(new BackgroundObject('assets/img/backgrounds/bulkhead-walls/PNG/floor.png',actual_x,level1.ground_y,level1.backgroundSizingFactor,floor_width, floor_height));
            count++;
            actual_x = actual_x + (floor_width*level1.backgroundSizingFactor);
        
    };

}

function createBackground(){
    let actual_x;
    actual_x = level_begin_x;
    let count = 0;

    while (actual_x < level_end_x) {
        
        level1.backgroundObjects.push(new BackgroundObject('assets/img/backgrounds/bulkhead-walls/PNG/bg-wall-with-supports.png',actual_x,level1.ground_y,level1.backgroundSizingFactor, bgws_width, bgws_height));
        actual_x = actual_x+ (bgws_width*level1.backgroundSizingFactor);

        level1.backgroundObjects.push(new BackgroundObject('assets/img/backgrounds/bulkhead-walls/PNG/bg-wall.png',actual_x,level1.ground_y,level1.backgroundSizingFactor, bgw_width, bgw_height));
        
        actual_x = actual_x+ (bgw_width*level1.backgroundSizingFactor);
        
        
        count++;
        
        
    };
}

function createForeground(){
    let actual_x;
    actual_x = level_begin_x;
    let count = 0;
    randomSpace = fg_width + (fg_width* Math.random());

    while (actual_x < level_end_x) {


        
        level1.foregroundObjects.push(new BackgroundObject('assets/img/backgrounds/bulkhead-walls/PNG/foreground.png',actual_x,level1.ceiling_y,level1.backgroundSizingFactor, fg_width, fg_height));
        
        
        actual_x = actual_x+(2*fg_width* Math.random()) +(0.5*fg_width*level1.backgroundSizingFactor);
        
        
        count++;
        
        
    };
}


function createEnemies(){
    level1.enemies.push(new Shell(level1));
    level1.enemies.push(new Fly(level1));
    level1.enemies.push(new Punkgirl(level1));
    level1.enemies.push(new Sentinel(level1));
    level1.enemies.push(new Komo(level1));
    level1.enemies.push(new BigPedal(level1));
    level1.enemies.push(new Soldier2(level1));
    level1.enemies.push(new RoboSoldier(level1));
}



createFloor();
createBackground();
createForeground();
createEnemies();




    
