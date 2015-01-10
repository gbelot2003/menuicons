/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'fa-arqueologia': '&#xe600;',
		'fa-aventura': '&#xe601;',
		'fa-aviturismo': '&#xe602;',
		'fa-buceo': '&#xe603;',
		'fa-conquien': '&#xe604;',
		'fa-culturasv': '&#xe605;',
		'fa-destinos': '&#xe606;',
		'fa-explora': '&#xe607;',
		'fa-gastronomia': '&#xe608;',
		'fa-hoteles': '&#xe609;',
		'fa-informacion': '&#xe60a;',
		'fa-media': '&#xe60b;',
		'fa-mosquitia': '&#xe60c;',
		'fa-naturaleza': '&#xe60d;',
		'fa-restaurantes': '&#xe60e;',
		'fa-solyplaya': '&#xe60f;',
		'fa-tours': '&#xe610;',
		'fa-transporte': '&#xe611;',
		'fa-cultura': '&#xe921;',
		'fa-file-text2': '&#xe926;',
		'fa-location2': '&#xe948;',
		'fa-user': '&#xe971;',
		'fa-cogs': '&#xe995;',
		'fa-list2': '&#xe9bb;',
		'fa-menu': '&#xe9bd;',
		'fa-cross': '&#xea0f;',
		'fa-checkmark': '&#xea10;',
		'fa-checkmark2': '&#xea11;',
		'fa-arrow-up-left2': '&#xea39;',
		'fa-arrow-up2': '&#xea3a;',
		'fa-arrow-up-right2': '&#xea3b;',
		'fa-arrow-right2': '&#xea3c;',
		'fa-arrow-down-right2': '&#xea3d;',
		'fa-arrow-down2': '&#xea3e;',
		'fa-arrow-down-left2': '&#xea3f;',
		'fa-arrow-left2': '&#xea40;',
		'fa-circle-up': '&#xea41;',
		'fa-circle-right': '&#xea42;',
		'fa-circle-down': '&#xea43;',
		'fa-circle-left': '&#xea44;',
		'fa-google-plus3': '&#xea8a;',
		'fa-facebook2': '&#xea8d;',
		'fa-instagram': '&#xea90;',
		'fa-twitter': '&#xea91;',
		'fa-feed2': '&#xea94;',
		'fa-youtube': '&#xea98;',
		'fa-youtube2': '&#xea99;',
		'fa-youtube3': '&#xea9a;',
		'fa-vimeo': '&#xea9c;',
		'fa-picassa': '&#xeaa4;',
		'fa-github': '&#xeab1;',
		'fa-pinterest': '&#xead0;',
		'fa-paypal': '&#xead6;',
		'fa-file-pdf': '&#xeada;',
		'fa-file-openoffice': '&#xeadb;',
		'fa-file-word': '&#xeadc;',
		'fa-file-excel': '&#xeadd;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/fa-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
