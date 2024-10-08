# Notico
A Powerful and beautiful Library for showing JS Notifications

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

## Installation

### Via NPM (better performance) :

#### Prerequisites :

Ensure Node.js and npm are installed on your system.

* If you already have Node.js and npm installed, skip to Step 4. 

#### Step 1 : Download the Nodejs

visit [Nodejs website][https://nodejs.org/] and download latest LTS (Long Time Support) version 

#### Step 2 : Install Nodejs and NPM

Just run the installer and be sure check install Nodejs and NPM.

#### Step 3 : Verify the installation

you can check if you install Nodejs and npm correctly by these commands :

```sh
node -v
```

```sh
npm -v
```

If you see version numbers, the installation was successful.

#### Step4 : Install Notico Library

you can install the npm package this command (install latest version):

```sh
npm install notico
```

or actually using this one for specific version :

```sh
npm install notico@1.0.2
```

then add this line into your HTML code :

```sh
<script src="./node_modules/notico/Package/notico.js" defer></script>
```

Note: if you have a Nodejs Project for web applications it recommended to install this library with this way because this way has better performance than the other way.

### Via CDN (easy to use):

you can use this script line for using the CDN :

```sh
<script src="https://cdn.jsdelivr.net/npm/notico@1.0.2/Package/notico.js" defer></script>
```

Note: If you dont work with Nodejs and NPM then use this way.

## Tutorial

### Step 1 : Use Function in HTML or JS Code

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

### Step 2 : Fill parameters as you like

You can enter your parameters :

```sh
showToast.success({
    title: 'success',
    message: 'This is an success message',
    time: 7000
});
```

In this function you can write the title, message and time.

If no parameters are provided, default values will be used. :

Title would be the type, message would be nothing or "" and time would be 7000 ms.

If your time parameter is smaller than 2000 ms then it ignore yours and would be 2000 ms.

## License

Notico is licensed under the MIT License.
