var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Liukhang Model
 * ==========
 */
var Liukhang = new keystone.List('Liukhang');

Liukhang.add({
	name: { type: Types.Name, required: true, index: true },
	email: { type: Types.Email, initial: true, required: true, index: true },
	password: { type: Types.Password, initial: true, required: true },
}, 'Permissions', {
	isAdmin: { type: Boolean, label: 'Can access Keystone', index: true },
});

// Provide access to Keystone
Liukhang.schema.virtual('canAccessKeystone').get(function () {
	return this.isAdmin;
});


/**
 * Relationships
 */
Liukhang.relationship({ ref: 'Post', path: 'posts', refPath: 'author' });


/**
 * Registration
 */
Liukhang.defaultColumns = 'name, email, isAdmin';
Liukhang.register();
