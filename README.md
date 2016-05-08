#  ngAwesomeForm directive to submit forms

This is a directive to simplify form submission and to show success and error messages. 

The directive offers an improved form submission experience by adding an optional confirmation question, a customized loading icon, and fading the form away upon sucess as well as customized error and success messages.



## Installation

To install using [Bower]

```
bower install ngAwesomeForm
```



## Setup

Include the following js and css files in your document:

```
ngAwesomeForm.css
ngAwesomeForm.js
```

Import the ngAwesomeForm module into your angular app as follows:

```
angular.module('myApp', ['ngAwesomeForm']);
```



## Usage

Add the following attributes to your "form" element:

```
<form name="myForm" 
		ng-awesome-form="http://test.com/testAwesomeForm" 
		model-name="modelName" 
		loading-icon="img/loading.gif" 
		error-message-opacity="0.6" 
		success-message="Thank you for submitting your form" 
		confirm-message="Are you sure you want to submit this form?">
```


### Required Attributes

These two attributes are required to submit the form:
```
ng-awesome-form="[remote location to submit data]"

model-name="[name of the model to be sent to the server]"
```


### Optional Attributes

Each of of this attributes may be used to make use of its functionality:

To include a loading icon:
```
loading-icon="img/loading.gif"
```

To customize the opacity of the overlaying error message box (defaults to 0.7):
```
error-message-opacity="0.6"
```

To set the success messege on the frontend (defaults to the response comming from server):
```
success-message="Thank you for submitting your form" 
```

To ask for confirmation before submitting the form
```
confirm-message="Are you sure you want to submit this form?"
```


### Further customization
 
 "ngAwesomeForm.css" file includes the following classes:
```
awesome-form-loading
awesome-form-successMessage
awesome-form-errorMessage

```
that may be used to style the loading icon, success message and error message respectively.


## Demo
To demo the directive clone the repository, change to the demo directory and run:
```
npm install --save
node app
```



## License

MIT