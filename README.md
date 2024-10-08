# Notico
A PowerFul and beautiful Library for showing JS Notifications

<div align=center width="300">
    <img src="./gif/gif.gif" alt="Notification Gif" />
</div>

## Tech :hammer_and_wrench: Languages and Tools :

<div>
  <img src="https://github.com/devicons/devicon/blob/master/icons/html5/html5-original.svg" title="HTML5" alt="HTML" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/css3/css3-plain.svg"  title="CSS3" alt="CSS" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/javascript/javascript-original.svg"  title="Javascript" alt="JS" width="40" height="40"/>&nbsp;
</div>

* JavaScript : Core functionality is built with JavaScript
* HTML (hidden in JavaScript) : Structure of the notification built with HTML
* CSS (hidden in JavaScript) : Styles and blur effect of the notification built with CSS

## Tutorial

### Step1 : Install Library from NPM or using CDN

#### Install the NPM Library :

you can install the npm package this command :

```sh
npm install notico@1.0.2
```

then add this line into your HTML code :

```sh
<script src="./node_modules/notico/Package/notico.js" defer></script>
```

#### Using CDN :

you can use this script line for using the CDN :

```sh
<script src="https://cdn.jsdelivr.net/npm/notico@1.0.2/Package/notico.js" defer></script>
```

### Step2 : Use Function in HTML or JS Code

#### HTML use :

Create a button like this :
```sh
<button onclick="showToast.info({})">info</button>
```

#### JS use :

Call that function in js :
```sh
showToast.info({});
```

### Step3 : Fill parameters as you like

You can enter your parameters :

```sh
showToast.success({ title: 'success', message: 'This is an success message', time: 7000 });
```

in this function you can write the title, massage and time.

if you do not enter the parameters they would be defaults :

title would be the type, massage would be nothing or "" and time would be 7000 ms.

if your time parameter is smaller than 2000 ms then it ignore yours and would be 2000 ms.
