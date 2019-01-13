var MrHop = MrHop || {};

MrHop.BootState = {
    init: function(){
        //loading screen background
        this.game.stage.backgroundColor = '#000';
        
        //scaling optioms
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        
        //have the gam cnetered horizontally
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        
        //physic system
        this.game.physics.startSystem(Phaser.Physics.ARCADE); 
    },
    
    preload: function(){
        this.load.image('preloadbar', 'assets/images/preloader-bar.png');
    },create:function(){
        this.state.start('Preload');
    }
}