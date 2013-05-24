/**
* jQuaryTemplate.js
*
* @class Template
* @author Keitarou
* @date 2013.5.24
* @constructor
* @param {Array} options
*/
;(function($) {
	$.fn.Template = function(options) {
		
		/**
		* @property defaults 
		* @type Object
		*/
		$.fn.defaults = {
			param1    : false,
			param2    : false
		};

		/**
		* @property elements 
		* @type Object
		*/
		var elements = this;

		/**
		* @property options 
		* @type Object
		*/
		var options = $.extend({}, $.fn.defaults, options);


		/**
		 * method getOptions
		 *
		 * @method getOptions
		 * @return Object
		 */
		$.fn.getOptions = function(){
			return options;
		}

		/**
		* method testMethod
		*
		* @method testMethod
		*/
		$.fn.testMethod = function(){
			console.log("testMethod");
		}

		/**
		* method eventMethod
		*
		* @method testMethod
		*/
		$.fn.eventMethod = function(val){
			console.log("eventMethod");
		}



		elements.each(function() {

			/**
			 * event click
			 *
			 * @event click
			 */
			$(this).click(function(e){
				$.fn.eventMethod();
			});

		});

		return this;
	};

})(jQuery);

