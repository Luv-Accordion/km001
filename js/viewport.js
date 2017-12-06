//
// Setting Viewport
//

var viewPort;
var settingViewPort = function () {
    viewPort = new CSettingViewPort();
};

//=================================================
//
// CSettingViewPort class
//
//=================================================

class CSettingViewPort {
    constructor() {

        this.pc_width = 1080;
        this.device = (screen.width < 600 ? 'sp' : 'pc');
        this.view_mode = (this.device == 'pc' || document.cookie.indexOf('this.view_mode=pc') != -1 ? 'pc' : 'sp');
        if (this.device == 'sp' && this.view_mode == 'pc') {
            document.getElementById('viewport').setAttribute('content', 'width=' + this.pc_width + ',initial-scale=1');
        }
        this.setViewPort();
    };

    setViewPort() {
        if (this.device == 'sp') {
            if (this.view_mode == 'pc') {
                $('.sp-mode').on('click', function () {
                    var date = new Date();
                    date.setTime(0);
                    document.cookie = 'this.view_mode=;expires='+date.toGMTString();
                    location.reload(false);
                }).show();
            } else {
                $('.pc-mode').on('click', function () {
                    document.cookie = 'this.view_mode=pc';
                    location.reload(false);
                }).show();
            }
        }
    };
};
