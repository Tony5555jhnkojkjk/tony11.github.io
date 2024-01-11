document.write('<div id="canvas" style="width:800px; height:600px; background-color:black; position:relative">');

function pxToInt(str) {
	return str.substr(0, str.length-2);
}

class Img {
	constructor(url, x, y, w=-1, h=-1, z=0) {
		this.dom = document.createElement('img');
		this.dom.src = url;
		this.dom.style.position = 'absolute';
		document.getElementById('canvas').appendChild(this.dom);
		this.x = x;
		this.y = y;
		if (w<0) {
			w = pxToInt(this.dom.style.width);
		}
		this.w = w;
		if (h<0) {
			h = pxToInt(this.dom.style.height);
		}
		this.h = h;
		this.z = z;
	}
	delete() {
		this.dom.parentNode.removeChild(this.dom);
	}

	set x(v) {
		this._x = v;
		this.dom.style.left = this._x + 'px';
	}
	get x() {
		return this._x;
	}
	set y(v) {
		this._y = v;
		this.dom.style.top = this._y + 'px';
	}
	get y() {
		return this._y;
	}
	set w(v) {
		this._w = v;
		this.dom.style.width = this._w + 'px';
	}
	get w() {
		return this._w;
	}
	set h(v) {
		this._h = v;
		this.dom.style.height = this._h + 'px';
	}
	get h() {
		return this._h;
	}
	set z(v) {
		this._z = v;
		this.dom.style.zIndex = this._z;
	}
	get z() {
		return this._z;
	}	
}

function printArr(arr) {
	var n = arr.length;
	var m = arr[0].length;
	var dx = 800/m;
	var dy = 600/n;

	for (var i=0; i<n; i++) {
		for (var j=0; j<m; j++) {
			var dom = document.createElement('div');
			dom.innerHTML = arr[i][j];
			dom.style.position = 'absolute';
			dom.style.width = dx+'px';
			dom.style.height = dy+'px';
			dom.style.left = j*dx;
			dom.style.top = i*dy;
			dom.style.fontSize = dy+'px';
			dom.style.backgroundColor = 'grey';
			dom.style.textAlign = 'center';
			document.getElementById('canvas').appendChild(dom);
		}
	}
}