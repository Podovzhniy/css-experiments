/**
 * Created by Michael on 04/10/2014.
 */

var collisionDetector = (function() {
    var module = {};
    var screenWidth = document.documentElement.clientWidth;
    var screenHeight = document.documentElement.clientHeight;
    // dimensions of the alien's collision bounding box
    var alienBBZ = 100;
    var alienBBX = screenWidth * 0.07;
    var alienBBY = screenHeight * 0.07;

    module.check = function(shots, aliens) {

        aliens.forEach(function(alien) {

            shots.forEach(function(shot) {
                if (collision(alien, shot)) {
                    alien.hit = true;
                    shot.hit = true;
                }
            });

        });
    };

    function collision(alien, shot) {
        if (Math.abs(shot.z - alien.z) < alienBBZ) {
            if (Math.abs(shot.x - alien.x) < alienBBX && Math.abs(shot.y - alien.y) < alienBBY) {
                return true;
            }
        }
        return false;
    }

    return module;
})();