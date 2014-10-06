var Backbone = require('backbone'),
	/**
	 * @name module:Dropdown
	 * @constructor
	 * @extends Backbone.Marionette.View
	 */
	Dropdown = Backbone.Marionette.View.extend(
		/** @lends module:Dropdown.prototype **/
		{
			/**
			 * The css classname, that indicates the open status of the submenu item.
			 * @const {string}
			 */
			OPEN_CLASS : 'open',
			ui         : {
				/**
				 * Menu item selector
				 */
				menuItems : 'a',
				/**
				 * Sub menu selector
				 */
				subMenu   : '+ ul'
			},

			events : {
				'click @ui.menuItems' : 'onMenuItemClick'
			},

			/**
			 * Handles the menu item click. Puts the open class if there is a submenu after the item.
			 * @param {Jquery.Event} ev The jQuery event object.
			 *
			 * @return void
			 */
			onMenuItemClick : function(ev) {
				var target = Backbone.$(ev.currentTarget);
				// has submenu
				if (target.find(this.ui.subMenu).length) {
					target.toggleClass(this.OPEN_CLASS);
				}
			}
		}
	);

/**
 * @exports Dropdown
 */
module.exports = Dropdown;
