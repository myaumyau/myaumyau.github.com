(function() {
var _win = window,
    _ua = navigator.userAgent,
	_env = {
		ua     : _ua,
		windows: '',
		mac    : 0,
		android: 0,
		ios    : 0,
		ie     : 0,
		ff     : 0,
		webkit : 0,
		chrome : 0,
		safari : 0,
		opera  : 0,
		mobile : false, // not tablet
		ipad   : false
	};
	function getVersion(pattern, defaultVersion) {
		return parseFloat(_ua.split(pattern)[1].replace('_', '.')) || defaultVersion || 0;
	}
	
	// user agent
	// http://www.openspc2.org/userAgent/
	
	// OS
	if (/windows /i.test(_ua)) {
		// http://msdn.microsoft.com/en-us/library/ms537503%28v=vs.85%29.aspx
		var v = getVersion(/Windows NT /i);
		_env.windows =  v == 6.2  ? '8' :
						v == 6.1  ? '7' :
						v == 6    ? 'Vista' :
					  //v == 5.2  ? '2003'
						v == 5.1  ? 'XP' :
						v == 5.01 ? '2000' : 'others'
	} else if (/Macintosh/i.test(_ua)) {
		_env.mac = getVersion(/Mac OS X /, 1);
	} else if (/android/i.test(_ua)) {
		_env.android = getVersion(/android /i);
		_env.mobile = /mobile/i.test(_ua);
	} else if (/iphone|ipad|ipod/i.test(_ua)) {
		_env.ios = getVersion(/OS /, 1);
		_env.ipad = /ipad/i.test(_ua);
		_env.mobile = true;
	}
	
	// browser
	if (/msie/i.test(_ua)) {
		_env.ie = getVersion(/MSIE /);
		_env.mobile = /IEMobile/i.test(_ua); // Windows Phone OS 
	} else if (/Firefox\//i.test(_ua)) {
		_env.ff = getVersion(/Firefox\//i);
	} else if (/WebKit/i.test(_ua)) {
		_env.webkit = getVersion(/AppleWebKit\//i);
		if (/Chrome/i.test(_ua)) {
			_env.chrome = getVersion(/Chrome\//i);
		} else if (/safari\//i.test(_ua)) {
			_env.safari = getVersion(/Version\//i);
		}
	} else if (window.opera) {
		_env.opera = parseFloat(window.opera.version());
	}
	
	_win.Env = _env;
})();
